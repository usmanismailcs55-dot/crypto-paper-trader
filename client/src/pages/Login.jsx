import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setSuccess("✅ Login successful!");

      console.log("Logged in user:", data.user);
    } catch (error) {
      setError(error.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
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

        {success && (
          <div className="mt-4 rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-400">
            {success}
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
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