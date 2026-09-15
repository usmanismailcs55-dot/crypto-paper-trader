const BalanceCard = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <p className="text-sm text-slate-400">
        💰 Virtual Balance
      </p>

      <h3 className="mt-2 text-3xl font-bold">
        $10,000.00
      </h3>

      <p className="mt-2 text-sm text-green-400">
        📈 Available for trading
      </p>
    </div>
  );
};

export default BalanceCard;