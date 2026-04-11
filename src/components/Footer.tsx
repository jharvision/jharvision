import Link from "next/link";

import { navigationLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-brand-line bg-white/90">
      <div className="container-width grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-heading text-2xl font-semibold tracking-tight text-brand-ink">
            JharVision
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-brand-muted">
            An open-source platform for discovering tech updates, startup
            stories, and contributor opportunities connected to Jharkhand.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-green">
              Navigate
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-brand-muted">
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-brand-blue">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-green">
              Mission
            </p>
            <p className="mt-4 text-sm leading-7 text-brand-muted">
              Highlight the builders, ideas, and community projects shaping the
              future of Jharkhand&apos;s digital ecosystem.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-line/80">
        <div className="container-width flex flex-col gap-2 py-5 text-sm text-brand-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {siteConfig.name}. Built for the open web.</p>
          <p>Ready for future GitHub contributor workflows.</p>
        </div>
      </div>
    </footer>
  );
}

