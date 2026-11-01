import ConversionResultSkeleton from "./ConversionResultSkeleton";

function ConversionResult({
  amount,
  fromCurrency,
  toCurrency,
  exchangeRate,
  isLoading,
  error,
}) {
  if (isLoading) return <ConversionResultSkeleton />;

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-500/20 dark:bg-red-500/10">
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  const numericAmount = Number(amount);

  if (!amount || !Number.isFinite(numericAmount) || numericAmount <= 0) {
    return (
      <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
        Please enter an amount greater than zero.
      </p>
    );
  }

  if (exchangeRate === null || !Number.isFinite(exchangeRate)) {
    return null;
  }

  const convertedAmount = numericAmount * exchangeRate;

  return (
    <div className="rounded-xl border border-emerald-200/70 bg-emerald-50 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/10">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        Converted Amount
      </p>

      <h3 className="mt-2 wrap-break-word text-3xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
        {convertedAmount.toLocaleString("en-US", {
          maximumFractionDigits: 2,
        })}
        {toCurrency}
      </h3>

      <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
        1 {fromCurrency} =
        {exchangeRate.toLocaleString("en-US", {
          maximumFractionDigits: 4,
        })}
        {toCurrency}
      </p>
    </div>
  );
}

export default ConversionResult;
