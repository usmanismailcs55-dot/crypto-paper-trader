import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/me", {
          credentials: "include",
        });

        if (!response.ok) {
          setUser(null);
          return;
        }

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error("Auth check failed:", error);
        setUser(null);
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Logout failed");
      }

      console.log("Logout:", data);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <nav className="border-b border-slate-800 bg-slate-950 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <h1 className="text-lg font-bold sm:text-xl">
          🚀 Crypto Paper Trader
        </h1>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <button className="text-sm sm:text-base">
            📊 Dashboard
          </button>

          {!isCheckingAuth && user ? (
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="text-sm sm:text-base disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoggingOut ? "⏳ Logging out..." : "🚪 Logout"}
            </button>
          ) : (
            !isCheckingAuth && (
              <button className="text-sm sm:text-base">
                🔐 Login
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;