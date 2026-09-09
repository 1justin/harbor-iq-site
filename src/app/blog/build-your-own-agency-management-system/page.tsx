import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isPublished } from "../posts";
import { DEMO_PAGE } from "@/lib/constants";

const DESCRIPTION =
  "We do not recommend it. If you feel you must, start small: a three-question test for what is safe to build yourself, the six layers of a real agency system, and why the big version turns into an E&O problem.";

export const metadata: Metadata = {
  title: "Should You Build Your Own Agency Management System? | HarborIQ",
  description: DESCRIPTION,
  alternates: { canonical: "/blog/build-your-own-agency-management-system" },
  openGraph: {
    title: "Should you build your own agency management system?",
    description: DESCRIPTION,
    type: "article",
    url: "/blog/build-your-own-agency-management-system",
    publishedTime: "2026-09-04T00:00:00Z",
    modifiedTime: "2026-09-08T00:00:00Z",
    authors: ["Justin Mayer"],
    images: [{ url: "/images/blog/then-vs-now.png", width: 1600, height: 900 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Should you build your own agency management system?",
  description: DESCRIPTION,
  datePublished: "2026-09-04",
  dateModified: "2026-09-08",
  image: "https://harboriq.co/images/blog/then-vs-now.png",
  author: {
    "@type": "Person",
    name: "Justin Mayer",
  },
  publisher: {
    "@type": "Organization",
    name: "HarborIQ",
    logo: {
      "@type": "ImageObject",
      url: "https://harboriq.co/images/harboriq-favicon-512.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://harboriq.co/blog/build-your-own-agency-management-system",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I build my own insurance agency management system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We do not recommend it. If you feel you must, keep it small: a tool you could replace in a weekend, that no client's coverage depends on, and that holds no data a client could sue you over. A full system of record that holds client PII and tracks renewals is not, because a quiet failure there becomes an E&O claim, and someone has to maintain it for as long as the agency exists.",
      },
    },
    {
      "@type": "Question",
      name: "What is the hardest part of an agency management system to build yourself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carrier connections, then security. Automated downloads, live appetite data, and quoting feeds depend on data relationships with carriers that take an ongoing operation to maintain, not code. Security means access control and an audit trail for Social Security numbers, dates of birth, and driver's license data, and most homegrown systems were not built with that as a requirement.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use HarborIQ if I already built my own system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HarborIQ Markets sits alongside a homegrown system rather than replacing it. It adds the carrier layer most builds do not have: appetite and product guides you can ask questions of, with the page the answer came from, plus a carrier directory and login vault. $199 a month for 1 to 15 people, self-serve, nothing to migrate.",
      },
    },
    {
      "@type": "Question",
      name: "Does a homegrown agency system matter if I sell the agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A system that lives in one person's head, undocumented, comes up in buyer diligence and usually as a discount. Documenting what it does, where the data lives, and how to export it is the cheapest fix, and it is worth doing long before a sale is on the table.",
      },
    },
  ],
};

const LAYERS = [
  {
    layer: "Screens",
    what: "Forms, lists, dashboards",
    diy: "Easy. AI coding tools are good at this.",
  },
  {
    layer: "Storing data",
    what: "Book of business, client records",
    diy: "Easy. Airtable, a spreadsheet, a database.",
  },
  {
    layer: "Rules and workflows",
    what: "Renewals, tasks, reminders, commissions",
    diy: "Harder. Usually partly done.",
  },
  {
    layer: "Carrier connections",
    what: "Downloads, appetite data, quoting feeds",
    diy: "The wall. Data relationships, not code.",
  },
  {
    layer: "Security and compliance",
    what: "Client PII, access control, audit trail",
    diy: "Invisible until it is not.",
  },
  {
    layer: "Keeping it alive",
    what: "Updates, breakages, the person who built it leaving",
    diy: "Never ends. On top of running an agency.",
  },
];

