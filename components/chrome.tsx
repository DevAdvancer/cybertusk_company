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
        <div className="footer-main">
          <div>
            <Brand />
            <p>Software development & IT consulting</p>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/services/">Services</Link>
            {navigation.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/contact/">Contact</Link>
          </nav>
          <p className="footer-location"><MapPin aria-hidden size={17} /> {company.location}</p>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getUTCFullYear()} {company.name}</span>
          <a href="/llms.txt">LLMs.txt <ArrowUpRight aria-hidden size={13} /></a>
        </div>
      </div>
    </footer>
  );
}
