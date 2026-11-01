function CurrencySelectSkeleton() {
  return (
    <div className="space-y-5" aria-label="Loading currencies">
      <div className="space-y-2">
        <div className="h-4 w-12 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-12 w-full animate-pulse rounded-xl bg-zinc-100 dark:bg-zinc-800" />
      </div>

      <div className="flex justify-center">
        <div className="h-10 w-10 animate-pulse rounded-full bg-zinc-100 dark:bg-zinc-800" />
      </div>

      <div className="space-y-2">
        <div className="h-4 w-8 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-12 w-full animate-pulse rounded-xl bg-zinc-100 dark:bg-zinc-800" />
      </div>
    </div>
  );
}

export default CurrencySelectSkeleton;
