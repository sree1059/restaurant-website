import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { HERO } from "@/constants/testIds/vantillu";
import { IMAGES, WHATSAPP_RESERVE } from "@/lib/vantillu";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      data-testid={HERO.section}
      className="relative h-screen min-h-[720px] w-full overflow-hidden bg-[#2C1E16]"
    >
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src={IMAGES.hero}
          alt="Vantillu ambience"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1E16]/70 via-[#2C1E16]/35 to-[#2C1E16]/85" />
      </motion.div>

      {/* Top brand mark */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute top-28 left-1/2 -translate-x-1/2 text-[#F9F6F0]/70 text-[11px] uppercase tracking-[0.4em] font-medium"
      >
        — Est. 1972 · Hyderabad —
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.h1
          data-testid={HERO.headline}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif-display text-[#F9F6F0] leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2.75rem, 7vw, 7.5rem)" }}
        >
          Authentic Telugu Flavors,
          <br />
          <span className="italic font-light text-[#E8C77B]">
            Crafted with Tradition
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-8 max-w-xl text-[#F9F6F0]/80 text-base md:text-lg font-light leading-relaxed"
        >
          A family kitchen reimagined — where generations of recipes,
          slow-cooked patience, and warm hospitality become an unforgettable meal.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <MagneticButton
            href="/menu"
            data-testid={HERO.viewMenuBtn}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#F9F6F0] text-[#5C1A1B] text-[12px] uppercase tracking-[0.25em] font-medium hover:bg-[#E8C77B] transition-colors duration-500"
          >
            View Menu
          </MagneticButton>
          <MagneticButton
            href="#contact"
            data-testid={HERO.visitBtn}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-[#F9F6F0]/60 text-[#F9F6F0] text-[12px] uppercase tracking-[0.25em] font-medium hover:bg-[#F9F6F0]/10 transition-colors duration-500"
          >
            Visit Restaurant
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#F9F6F0]/60 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;
