import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ProjectCta } from "../../components/project-cta";
import { company } from "../../lib/company";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata(
  "/about/",
  "About CYBERTUSK",
  "CYBERTUSK IT Consultants is a software development and IT consulting company founded in 2026 and based in Dubai, United Arab Emirates.",
);

export default function About() {
  return (
    <>
      <section className="container subpage-hero about-hero">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot" /> Founded {company.founded} · Dubai, UAE</p>
          <h1>About CYBERTUSK</h1>
          <p>{company.description}</p>
          <Link href="/#services" className="button button-primary">Explore our services <ArrowUpRight aria-hidden size={19} /></Link>
        </div>
        <img className="about-mark" src="/brand/cybertusk-mark.svg" alt="" width={512} height={512} />
      </section>
      <section className="container about-details" aria-labelledby="working-title">
        <div>
          <h2 id="working-title">How we work with you</h2>
          <p>We start by understanding the people, processes and systems behind the project. Together we define clear outcomes and use them to decide what to build first.</p>
          <p>As work progresses, we review what’s ready with your team and agree on what it will take to launch, operate and maintain the software.</p>
        </div>
        <aside className="about-location"><MapPin aria-hidden size={25} /><h3>Based in Dubai</h3><p>{company.location}</p></aside>
      </section>
      <ProjectCta />
    </>
  );
}
