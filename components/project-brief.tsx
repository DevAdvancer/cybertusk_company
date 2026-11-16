"use client";

import { type FormEvent, useEffect, useState } from "react";
import { ArrowRight, Copy, Download, Mail } from "lucide-react";

export function ProjectBrief({ email, serviceNames }: { email: string; serviceNames: string[] }) {
  const [brief, setBrief] = useState("");
  const [status, setStatus] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  function prepareBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const details = String(form.get("details") ?? "").trim();

    if (!details) {
      setStatus("Enter a short description of your project.");
      return;
    }

    const fields = [
      ["Name", form.get("name")],
      ["Email", form.get("email")],
      ["Service", form.get("service")],
    ];
    setBrief(
      ["CYBERTUSK project brief", "", ...fields.map(([label, value]) => `${label}: ${value}`), "", "Project details", details].join("\n"),
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
      <form onSubmit={prepareBrief} onChange={() => { setBrief(""); setStatus(""); }}>
        <div className="form-grid">
          <label htmlFor="brief-name">Your name<input id="brief-name" name="name" autoComplete="name" maxLength={120} required /></label>
          <label htmlFor="brief-email">Work email<input id="brief-email" name="email" type="email" autoComplete="email" maxLength={254} required /></label>
        </div>
        <label htmlFor="brief-service">What do you need?
          <select id="brief-service" name="service" defaultValue="Not sure yet">
            {serviceNames.map((service) => <option key={service}>{service}</option>)}
            <option>Not sure yet</option>
          </select>
        </label>
        <label htmlFor="brief-details">What would you like to achieve?
          <textarea id="brief-details" name="details" rows={6} maxLength={1000} required placeholder="A short description of your project…" />
        </label>
        <button type="submit" disabled={!ready} className="button button-primary">Prepare my brief <ArrowRight aria-hidden size={18} /></button>
        <noscript>Enable JavaScript to prepare a brief in your browser.</noscript>
      </form>
      <p className="form-status" role="status">{status}</p>
      {brief && (
        <section className="brief-result" aria-labelledby="brief-result-title">
          <h2 id="brief-result-title">Your project brief</h2>
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
