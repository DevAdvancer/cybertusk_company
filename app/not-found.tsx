import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container subpage-hero error-page">
      <p className="eyebrow"><span className="eyebrow-dot" /> Error 404</p>
      <h1>Page not found</h1>
      <p>Return to the CYBERTUSK homepage to find our services and project contact information.</p>
      <Link href="/" className="button button-primary"><ArrowLeft aria-hidden size={18} /> Back home</Link>
    </section>
  );
}
