# CYBERTUSK IT Consultants

Company website for CYBERTUSK IT Consultants, a software development and IT consulting company based in Dubai, United Arab Emirates, founded in 2026.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run build` and `npm start` to preview the production Next.js server. Run `npm run typecheck` for TypeScript checks.

## Deploy to Vercel

Import this project into Vercel with the Next.js framework preset. Use the repository root as the project directory and keep Vercel’s default install, build and output settings. The build command is `npm run build`.

Copy `.env.example` to `.env.local` and set these build-time values in the hosting environment:

- `SITE_URL` is the final public HTTPS origin used for canonical links, structured data, the sitemap and `llms.txt`.
- Set `SITE_INDEXABLE=true` when serving the official public version. Preview builds default to `noindex, follow`.
- `CONTACT_EMAIL` is the verified inbound address for project inquiries. When configured, the project brief opens in the visitor’s email app. Copy and download are available in either case.

Leave `SITE_STATIC_EXPORT` unset on Vercel. Set `SITE_URL` to the official production origin before enabling indexing, then redeploy. Review deployments can keep `SITE_INDEXABLE=false`. The contact form prepares a brief locally and uses the visitor’s email app when an address is configured.

Vercel handles Next.js deployment directly. See the [official framework documentation](https://vercel.com/docs/frameworks/full-stack/nextjs).

## Static preview

Run `npm run build:static` to create a separate static export in `out/`. This command sets `SITE_STATIC_EXPORT=true` only for its build process. Publish `out/` to a static host with directory-index support. The private Sites preview uses this output.

The site includes a services overview, three service detail pages and a delivery approach page, plus `/robots.txt`, `/sitemap.xml` and `/llms.txt`. Once the public company domain is live, submit the sitemap in Google Search Console and Bing Webmaster Tools.

## Update the site

Company details, services and FAQs are in `lib/company.ts`. Metadata and structured data are in `lib/seo.ts`. The SVG mark is at `public/brand/cybertusk-mark.svg`. The original reference remains in the workspace.

## Homepage artwork

The engineering artwork was created with built-in ImageGen. The responsive assets are `public/engineering-640.webp` and `public/engineering-1200.webp`.

> Original luxury editorial 3D artwork for the hero of CYBERTUSK, an enterprise software engineering consultancy. Render one sculptural, architectural object: three thick interlocking rectangular links with softly rounded corners, stepping diagonally upward from low left to high right. Brushed dark titanium edges, translucent layered electric cobalt blue glass, a single restrained thin lime-green light on one inner seam. Large clear three-dimensional silhouette, sharp restrained reflections, believable materials, industrial design studio quality. Pitch-deep navy seamless background near #080f22 with a subtle cobalt glow behind the main object and shadowy edges. Landscape 4:3 layout, sculpture centered slightly right and occupying 75 percent of the width. Camera at a three-quarter angle, plenty of dark breathing room, all parts inside the frame. No text, no typography, no logos, no people, no city, no lines or cables floating around the object, no particles, no illustrative UI.

