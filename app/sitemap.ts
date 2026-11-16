import type { MetadataRoute } from "next";
import { absoluteUrl, pages } from "../lib/company";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path }) => ({ url: absoluteUrl(path) }));
}
