import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 px-6 py-16 shadow-soft backdrop-blur sm:px-10 lg:px-14 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-brand-green/20 bg-brand-green/10 px-4 py-1 text-sm font-medium text-brand-green">
            Built for readers, founders, and contributors across Jharkhand
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
            The open tech platform telling Jharkhand&apos;s next digital story.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-brand-muted">
            JharVision brings together startup updates, ecosystem storytelling,
            and contribution pathways so more people can build the future of
            tech in Jharkhand together.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16588f]"
            >
              Explore the blog
            </Link>
            <Link
              href="/contribute"
              className="inline-flex items-center justify-center rounded-full border border-brand-line bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-green/40 hover:text-brand-green"
            >
              Start contributing
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.75rem] border border-brand-line bg-brand-surface p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Why JharVision
            </p>
            <p className="mt-4 text-xl font-semibold text-brand-ink">
              A regional platform with a product mindset, not just a content feed.
            </p>
            <p className="mt-3 text-sm leading-7 text-brand-muted">
              The goal is to document momentum, spotlight builders, and make
              collaboration easier for the next generation of contributors.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { value: "4+", label: "Launch-ready pages" },
              { value: "100%", label: "Responsive layout" },
              { value: "V1", label: "Contributor-ready foundation" }
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-brand-line bg-white p-5 text-center"
              >
                <p className="text-2xl font-semibold text-brand-ink">{item.value}</p>
                <p className="mt-2 text-sm text-brand-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

