"use client";

import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Database,
  Landmark,
  MapPin,
  Rocket,
  ShieldCheck,
  Users
} from "lucide-react";

const stats = [
  { label: "Colleges & Universities", value: "250+", icon: Landmark },
  { label: "Startups & Innovations", value: "120+", icon: Rocket },
  { label: "Builders & Tech Talent", value: "800+", icon: Users },
  { label: "Events & Hackathons", value: "50+", icon: CalendarDays }
] as const;

const trustItems = [
  { title: "Verified Listings", subtitle: "Trusted & Verified", icon: ShieldCheck },
  { title: "Jharkhand Focused", subtitle: "Discover Local", icon: MapPin },
  { title: "Real Ecosystem Data", subtitle: "Always Updated", icon: Database },
  { title: "Community Powered", subtitle: "Built Together", icon: Users }
] as const;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative left-1/2 right-1/2 min-h-screen w-screen -translate-x-1/2 overflow-hidden bg-[#020b12] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_73%_45%,rgba(15,243,207,0.16),transparent_34%),radial-gradient(circle_at_22%_12%,rgba(56,189,248,0.08),transparent_28%),linear-gradient(135deg,#020912_0%,#03121c_48%,#02070d_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.72)_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:radial-gradient(rgba(48,255,220,0.72)_1px,transparent_1px)] [background-size:38px_38px]" />
        <div className="pointer-events-none absolute left-[48%] top-[8%] h-[38rem] w-[38rem] rounded-full border border-[#14f1d3]/10" />
        <div className="pointer-events-none absolute left-[52%] top-[14%] h-[28rem] w-[28rem] rounded-full border border-[#14f1d3]/12" />

        <div className="relative mx-auto grid min-h-[calc(100svh-7.5rem)] max-w-[92rem] items-center gap-8 px-4 pb-6 pt-32 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:px-8 lg:pt-24 xl:gap-10">
          <m.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14f1d3]/10 bg-[#0af0d0]/[0.08] px-4 py-2 text-xs font-bold text-[#2ff7d7] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_38px_-28px_rgba(20,241,211,0.8)]">
              <span className="h-2 w-2 rounded-full bg-[#14f1d3] shadow-[0_0_16px_rgba(20,241,211,0.9)]" />
              Jharkhand&apos;s Digital Ecosystem Platform
            </div>

            <h1 className="mt-7 max-w-3xl font-heading text-5xl font-black leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl xl:text-[5.35rem]">
              Jharkhand&apos;s
              <span className="block">Tech Ecosystem,</span>
              <span className="block bg-gradient-to-r from-[#19f5cf] to-[#10cbb7] bg-clip-text text-transparent">
                Mapped.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Discover colleges, startups, builders, jobs, events and
              opportunities shaping Jharkhand&apos;s digital future.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#platform-overview"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#11e2c4] px-7 py-4 text-sm font-black text-[#031018] shadow-[0_20px_56px_-28px_rgba(17,226,196,0.9)] transition hover:-translate-y-0.5 hover:bg-[#20f4d0]"
              >
                Explore Ecosystem
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="#get-listed"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-white/14 bg-white/[0.035] px-7 py-4 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#14f1d3]/35 hover:bg-white/[0.06]"
              >
                <Building2 className="h-4 w-4 text-[#35f6d8]" />
                Get Listed
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <m.div
                    key={item.label}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + index * 0.06, duration: 0.45 }}
                    className="rounded-2xl border border-[#14f1d3]/18 bg-white/[0.035] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_54px_-36px_rgba(20,241,211,0.65)] backdrop-blur-xl xl:p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#14f1d3]/10 text-[#20f4d0] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                        <Icon className="h-5 w-5 xl:h-6 xl:w-6" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-heading text-2xl font-black text-white">{item.value}</span>
                        <span className="block text-xs leading-5 text-slate-400 xl:text-sm">{item.label}</span>
                      </span>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </m.div>

          <m.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[44.25rem] overflow-hidden rounded-[1.4rem] border border-[#14f1d3]/38 bg-[#06121c]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_72px_-24px_rgba(20,241,211,0.75)]">
              <Image
                src="/media/hero/herorighht.png"
                alt="Jharkhand digital ecosystem map"
                width={1254}
                height={1254}
                priority
                sizes="(min-width: 1280px) 48vw, (min-width: 1024px) 52vw, 96vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </m.div>
        </div>

        <div className="relative mx-auto max-w-[92rem] px-4 pb-6 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`flex items-center gap-4 ${index > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""}`}
                >
                  <Icon className="h-9 w-9 text-[#20f4d0]" />
                  <span>
                    <span className="block text-sm font-bold text-white">{item.title}</span>
                    <span className="block text-sm text-slate-400">{item.subtitle}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
