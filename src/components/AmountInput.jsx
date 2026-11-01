function AmountInput({ amount, onAmountChange }) {
  return (
    <div>
      <label
        htmlFor="amount"
        className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
      >
        Amount
      </label>

      <input
        id="amount"
        type="number"
        min="0"
        step="any"
        value={amount}
        onChange={(e) => {
          const value = e.target.value;

          if (value === "" || Number(value) >= 0) {
            onAmountChange(value);
          }
        }}
        placeholder="Enter amount"
        className="w-full appearance-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-lg font-semibold text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:hover:border-zinc-600"
      />
    </div>
  );
}

export default AmountInput;
