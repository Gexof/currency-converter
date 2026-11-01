function CurrencyLoadError({ message, onRetry, isLoading }) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-center dark:border-red-900/50 dark:bg-red-950/20">
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400">
        <span className="text-xl">!</span>
      </div>

      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
        Unable to load currencies
      </h3>

      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{message}</p>

      <button
        onClick={onRetry}
        disabled={isLoading}
        className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Retrying..." : "Try again"}
      </button>
    </div>
  );
}

export default CurrencyLoadError;
