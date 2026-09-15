const CryptoList = () => {
  const cryptocurrencies = [
    { name: "Bitcoin", symbol: "BTC", price: "$67,500" },
    { name: "Ethereum", symbol: "ETH", price: "$3,500" },
    { name: "Solana", symbol: "SOL", price: "$150" },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-bold">🪙 Cryptocurrencies</h3>

      <div className="mt-4 space-y-3">
        {cryptocurrencies.map((crypto) => (
          <div
            key={crypto.symbol}
            className="flex items-center justify-between rounded-lg bg-slate-800 p-4"
          >
            <div>
              <p className="font-semibold">{crypto.name}</p>
              <p className="text-sm text-slate-400">
                {crypto.symbol}
              </p>
            </div>

            <p className="font-semibold">{crypto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoList;