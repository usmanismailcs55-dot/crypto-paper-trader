const Navbar = () => {
  return (
    <nav className="border-b border-slate-800 bg-slate-950 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-xl font-bold">
          🚀 Crypto Paper Trader
        </h1>

        <div className="flex gap-4">
          <button>📊 Dashboard</button>
          <button>🔐 Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;