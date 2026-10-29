/**
 * Renders the 1200x630 Open Graph cards in public/og/ from one HTML template,
 * so share images change with the copy instead of being hand-made.
 *
 *   node scripts/og-images.mjs
 *
 * Prices are written here as text on purpose: check them against INTELLIGENCE
 * and PRICING in src/lib/constants.ts whenever either changes.
 */
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const logo = readFileSync(path.join(root, "public/images/harboriq-logo-primary.svg"), "utf8");

const CARDS = [
  {
    file: "default.png",
    eyebrow: "For independent insurance agencies",
    line1: "Who else might",
    line2: "write this risk?",
    foot: "Carrier answers with the source attached · Free to start",
    receipt: true,
  },
  {
    file: "pricing.png",
    eyebrow: "Pricing · Per agency, never per person",
    line1: "Intelligence, $29",
    line2: "per agency a month.",
    foot: "300 carrier checks shared · $10 packs only when you choose · Agency OS from $199",
  },
  {
    file: "free.png",
    eyebrow: "Free Agency Workspace · $0",
    line1: "Carrier contacts and deadlines.",
    line2: "One free workspace.",
    foot: "Underwriter contacts · License and CE reminders · Carrier discovery",
  },
  {
    file: "marketplace.png",
    eyebrow: "HarborIQ Marketplace",
    line1: "Who near you insures",
    line2: "what you need?",
    foot: "Find an independent agency by specialty and area",
  },
];

const html = (c) => `<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box;margin:0}
  body{width:1200px;height:630px;background:#F5F3EF;font-family:"DM Sans",sans-serif;color:#4A4A46;position:relative;overflow:hidden}
  .top{position:absolute;top:64px;left:80px;right:80px;display:flex;justify-content:space-between;align-items:center}
  .top svg{height:40px;width:auto}
  .url{font-size:24px;color:#1B3A5C}
  .main{position:absolute;left:80px;top:178px;width:${c.receipt ? 640 : 1040}px}
  .eyebrow{font-size:20px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#1B3A5C}
  h1{margin-top:26px;font-size:76px;line-height:1.04;font-weight:500;letter-spacing:-.045em;color:#192C3E}
  h1 span{display:block;color:#2E75B6}
  .foot{position:absolute;left:80px;bottom:62px;font-size:24px;color:#636963}
  .bar{position:absolute;left:0;right:0;bottom:0;height:14px;background:#C4935A}
  .receipt{position:absolute;right:80px;top:190px;width:360px;background:#fff;border:1px solid #DEDED7;padding:26px 28px;box-shadow:0 10px 28px rgba(16,43,72,.06)}
  .receipt small{display:block;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#636963}
  .receipt p{margin-top:14px;font-size:21px;line-height:1.4;color:#192C3E}
  .src{margin-top:18px;padding-top:14px;border-top:1px solid #DEDED7;font-size:16px;color:#1B3A5C;display:flex;gap:10px}
  .src b{color:#357252}
</style></head><body>
<div class="top">${logo}<span class="url">harboriq.co</span></div>
<div class="main"><p class="eyebrow">${c.eyebrow}</p><h1>${c.line1}<span>${c.line2}</span></h1></div>
${
  c.receipt
    ? `<div class="receipt"><small>Carrier check</small><p>Two more markets list this class in appetite. One conditions it on years in business.</p><div class="src"><b>✓</b>Source: carrier underwriting guide, dated</div></div>`
    : ""
}
<p class="foot">${c.foot}</p><div class="bar"></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const c of CARDS) {
  await page.setContent(html(c), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(root, "public/og", c.file) });
  console.log("wrote public/og/" + c.file);
}
await browser.close();
