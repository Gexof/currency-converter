import { ArrowDownUp } from "lucide-react";

function SwapButton({ onSwap }) {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={onSwap}
        aria-label="Swap currencies"
        title="Swap currencies"
        className="rounded-full border border-zinc-200 bg-white p-3 text-zinc-600 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 active:scale-95 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
      >
        <ArrowDownUp size={18} strokeWidth={2} />
      </button>
    </div>
  );
}

export default SwapButton;
