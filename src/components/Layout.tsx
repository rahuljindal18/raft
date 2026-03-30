import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-green-100 overflow-x-hidden">
      <div className={`fixed top-0 left-0 z-[100] w-full transition-all duration-300 ${
        isHome 
          ? (isScrolled ? "bg-[#1c1c1c] shadow-lg" : "bg-transparent") 
          : "bg-[#1c1c1c] shadow-lg"
      }`}>
        <TopBar />
        <Navbar isScrolled={isScrolled} />
      </div>
      <main className={isHome ? "" : "pt-[96px] md:pt-[126px]"}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
