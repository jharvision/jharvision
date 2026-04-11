"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigationLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur">
      <div className="container-width flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue text-lg font-bold text-white">
            JV
          </span>
          <div>
            <p className="font-heading text-lg font-semibold tracking-tight text-brand-ink">
              JharVision
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-brand-muted">
              Jharkhand x technology
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navigationLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === link.href : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-brand-blue text-white"
                    : "text-brand-muted hover:bg-brand-surface hover:text-brand-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contribute"
            className="hidden rounded-full border border-brand-line bg-white px-5 py-2.5 text-sm font-semibold text-brand-ink transition hover:border-brand-green/40 hover:text-brand-green md:inline-flex"
          >
            Get involved
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-line text-brand-ink md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 bg-current transition",
                  isOpen ? "top-[7px] rotate-45" : ""
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[7px] h-0.5 w-5 bg-current transition",
                  isOpen ? "opacity-0" : ""
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[14px] h-0.5 w-5 bg-current transition",
                  isOpen ? "top-[7px] -rotate-45" : ""
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-brand-line bg-white md:hidden">
          <div className="container-width flex flex-col gap-3 py-4">
            {navigationLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === link.href : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium transition",
                    isActive
                      ? "bg-brand-blue text-white"
                      : "bg-brand-surface text-brand-ink"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
