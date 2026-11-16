import { MapPin, Mail } from "lucide-react";
import { ProjectBrief } from "../../components/project-brief";
import { company, services } from "../../lib/company";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata(
  "/contact/",
  "Start a project",
  "Prepare a project brief for CYBERTUSK IT Consultants in Dubai, UAE. Outline your software development, IT consulting or systems integration needs.",
);

export default function Contact() {
  return (
    <section className="container contact-layout">
      <div className="subpage-hero contact-intro">
        <p className="eyebrow"><span className="eyebrow-dot" /> Project inquiries</p>
        <h1>Start a project</h1>
        <p>Describe what you want to build or improve. A short brief helps us understand the problem and how to approach it.</p>
        <p className="contact-note">{company.contactEmail ? "Prepare a brief, then open it in your email app to send it to us." : "Prepare a brief you can copy or download and share."}</p>
        {company.contactEmail && <a className="text-link" href={`mailto:${company.contactEmail}`}><Mail aria-hidden size={17} /> {company.contactEmail}</a>}
        <p className="contact-location"><MapPin aria-hidden size={19} /> {company.location}</p>
      </div>
      <ProjectBrief email={company.contactEmail} serviceNames={services.map(({ name }) => name)} />
    </section>
  );
}
