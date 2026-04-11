import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="container-width section-spacing">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-brand-line bg-white/90 px-6 py-16 text-center shadow-soft sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-green">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-ink">
          This page could not be found.
        </h1>
        <p className="mt-4 text-base leading-8 text-brand-muted">
          The link may be outdated, or the content may still be on its way.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16588f]"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

