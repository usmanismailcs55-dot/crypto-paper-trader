import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {children}
    </div>
  );
};

export default Layout;