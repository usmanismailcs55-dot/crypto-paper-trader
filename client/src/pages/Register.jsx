const Register = () => {
  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
        <h2 className="text-2xl font-bold">
          📝 Create Account
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Create your crypto paper trading account.
        </p>

        <form className="mt-6 space-y-4">
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
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500"
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
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500"
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
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold hover:bg-green-500"
          >
            📝 Create Account
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;