import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { CTA } from "@/constants/testIds/vantillu";
import { WHATSAPP_RESERVE, IMAGES } from "@/lib/vantillu";

export const FinalCTA = () => {
  return (
    <section
      data-testid={CTA.section}
      className="relative py-32 md:py-48 bg-[#2C1E16] text-[#F9F6F0] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${IMAGES.interiors[3]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2C1E16] via-[#2C1E16]/85 to-[#2C1E16]" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#E8C77B] text-[11px] uppercase tracking-[0.4em] mb-10"
        >
          — A seat is waiting —
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif-display leading-[0.9]"
          style={{ fontSize: "clamp(3rem, 9vw, 10rem)" }}
        >
          Taste<br />
          <span className="italic text-[#E8C77B]">tradition.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 max-w-xl mx-auto text-[#F9F6F0]/70 text-base md:text-[17px] font-light leading-[1.8]"
        >
          Bring your family. Bring your appetite. We&rsquo;ll bring everything else —
          slow-cooked, hand-pounded, served warm.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-12"
        >
          <MagneticButton
            href={WHATSAPP_RESERVE}
            target="_blank"
            rel="noreferrer"
            data-testid={CTA.reserveBtn}
            className="inline-flex items-center justify-center px-12 py-5 rounded-full bg-[#E8C77B] text-[#2C1E16] text-[12px] uppercase tracking-[0.3em] font-medium hover:bg-[#F9F6F0] transition-colors duration-500"
          >
            Reserve a Table
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
