import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { QrCode, Smartphone, UtensilsCrossed } from "lucide-react";
import { DIGITAL_MENU } from "@/constants/testIds/vantillu";
import { IMAGES } from "@/lib/vantillu";

export const DigitalMenu = () => {
  return (
    <section
      data-testid={DIGITAL_MENU.section}
      className="relative py-28 md:py-40 bg-[#F9F6F0] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="md:col-span-6"
        >
          <p className="text-[#C65D47] text-[11px] uppercase tracking-[0.35em] font-medium mb-6">
            — Digital Menu
          </p>
          <h2
            className="font-serif-display text-[#2C1E16] leading-[0.95]"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 5rem)" }}
          >
            Scan. Browse.<br />
            <span className="italic text-[#5C1A1B]">Order with ease.</span>
          </h2>
          <p className="mt-6 text-[#5A453A] font-light text-base md:text-[17px] leading-[1.8] max-w-md">
            Our full menu — biryanis, thalis, Andhra curries, tiffins, and sweets —
            is available on any phone. No app, no wait. Just a moment of scan.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              { Icon: QrCode, t: "Scan QR", d: "On every table" },
              { Icon: Smartphone, t: "Mobile First", d: "Fast & elegant" },
              { Icon: UtensilsCrossed, t: "Live Updates", d: "Daily specials" },
            ].map(({ Icon, t, d }, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Icon size={20} className="text-[#5C1A1B]" />
                <p className="font-serif-display text-xl text-[#2C1E16]">{t}</p>
                <p className="text-sm text-[#5A453A]/80 font-light">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/menu"
              data-testid={DIGITAL_MENU.viewMenuBtn}
              className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-[#5C1A1B] text-[#F9F6F0] text-[12px] uppercase tracking-[0.25em] hover:bg-[#4A1516] transition-colors duration-500"
            >
              View Full Menu
            </Link>
          </div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15 }}
          className="md:col-span-6 flex justify-center md:justify-end"
        >
          <div className="relative w-[280px] md:w-[320px] aspect-[9/19] rounded-[40px] bg-[#2C1E16] p-3 shadow-[0_30px_80px_-20px_rgba(92,26,27,0.4)]">
            <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-[#F2EBE1]">
              <img
                src={IMAGES.digitalMenuBg}
                alt="Menu preview"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-[#F9F6F0]/70 backdrop-blur-sm" />
              <div className="relative p-6 flex flex-col h-full">
                <div className="flex items-center justify-between text-[10px] text-[#5A453A] uppercase tracking-[0.2em]">
                  <span>9:41</span>
                  <span>Vantillu</span>
                </div>
                <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-[#C65D47]">
                  — Menu
                </p>
                <h3 className="font-serif-display text-3xl text-[#2C1E16] leading-tight mt-1">
                  Today's<br />Thali
                </h3>
                <div className="mt-6 space-y-3 text-[12px] text-[#2C1E16]">
                  {[
                    ["Hyderabadi Biryani", "₹420"],
                    ["Gongura Mamsam", "₹540"],
                    ["Pappu Charu", "₹220"],
                    ["Pesarattu", "₹220"],
                    ["Pootharekulu", "₹180"],
                  ].map(([n, p], i) => (
                    <div
                      key={i}
                      className="flex justify-between border-b border-[#E5D8C8] pb-2"
                    >
                      <span className="font-medium">{n}</span>
                      <span className="text-[#5C1A1B] font-serif-display">{p}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-6 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-md bg-[#2C1E16] flex items-center justify-center">
                    <QrCode size={48} className="text-[#E8C77B]" />
                  </div>
                </div>
              </div>
            </div>
            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#2C1E16] rounded-b-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalMenu;
