import Link from "next/link";
import { ArrowRight, ArrowUpRight, ClipboardCheck, FileText, ShieldCheck } from "lucide-react";
import { FaqList } from "../../components/faq-list";
import { ProjectCta } from "../../components/project-cta";
import { approachPage, deliveryQuestions, steps } from "../../lib/company";
import { pageMetadata } from "../../lib/seo";

const { path, title, description } = approachPage;

export const metadata = pageMetadata(path, title, description);

const agreements = [
  {
    icon: FileText,
    name: "Scope and ownership",
    detail: "Agree on what’s included, what the client needs to provide and how changes affect scope and timing.",
  },
  {
    icon: ShieldCheck,
    name: "Data and access",
    detail: "Discuss what data the project handles, who needs access and whether hosting or deployment has specific requirements.",
  },
  {
    icon: ClipboardCheck,
    name: "Acceptance and support",
    detail: "Set criteria for approving the work, list the handover materials and agree who will look after the solution after launch.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <section className="container subpage-hero delivery-hero intro-motion">
        <p className="eyebrow"><span className="eyebrow-dot" /> Our approach</p>
        <h1>{title}</h1>
        <p>See what decisions we make together and what you can expect at each stage of a software or consulting engagement.</p>
        <Link href="/contact/" className="button button-primary">Bring us a project <ArrowUpRight aria-hidden size={19} /></Link>
      </section>
      <section className="container detail-section delivery-flow" aria-labelledby="delivery-title">
        <h2 id="delivery-title">From discovery to handover</h2>
        <ol className="delivery-steps">
          {steps.map(({ name, detail, outcome }, index) => (
            <li key={name}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{name}</h3>
              <p>{detail}</p>
              <p className="delivery-outcome">{outcome}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="container detail-section" aria-labelledby="agreement-title">
        <h2 id="agreement-title">What we agree on up front</h2>
        <div className="service-grid">
          {agreements.map(({ icon: Icon, name, detail }) => (
            <article className="service-card" key={name}>
              <span className="service-icon"><Icon aria-hidden size={24} /></span>
              <h3>{name}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container faq delivery-faq" aria-labelledby="delivery-faq-title">
        <div>
          <h2 id="delivery-faq-title">Planning your project</h2>
          <Link href="/services/" className="text-link">Explore our services <ArrowRight aria-hidden size={17} /></Link>
        </div>
        <FaqList questions={deliveryQuestions} />
      </section>
      <ProjectCta />
    </>
  );
}
