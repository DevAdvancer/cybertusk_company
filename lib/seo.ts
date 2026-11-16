import type { Metadata } from "next";
import { absoluteUrl, company } from "./company";

export const organizationId = absoluteUrl("/#organization");

export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: path === "/" ? title : `${title} | CYBERTUSK`,
      description,
      url: absoluteUrl(path),
      type: "website",
      siteName: company.name,
      locale: "en_AE",
      images: [{ url: absoluteUrl("/social.jpg"), width: 1200, height: 630, alt: "CYBERTUSK IT Consultants — Dubai, UAE" }],
    },
    twitter: {
      card: "summary_large_image",
      title: path === "/" ? title : `${title} | CYBERTUSK`,
      description,
      images: [absoluteUrl("/social.jpg")],
    },
  };
}

export const organization = {
  "@type": "Organization",
  "@id": organizationId,
  name: company.name,
  alternateName: "CYBERTUSK",
  url: absoluteUrl("/"),
  description: company.description,
  foundingDate: company.founded,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/brand/cybertusk-mark.svg"),
    width: 512,
    height: 512,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  ...(company.contactEmail ? { email: company.contactEmail } : {}),
};

