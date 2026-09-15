
const Navbar = () => {
  return (
    <nav className="border-b border-slate-800 bg-slate-950 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <h1 className="text-lg font-bold sm:text-xl">
          🚀 Crypto Paper Trader
        </h1>

        <div className="flex shrink-0 gap-2 sm:gap-4">
          <button className="text-sm sm:text-base">
            📊 Dashboard
          </button>

          <button className="text-sm sm:text-base">
            🔐 Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

