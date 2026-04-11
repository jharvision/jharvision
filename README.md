# JharVision

## 🌍 Vision

JharVision is not just a project — it’s a mission to build a strong tech ecosystem in Jharkhand.

We aim to bring students, developers, and innovators together to create real impact for society.

---

## 🎯 Why Contribute?

- Work on a real-world project
- Gain practical experience
- Build a strong portfolio
- Get your name featured on the platform
- Be part of Jharkhand’s tech movement

---

## 🤝 How to Contribute

1. Fork this repository
2. Make your changes
3. Create a Pull Request (PR)
4. Wait for review

We welcome all contributors 💙

---

## 💬 Community

Join our WhatsApp Community: [Your Link]

Let’s build together 🚀
JharVision is a production-ready Next.js App Router starter for an open-source tech platform focused on Jharkhand. The project ships with a responsive landing page, static blog system, Tailwind styling, SEO defaults, and a basic Supabase-ready setup for future expansion.

## Tech Stack

- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- Supabase client setup

## Project Structure

```text
jharvision/
|-- public/
|-- src/
|   |-- app/
|   |   |-- blog/
|   |   |   |-- [slug]/
|   |   |   |   `-- page.tsx
|   |   |   `-- page.tsx
|   |   |-- contribute/
|   |   |   `-- page.tsx
|   |   |-- globals.css
|   |   |-- icon.svg
|   |   |-- layout.tsx
|   |   |-- not-found.tsx
|   |   |-- page.tsx
|   |   |-- robots.ts
|   |   `-- sitemap.ts
|   |-- components/
|   |   |-- BlogCard.tsx
|   |   |-- CTASection.tsx
|   |   |-- Footer.tsx
|   |   |-- HeroSection.tsx
|   |   |-- Navbar.tsx
|   |   `-- SectionHeading.tsx
|   |-- data/
|   |   `-- blogs.ts
|   `-- lib/
|       |-- blogs.ts
|       |-- site.ts
|       |-- supabase.ts
|       `-- utils.ts
|-- .env.example
|-- .eslintrc.json
|-- .gitignore
|-- next.config.mjs
|-- package.json
|-- postcss.config.js
|-- tailwind.config.ts
`-- tsconfig.json
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy the environment template:

```bash
Copy-Item .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`

## Future Extensions

- Connect the blog system to Supabase or a CMS
- Add GitHub-based contributor profiles and contribution tracking
- Add authentication, admin workflows, and article publishing tools
