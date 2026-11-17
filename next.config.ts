import type { NextConfig } from "next";

const config: NextConfig = {
  output: process.env.SITE_STATIC_EXPORT === "true" ? "export" : undefined,
  trailingSlash: true,
  poweredByHeader: false,
  agentRules: false,
  devIndicators: false,
};

export default config;
