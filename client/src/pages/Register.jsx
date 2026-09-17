
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) {
      return;
    }

    setError("");
    setSuccess("");

    // 🧹 Clean input
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    // ✅ Required fields
    if (!trimmedName || !trimmedEmail || !password) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    // 📧 Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      setError("⚠️ Please enter a valid email address.");
      return;
    }

    // 🔑 Validate password
    if (password.length < 6) {
      setError("⚠️ Password must be at least 6 characters.");
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Registration failed"
        );
      }

      setSuccess("✅ Account created successfully!");

      // 🧹 Clear form after successful registration
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Registration error:", error);

      setError(
        `❌ ${error.message || "Registration failed"}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
        <h2 className="text-2xl font-bold">
          📝 Create Account
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Create your crypto paper trading account.
        </p>

        {error && (
          <div
            role="alert"
            className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400"
          >
            {error}
          </div>
        )}

        {success && (
          <div
            role="status"
            className="mt-4 rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-400"
          >
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm text-slate-400"
            >
              👤 Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/30"
            />
          </div>

          <div>
            <label
              htmlFor="register-email"
              className="mb-2 block text-sm text-slate-400"
            >
              📧 Email
            </label>

            <input
              id="register-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/30"
            />
          </div>

          <div>
            <label
              htmlFor="register-password"
              className="mb-2 block text-sm text-slate-400"
            >
              🔑 Password
            </label>

            <input
              id="register-password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/30"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading
              ? "⏳ Creating account..."
              : "📝 Create Account"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;

