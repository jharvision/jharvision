import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, MapPin, ShieldCheck, Sparkles } from "lucide-react";

import {
  ecosystemMeta,
  getItemBySlug,
  getItemsByKind,
  type EcosystemKind
} from "@/data/ecosystem";

type EcosystemDetailPageProps = {
  kind: EcosystemKind;
  slug: string;
};

export function EcosystemDetailPage({ kind, slug }: EcosystemDetailPageProps) {
  const item = getItemBySlug(kind, slug);

  if (!item) {
    notFound();
  }

  const meta = ecosystemMeta[kind];
  const Icon = meta.icon;
  const related = getItemsByKind(kind).filter((entry) => entry.slug !== item.slug).slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020b12] pb-20 pt-32 text-white sm:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_12%,rgba(20,241,211,0.14),transparent_32%),radial-gradient(circle_at_75%_42%,rgba(56,189,248,0.1),transparent_30%),linear-gradient(180deg,#020b12_0%,#03131d_48%,#02070d_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(48,255,220,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(48,255,220,0.16)_1px,transparent_1px)] [background-size:58px_58px]" />

      <article className="relative mx-auto max-w-[82rem] px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${kind}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-[#14f1d3]/30 hover:text-[#20f4d0]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {meta.title}
        </Link>

        <header className="mt-8 overflow-hidden rounded-[2rem] border border-[#14f1d3]/18 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_34px_100px_-70px_rgba(20,241,211,0.86)] backdrop-blur-xl sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#14f1d3]/12 bg-[#0af0d0]/[0.08] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2ff7d7]">
                <Icon className="h-4 w-4" />
                {item.tag}
              </div>
              <h1 className="mt-6 font-heading text-4xl font-black leading-tight tracking-normal text-white sm:text-6xl">
                {item.title}
              </h1>
              <p className="mt-5 flex items-center gap-2 text-sm font-bold text-slate-300">
                <MapPin className="h-4 w-4 text-[#20f4d0]" />
                {item.city}
              </p>
              <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
                {item.summary}
              </p>
            </div>

            <aside className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#20f4d0]">
                Verified Signal
              </p>
              <p className="mt-3 font-heading text-3xl font-black text-white">{item.metric}</p>
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-2xl border border-[#14f1d3]/22 bg-[#14f1d3]/10 px-4 text-sm font-black text-[#bfffee] transition hover:bg-[#14f1d3]/16"
              >
                Open Source
                <ExternalLink className="h-4 w-4" />
              </a>
              {item.website ? (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-2xl bg-[#11e2c4] px-4 text-sm font-black text-[#031018] transition hover:-translate-y-0.5 hover:bg-[#20f4d0]"
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </aside>
          </div>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_22rem]">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-[#20f4d0]">
              <Sparkles className="h-4 w-4" />
              Ecosystem Notes
            </p>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              {item.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          </section>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8 lg:h-fit">
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-[#20f4d0]">
              <ShieldCheck className="h-4 w-4" />
              Highlights
            </p>
            <div className="mt-6 grid gap-3">
              {item.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-bold text-slate-200"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </aside>
        </div>

        {related.length ? (
          <section className="mt-10">
            <h2 className="font-heading text-2xl font-black tracking-normal text-white">
              More in {meta.title}
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {related.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/${kind}/${entry.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-[#14f1d3]/30"
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#20f4d0]">
                    {entry.city}
                  </p>
                  <p className="mt-3 font-heading text-lg font-black text-white">{entry.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{entry.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </main>
  );
}
