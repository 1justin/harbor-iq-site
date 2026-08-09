// Canonical manifesto copy. The page, the JSON-LD, and the social drip images
// all read from this array; edit copy here and nowhere else.
export type Principle = { title: string; body: string };

export const MANIFESTO_SUBTITLE =
  "Eighteen things we believe about the software independent agencies are made to use.";

export const PRINCIPLES: Principle[] = [
  {
    title: "We publish our price.",
    body: "It is on the website. If a company makes you sit through a call to learn what something costs, they are trying to find out what you will pay, not what it is worth.",
  },
  {
    title: "We do not charge per seat.",
    body: "Hiring a producer should be a growth decision, not a budget conversation with your software vendor. You pay for your agency, not for the number of people in it.",
  },
  {
    title: "We do not sell your own data back to you.",
    body: "Reporting is not a premium tier. Analytics is not an add-on. You generated it. You should be able to see it.",
  },
  {
    title: "Integrations are not a revenue line.",
    body: "We do not charge you to connect the tools you already pay for. Charging for the plumbing is a tax on your own choices.",
  },
  {
    title: "Renewal is not a trap.",
    body: "Monthly renews monthly. Annual renews annually. We email you before it does, and cancelling takes a click, not sixty days written notice and a call with someone whose job is to keep you. We would rather earn the next term than corner you into it.",
  },
  {
    title: "One login.",
    body: "Not single sign-on stitched across seven acquired products. One system, one password, one place where your agency lives.",
  },
  {
    title: "No implementation consultant.",
    body: "If software requires a paid guide to become useful, the software is the problem. You should not have to hire a translator to speak to a tool you already bought.",
  },
  {
    title: "Training should be unnecessary.",
    body: "If you need a manual, we failed. The best interface is the one nobody has to explain.",
  },
  {
    title: "Software you stare at for eight hours a day should be worth looking at.",
    body: "Most agency systems were designed by people who never had to use them. You can tell. Craft is not decoration. It is respect for the person on the other side of the screen.",
  },
  {
    title: "We hate admin work too.",
    body: "So we take as much of it off your desk as we can. Every hour you spend feeding a database is an hour you did not spend in front of a client. Your job is to sell insurance and take care of people. Ours is to make sure nothing else gets in the way.",
  },
  {
    title: "AI is the architecture, not an upsell.",
    body: "You cannot bolt intelligence onto a system designed in 1998 and call it modern. We started from the other end. That is the entire reason we exist.",
  },
  {
    title: "If a feature helps one agency, it helps all of them. So we build it.",
    body: "There is no roadmap committee to petition. No user conference where your idea goes to die politely. You ask, we look, we ship.",
  },
  {
    title: "We ship every week.",
    body: "Not next release cycle. Not next year, pending scope. Weekly, quietly, without a press release.",
  },
  {
    title: "AI answers first. A person answers when it matters.",
    body: "We automate what we can, because that is how the price stays where it is. But you will never be stuck with a robot. There is no premium tier you buy your way into to reach a human, no dedicated success manager reserved for the accounts that spend more. When you need a person, you get one. That is not a cost we intend to cut.",
  },
  {
    title: "Twenty minutes is enough.",
    body: "That is the whole demo. You see the product doing real work, on real agency problems, and you decide. Stay longer if you like, gladly. But if a system takes three hours to explain, it was not built to be used. It was built to be sold.",
  },
  {
    title: "We would rather tell you no than sell you wrong.",
    body: "If HarborIQ is not the right fit for your agency, we will say so on the call, and tell you what would be. Nothing we could win by overselling is worth what it costs you to find out later.",
  },
  {
    title: "We tell you what we cannot do yet.",
    body: "Every product has gaps. Ask us about ours and we will tell you, plainly, before you buy. The companies that pretend otherwise are the ones you have already worked with.",
  },
  {
    title: "You can leave.",
    body: "Export your entire book any time, in a format that opens on a normal computer. Your data was never ours. A harbor is not a harbor if the ships cannot leave it. Any company that makes leaving hard has told you exactly what it thinks of staying.",
  },
];

export const MANIFESTO_FAQS = [
  {
    q: "Does HarborIQ charge per user?",
    a: "No. HarborIQ is flat monthly pricing for the whole agency. Hiring another producer never changes your software bill.",
  },
  {
    q: "Is HarborIQ's pricing public?",
    a: "Yes. Pricing is published at harboriq.co/pricing. You do not need a discovery call to learn the number.",
  },
  {
    q: "Can I export my book of business from HarborIQ?",
    a: "Yes. You can export your entire book any time, in a standard format that opens in normal spreadsheet software. Your data is yours.",
  },
  {
    q: "Do I need an implementation consultant to set up HarborIQ?",
    a: "No. There is no paid implementation and no certification course. Onboarding is measured in days, not months.",
  },
  {
    q: "How do I cancel HarborIQ?",
    a: "Cancelling takes a click in the product. Monthly renews monthly, annual renews annually, and we email you before renewal. No sixty-day notice letters, no retention calls.",
  },
  {
    q: "How long is a HarborIQ demo?",
    a: "Twenty minutes. You see the product doing real work on real agency problems, and you decide. Stay longer if you like.",
  },
];
