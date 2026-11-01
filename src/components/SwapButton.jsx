function SwapButton({ onSwap }) {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={onSwap}
        className="rounded-full border border-zinc-200 bg-white p-3 text-zinc-600 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
        aria-label="Swap currencies"
      >
        ⇅
      </button>
    </div>
  );
}

export default SwapButton;
