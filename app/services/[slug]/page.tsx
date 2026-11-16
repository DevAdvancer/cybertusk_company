import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { JsonLd } from "../../../components/json-ld";
import { absoluteUrl, services } from "../../../lib/company";
import { organizationId, pageMetadata } from "../../../lib/seo";

type ServicePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return pageMetadata(`/services/${slug}/`, `${service.name} in Dubai`, service.summary);
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const url = absoluteUrl(`/services/${slug}/`);

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}#service`,
        url,
        name: service.name,
        description: service.summary,
        provider: { "@id": organizationId },
      }} />
      <section className="container subpage-hero">
        <Link href="/#services" className="text-link back-link"><ArrowLeft aria-hidden size={17} /> All services</Link>
        <p className="eyebrow"><span className="eyebrow-dot" /> Services · Dubai, UAE</p>
        <h1>{service.name}</h1>
        <p>{service.intro}</p>
      </section>
      <section className="container detail-section" aria-labelledby="deliverables-title">
        <h2 id="deliverables-title">What we can help with</h2>
        <div className="service-grid">
          {service.deliverables.map(({ name, detail }) => (
            <article key={name} className="service-card">
              <span className="service-icon"><Check aria-hidden size={24} /></span>
              <h3>{name}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container project-cta" aria-labelledby="start-title">
        <div className="project-cta-inner">
          <h2 id="start-title">A starting point for your project</h2>
          <p>{service.startingPoint}</p>
          <Link href="/contact/" className="button button-lime">Prepare a brief <ArrowUpRight aria-hidden size={19} /></Link>
        </div>
      </section>
    </>
  );
}
