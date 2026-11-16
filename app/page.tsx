import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, CircuitBoard, Compass, MapPin, Plus } from "lucide-react";
import { JsonLd } from "../components/json-ld";
import { ProjectCta } from "../components/project-cta";
import { absoluteUrl, company, questions, services, steps } from "../lib/company";
import { organization, organizationId, pageMetadata } from "../lib/seo";

export const metadata = pageMetadata(
  "/",
  "Software Development & IT Consulting in Dubai | CYBERTUSK",
  company.description,
);

const serviceIcons = [Braces, Compass, CircuitBoard];

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

      <section className="container hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow"><span className="eyebrow-dot" /> Software development & IT consulting</p>
          <h1 id="hero-title">Build what moves you <em>forward.</em></h1>
          <p className="hero-copy">CYBERTUSK is a Dubai-based software development and IT consulting company. We help you turn a business need into software that works for your team.</p>
          <div className="hero-actions">
            <Link href="/contact/" className="button button-primary">Start a project <ArrowUpRight aria-hidden size={19} /></Link>
            <Link href="#services" className="text-link">Explore services <ArrowDown aria-hidden size={16} /></Link>
          </div>
        </div>
        <figure className="hero-visual">
          <img
            src="/dubai-1200.webp"
            srcSet="/dubai-600.webp 600w, /dubai-1200.webp 1200w"
            sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 1250px) 48vw, 580px"
            width={1200}
            height={900}
            fetchPriority="high"
            alt="Illustrated view of Downtown Dubai and the Burj Khalifa at blue hour"
          />
          <span className="frame-corner frame-top" aria-hidden="true" />
          <span className="frame-corner frame-bottom" aria-hidden="true" />
          <figcaption><MapPin aria-hidden size={16} /> Dubai, United Arab Emirates</figcaption>
        </figure>
      </section>

      <section className="container services section-space" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Services</p>
            <h2 id="services-title">Ways we can help</h2>
          </div>
          <p>Bring us a product idea, a technology decision or a process your team wants to simplify.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <Link key={service.slug} href={`/services/${service.slug}/`} className="service-card">
                <span className="service-icon"><Icon aria-hidden size={28} strokeWidth={1.7} /></span>
                <span className="service-arrow"><ArrowUpRight aria-hidden size={20} /></span>
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="approach section-space" id="approach" aria-labelledby="approach-title">
        <div className="container approach-inner">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Our approach</p>
            <h2 id="approach-title">From a first conversation to delivery</h2>
            <p>We agree on what to solve, what to build first and how your team will take it forward.</p>
          </div>
          <ol className="steps">
            {steps.map((step, index) => <li key={step.name}><span className="step-number">0{index + 1}</span><div><h3>{step.name}</h3><p>{step.detail}</p></div></li>)}
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
        <div className="faq-list">
          {questions.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}<Plus aria-hidden size={20} /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <ProjectCta />
    </>
  );
}
