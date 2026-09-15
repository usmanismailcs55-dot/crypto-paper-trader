import { useState } from "react";

const SellForm = () => {
  const [crypto, setCrypto] = useState("BTC");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    console.log("Sell order:", {
      crypto,
      amount,
    });

    setTimeout(() => {
      setIsLoading(false);
      setError("❌ Sell order failed. Please try again.");
    }, 1500);
  };

  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-bold">🔴 Sell Cryptocurrency</h3>

      {error && (
        <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label
            htmlFor="sell-crypto"
            className="mb-2 block text-sm text-slate-400"
          >
            🪙 Cryptocurrency
          </label>

          <select
            id="sell-crypto"
            value={crypto}
            onChange={(event) => setCrypto(event.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="SOL">Solana (SOL)</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="sell-amount"
            className="mb-2 block text-sm text-slate-400"
          >
            🪙 Amount to Sell
          </label>

          <input
            id="sell-amount"
            type="number"
            min="0"
            step="0.000001"
            placeholder="Enter amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-red-600 px-4 py-3 font-semibold hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "⏳ Processing..." : "🔴 Sell Crypto"}
        </button>
      </form>
    </div>
  );
};

export default SellForm;