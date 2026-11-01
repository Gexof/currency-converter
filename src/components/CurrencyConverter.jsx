import { useEffect, useState } from "react";

import AmountInput from "./AmountInput";
import CurrencySelect from "./CurrencySelect";
import SwapButton from "./SwapButton";
import ConversionResult from "./ConversionResult";

function CurrencyConverter() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EGP");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchCurrency = async () => {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://api.frankfurter.dev/v2/rate/${fromCurrency}/${toCurrency}`,
          { signal: controller.signal },
        );

        if (!res.ok) {
          throw new Error("Unable to fetch exchange rate.");
        }

        const data = await res.json();

        setExchangeRate(data.rate);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchCurrency();

    return () => controller.abort();
  }, [fromCurrency, toCurrency]);

  return (
    <section className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Currency Converter</h2>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Convert your money with ease.
        </p>
      </div>

      <div className="space-y-5">
        <AmountInput amount={amount} onAmountChange={setAmount} />

        <CurrencySelect
          label="From"
          currency={fromCurrency}
          onCurrencyChange={setFromCurrency}
        />

        <SwapButton onSwap={handleSwap} />

        <CurrencySelect
          label="To"
          currency={toCurrency}
          onCurrencyChange={setToCurrency}
        />

        <ConversionResult
          amount={amount}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          exchangeRate={exchangeRate}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </section>
  );
}

export default CurrencyConverter;
