"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  GraduationCap,
  Rocket,
  Users
} from "lucide-react";

const categories = [
  {
    title: "Colleges & Universities",
    count: "250+ Colleges",
    description: "Explore institutions shaping Jharkhand's technical foundation.",
    href: "/colleges",
    icon: GraduationCap
  },
  {
    title: "Startups & Innovation",
    count: "120+ Startups",
    description: "Discover emerging companies, products, and local innovation.",
    href: "/startups",
    icon: Rocket
  },
  {
    title: "Jobs & Opportunities",
    count: "1000+ Jobs",
    description: "Find roles, internships, fellowships, and ecosystem opportunities.",
    href: "/jobs",
    icon: BriefcaseBusiness
  },
  {
    title: "Builders & Talent",
    count: "800+ Builders",
    description: "Meet developers, designers, founders, creators, and operators.",
    href: "/builders",
    icon: Users
  },
  {
    title: "Events & Hackathons",
    count: "50+ Events",
    description: "Track meetups, hackathons, startup events, and community moments.",
    href: "/events",
    icon: CalendarDays
  },
  {
    title: "Incubators & Hubs",
    count: "20+ Hubs",
    description: "Navigate support networks, incubators, labs, and innovation spaces.",
    href: "/startups",
    icon: Building2
  }
] as const;

const nodes = [
  [170, 112],
  [228, 154],
  [306, 120],
  [388, 154],
  [468, 108],
  [536, 170],
  [598, 244],
  [512, 318],
  [424, 278],
  [348, 334],
  [270, 284],
  [190, 318],
  [132, 226],
  [252, 220],
  [396, 214],
  [500, 246]
] as const;

const lines = [
  [170, 112, 252, 220],
  [228, 154, 306, 120],
  [306, 120, 388, 154],
  [388, 154, 468, 108],
  [468, 108, 536, 170],
  [536, 170, 598, 244],
  [598, 244, 512, 318],
  [512, 318, 424, 278],
  [424, 278, 348, 334],
  [348, 334, 270, 284],
  [270, 284, 190, 318],
  [190, 318, 132, 226],
  [132, 226, 170, 112],
  [252, 220, 396, 214],
  [396, 214, 500, 246],
  [252, 220, 270, 284],
  [424, 278, 536, 170]
] as const;

function EcosystemHologram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(20,241,211,0.18),transparent_58%)] blur-3xl" />
      <div className="ecosystem-orbit absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#14f1d3]/12" />
      <div className="ecosystem-orbit ecosystem-orbit-reverse absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#14f1d3]/18" />

      <svg
        className="relative z-10 h-full w-full drop-shadow-[0_0_36px_rgba(20,241,211,0.28)]"
        viewBox="0 0 720 520"
        role="img"
        aria-label="Clean futuristic Jharkhand ecosystem hologram"
      >
        <defs>
          <filter id="ecosystemGlow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="ecosystemStroke" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#66ffe5" />
            <stop offset="54%" stopColor="#14f1d3" />
            <stop offset="100%" stopColor="#9cff6a" />
          </linearGradient>
          <radialGradient id="ecosystemFill" cx="50%" cy="48%" r="58%">
            <stop offset="0%" stopColor="#14f1d3" stopOpacity="0.2" />
            <stop offset="58%" stopColor="#0aa78d" stopOpacity="0.11" />
            <stop offset="100%" stopColor="#07131d" stopOpacity="0.16" />
          </radialGradient>
        </defs>

        <path
          d="M104 198 L145 152 L218 168 L260 128 L326 150 L366 104 L444 132 L496 88 L556 148 L622 122 L674 184 L648 246 L686 298 L612 330 L586 398 L512 362 L438 412 L370 354 L292 388 L240 330 L154 342 L178 264 Z"
          fill="url(#ecosystemFill)"
          stroke="url(#ecosystemStroke)"
          strokeWidth="3"
          filter="url(#ecosystemGlow)"
        />
        <path
          d="M104 198 L145 152 L218 168 L260 128 L326 150 L366 104 L444 132 L496 88 L556 148 L622 122 L674 184 L648 246 L686 298 L612 330 L586 398 L512 362 L438 412 L370 354 L292 388 L240 330 L154 342 L178 264 Z"
          fill="none"
          stroke="#bfffee"
          strokeOpacity="0.18"
          strokeWidth="9"
        />

        {lines.map(([x1, y1, x2, y2], index) => (
          <line
            key={`${x1}-${index}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#2ff7d7"
            strokeOpacity="0.24"
            strokeWidth="1.3"
          />
        ))}

        {nodes.map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`}>
            <circle
              className="jv-node-pulse"
              cx={cx}
              cy={cy}
              r="11"
              fill="#20f6cf"
              opacity="0.12"
              style={{ animationDelay: `${index * 0.11}s` }}
            />
            <circle cx={cx} cy={cy} r={index % 5 === 0 ? 6 : 3.4} fill="#89ffe6" filter="url(#ecosystemGlow)" />
          </g>
        ))}

        <g>
          <circle cx="386" cy="246" r="48" fill="#061721" stroke="#1df5d0" strokeOpacity="0.7" strokeWidth="2" />
          <circle cx="386" cy="246" r="68" fill="none" stroke="#1df5d0" strokeOpacity="0.14" />
          <text
            x="386"
            y="262"
            textAnchor="middle"
            className="fill-[#cafff2] font-heading text-[38px] font-black"
          >
            JV
          </text>
        </g>
      </svg>

      <div className="absolute bottom-[6%] left-1/2 h-[18%] w-[74%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(20,241,211,0.4),rgba(153,255,106,0.13)_42%,transparent_70%)] blur-xl" />
      <div className="absolute bottom-[10%] left-1/2 h-[10%] w-[60%] -translate-x-1/2 rounded-[50%] border border-[#14f1d3]/22 bg-white/[0.035] shadow-[0_0_54px_rgba(20,241,211,0.24)]" />
    </div>
  );
}

