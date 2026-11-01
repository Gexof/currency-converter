function Navbar() {
  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
        <h1 className="text-xl font-bold tracking-tight">
          Currency<span className="text-emerald-500">Flow</span>
        </h1>

        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          Exchange rates converter
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
