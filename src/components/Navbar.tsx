"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/colleges", label: "Colleges" },
  { href: "/startups", label: "Startups" },
  { href: "/jobs", label: "Jobs" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/builders", label: "Builders" }
] as const;

function isActivePath(pathname: string, href: string) {
  if (href.startsWith("#")) {
    return false;
  }

  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 14);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto max-w-[92rem] rounded-2xl border border-white/10 bg-[#04101a]/75 shadow-[0_24px_90px_-48px_rgba(20,241,211,0.55)] backdrop-blur-2xl transition-all duration-300 ${
          isScrolled ? "px-4 py-2.5" : "px-5 py-3"
        }`}
      >
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#14f1d3]/10 bg-[#14f1d3]/10 shadow-[0_0_28px_rgba(20,241,211,0.12)]">
              <Image
                src="/favicon.png"
                alt="JharVision"
                width={28}
                height={28}
                priority
                className="h-7 w-7 object-contain"
              />
            </span>
            <span className="min-w-0">
              <svg
                aria-label="JharVision"
                role="img"
                viewBox="0 0 132 24"
                className="block h-6 w-[8.25rem]"
              >
                <text
                  x="0"
                  y="18"
                  className="font-heading text-[18px] font-black tracking-normal"
                  letterSpacing="-0.15"
                >
                  <tspan className="fill-white">Jhar</tspan>
                  {"Vision".split("").map((letter, index) => (
                    <tspan
                      key={`${letter}-${index}`}
                      className="jv-vision-letter"
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      {letter}
                    </tspan>
                  ))}
                </text>
              </svg>
              <span className="block truncate text-xs font-medium text-slate-400">
                Jharkhand Tech Ecosystem
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative py-4 text-sm font-bold transition ${
                    active ? "text-[#20f4d0]" : "text-slate-200 hover:text-[#20f4d0]"
                  }`}
                >
                  {item.label}
                  {active ? (
                    <>
                      <span className="absolute bottom-[-13px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#20f4d0] shadow-[0_0_14px_rgba(32,244,208,0.9)]" />
                      <span className="absolute bottom-[-17px] left-1/2 h-px w-16 -translate-x-1/2 bg-[#20f4d0]" />
                    </>
                  ) : null}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/contribute"
              className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.025] px-6 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-[#14f1d3]/35 hover:bg-white/[0.05]"
            >
              Get Listed
            </Link>
            <Link
              href="/#ecosystem-discovery"
              className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-2xl bg-[#11e2c4] px-6 text-sm font-black text-[#031018] shadow-[0_18px_48px_-26px_rgba(17,226,196,0.95)] transition hover:-translate-y-0.5 hover:bg-[#20f4d0]"
            >
              Explore Ecosystem
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] text-white transition hover:border-[#14f1d3]/35 lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <div
          className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
              {navItems.map((item) => {
                const active = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex min-h-12 items-center rounded-xl px-4 text-sm font-bold transition ${
                      active
                        ? "bg-[#14f1d3]/10 text-[#20f4d0]"
                        : "text-slate-200 hover:bg-white/[0.05] hover:text-[#20f4d0]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <Link
                  href="/contribute"
                  className="flex min-h-12 items-center justify-center rounded-xl border border-white/12 bg-white/[0.035] text-sm font-bold text-white"
                >
                  Get Listed
                </Link>
                <Link
                  href="/#ecosystem-discovery"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#11e2c4] text-sm font-black text-[#031018]"
                >
                  Explore Ecosystem
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