export default function PostPage() {
  if (!isPublished("build-your-own-agency-management-system")) notFound();

  return (
    <article className="bg-paper py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-2xl mx-auto px-6">
        <Link
          href="/blog"
          className="text-[13px] text-interactive hover:text-deep transition-colors"
        >
          &larr; Back to Blog
        </Link>

        <h1 className="mt-8 text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight">
          Should you build your own agency management&nbsp;system?
        </h1>
        <p className="mt-3 text-[13px] text-stone">
          September 2026 &middot; 8 min read &middot; Updated September 8
        </p>

        {/* TL;DR: written to stand on its own if quoted out of context */}
        <div className="mt-10 p-6 bg-linen rounded-xl border border-ash">
          <p className="text-[12px] uppercase tracking-wider text-stone font-medium">
            The short answer
          </p>
          <p className="mt-2 text-[17px] text-ink font-medium leading-snug">
            We do not recommend it. If you feel you must, start small and be clear about what you are
            taking on. Build only what you can afford to lose. Buy the things a client could sue
            you&nbsp;over.
          </p>
          <p className="mt-4 text-[15px] text-charcoal">
            If you are going to build anyway, three questions first:
          </p>
          <ol className="mt-2 space-y-1.5 text-[15px] text-charcoal list-decimal pl-5">
            <li>If it broke, could you replace it in a weekend?</li>
            <li>Does a client&rsquo;s coverage depend on it?</li>
            <li>
              Does it hold data a client could sue you over? Social Security numbers, dates of birth,
              driver&rsquo;s licenses.
            </li>
          </ol>
          <p className="mt-3 text-[15px] text-charcoal">
            Yes, no, no: it is safe to build, and it will stay small. Anything else, and the rest of this
            article is about why the big version turns into an errors and omissions&nbsp;problem.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[17px] text-charcoal leading-[1.75]">
          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            Why is everyone asking this&nbsp;now?
          </h2>
          <p>
            Two things changed at once. AI coding tools like Claude Code, Cursor, and Lovable made it
            realistic for a non-developer to stand up a working system in a weekend instead of a year.
            And the existing agency management systems kept charging per seat, so buying one started to
            feel like a penalty for hiring. In agent Facebook groups, the answer to &ldquo;what AMS should
            I use&rdquo; is increasingly &ldquo;I built my&nbsp;own.&rdquo;
          </p>
          <p>
            That is a signal about the category, not a shortcut. An owner who built their own system looked
            at what was for sale and decided none of it fit. We agree with them more than they might
            expect. The question is not whether you can build it. Plenty of agencies have. The question is
            which parts you should own&nbsp;forever.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            What is an agency management system,&nbsp;actually?
          </h2>
          <p>
            If you are not an engineer, a software product looks like two things: the screens you click on
            and the database behind them. A front end and a back end. That is the part a demo shows, and it
            is the part a weekend with an AI tool produces. Everything that makes it safe to run an agency
            on sits underneath, and almost none of it is&nbsp;visible.
          </p>

          <figure className="my-2">
            <div className="rounded-xl border border-ash overflow-hidden">
              <div className="bg-paper px-5 py-4">
                <p className="text-[12px] uppercase tracking-wider text-stone font-medium">
                  What the demo shows
                </p>
                <p className="mt-1 text-[16px] text-ink font-medium">
                  A form, a list, and a dashboard.
                </p>
              </div>
              <div className="border-t-2 border-dashed border-interactive/40" />
              <div className="bg-linen px-5 py-4">
                <p className="text-[12px] uppercase tracking-wider text-stone font-medium">
                  What runs an agency on it
                </p>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5 text-[14px] text-charcoal">
                  <span>Access control</span>
                  <span>Audit trail</span>
                  <span>Encryption at rest</span>
                  <span>Backups you have tested</span>
                  <span>Carrier download feeds</span>
                  <span>Appetite data that updates</span>
                  <span>API changes upstream</span>
                  <span>Error alerts</span>
                  <span>Renewal logic</span>
                  <span>Commission math</span>
                  <span>Data export</span>
                  <span>Someone on call</span>
                </div>
              </div>
            </div>
            <figcaption className="mt-2 text-[13px] text-stone">
              The dashed line is where a demo stops. Everything below it is what a subscription is
              actually&nbsp;buying.
            </figcaption>
          </figure>

          <p>
            Sorted into layers, a real system has six. Here is where a homegrown build usually lands on
            each&nbsp;one.
          </p>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-[15px] border-collapse">
              <thead>
                <tr className="text-left text-[12px] uppercase tracking-wider text-stone">
                  <th className="py-2 pr-4 font-medium border-b border-ash">Layer</th>
                  <th className="py-2 pr-4 font-medium border-b border-ash">What it is</th>
                  <th className="py-2 font-medium border-b border-ash">Building it yourself</th>
                </tr>
              </thead>
              <tbody>
                {LAYERS.map((row, i) => (
                  <tr key={row.layer} className={i >= 3 ? "text-ink" : "text-charcoal"}>
                    <td className="py-3 pr-4 align-top font-medium border-b border-ash/70">
                      {i + 1}. {row.layer}
                    </td>
                    <td className="py-3 pr-4 align-top border-b border-ash/70">{row.what}</td>
                    <td className="py-3 align-top border-b border-ash/70">{row.diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Most homegrown systems cover the first two rows and part of the third. That is a real
            achievement, and nobody should talk you out of being proud of it. It is also the easy half. A
            vendor&rsquo;s whole job is rows four through six, which is why a product that looks like a
            form and a list costs what it does, and why the one you built for free is not the same&nbsp;thing.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            If you build anyway, what is safe to&nbsp;build?
          </h2>
          <p>
            Only things that pass the three questions at the top. An intake form on your website that emails
            you the answers. A renewal reminder list you check against the carrier&rsquo;s own notice, so the
            carrier is still the system of record. A commission tracker for your own producers. A list of
            carrier reps and their phone numbers. Each of those could be rebuilt in a weekend, none of them
            decides whether a client is covered, and none of them needs a Social Security&nbsp;number.
          </p>
          <p>
            Small also means being clear with yourself about what it is: a tool you use, not the place the
            truth lives. The moment a homegrown system becomes the only record of what a client has, or the
            only thing that knows a renewal is coming, it has crossed into the rows you do not want to&nbsp;own.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            What should you not&nbsp;build?
          </h2>
          <p>
            Carrier connections, first. Automated downloads, live appetite data, and quoting feeds are not
            a coding problem. They depend on relationships with carriers that take an ongoing operation to
            keep current. Here is how that fails in practice. A carrier changes its download format in March.
            Nothing errors, because you never wrote the alert. The feed quietly stops matching policies. You
            find out in June, when a client calls about a renewal that never made it onto anyone&rsquo;s&nbsp;list.
          </p>
          <p>
            Which raises the question worth sitting with. If the system you built misses a renewal and the
            client has an uninsured loss, who is carrying that exposure? Every agency carries errors and
            omissions coverage for exactly this, and a claim against it is not an IT problem. A carrier feed
            that breaks silently, in a system nobody is paid to watch, is a claim waiting for a&nbsp;date.
          </p>
          <p>
            Then anything holding client PII. Once Social Security numbers, dates of birth, and
            driver&rsquo;s license data live in your build, you are the security team. Who can see what,
            what happens to access when a producer leaves, what the log says when a regulator asks. Nobody
            skips this on purpose. They skip it because the thing is running fine and they have an agency
            to&nbsp;run.
          </p>
          <p>
            That last part is the real cost, and it behaves like deferred maintenance on a car. Skip an oil
            change and nothing happens. Skip enough of them and a simple job means pulling the engine apart.
            The difference is that a car has a warning light. Software you built yourself does not. You find
            out something is wrong when it stops working, and it is never at a convenient&nbsp;time.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">
            What if you already built&nbsp;it?
          </h2>
          <p>
            Keep it. Nobody serious is going to ask you to throw away something that works. Put it on the
            table above instead. Most owners find their build fills rows one and two, part of row three, and
            nothing below. The empty rows are not a criticism. They are the map of what you are still doing
            by hand: the carrier portals in other tabs, the appetite guide in a PDF folder, the password
            spreadsheet, the renewal that lives in someone&rsquo;s&nbsp;memory.
          </p>
          <p>
            This is also why &ldquo;I already have one&rdquo; is usually a comparison between two different
            things. A vendor system is a dozen tools in one login. A homegrown system is one or two of them,
            plus the same dozen tabs everyone else has&nbsp;open.
          </p>

          <figure className="my-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/blog/then-vs-now.png"
              alt="A whiteboard table. Left column, then: AMS, CRM, carrier password spreadsheet, carrier directory spreadsheet, appetite guides in a PDF folder, pipeline on sticky notes, renewals spreadsheet. Right column, now: one word, HarborIQ, circled."
              width={1600}
              height={900}
              className="w-full h-auto rounded-xl border border-ash"
            />
            <figcaption className="mt-2 text-[13px] text-stone">
              Seven tools, one job. A homegrown build usually replaces two or three of&nbsp;them.
            </figcaption>
          </figure>

          <p>
            The rows a homegrown build skips are the ones that sit beside it, not underneath it. HarborIQ
            Markets is the carrier layer on its own: appetite and product guides your team can ask questions
            of, in plain English, with the page the answer came from, plus a carrier directory and a login
            vault. It runs next to whatever you built. Nothing to migrate, nothing to&nbsp;replace.
          </p>
          <p>
            One more row to think about, because it comes up later than it should. If you ever sell the
            agency, a system that lives in one person&rsquo;s head shows up in buyer diligence, usually as a
            discount. The fix is cheap and boring: write down what it does, where the data lives, and how to
            export it. Do that this month, not the month a letter of intent&nbsp;arrives.
          </p>

          <div className="mt-12 p-6 bg-linen rounded-xl border border-ash">
            <p className="text-[16px] text-ink font-medium">
              If you must build, build small. Buy the layers a client could sue you&nbsp;over.
            </p>
            <p className="mt-2 text-[15px] text-charcoal">
              HarborIQ Markets is $199 a month for 1 to 15 people, self-serve, and sits alongside whatever
              your agency already runs. Priced by agency size, never per&nbsp;person.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="/pricing"
                className="cta-primary bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors text-center"
              >
                See Markets pricing
              </a>
              <a
                href={DEMO_PAGE}
                className="cta-secondary bg-interactive text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-deep transition-colors text-center"
              >
                Book a 20 minute demo
              </a>
            </div>
          </div>

          <h2 className="text-xl font-medium text-ink mt-12 mb-4">Common questions</h2>

          <div>
            <h3 className="text-[17px] font-medium text-ink mb-2">
              Should I build my own insurance agency management system?
            </h3>
            <p>
              We do not recommend it. If you feel you must, keep it small: a tool you could replace in a
              weekend, that no client&rsquo;s coverage depends on, and that holds no data a client could sue
              you over. A full system of record that holds client PII and tracks renewals is not, because a
              quiet failure there becomes an E&amp;O claim, and someone has to maintain it for as long as the
              agency&nbsp;exists.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-ink mb-2">
              What is the hardest part to build yourself?
            </h3>
            <p>
              Carrier connections, then security. Downloads, live appetite data, and quoting feeds depend on
              data relationships with carriers that take an ongoing operation to maintain, not code. Security
              means access control and an audit trail for Social Security numbers, dates of birth, and
              driver&rsquo;s license data, and most homegrown systems were not built with that as
              a&nbsp;requirement.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-ink mb-2">
              Can I use HarborIQ if I already built my own system?
            </h3>
            <p>
              Yes. HarborIQ Markets sits alongside a homegrown system rather than replacing it. It adds the
              carrier layer most builds do not have: appetite and product guides you can ask questions of,
              with the page the answer came from, plus a carrier directory and login vault. $199 a month for
              1 to 15 people, self-serve, nothing to&nbsp;migrate.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-ink mb-2">
              Does a homegrown system matter if I sell the&nbsp;agency?
            </h3>
            <p>
              Yes. A system that lives in one person&rsquo;s head, undocumented, comes up in buyer diligence
              and usually as a discount. Documenting what it does, where the data lives, and how to export it
              is the cheapest fix, and it is worth doing long before a sale is on the&nbsp;table.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
