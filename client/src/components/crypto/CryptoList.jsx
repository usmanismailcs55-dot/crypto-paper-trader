
const CryptoList = () => {
  const cryptocurrencies = [
    { name: "Bitcoin", symbol: "BTC", price: "$67,500" },
    { name: "Ethereum", symbol: "ETH", price: "$3,500" },
    { name: "Solana", symbol: "SOL", price: "$150" },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
      <h3 className="text-lg font-bold sm:text-xl">
        🪙 Cryptocurrencies
      </h3>

      <div className="mt-4 space-y-3">
        {cryptocurrencies.map((crypto) => (
          <div
            key={crypto.symbol}
            className="flex items-center justify-between gap-4 rounded-lg bg-slate-800 p-3 sm:p-4"
          >
            <div className="min-w-0">
              <p className="truncate font-semibold">
                {crypto.name}
              </p>

              <p className="text-sm text-slate-400">
                {crypto.symbol}
              </p>
            </div>

            <p className="shrink-0 text-sm font-semibold sm:text-base">
              {crypto.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoList;

