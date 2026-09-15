import { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setError("❌ Login failed. Please check your email and password.");
    }, 1500);
  };

  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
        <h2 className="text-2xl font-bold">
          🔐 Login
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Login to your crypto paper trading account.
        </p>

        {error && (
          <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-slate-400"
            >
              📧 Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm text-slate-400"
            >
              🔑 Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "⏳ Logging in..." : "🔐 Login"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;