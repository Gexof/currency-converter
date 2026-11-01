import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/useTheme";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
        <h1 className="text-xl font-bold tracking-tight">
          Currency<span className="text-emerald-500">Flow</span>
        </h1>

        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-zinc-500 dark:text-zinc-400 sm:block">
            Exchange rates converter
          </span>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 active:scale-95 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
