import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/geist";
import "./globals.css";
import { Footer, Header } from "../components/chrome";
import { company } from "../lib/company";

export const metadata: Metadata = {
  metadataBase: company.siteUrl,
  title: { default: company.name, template: "%s | CYBERTUSK" },
  description: company.description,
  applicationName: company.name,
  icons: [{ url: "/brand/cybertusk-mark.svg", type: "image/svg+xml", sizes: "any" }],
  robots: { index: company.isIndexable, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AE" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
