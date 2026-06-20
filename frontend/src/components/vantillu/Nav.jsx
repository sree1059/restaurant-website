import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { NAV, NAV_LINKS } from "@/constants/testIds/vantillu";
import { WHATSAPP_RESERVE, NAV_LINKS as LINKS } from "@/lib/vantillu";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f9f6f0]/85 backdrop-blur-xl border-b border-[#e5d8c8]/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" data-testid={NAV.logo} className="flex items-center gap-2">
          <Logo
            className="text-3xl md:text-4xl"
            color={scrolled ? "#5C1A1B" : "#F9F6F0"}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {LINKS.map((l) => {
            const isRoute = l.href.startsWith("/");
            const testId =
              {
                Story: NAV.linkStory,
                Dishes: NAV.linkDishes,
                Menu: NAV.linkMenu,
                Gallery: NAV.linkGallery,
                Contact: NAV.linkContact,
              }[l.label] || `nav-link-${l.label.toLowerCase()}`;
            const cls = `text-[13px] uppercase tracking-[0.2em] font-medium link-underline transition-colors ${
              scrolled ? "text-[#2C1E16]" : "text-[#F9F6F0]"
            }`;
            return isRoute ? (
              <Link key={l.label} to={l.href} data-testid={testId} className={cls}>
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} data-testid={testId} className={cls}>
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_RESERVE}
            target="_blank"
            rel="noreferrer"
            data-testid={NAV.reserveBtn}
            className={`hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full text-[12px] uppercase tracking-[0.2em] font-medium border transition-all duration-300 ${
              scrolled
                ? "border-[#5C1A1B] text-[#5C1A1B] hover:bg-[#5C1A1B] hover:text-[#F9F6F0]"
                : "border-[#F9F6F0]/70 text-[#F9F6F0] hover:bg-[#F9F6F0] hover:text-[#5C1A1B]"
            }`}
          >
            Reserve
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            data-testid={NAV.mobileToggle}
            className={`lg:hidden p-2 rounded-full ${scrolled ? "text-[#2C1E16]" : "text-[#F9F6F0]"}`}
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
                const isRoute = l.href.startsWith("/");
                const cls =
                  "py-3 text-[#2C1E16] font-serif-display text-2xl border-b border-[#e5d8c8]/60";
                return isRoute ? (
                  <Link
                    key={l.label}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className={cls}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cls}
                  >
                    {l.label}
                  </a>
                );
              })}
              <a
                href={WHATSAPP_RESERVE}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex justify-center px-6 py-3 rounded-full bg-[#5C1A1B] text-[#F9F6F0] text-[12px] uppercase tracking-[0.2em]"
              >
                Reserve a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
