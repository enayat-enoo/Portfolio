import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const Layout = () => {
  return (
    <div className="bg-[#87CEEB] min-h-screen">
      <Navbar />
        <main>
            <Outlet />
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
