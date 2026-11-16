const name = "CYBERTUSK IT Consultants";
const location = "Dubai, United Arab Emirates";
const founded = "2026";
const description =
  "CYBERTUSK IT Consultants is a Dubai-based software development and IT consulting company founded in 2026. We help businesses plan, build, and improve their software.";

const isIndexable = process.env.SITE_INDEXABLE === "true";
const configuredOrigin = process.env.SITE_URL?.trim();
if (isIndexable && !configuredOrigin) {
  throw new Error("Set SITE_URL to the official public origin before enabling indexing.");
}

const siteUrl = new URL(configuredOrigin || "https://cybertusk-it-consultants.newfirefly.chatgpt.site");
if (!["http:", "https:"].includes(siteUrl.protocol) || siteUrl.href !== `${siteUrl.origin}/`) {
  throw new Error("SITE_URL must be an HTTP or HTTPS origin without a path.");
}

const contactEmail = process.env.CONTACT_EMAIL?.trim() || "";
if (contactEmail && !/^[^\s@?&#%]+@[^\s@?&#%]+\.[^\s@?&#%]+$/.test(contactEmail)) {
  throw new Error("CONTACT_EMAIL must be a plain email address.");
}

export const company = {
  name,
  location,
  founded,
  description,
  siteUrl,
  isIndexable,
  contactEmail,
};

export function absoluteUrl(path: string) {
  return new URL(path, company.siteUrl).href;
}

export const services = [
  {
    slug: "software-development",
    name: "Custom software development",
    summary: "Web applications, client portals and internal tools designed around the way your business works.",
    intro: "Build a new product or replace a process that has outgrown spreadsheets and off-the-shelf tools. We help you define the first release, design the experience and turn it into working software.",
    deliverables: [
      { name: "Web applications", detail: "Build a customer-facing product, dashboard or self-service portal around your users’ needs." },
      { name: "Internal tools", detail: "Give teams a shared workspace for approvals, reporting or day-to-day operations." },
      { name: "MVP development", detail: "Put the most important user journey into a first release so you can test it before expanding scope." },
    ],
    startingPoint: "Tell us who will use the software, what they need to do and how you’ll know the first release is working.",
  },
  {
    slug: "it-consulting",
    name: "IT & technology consulting",
    summary: "Clear technical plans for new initiatives, platform decisions and software that needs a better path forward.",
    intro: "Get clarity on a technology decision before committing to a build. We work through the current setup, business goals and practical constraints to identify the next step.",
    deliverables: [
      { name: "Technical discovery", detail: "Review existing systems, map dependencies and identify decisions that could affect delivery." },
      { name: "Architecture planning", detail: "Compare platform and integration options based on cost, complexity and your team’s ability to maintain them." },
      { name: "Delivery roadmaps", detail: "Turn competing priorities into a staged plan with clear outcomes and decision points." },
    ],
    startingPoint: "Bring the decision you’re facing, what you use today and the trade-offs that matter to your team.",
  },
  {
    slug: "systems-integration",
    name: "Systems integration",
    summary: "Connect platforms, move data reliably and automate repetitive handoffs between your teams and tools.",
    intro: "Connect the tools your teams already use. We map how information moves today, then design the integrations and workflows that reduce repeated entry and manual follow-up.",
    deliverables: [
      { name: "API integrations", detail: "Connect business applications and third-party platforms so information can move between them." },
      { name: "Workflow automation", detail: "Automate recurring handoffs and notifications with clear rules for exceptions." },
      { name: "Data synchronization", detail: "Define where data lives, how updates flow and how your team can spot and recover from failures." },
    ],
    startingPoint: "List the systems involved, the steps your team repeats and where errors or delays usually occur.",
  },
];

export const steps = [
  { name: "Discover", detail: "We map the problem, who it affects and what a successful outcome looks like." },
  { name: "Define", detail: "We agree on scope, priorities and the decisions that need to be made first." },
  { name: "Deliver", detail: "We implement in stages, review progress with you and plan the handover." },
];

export const questions = [
  {
    question: "What does CYBERTUSK IT Consultants do?",
    answer: "CYBERTUSK IT Consultants provides custom software development, IT consulting and systems integration. Typical projects include web applications, internal tools, technology roadmaps and workflow automation.",
  },
  {
    question: "Where is CYBERTUSK based?",
    answer: "CYBERTUSK IT Consultants is based in Dubai, United Arab Emirates. The company was founded in 2026.",
  },
  {
    question: "Can CYBERTUSK work with our existing software?",
    answer: "Yes. We can review your current setup, identify what to keep or improve, and help connect applications through APIs and automated workflows.",
  },
  {
    question: "What should I include in a project inquiry?",
    answer: "Describe the business problem, who is affected and the outcome you want. Include your existing tools, target timeline and budget range if you have them.",
  },
];

export const pages = [
  { path: "/", title: company.name, description: company.description },
  { path: "/about/", title: "About CYBERTUSK", description: "Meet the Dubai-based software development and IT consulting company, founded in 2026." },
  ...services.map((service) => ({
    path: `/services/${service.slug}/`,
    title: service.name,
    description: service.summary,
  })),
  { path: "/contact/", title: "Start a project", description: "Prepare a project brief for a software development, IT consulting or systems integration project." },
];
