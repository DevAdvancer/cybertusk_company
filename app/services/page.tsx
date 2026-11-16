import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { JsonLd } from "../../components/json-ld";
import { ServiceDiagram } from "../../components/motion-graphics";
import { ProjectCta } from "../../components/project-cta";
import { ServiceIcon } from "../../components/service-icon";
import { absoluteUrl, servicePages, services, servicesOverview } from "../../lib/company";
import { organizationId, pageMetadata } from "../../lib/seo";

const { path, title, description } = servicesOverview;

export const metadata = pageMetadata(path, title, description);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: title,
        description,
        url: absoluteUrl(path),
        publisher: { "@id": organizationId },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: servicePages.map(({ path, title }, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: title,
            url: absoluteUrl(path),
          })),
        },
      }} />
      <section className="container subpage-hero services-hero">
        <div className="intro-motion">
          <p className="eyebrow"><span className="eyebrow-dot" /> Dubai, United Arab Emirates</p>
          <h1>{title}</h1>
          <p>Plan a technology change, build software around the way you work, or connect the tools you already use.</p>
          <Link href="/contact/" className="button button-primary">Discuss your project <ArrowUpRight aria-hidden size={19} /></Link>
        </div>
        <ServiceDiagram />
      </section>
      <section className="container detail-section catalog" aria-labelledby="catalog-title">
        <h2 id="catalog-title">Find the right service</h2>
        <div className="catalog-list">
          {services.map((service) => (
            <article className="catalog-row" key={service.slug}>
              <div>
                <ServiceIcon slug={service.slug} />
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
              </div>
              <div className="catalog-fit">
                <p><strong>Example project</strong> {service.example}</p>
                <ul aria-label={`${service.name} capabilities`}>
                  {service.deliverables.map(({ name }) => <li key={name}>{name}</li>)}
                </ul>
                <Link href={`/services/${service.slug}/`} className="text-link" aria-label={`Explore ${service.name}`}>Explore this service <ArrowRight aria-hidden size={17} /></Link>
              </div>
            </article>
          ))}
        </div>
        <Link href="/approach/" className="text-link detail-next">See how we scope and deliver projects <ArrowRight aria-hidden size={17} /></Link>
      </section>
      <ProjectCta />
    </>
  );
}
