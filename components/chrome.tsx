import Link from "next/link";
import { ArrowUpRight, LayoutGrid, MapPin } from "lucide-react";
import { company, services } from "../lib/company";
import { ServiceIcon } from "./service-icon";
import { ServicesMenu } from "./services-menu";

const navigation = [
  { href: "/approach/", label: "Approach" },
  { href: "/about/", label: "About" },
];

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="CYBERTUSK IT Consultants home">
      <img src="/brand/cybertusk-mark.svg" alt="" width="42" height="42" />
      <span className="brand-wordmark">CYBERTUSK<small>IT CONSULTANTS</small></span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="topbar">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="container header-inner">
        <Brand />
        <nav aria-label="Main navigation">
          <ServicesMenu>
            <Link href="/services/" className="services-menu-item">
              <span className="service-icon"><LayoutGrid aria-hidden size={19} /></span>
              <span>All services<small>Compare our capabilities</small></span>
              <ArrowUpRight aria-hidden size={16} />
            </Link>
            {services.map((service) => (
              <Link href={`/services/${service.slug}/`} className="services-menu-item" key={service.slug}>
                <ServiceIcon slug={service.slug} size={19} />
                <span>{service.name}<small>{service.action}</small></span>
                <ArrowUpRight aria-hidden size={16} />
              </Link>
            ))}
          </ServicesMenu>
          {navigation.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link href="/contact/" className="button button-small button-dark">Let’s talk <ArrowUpRight aria-hidden size={16} /></Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <p>Have a project in mind?</p>
          <Link href="/contact/" className="footer-project-link">Let’s talk about it <ArrowUpRight aria-hidden size={29} /></Link>
        </div>
        <div className="footer-main">
          <div className="footer-brand">
            <Brand />
            <p>Custom software, connected systems and practical technology advice.</p>
            <p className="footer-location"><MapPin aria-hidden size={16} /> Dubai, United Arab Emirates</p>
          </div>
          <nav aria-labelledby="footer-services-title">
            <h2 id="footer-services-title">Services</h2>
            {services.map(({slug, name}) => <Link key={slug} href={`/services/${slug}/`}>{name}</Link>)}
            <Link href="/services/">View all services <ArrowUpRight aria-hidden size={13} /></Link>
          </nav>
          <nav aria-labelledby="footer-company-title">
            <h2 id="footer-company-title">Company</h2>
            <Link href="/about/">About CYBERTUSK</Link>
            <Link href="/approach/">How we work</Link>
            <Link href="/contact/">Contact us</Link>
          </nav>
          <nav aria-labelledby="footer-project-title">
            <h2 id="footer-project-title">Your next project</h2>
            <Link href="/contact/">Prepare a project brief</Link>
            <Link href="/contact/#brief-info">About the project form</Link>
            {company.contactEmail && <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a>}
          </nav>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getUTCFullYear()} {company.name}</span>
          <span>Established {company.founded} · Dubai, UAE</span>
        </div>
      </div>
    </footer>
  );
}
