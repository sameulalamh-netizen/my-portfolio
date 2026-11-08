import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#080b14] text-white">
      <Navbar />

      <main className="min-h-screen pt-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;