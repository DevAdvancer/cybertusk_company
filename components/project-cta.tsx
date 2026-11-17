import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectCta() {
  return (
    <section className="container project-cta" aria-labelledby="project-cta-title">
      <div className="project-cta-inner">
        <div>
          <h2 id="project-cta-title">Start with the problem you want to solve.</h2>
          <p>Tell us what’s working, what’s getting in the way and where you want to go.</p>
        </div>
        <Link href="/contact/" className="button button-lime">Discuss your project <ArrowUpRight aria-hidden size={19} /></Link>
      </div>
    </section>
  );
}
