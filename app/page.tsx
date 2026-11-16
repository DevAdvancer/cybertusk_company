import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ClipboardList, Clock3, MapPin } from "lucide-react";
import { FaqList } from "../components/faq-list";
import { JsonLd } from "../components/json-ld";
import { ProjectCta } from "../components/project-cta";
import { ServiceIcon } from "../components/service-icon";
import { absoluteUrl, company, questions, services, steps } from "../lib/company";
import { organization, organizationId, pageMetadata } from "../lib/seo";

export const metadata = pageMetadata(
  "/",
  "Software Development & IT Consulting in Dubai | CYBERTUSK",
  company.description,
);

const workflow = [
  { icon: ClipboardList, label: "Request received" },
  { icon: Clock3, label: "In review" },
  { icon: Check, label: "Approved" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          organization,
          {
            "@type": "WebSite",
            "@id": absoluteUrl("/#website"),
            name: company.name,
            alternateName: "CYBERTUSK",
            url: absoluteUrl("/"),
            inLanguage: "en-AE",
            publisher: { "@id": organizationId },
          },
        ],
      }} />

      <section className="home-hero" aria-labelledby="hero-title">
        <div className="container hero">
          <div className="hero-content intro-motion">
            <p className="eyebrow"><span className="eyebrow-dot" /> Software development & IT consulting</p>
            <h1 id="hero-title"><span>Build software.</span> <em>Connect systems.</em></h1>
            <p className="hero-copy">We help businesses launch custom applications, connect existing tools and make better technology decisions.</p>
            <div className="hero-actions">
              <Link href="/contact/" className="button button-lime">Start a project <ArrowUpRight aria-hidden size={19} /></Link>
              <Link href="/services/" className="button button-outline">Explore services <ArrowRight aria-hidden size={17} /></Link>
            </div>
            <p className="hero-location"><MapPin aria-hidden size={16} /> Based in Dubai, United Arab Emirates</p>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img
              src="/engineering-1200.webp"
              srcSet="/engineering-640.webp 640w, /engineering-1200.webp 1200w"
              sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 1350px) 50vw, 680px"
              width={1200}
              height={900}
              fetchPriority="high"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="container services section-space" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <div>
            <h2 id="services-title">Technology services</h2>
            <p>From deciding what to build to delivering software your team can use.</p>
          </div>
          <Link href="/services/" className="text-link detail-next">View all services <ArrowRight aria-hidden size={17} /></Link>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}/`} className="service-card">
              <ServiceIcon slug={service.slug} />
              <span className="service-arrow"><ArrowUpRight aria-hidden size={20} /></span>
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container project-example" aria-labelledby="project-example-title">
        <div className="project-example-inner">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Illustrative project</p>
            <h2 id="project-example-title">Bring approvals out of the inbox</h2>
            <p>Replace scattered email threads with a portal that tracks requests, records decisions and shows teams what’s waiting for review.</p>
            <Link href="/services/software-development/" className="text-link detail-next">Explore custom software development <ArrowRight aria-hidden size={17} /></Link>
          </div>
          <div className="workflow-example">
            <h3>Approval workflow</h3>
            <ol>
              {workflow.map(({ icon: Icon, label }) => (
                <li key={label}><span><Icon aria-hidden size={19} /></span>{label}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="approach section-space" id="approach" aria-labelledby="approach-title">
        <div className="container approach-inner">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Our approach</p>
            <h2 id="approach-title">Know what you’ll get at each stage</h2>
            <p>Agree on scope before work begins, review progress as we deliver, and plan who will own and support the result.</p>
            <Link href="/approach/" className="text-link">See how we deliver <ArrowRight aria-hidden size={17} /></Link>
          </div>
          <ol className="steps">
            {steps.map((step, index) => <li key={step.name}><span className="step-number" aria-hidden="true">0{index + 1}</span><div><h3>{step.name}</h3><p>{step.outcome}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="container faq section-space" aria-labelledby="faq-title">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot" /> About CYBERTUSK</p>
          <h2 id="faq-title">Common questions</h2>
          <p>Founded in 2026 and based in Dubai, UAE.</p>
          <Link href="/about/" className="text-link">Meet CYBERTUSK <ArrowRight aria-hidden size={17} /></Link>
        </div>
        <FaqList questions={questions} />
      </section>

      <ProjectCta />
    </>
  );
}
