import ConversionResultSkelton from "./ConversionResultSkelton";

function ConversionResult({
  amount,
  fromCurrency,
  toCurrency,
  exchangeRate,
  isLoading,
  error,
}) {
  if (isLoading) return <ConversionResultSkelton />;

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-500/20 dark:bg-red-500/10">
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  const convertedAmount = Number(amount) * exchangeRate;

  return (
    <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-500/10">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Converted Amount
      </p>

      <h3 className="mt-2 text-3xl font-bold text-emerald-600 dark:text-emerald-400">
        {convertedAmount.toLocaleString("en-US", {
          maximumFractionDigits: 2,
        })}{" "}
        {toCurrency}
      </h3>

      <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
        1 {fromCurrency} = {exchangeRate} {toCurrency}
      </p>
    </div>
  );
}

export default ConversionResult;
