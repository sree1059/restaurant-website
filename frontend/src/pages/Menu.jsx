import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/vantillu/Logo";
import Footer from "@/components/vantillu/Footer";
import { MENU_PAGE } from "@/constants/testIds/vantillu";
import { SAMPLE_MENU, WHATSAPP_ORDER } from "@/lib/vantillu";

export default function MenuPage() {
  useEffect(() => {
    document.title = "Menu — Vantillu";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      data-testid={MENU_PAGE.section}
      className="bg-[#F9F6F0] text-[#2C1E16] min-h-screen"
    >
      <header className="sticky top-0 z-50 bg-[#F9F6F0]/85 backdrop-blur-xl border-b border-[#E5D8C8]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link
            to="/"
            data-testid={MENU_PAGE.backHome}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#2C1E16] hover:text-[#5C1A1B] transition-colors"
          >
            <ArrowLeft size={14} /> Back
          </Link>
          <Link to="/">
            <Logo className="text-3xl" color="#5C1A1B" />
          </Link>
          <a
            href={WHATSAPP_ORDER}
            target="_blank"
            rel="noreferrer"
            data-testid={MENU_PAGE.orderWhatsapp}
            className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-[#5C1A1B] text-[#F9F6F0] text-[11px] uppercase tracking-[0.25em] hover:bg-[#4A1516] transition-colors"
          >
            Order via WhatsApp
          </a>
        </div>
      </header>

      <section className="pt-20 md:pt-28 pb-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#C65D47] text-[11px] uppercase tracking-[0.35em] font-medium mb-6"
          >
            — The Menu
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-serif-display text-[#2C1E16] leading-[0.95]"
            style={{ fontSize: "clamp(2.75rem, 7vw, 6.5rem)" }}
          >
            A family<br />
            <span className="italic text-[#5C1A1B]">cookbook,</span> opened.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 max-w-xl mx-auto text-[#5A453A] font-light text-base md:text-[17px] leading-[1.8]"
          >
            A curated selection from our kitchen. Prices in INR. Daily specials change
            with the season — ask your server.
          </motion.p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 space-y-24">
          {SAMPLE_MENU.map((sec, sIdx) => (
            <motion.div
              key={sec.section}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-baseline gap-6 mb-12">
                <span className="text-[#C65D47] text-[11px] uppercase tracking-[0.35em] font-medium">
                  0{sIdx + 1}
                </span>
                <h2
                  className="font-serif-display text-[#2C1E16] leading-none"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  {sec.section}
                </h2>
                <span className="flex-1 h-px bg-[#E5D8C8]" />
              </div>

              <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                {sec.items.map((it, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline gap-4">
                      <h3 className="font-serif-display text-xl md:text-2xl text-[#2C1E16] group-hover:text-[#5C1A1B] transition-colors">
                        {it.name}
                      </h3>
                      <span className="flex-1 mx-3 border-b border-dashed border-[#E5D8C8] translate-y-[-4px]" />
                      <span className="font-serif-display text-lg text-[#5C1A1B] tabular-nums">
                        {it.price}
                      </span>
                    </div>
                    <p className="mt-2 text-[#5A453A] text-sm md:text-[15px] font-light leading-relaxed max-w-md">
                      {it.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pb-32 text-center px-6">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#5A453A]/70 mb-6">
          — Ready to order? —
        </p>
        <a
          href={WHATSAPP_ORDER}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#5C1A1B] text-[#F9F6F0] text-[12px] uppercase tracking-[0.25em] hover:bg-[#4A1516] transition-colors duration-500"
        >
          Order via WhatsApp
        </a>
      </section>

      <Footer />
    </main>
  );
}
