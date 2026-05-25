import Link from "next/link";
import { ArrowRight, Database, ExternalLink, MapPin, Sparkles } from "lucide-react";

import {
  ecosystemMeta,
  getItemsByKind,
  type EcosystemKind
} from "@/data/ecosystem";

type EcosystemDirectoryPageProps = {
  kind: EcosystemKind;
};

export function EcosystemDirectoryPage({ kind }: EcosystemDirectoryPageProps) {
  const meta = ecosystemMeta[kind];
  const items = getItemsByKind(kind);
  const Icon = meta.icon;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020b12] pb-20 pt-32 text-white sm:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_12%,rgba(20,241,211,0.14),transparent_30%),radial-gradient(circle_at_78%_30%,rgba(56,189,248,0.1),transparent_28%),linear-gradient(180deg,#020b12_0%,#03131d_45%,#02070d_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(48,255,220,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(48,255,220,0.16)_1px,transparent_1px)] [background-size:58px_58px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_44%,rgba(0,0,0,0.64)_100%)]" />

      <section className="relative mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14f1d3]/12 bg-[#0af0d0]/[0.08] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2ff7d7]">
              <Icon className="h-4 w-4" />
              {meta.eyebrow}
            </div>
            <h1 className="mt-6 font-heading text-4xl font-black leading-tight tracking-normal text-white sm:text-6xl">
              {meta.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {meta.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Source-linked", "Every profile carries a verification link"],
              [`${items.length} live entries`, "Curated Jharkhand ecosystem data"],
              ["Detail pages", "Each listing opens into a deeper profile"]
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
              >
                <p className="text-sm font-black text-white">{label}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/${kind}/${item.slug}`}
              className="group relative flex min-h-[20rem] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_76px_-56px_rgba(20,241,211,0.75)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#14f1d3]/34 hover:bg-white/[0.065]"
            >
              <span className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[#bfffee]/55 to-transparent" />
              <span className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#14f1d3]/10 blur-3xl transition group-hover:bg-[#14f1d3]/18" />
              <div className="relative flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14f1d3]/10 text-[#20f4d0]">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-bold text-[#9fffee]">
                  {item.metric}
                </span>
              </div>

              <div className="relative mt-6 flex-1">
                <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#20f4d0]">
                  <MapPin className="h-3.5 w-3.5" />
                  {item.city}
                </p>
                <h2 className="mt-3 font-heading text-2xl font-black tracking-normal text-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm font-bold text-slate-300">{item.tag}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.summary}</p>
              </div>

              <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-400">
                  <Database className="h-4 w-4 text-[#20f4d0]" />
                  {item.sourceLabel}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-black text-white">
                  Details
                  <ArrowRight className="h-4 w-4 text-[#20f4d0] transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-[1.5rem] border border-[#14f1d3]/18 bg-[#071621]/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-black text-white">
                <Sparkles className="h-4 w-4 text-[#20f4d0]" />
                Want to add a verified listing?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                JharVision is designed to grow through source-backed ecosystem contributions.
              </p>
            </div>
            <Link
              href="/contribute"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-[#11e2c4] px-5 text-sm font-black text-[#031018] transition hover:-translate-y-0.5 hover:bg-[#20f4d0]"
            >
              Submit Data
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
