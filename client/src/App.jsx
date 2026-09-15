import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Layout>
      <Dashboard />
      <Login />
      <Register />
    </Layout>
  );
}

export default App;