"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Copy, Download, Mail } from "lucide-react";

const undecided = "Not sure yet";

export function ProjectBrief({ email, serviceOptions }: { email: string; serviceOptions: { name: string; slug: string }[] }) {
  const [brief, setBrief] = useState("");
  const [status, setStatus] = useState("");
  const [ready, setReady] = useState(false);
  const [selectedService, setSelectedService] = useState(undecided);
  const result = useRef<HTMLElement>(null);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("service");
    setSelectedService(serviceOptions.find((service) => service.slug === slug)?.name ?? undecided);
    setReady(true);
  }, [serviceOptions]);

  useEffect(() => {
    if (brief) result.current?.focus();
  }, [brief]);

  function prepareBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const details = String(form.get("details") ?? "").trim();

    if (!name || !details) {
      setStatus(!name ? "Enter your name to prepare the brief." : "Add a short description of your project.");
      event.currentTarget.querySelector<HTMLElement>(!name ? "#brief-name" : "#brief-details")?.focus();
      return;
    }

    const fields = [
      ["Name", name],
      ["Email", String(form.get("email") ?? "").trim()],
      ["Company", String(form.get("company") ?? "").trim()],
      ["Service", form.get("service")],
      ["Target timeline", form.get("timeline")],
    ];
    setBrief(
      ["CYBERTUSK project inquiry", "", ...fields.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`), "", "Project overview", details].join("\n"),
    );
    setStatus("Project brief ready to review.");
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setStatus("Project brief copied.");
    } catch {
      setStatus("Copy is unavailable in this browser. You can download the brief.");
    }
  }

  function downloadBrief() {
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "cybertusk-project-brief.txt";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus("Project brief downloaded.");
  }

  return (
    <div className="brief-panel">
      <div className="brief-panel-heading">
        <h2>Tell us about your project</h2>
        <p>A few details will help us understand what you need.</p>
      </div>
      <form onSubmit={prepareBrief} onChange={() => { setBrief(""); setStatus(""); }}>
        <div className="form-grid">
          <label htmlFor="brief-name">Your name<input id="brief-name" name="name" autoComplete="name" maxLength={120} required /></label>
          <label htmlFor="brief-email">Work email<input id="brief-email" name="email" type="email" autoComplete="email" maxLength={254} required /></label>
        </div>
        <label htmlFor="brief-company">Company <span className="optional">Optional</span><input id="brief-company" name="company" autoComplete="organization" maxLength={160} /></label>
        <div className="form-grid">
        <label htmlFor="brief-service">What do you need?
          <select id="brief-service" name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)}>
            {serviceOptions.map(({ slug, name }) => <option key={slug}>{name}</option>)}
            <option>{undecided}</option>
          </select>
        </label>
        <label htmlFor="brief-timeline">Target timeline
          <select id="brief-timeline" name="timeline" defaultValue="Open to discussion">
            <option>Open to discussion</option>
            <option>Within 1–3 months</option>
            <option>Within 3–6 months</option>
            <option>More than 6 months</option>
          </select>
        </label>
        </div>
        <label htmlFor="brief-details">What would you like to achieve?
          <textarea id="brief-details" name="details" rows={5} maxLength={1500} required aria-describedby="brief-details-hint" placeholder="What’s the problem, and what would a good result look like?" />
        </label>
        <p id="brief-details-hint" className="field-hint">Include existing systems or a target launch date if they’re relevant.</p>
        <button type="submit" disabled={!ready} className="button button-primary">Prepare project brief <ArrowRight aria-hidden size={18} /></button>
        <p className="brief-note">{email ? "Review your brief, then send it through your email app." : "Your brief is prepared in this browser. You can copy or download it to share."}</p>
        <noscript>Enable JavaScript to prepare a brief in your browser.</noscript>
      </form>
      <p className="form-status" role="status">{status}</p>
      {brief && (
        <section ref={result} tabIndex={-1} className="brief-result" aria-labelledby="brief-result-title">
          <h2 id="brief-result-title"><Check aria-hidden size={20} /> Your brief is ready</h2>
          <pre>{brief}</pre>
          <div className="brief-actions">
            {email && <a href={`mailto:${email}?subject=CYBERTUSK%20project%20inquiry&body=${encodeURIComponent(brief)}`} className="button button-primary"><Mail aria-hidden size={17} /> Open in email</a>}
            <button type="button" className="button button-secondary" onClick={copyBrief}><Copy aria-hidden size={16} /> Copy</button>
            <button type="button" className="button button-secondary" onClick={downloadBrief}><Download aria-hidden size={16} /> Download</button>
          </div>
        </section>
      )}
    </div>
  );
}
