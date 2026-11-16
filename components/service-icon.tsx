import { Braces, CircuitBoard, Compass } from "lucide-react";
import type { services } from "../lib/company";

const icons = {
  "software-development": Braces,
  "it-consulting": Compass,
  "systems-integration": CircuitBoard,
};

export function ServiceIcon({ slug, size = 28 }: { slug: (typeof services)[number]["slug"]; size?: number }) {
  const Icon = icons[slug];
  return <span className="service-icon"><Icon aria-hidden size={size} strokeWidth={1.7} /></span>;
}
