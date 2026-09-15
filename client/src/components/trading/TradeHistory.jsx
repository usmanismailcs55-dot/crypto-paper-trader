const TradeHistory = () => {
  const trades = [
    {
      id: 1,
      type: "BUY",
      crypto: "BTC",
      amount: "0.05",
      price: "$67,500",
    },
    {
      id: 2,
      type: "SELL",
      crypto: "ETH",
      amount: "1",
      price: "$3,500",
    },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-bold">📜 Trade History</h3>

      <div className="mt-4 space-y-3">
        {trades.map((trade) => (
          <div
            key={trade.id}
            className="flex items-center justify-between rounded-lg bg-slate-800 p-4"
          >
            <div>
              <p
                className={
                  trade.type === "BUY"
                    ? "font-semibold text-green-400"
                    : "font-semibold text-red-400"
                }
              >
                {trade.type === "BUY" ? "🟢 BUY" : "🔴 SELL"}
              </p>

              <p className="text-sm text-slate-400">
                {trade.crypto} · {trade.amount}
              </p>
            </div>

            <p className="font-semibold">{trade.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeHistory;