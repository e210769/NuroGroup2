# NURA Group website

Portable Next.js website in Uzbek, Russian and English, using self-hosted Golos Text. Business, project, news, careers, partnership and contact pages are exported to static HTML with client-side navigation interactions and animations.

## Local development

Use Node.js 22 or newer and the pnpm version in package.json.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Build

```sh
pnpm build
```

The `out` directory contains the complete website. It can be hosted on Netlify or another static web server.

## GitHub + Netlify

1. Put the contents of this source directory into a GitHub repository. Keep node_modules, .next and out out of the repository; .gitignore handles them.
2. In Netlify, import that repository.
3. Build command: `pnpm run build`. Publish directory: `out`.
4. The included netlify.toml provides these settings.
5. Subsequent source changes can be published through Netlify's Git integration.

## Optional GitHub Pages build

The included workflow is manual so adding this repository does not publish it automatically. If you choose GitHub Pages, select GitHub Actions in the repository's Pages settings, then run the Publish to GitHub Pages workflow. It sets the repository base path for links, images, fonts and generated assets. Review GitHub Pages' usage limits when selecting hosting for a business website: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

## Editing content

- content/site.json: company, project, news, career and contact content.
- content/labels.ts: interface and introductory text in all three languages.
- components/nura-site.tsx: page sections and interactions.
- app/globals.css: layout, typography and animation.
- public/media: current NURA photographs and company assets.
- public/fonts/golos-text/OFL.txt: Golos font license.

## Existing forms

Phone and email actions work directly. Enquiry, partnership and job application links currently open the existing official NURA website. Migrate those forms or connect a submission service before replacing the original domain.

Source references are retained in content/sources.json.