export function EcosystemDiscoverySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="ecosystem-discovery"
        className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#020b12] py-24 text-white sm:py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(20,241,211,0.14),transparent_34%),radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.08),transparent_26%),linear-gradient(180deg,#020b12_0%,#03131d_46%,#02070d_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(48,255,220,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(48,255,220,0.16)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.62)_100%)]" />

        <div className="relative mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-8">
          <m.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14f1d3]/10 bg-[#0af0d0]/[0.08] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2ff7d7] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_38px_-28px_rgba(20,241,211,0.8)]">
              <span className="h-2 w-2 rounded-full bg-[#14f1d3] shadow-[0_0_16px_rgba(20,241,211,0.9)]" />
              Discover the Ecosystem
            </div>
            <h2 className="mt-6 font-heading text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              Everything Building Jharkhand&apos;s Digital Future
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore startups, colleges, jobs, builders, incubators, and
              opportunities from one intelligent ecosystem platform.
            </p>
          </m.div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map((item, index) => {
                const Icon = item.icon;

                return (
                  <m.div
                    key={item.title}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.28 }}
                    transition={{ delay: index * 0.055, duration: 0.48, ease: "easeOut" }}
                    whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.015 }}
                  >
                    <Link
                      href={item.href}
                      className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_22px_64px_-46px_rgba(20,241,211,0.72)] backdrop-blur-xl transition duration-300 hover:border-[#14f1d3]/34 hover:bg-white/[0.065]"
                    >
                      <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#bfffee]/50 to-transparent opacity-70" />
                      <span className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#14f1d3]/10 blur-3xl transition duration-500 group-hover:bg-[#14f1d3]/18" />
                      <div className="relative flex items-start justify-between gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#14f1d3]/10 text-[#20f4d0] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 group-hover:scale-105 group-hover:text-[#aaffef]">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#22f4d2]">
                          {item.count}
                        </span>
                      </div>
                      <h3 className="relative mt-6 font-heading text-xl font-black tracking-normal text-white">
                        {item.title}
                      </h3>
                      <p className="relative mt-3 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>
                      <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">
                        Explore
                        <ArrowRight className="h-4 w-4 text-[#20f4d0] transition duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </m.div>
                );
              })}
            </div>

            <m.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[1.75rem] border border-[#14f1d3]/18 bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_90px_-56px_rgba(20,241,211,0.85)] backdrop-blur-xl sm:p-8"
            >
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#bfffee]/70 to-transparent" />
              <div className="pointer-events-none absolute -right-24 top-10 h-52 w-52 rounded-full bg-[#14f1d3]/12 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 bottom-10 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
              <EcosystemHologram />
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
