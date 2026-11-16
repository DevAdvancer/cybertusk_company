import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectCta() {
  return (
    <section className="container project-cta" aria-labelledby="project-cta-title">
      <div className="project-cta-inner">
        <h2 id="project-cta-title">What are you working on?</h2>
        <p>Tell us what you want to build or improve.</p>
        <Link href="/contact/" className="button button-lime">Start a project <ArrowUpRight aria-hidden size={19} /></Link>
      </div>
    </section>
  );
}
