import Navbar from "./components/Navbar";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />

      <main className="mx-auto flex max-w-5xl justify-center px-4 py-10 sm:py-16">
        <CurrencyConverter />
      </main>
    </div>
  );
}

export default App;
