import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Help shape the public tech conversation in Jharkhand.",
  description = "Whether you write, design, build, or organize communities, JharVision is designed to grow with contributors who care about meaningful local progress."
}: CTASectionProps) {
  return (
    <section className="rounded-[2rem] border border-brand-blue/15 bg-gradient-to-br from-brand-blue via-[#1f7acc] to-brand-green px-6 py-14 text-white shadow-soft sm:px-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
            Join the movement
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contribute"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-blue transition hover:bg-brand-surface"
          >
            View contribution paths
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Read latest stories
          </Link>
        </div>
      </div>
    </section>
  );
}

