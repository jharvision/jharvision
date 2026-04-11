# JharVision

JharVision is an open-source tech platform for Jharkhand built with Next.js 14, TypeScript, Tailwind CSS, and a Supabase-ready foundation.

## Vision

JharVision aims to make Jharkhand's tech ecosystem more visible and more participatory by bringing together:

- Tech updates
- Startup stories
- Open-source collaboration
- Contributor-friendly product building

## Version 1 Features

- Responsive home page with hero, about, and CTA sections
- Blog listing page at `/blog`
- Dynamic blog detail pages at `/blog/[slug]`
- Contribute page at `/contribute`
- Reusable UI components and clean `src/`-based structure
- Static blog data with room to grow into Supabase or CMS-backed content

## Tech Stack

- Next.js 14+ App Router
- TypeScript
- Tailwind CSS
- Supabase JavaScript client

## Project Structure

```text
src/
|-- app/
|   |-- blog/
|   |   |-- [slug]/page.tsx
|   |   `-- page.tsx
|   |-- contribute/page.tsx
|   |-- globals.css
|   |-- icon.svg
|   |-- layout.tsx
|   |-- not-found.tsx
|   |-- page.tsx
|   |-- robots.ts
|   `-- sitemap.ts
|-- components/
|-- data/
`-- lib/
```

## Getting Started

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open `http://localhost:3000` in your browser.

## Contributing

We welcome developers, designers, writers, and community contributors. The codebase is intentionally structured to be beginner-friendly and ready for future GitHub-based contributor workflows.

## License

MIT
