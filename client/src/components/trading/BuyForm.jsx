import { useState } from "react";

const BuyForm = () => {
  const [crypto, setCrypto] = useState("BTC");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Buy order:", {
      crypto,
      amount,
    });
  };

  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-bold">🟢 Buy Cryptocurrency</h3>

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
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
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
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold hover:bg-green-500"
        >
          🟢 Buy Crypto
        </button>
      </form>
    </div>
  );
};

export default BuyForm;