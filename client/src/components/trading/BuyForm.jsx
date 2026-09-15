
import { useState } from "react";

const BuyForm = () => {
  const [crypto, setCrypto] = useState("BTC");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");
    setIsLoading(true);

    console.log("Buy order:", {
      crypto,
      amount,
    });

    setTimeout(() => {
      setIsLoading(false);
      setSuccess("✅ Buy order completed successfully!");
    }, 1500);
  };

  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
      <h3 className="text-lg font-bold sm:text-xl">
        🟢 Buy Cryptocurrency
      </h3>

      {error && (
        <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {success && (
        <div className="mt-4 rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-400">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label
            htmlFor="crypto"
            className="mb-2 block text-sm text-slate-400"
          >
            🪙 Cryptocurrency
          </label>

          <select
            id="crypto"
            value={crypto}
            onChange={(event) => setCrypto(event.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-3 text-sm text-white outline-none sm:px-4 sm:text-base"
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="SOL">Solana (SOL)</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="amount"
            className="mb-2 block text-sm text-slate-400"
          >
            💵 Amount (USD)
          </label>

          <input
            id="amount"
            type="number"
            min="0"
            step="0.01"
            placeholder="Enter amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 sm:px-4 sm:text-base"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
        >
          {isLoading ? "⏳ Processing..." : "🟢 Buy Crypto"}
        </button>
      </form>
    </div>
  );
};

export default BuyForm;

