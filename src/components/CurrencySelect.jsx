import { ChevronDown } from "lucide-react";

function CurrencySelect({ label, currency, onCurrencyChange, currencies }) {
  const selectId = `currency-${label.toLowerCase()}`;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={selectId}
        className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={selectId}
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="w-full cursor-pointer appearance-none rounded-xl border border-zinc-200 bg-zinc-50 py-3 pl-4 pr-12 font-medium text-zinc-900 outline-none transition hover:border-zinc-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-600"
        >
          {currencies.map((item) => (
            <option key={item.iso_code} value={item.iso_code}>
              {item.iso_code} - {item.name}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />
      </div>
    </div>
  );
}

export default CurrencySelect;
