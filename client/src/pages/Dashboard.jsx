import { useEffect, useState } from "react";
import BalanceCard from "../components/dashboard/BalanceCard";
import CryptoList from "../components/crypto/CryptoList";
import BuyForm from "../components/trading/BuyForm";
import SellForm from "../components/trading/SellForm";
import TradeHistory from "../components/trading/TradeHistory";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4">
        <div className="text-center">
          <div className="text-4xl">⏳</div>

          <p className="mt-3 text-lg font-semibold">
            Loading dashboard...
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Please wait a moment.
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center">
          <div className="text-4xl">⚠️</div>

          <h2 className="mt-3 text-xl font-bold text-red-400">
            Something went wrong
          </h2>

          <p className="mt-2 text-sm text-red-300">
            {error}
          </p>

          <button
            onClick={() => setError("")}
            className="mt-4 rounded-lg bg-red-600 px-4 py-2 font-semibold hover:bg-red-500"
          >
            🔄 Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold">
        📊 Dashboard
      </h2>

      <p className="mt-2 text-slate-400">
        Welcome to your crypto paper trading dashboard.
      </p>

      <div className="mt-6">
        <BalanceCard />
      </div>

      <CryptoList />

      <BuyForm />

      <SellForm />

      <TradeHistory />
    </section>
  );
};

export default Dashboard;