/**
 * Post-hydration smoke test.
 *
 * Catches the class of bug where a page server-renders fine, then throws
 * during hydration and unmounts itself. That failure is invisible to a build,
 * to typecheck, and to `curl` (the HTML is correct) — it only shows up in a
 * real browser, and often only at one viewport. It shipped to production once:
 * an SVG animation called getTotalLength() on an element that is display:none
 * below the md breakpoint, which blanked the homepage on phones while desktop
 * stayed healthy.
 *
 * So the assertions are deliberately about survival, not appearance:
 *   - nothing throws
 *   - the page still has content a moment after hydration
 *   - the layout landmarks are still mounted
 *
 * Usage:
 *   npm run build && npm run smoke        # starts its own server
 *   BASE_URL=https://harboriq.co npm run smoke   # against a deployed URL
 */
import { chromium } from "playwright";
import { spawn } from "node:child_process";

const BASE_URL = process.env.BASE_URL ?? null;
const PORT = process.env.PORT ?? "3100";
const ORIGIN = BASE_URL ?? `http://localhost:${PORT}`;

/** Phone widths first: that is where the regression this guards against lived. */
const VIEWPORTS = [
  { name: "iPhone", width: 390, height: 844 },
  { name: "iPhone Max", width: 430, height: 932 },
  { name: "iPad", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
];

/**
 * `chrome` false means the route intentionally renders without Nav/Footer
 * (see RouteChrome), so only <main> is required there.
 */
const PAGES = [
  { path: "/", chrome: true },
  { path: "/pricing", chrome: true },
  { path: "/markets", chrome: true },
  { path: "/agency", chrome: true },
  { path: "/about", chrome: true },
  { path: "/manifesto", chrome: true },
  { path: "/features/pipeline", chrome: true },
  { path: "/compare/applied-epic", chrome: true },
  { path: "/blog/real-cost-of-per-user-pricing", chrome: true },
];

/** A healthy marketing page is far bigger than this; a crashed one renders ~127. */
const MIN_TEXT = 1000;
/** Hydration plus GSAP/ScrollTrigger setup needs a beat to throw. */
const SETTLE_MS = 2500;
/** Pages checked at once. Each needs its own browser context, so keep it modest. */
const CONCURRENCY = Number(process.env.SMOKE_CONCURRENCY ?? 4);

function waitForServer(url, timeoutMs = 120_000) {
  const deadline = Date.now() + timeoutMs;
  return (async function poll() {
    while (Date.now() < deadline) {
      try {
        const r = await fetch(url, {
          redirect: "manual",
          signal: AbortSignal.timeout(3000),
        });
        if (r.status < 500) return;
      } catch {
        // Server not listening yet.
      }
      await new Promise((r) => setTimeout(r, 500));
    }
    throw new Error(`Server did not become ready at ${url}`);
  })();
}

async function startServer() {
  // `npm run start`, not `npx next`: npx may try to resolve over the network
  // and hang in sandboxed or offline CI, while npm run uses the local binary.
  const npm = process.platform === "win32" ? "npm.cmd" : "npm";
  const server = spawn(npm, ["run", "start", "--", "--port", PORT], {
    stdio: ["ignore", "pipe", "pipe"],
    env: process.env,
    // Own process group, so stopServer can take down next as well as npm.
    detached: process.platform !== "win32",
  });
  let log = "";
  server.stdout.on("data", (d) => (log += d));
  server.stderr.on("data", (d) => (log += d));
  server.on("exit", (code) => {
    if (code !== 0 && code !== null) {
      console.error(`next start exited with ${code}:\n${log}`);
    }
  });
  try {
    await waitForServer(ORIGIN);
  } catch (err) {
    console.error(log);
    throw err;
  }
  return server;
}

const failures = [];

async function checkPage(browser, page, viewport) {
  const ctx = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
  });
  const tab = await ctx.newPage();
  const errors = [];
  tab.on("pageerror", (e) => errors.push(e.message.split("\n")[0]));

  const label = `${page.path} @ ${viewport.name} (${viewport.width}px)`;
  try {
    const res = await tab.goto(ORIGIN + page.path, {
      // networkidle never settles here: the hero loops a background video.
      waitUntil: "domcontentloaded",
      timeout: 30_000,
    });
    if (!res || res.status() >= 400) {
      failures.push(`${label}: HTTP ${res ? res.status() : "no response"}`);
      return `  FAIL  ${label}  (HTTP ${res ? res.status() : "no response"})`;
    }

    const before = await tab.evaluate(() => document.body.innerText.length);
    await tab.waitForTimeout(SETTLE_MS);
    const after = await tab.evaluate(() => document.body.innerText.length);

    if (errors.length) {
      failures.push(`${label}: uncaught error -> ${[...new Set(errors)].join(" | ")}`);
    }
    if (after < MIN_TEXT) {
      failures.push(
        `${label}: page collapsed after hydration (${before} -> ${after} chars of text)`,
      );
    }

    const landmarks = page.chrome ? ["header", "main", "footer"] : ["main"];
    for (const sel of landmarks) {
      if ((await tab.locator(sel).count()) === 0) {
        failures.push(`${label}: <${sel}> missing after hydration`);
      }
    }

    // Match on the label, not on the array length: checks run concurrently,
    // so another page's failure can land between entry and this point.
    const failed = failures.some((f) => f.startsWith(`${label}:`));
    return `  ${failed ? "FAIL" : "PASS"}  ${label}  (${before} -> ${after} chars)`;
  } catch (err) {
    const detail = err.message.split("\n")[0];
    failures.push(`${label}: ${detail}`);
    return `  FAIL  ${label}  (${detail})`;
  } finally {
    await ctx.close();
  }
}

/** Runs tasks with bounded concurrency, preserving input order in the output. */
async function pool(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (true) {
      const i = next++;
      if (i >= items.length) return;
      results[i] = await fn(items[i]);
    }
  });
  await Promise.all(workers);
  return results;
}

async function main() {
  const server = BASE_URL ? null : await startServer();
  const browser = await chromium.launch({
    executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH || undefined,
  });

  console.log(`Smoke testing ${ORIGIN}`);
  console.log(`${PAGES.length} pages x ${VIEWPORTS.length} viewports\n`);

  try {
    for (const viewport of VIEWPORTS) {
      console.log(`${viewport.name} (${viewport.width}x${viewport.height}):`);
      const lines = await pool(PAGES, CONCURRENCY, (page) =>
        checkPage(browser, page, viewport),
      );
      for (const line of lines) console.log(line);
      console.log("");
    }
  } finally {
    await browser.close();
    stopServer(server);
  }

  if (failures.length) {
    console.error(`\n${failures.length} failure(s):`);
    for (const f of failures) console.error(`  - ${f}`);
    return 1;
  }
  console.log("All pages survived hydration at every viewport.");
  return 0;
}

function stopServer(server) {
  if (!server) return;
  // `npm run start` spawns next as a grandchild, so killing the npm process
  // alone can leave the server listening and its pipes holding the event loop
  // open. Kill the whole process group, then fall back to SIGKILL.
  try {
    process.kill(-server.pid, "SIGTERM");
  } catch {
    server.kill("SIGTERM");
  }
  try {
    process.kill(-server.pid, "SIGKILL");
  } catch {
    // Already gone.
  }
}

main()
  .then((code) => process.exit(code))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
