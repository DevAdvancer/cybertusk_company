# CYBERTUSK IT Consultants

Company website for CYBERTUSK IT Consultants, a software development and IT consulting company based in Dubai, United Arab Emirates, founded in 2026.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To verify a production build, run `npm run build` followed by `npm run typecheck`. Next.js exports the static site to `out/`.

## Publish on the company domain

Copy `.env.example` to `.env.local` and set these build-time values in the hosting environment:

- `SITE_URL` is the final public HTTPS origin used for canonical links, structured data, the sitemap and `llms.txt`.
- Set `SITE_INDEXABLE=true` when serving the official public version. Preview builds default to `noindex, follow`.
- `CONTACT_EMAIL` is the verified inbound address for project inquiries. When configured, the project brief opens in the visitor’s email app. Copy and download are available in either case.

Run `npm run build` and publish the contents of `out/` to a static host with directory-index support. The site includes a services overview, three service detail pages and a delivery approach page. It also exports `/robots.txt`, `/sitemap.xml` and `/llms.txt`. Once live, submit the sitemap in Google Search Console and Bing Webmaster Tools.

## Update the site

Company details, services and FAQs are in `lib/company.ts`. Metadata and structured data are in `lib/seo.ts`. The SVG mark is at `public/brand/cybertusk-mark.svg`. The original reference remains in the workspace.

