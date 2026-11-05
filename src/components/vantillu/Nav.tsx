import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { NAV } from "@/constants/testIds/vantillu";
import { WHATSAPP_RESERVE, NAV_LINKS as LINKS } from "@/lib/vantillu";
import { useCart } from "@/context/CartContext";
import { useReservation } from "@/context/ReservationContext";

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { openReserveModal } = useReservation();
  const location = useLocation();
  const isMenuPage = location.pathname === "/menu";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLightNav = scrolled || isMenuPage;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        isLightNav
          ? "bg-[#f9f6f0]/90 backdrop-blur-xl border-b border-[#e5d8c8]/70 shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" data-testid={NAV.logo} className="flex items-center gap-2">
          <Logo
            className="text-3xl md:text-4xl"
            color={isLightNav ? "#5C1A1B" : "#F9F6F0"}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => {
            const isMenuRoute = l.href === "/menu";
            const cls = `text-[12px] uppercase tracking-[0.2em] font-medium link-underline transition-colors ${
              isLightNav ? "text-[#2C1E16] hover:text-[#5C1A1B]" : "text-[#F9F6F0] hover:text-[#E8C77B]"
            }`;
            return isMenuRoute ? (
              <Link key={l.label} to={l.href} className={cls}>
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} className={cls}>
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons: Cart & Reservation */}
        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className={`relative p-2.5 rounded-full transition-all flex items-center justify-center cursor-pointer ${
              isLightNav
                ? "bg-[#5C1A1B]/10 text-[#5C1A1B] hover:bg-[#5C1A1B]/20"
                : "bg-white/15 text-[#F9F6F0] hover:bg-white/25"
            }`}
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C65D47] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#F9F6F0] animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={openReserveModal}
            data-testid={NAV.reserveBtn}
            className={`hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium border transition-all duration-300 cursor-pointer ${
              isLightNav
                ? "border-[#5C1A1B] text-[#5C1A1B] hover:bg-[#5C1A1B] hover:text-[#F9F6F0]"
                : "border-[#F9F6F0]/70 text-[#F9F6F0] hover:bg-[#F9F6F0] hover:text-[#5C1A1B]"
            }`}
          >
            Book Table
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            data-testid={NAV.mobileToggle}
            className={`lg:hidden p-2 rounded-full ${
              isLightNav ? "text-[#2C1E16]" : "text-[#F9F6F0]"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid={NAV.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden bg-[#f9f6f0]/95 backdrop-blur-xl border-t border-[#e5d8c8]"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {LINKS.map((l) => {
                const isMenuRoute = l.href === "/menu";
                const cls =
                  "py-2.5 text-[#2C1E16] font-serif-display text-xl border-b border-[#e5d8c8]/60 flex items-center justify-between";
                return isMenuRoute ? (
                  <Link
                    key={l.label}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className={cls}
                  >
                    <span>{l.label}</span>
                    <span className="text-xs uppercase text-[#C65D47] font-sans tracking-wider">
                      Explore
                    </span>
                  </Link>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cls}
                  >
                    <span>{l.label}</span>
                  </a>
                );
              })}

              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="py-3 rounded-full bg-[#E5D8C8] text-[#2C1E16] text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag size={14} />
                  <span>Cart ({totalItems})</span>
                </button>
                <button
                  onClick={() => {
                    setOpen(false);
                    openReserveModal();
                  }}
                  className="py-3 rounded-full bg-[#5C1A1B] text-[#F9F6F0] text-[11px] uppercase tracking-wider font-semibold text-center cursor-pointer"
                >
                  Book Table
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
