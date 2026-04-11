import { cn } from "@/lib/utils";

type ContributorsCardSkeletonProps = {
  count?: number;
  className?: string;
};

function SkeletonBlock({ className }: { className: string }) {
  return <div className={cn("animate-pulse bg-slate-200/80", className)} />;
}

export function ContributorCardsSkeleton({
  count = 3,
  className
}: ContributorsCardSkeletonProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2 xl:grid-cols-3", className)}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="rounded-[1.75rem] border border-brand-line bg-white/90 p-6 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="h-[72px] w-[72px] animate-pulse rounded-3xl bg-slate-200/80" />
            <div className="flex-1 space-y-4">
              <SkeletonBlock className="h-7 w-28 rounded-full" />
              <SkeletonBlock className="h-8 w-40 rounded-xl" />
            </div>
          </div>
          <div className="mt-8 flex items-end justify-between gap-4">
            <div className="space-y-3">
              <SkeletonBlock className="h-4 w-24 rounded-full" />
              <SkeletonBlock className="h-10 w-20 rounded-xl" />
            </div>
            <SkeletonBlock className="h-11 w-32 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ContributorsPreviewSkeleton() {
  return (
    <section className="section-spacing">
      <div className="rounded-[2rem] border border-brand-line bg-white/85 p-6 shadow-soft sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <SkeletonBlock className="h-5 w-28 rounded-full" />
            <SkeletonBlock className="h-12 w-full max-w-xl rounded-2xl" />
            <SkeletonBlock className="h-5 w-full max-w-2xl rounded-2xl" />
          </div>
          <SkeletonBlock className="h-12 w-36 rounded-full" />
        </div>
        <div className="mt-10">
          <ContributorCardsSkeleton count={2} className="lg:grid-cols-2 xl:grid-cols-2" />
        </div>
      </div>
    </section>
  );
}

export function ContributorsPageSkeleton() {
  return (
    <div className="container-width section-spacing">
      <section className="rounded-[2rem] border border-brand-line bg-white/85 px-6 py-16 shadow-soft sm:px-10 lg:px-14">
        <div className="max-w-3xl space-y-5">
          <SkeletonBlock className="h-6 w-40 rounded-full" />
          <SkeletonBlock className="h-16 w-full max-w-2xl rounded-[1.5rem]" />
          <SkeletonBlock className="h-6 w-full max-w-3xl rounded-2xl" />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[1.5rem] border border-brand-line bg-brand-surface p-5"
            >
              <SkeletonBlock className="h-4 w-20 rounded-full" />
              <SkeletonBlock className="mt-4 h-10 w-16 rounded-xl" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-spacing pb-10">
        <div className="rounded-[2rem] border border-brand-line bg-white/90 p-8 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <SkeletonBlock className="h-7 w-44 rounded-full" />
              <SkeletonBlock className="h-12 w-64 rounded-2xl" />
              <SkeletonBlock className="h-5 w-full max-w-xl rounded-2xl" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-[1.5rem] border border-brand-line bg-brand-surface p-5"
                >
                  <SkeletonBlock className="h-4 w-20 rounded-full" />
                  <SkeletonBlock className="mt-4 h-10 w-20 rounded-xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl space-y-4">
          <SkeletonBlock className="h-5 w-32 rounded-full" />
          <SkeletonBlock className="h-12 w-full max-w-2xl rounded-2xl" />
          <SkeletonBlock className="h-5 w-full max-w-3xl rounded-2xl" />
        </div>
        <div className="mt-12">
          <ContributorCardsSkeleton count={6} />
        </div>
      </section>
    </div>
  );
}
