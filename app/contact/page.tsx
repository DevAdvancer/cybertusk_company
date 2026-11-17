import Link from "next/link";
import { ArrowRight, MapPin, Mail } from "lucide-react";
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
    <>
    <section className="container contact-layout">
      <div className="subpage-hero contact-intro">
        <p className="eyebrow"><span className="eyebrow-dot" /> Contact CYBERTUSK</p>
        <h1>Let’s talk about your project.</h1>
        <p>A new product, a system that needs attention, or a technology decision you’re working through. Tell us where you want to start.</p>
        {company.contactEmail && <a className="text-link" href={`mailto:${company.contactEmail}`}><Mail aria-hidden size={17} /> {company.contactEmail}</a>}
        <div className="contact-base">
          <MapPin aria-hidden size={20} />
          <div><strong>Based in Dubai</strong><p>United Arab Emirates</p></div>
        </div>
        <div className="contact-context">
          <h2>A useful starting point</h2>
          <ul>
            <li>The business problem you want to solve</li>
            <li>The people who will use the software</li>
            <li>Any systems or deadlines we should know about</li>
          </ul>
          <Link href="/approach/" className="text-link detail-next">How we scope a project <ArrowRight aria-hidden size={16} /></Link>
        </div>
      </div>
      <ProjectBrief email={company.contactEmail} serviceOptions={services.map(({ name, slug }) => ({ name, slug }))} />
    </section>
    <section className="container contact-follow-up" aria-labelledby="next-title">
      <div><p className="eyebrow"><span className="eyebrow-dot" /> Starting the conversation</p><h2 id="next-title">What happens next?</h2></div>
      <ol>
        <li><h3>Share the context</h3><p>Use the brief to explain the problem, your goals and any constraints.</p></li>
        <li><h3>Explore the options</h3><p>We discuss what you have today and where a focused engagement could help.</p></li>
        <li><h3>Agree on the next step</h3><p>Define the scope, deliverables and the information needed for a proposal.</p></li>
      </ol>
    </section>
    <section id="brief-info" className="container brief-info" aria-labelledby="brief-info-title">
      <h2 id="brief-info-title">About the project form</h2>
      <p>The form creates a project brief in your browser. Your entries are included when you copy or download it{company.contactEmail ? ", or choose to open it in your email app" : ""}. Preparing the brief keeps the information on this page until you choose how to share it.</p>
    </section>
    </>
  );
}
