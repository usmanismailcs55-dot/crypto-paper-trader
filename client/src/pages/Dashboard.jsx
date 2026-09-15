import BalanceCard from "../components/dashboard/BalanceCard";
import CryptoList from "../components/crypto/CryptoList";
import BuyForm from "../components/trading/BuyForm";

const Dashboard = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold">
        📊 Dashboard
      </h2>

      <p className="mt-2 text-slate-400">
        Welcome to your crypto paper trading dashboard.
      </p>

      <div className="mt-6">
        <BalanceCard />
      </div>

      <CryptoList />

      <BuyForm />
    </section>
  );
};

export default Dashboard;