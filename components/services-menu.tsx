"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export function ServicesMenu({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const disclosure = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);

  useEffect(() => {
    const menu = disclosure.current;
    if (!menu) return;
    function closeOnOutsidePress(event: PointerEvent) {
      if (event.target instanceof Node && menu && !menu.contains(event.target)) {
        menu.open = false;
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePress);
  }, []);

  return (
    <details
      ref={disclosure}
      className="services-menu"
      data-section={pathname.startsWith("/services")}
      onBlur={(event) => {
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
          event.currentTarget.open = false;
        }
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !event.currentTarget.open) return;
        event.preventDefault();
        event.currentTarget.open = false;
        trigger.current?.focus();
      }}
    >
      <summary ref={trigger}>Services <ChevronDown aria-hidden size={16} /></summary>
      <div
        className="services-menu-panel"
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a") && disclosure.current) {
            disclosure.current.open = false;
          }
        }}
      >
        {children}
      </div>
    </details>
  );
}
