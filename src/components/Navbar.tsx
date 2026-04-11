"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect, useState } from "react";

import { navigationLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <LazyMotion features={domAnimation}>
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#d9ccb7]/80 bg-[#f7f0e3]/88 px-4 py-3 text-[#173628] shadow-[0_28px_90px_-40px_rgba(23,54,40,0.3)] backdrop-blur-xl sm:px-5">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#b4833b]/70 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-[#c15b2e]/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#1d5a3e]/10 blur-3xl" />
            <div className="flex items-center justify-between gap-3">
              <Link
                href="/"
                className="flex min-w-0 items-center gap-3"
                onClick={() => setIsOpen(false)}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#204f37] bg-[linear-gradient(145deg,#1d5a3e,#8f4a29)] text-sm font-bold text-[#f8f1e5] shadow-[0_14px_30px_-18px_rgba(32,79,55,0.55)]">
                  JV
                </span>
                <div className="min-w-0">
                  <p className="truncate font-heading text-lg font-semibold tracking-tight text-[#173628]">
                    JharVision
                  </p>
                  <p className="truncate text-[11px] uppercase tracking-[0.24em] text-[#7a6a53]">
                    Rooted in Jharkhand, built in public
                  </p>
                </div>
              </Link>

              <nav className="hidden items-center gap-2 lg:flex">
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
                          ? "bg-[#173628] text-[#f7f0e3] shadow-[0_18px_38px_-24px_rgba(23,54,40,0.52)]"
                          : "text-[#47604d] hover:bg-[#ece2d1] hover:text-[#173628]"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden items-center gap-2 xl:flex">
                  <span className="rounded-full border border-[#d9ccb7] bg-[#fbf6ee] px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#7a6a53]">
                    Open-source
                  </span>
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#d9ccb7] px-4 py-2 text-sm font-medium text-[#36513f] transition hover:border-[#b4833b]/50 hover:bg-[#efe4d3] hover:text-[#173628]"
                  >
                    View Source
                  </Link>
                </div>

                <Link
                  href="/contribute"
                  className="hidden rounded-full border border-[#8f4a29] bg-[#8f4a29] px-5 py-2.5 text-sm font-semibold text-[#f9f1e5] shadow-[0_20px_36px_-24px_rgba(143,74,41,0.55)] transition hover:scale-[1.01] hover:bg-[#7f4224] md:inline-flex"
                >
                  Start contributing
                </Link>

                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d9ccb7] bg-[#fbf6ee] text-[#173628] transition hover:bg-[#efe4d3] lg:hidden"
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

            <AnimatePresence>
              {isOpen ? (
                <m.div
                  id="mobile-menu"
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden lg:hidden"
                >
                  <div className="mt-4 border-t border-[#d9ccb7] pt-4">
                    <div className="flex flex-col gap-3">
                      <div className="grid gap-2">
                        {navigationLinks.map((link) => {
                          const isActive =
                            link.href === "/"
                              ? pathname === link.href
                              : pathname.startsWith(link.href);

                          return (
                            <Link
                              key={link.href}
                              href={link.href}
                              className={cn(
                                "rounded-2xl border px-4 py-3 text-sm font-medium transition",
                                isActive
                                  ? "border-[#173628] bg-[#173628] text-[#f7f0e3]"
                                  : "border-[#d9ccb7] bg-[#fbf6ee] text-[#36513f] hover:bg-[#efe4d3] hover:text-[#173628]"
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              {link.label}
                            </Link>
                          );
                        })}
                      </div>

                      <div className="grid gap-2 sm:grid-cols-2">
                        <Link
                          href={siteConfig.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-2xl border border-[#d9ccb7] bg-[#fbf6ee] px-4 py-3 text-sm font-medium text-[#36513f] transition hover:bg-[#efe4d3] hover:text-[#173628]"
                        >
                          View Source
                        </Link>
                        <Link
                          href="/contribute"
                          className="inline-flex items-center justify-center rounded-2xl border border-[#8f4a29] bg-[#8f4a29] px-4 py-3 text-sm font-semibold text-[#f9f1e5] shadow-[0_18px_30px_-20px_rgba(143,74,41,0.46)] transition hover:bg-[#7f4224]"
                        >
                          Start contributing
                        </Link>
                      </div>

                      <p className="px-1 text-xs uppercase tracking-[0.24em] text-[#8b7a62]">
                        Open-source • MIT Licensed • Built in public
                      </p>
                    </div>
                  </div>
                </m.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </header>
    </LazyMotion>
  );
}
