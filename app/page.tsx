import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { FaqList } from "../components/faq-list";
import { JsonLd } from "../components/json-ld";
import { ProjectCta } from "../components/project-cta";
import { ProjectExplorer } from "../components/project-explorer";
import { ServiceIcon } from "../components/service-icon";
import { absoluteUrl, company, questions, services, steps } from "../lib/company";
import { organization, organizationId, pageMetadata } from "../lib/seo";

export const metadata = pageMetadata(
  "/",
  "Software Development & IT Consulting in Dubai | CYBERTUSK",
  company.description,
);

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
            <p className="hero-copy">For the work your business needs to get done. CYBERTUSK builds custom applications, connects existing tools and helps you plan the next technology decision.</p>
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

      <ProjectExplorer />

      <section className="approach section-space" id="approach" aria-labelledby="approach-title">
        <div className="container approach-inner">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Our approach</p>
            <h2 id="approach-title">Clear scope. Regular reviews. A considered handover.</h2>
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
