import Link from "next/link";

type ContributorsNoticeProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

export function ContributorsNotice({
  title,
  description,
  actionLabel,
  actionHref
}: ContributorsNoticeProps) {
  return (
    <div className="rounded-[1.75rem] border border-dashed border-brand-line bg-white/90 p-8 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
        GitHub status
      </p>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-ink">
        {title}
      </h3>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-brand-muted">
        {description}
      </p>
      {actionLabel && actionHref ? (
        <div className="mt-8">
          <Link
            href={actionHref}
            className="inline-flex items-center justify-center rounded-full border border-brand-line bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
          >
            {actionLabel}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
