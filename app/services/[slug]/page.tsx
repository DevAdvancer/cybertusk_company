import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { JsonLd } from "../../../components/json-ld";
import { ServiceIcon } from "../../../components/service-icon";
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
  const breadcrumbs = [
    { name: "Home", item: absoluteUrl("/") },
    { name: "Services", item: absoluteUrl("/services/") },
    { name: service.name, item: url },
  ];

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "@id": `${url}#service`,
            url,
            name: service.name,
            description: service.summary,
            provider: { "@id": organizationId },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              position: index + 1,
              ...crumb,
            })),
          },
        ],
      }} />
      <section className="container subpage-hero service-detail-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link><ChevronRight aria-hidden size={14} /></li>
            <li><Link href="/services/">Services</Link><ChevronRight aria-hidden size={14} /></li>
            <li aria-current="page">{service.name}</li>
          </ol>
        </nav>
        <ServiceIcon slug={service.slug} size={29} />
        <h1>{service.name}</h1>
        <p>{service.intro}</p>
      </section>
      <section className="container service-example" aria-labelledby="example-title">
        <div>
          <h2 id="example-title">Example project</h2>
          <p>{service.example}</p>
        </div>
        <div>
          <h3>What we’d work toward</h3>
          <p>{service.outcome}</p>
          <Link href="/approach/" className="text-link detail-next">See how we deliver <ArrowRight aria-hidden size={17} /></Link>
        </div>
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
          <div>
            <h2 id="start-title">A starting point for your project</h2>
            <p>{service.startingPoint}</p>
          </div>
          <Link href={`/contact/?service=${service.slug}`} className="button button-lime">Prepare a brief <ArrowUpRight aria-hidden size={19} /></Link>
        </div>
      </section>
    </>
  );
}
