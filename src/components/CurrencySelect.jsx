function CurrencySelect({ label, currency, onCurrencyChange, currencies }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </label>

      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 font-medium outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-800"
      >
        {currencies.map((item) => (
          <option key={item.iso_code} value={item.iso_code}>
            {item.iso_code} - {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySelect;
