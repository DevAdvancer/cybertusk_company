import { absoluteUrl, company, deliveryQuestions, pages, questions } from "../../lib/company";

export const dynamic = "force-static";

export function GET() {
  const pageLinks = pages.map(
    ({ path, title, description }) => `- [${title}](${absoluteUrl(path)}): ${description}`,
  );

  const answers = [...questions, ...deliveryQuestions].map(({ question, answer }) => `- ${question} ${answer}`);

  return new Response(
    [
      `# ${company.name}`,
      "",
      `> ${company.description}`,
      "",
      `Headquarters: ${company.location}. Founded: ${company.founded}.`,
      ...(company.contactEmail ? [`Project inquiries: ${company.contactEmail}`] : []),
      "",
      "## Company and services",
      "",
      ...pageLinks,
      "",
      "## Common questions",
      "",
      ...answers,
      "",
    ].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
}
