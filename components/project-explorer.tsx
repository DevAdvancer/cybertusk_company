"use client";

import Link from "next/link";
import { type KeyboardEvent, useRef, useState } from "react";
import { ArrowRight, Braces, Check, FileText, Layers, Workflow } from "lucide-react";

const examples = [
  {
    id: "portal",
    tab: "Build a client portal",
    icon: Braces,
    title: "Give clients a place to get things done.",
    description: "A shared portal can bring requests, documents and project updates into one place. Start with the task your clients come back to most.",
    features: ["A clear sign-in and account flow", "Requests with a visible status", "Updates your team can manage"],
    href: "/services/software-development/",
    service: "Custom software development",
    previewTitle: "Client workspace",
    previewItems: ["Submit a request", "Share project documents", "Review the latest update"],
    previewIcon: Layers,
  },
  {
    id: "integration",
    tab: "Connect business systems",
    icon: Workflow,
    title: "Enter it once. Keep your systems in step.",
    description: "Connect the applications behind sales and operations so a change in one system reaches the people and tools that depend on it.",
    features: ["A map of your existing data flow", "API connections with clear rules", "Error handling and recovery steps"],
    href: "/services/systems-integration/",
    service: "Systems integration",
    previewTitle: "Customer data flow",
    previewItems: ["Customer record updated", "Connected systems synchronized", "Operations team notified"],
    previewIcon: Workflow,
  },
  {
    id: "roadmap",
    tab: "Plan a technology change",
    icon: FileText,
    title: "Make the next decision with a clearer picture.",
    description: "Review your current software, compare the practical options and turn an open-ended technology question into a plan your team can act on.",
    features: ["A review of systems and dependencies", "Options compared against your constraints", "A roadmap with priorities and next steps"],
    href: "/services/it-consulting/",
    service: "IT & technology consulting",
    previewTitle: "Technology review",
    previewItems: ["Current systems mapped", "Options and trade-offs reviewed", "Next steps agreed"],
    previewIcon: FileText,
  },
];

export function ProjectExplorer() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % examples.length; break;
      case "ArrowLeft": next = (index + examples.length - 1) % examples.length; break;
      case "Home": next = 0; break;
      case "End": next = examples.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <section className="project-explorer" aria-labelledby="explorer-title">
      <div className="container">
        <div className="section-heading explorer-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Projects we can help with</p>
            <h2 id="explorer-title">What needs to work better?</h2>
          </div>
          <p>Three examples of where a software or consulting engagement can start.</p>
        </div>
        <div className="project-tabs" role="tablist" aria-label="Explore project examples">
          {examples.map(({ id, tab, icon: Icon }, index) => (
            <button
              key={id}
              id={`project-tab-${id}`}
              type="button"
              role="tab"
              aria-selected={selected === index}
              aria-controls={`project-panel-${id}`}
              tabIndex={selected === index ? 0 : -1}
              ref={(element) => { tabs.current[index] = element; }}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => moveTab(event, index)}
            >
              <Icon aria-hidden size={19} /> {tab}
            </button>
          ))}
        </div>
        {examples.map((example, index) => {
          const PreviewIcon = example.previewIcon;
          return (
            <div
              key={example.id}
              id={`project-panel-${example.id}`}
              role="tabpanel"
              aria-labelledby={`project-tab-${example.id}`}
              tabIndex={0}
              hidden={selected !== index}
              className="project-panel"
            >
              <div className="project-panel-copy">
                <h3>{example.title}</h3>
                <p>{example.description}</p>
                <ul>{example.features.map((feature) => <li key={feature}><Check aria-hidden size={16} />{feature}</li>)}</ul>
                <Link href={example.href} className="text-link detail-next">{example.service}<ArrowRight aria-hidden size={17} /></Link>
              </div>
              <div className="project-preview" aria-label="Illustrative example">
                <div className="preview-header"><PreviewIcon aria-hidden size={20} /><span>{example.previewTitle}</span><span className="preview-dots" aria-hidden="true">•••</span></div>
                <ol>
                  {example.previewItems.map((item) => <li key={item}><span className="preview-check"><Check aria-hidden size={16} /></span>{item}</li>)}
                </ol>
                <p>Illustrative example</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
