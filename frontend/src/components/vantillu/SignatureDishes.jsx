import { motion } from "framer-motion";
import { DISHES } from "@/constants/testIds/vantillu";
import { SIGNATURE_DISHES } from "@/lib/vantillu";

const Card = ({ dish, idx, className = "" }) => (
  <motion.article
    data-testid={DISHES.card(idx)}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
    className={`group relative overflow-hidden rounded-sm bg-[#2C1E16] ${className}`}
  >
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16] via-[#2C1E16]/30 to-transparent opacity-90" />
    </div>

    <div className="relative z-10 h-full flex flex-col justify-end p-7 md:p-10">
      <span className="text-[#E8C77B] text-[10px] uppercase tracking-[0.35em] mb-3">
        — 0{idx + 1}
      </span>
      <h3 className="font-serif-display text-[#F9F6F0] text-2xl md:text-3xl lg:text-4xl leading-tight">
        {dish.name}
      </h3>
      <p className="mt-3 text-[#F9F6F0]/70 text-sm md:text-base font-light max-w-md leading-relaxed">
        {dish.sub}
      </p>
    </div>
  </motion.article>
);

export const SignatureDishes = () => {
  return (
    <section
      id="dishes"
      data-testid={DISHES.section}
      className="relative py-28 md:py-40 bg-[#F2EBE1]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <p className="text-[#C65D47] text-[11px] uppercase tracking-[0.35em] font-medium mb-6">
              — Signature Dishes
            </p>
            <h2
              className="font-serif-display text-[#2C1E16] leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              Plates that<br />
              <span className="italic text-[#5C1A1B]">tell a story.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[#5A453A] text-base font-light leading-relaxed">
            Six dishes, chosen by our family — each carrying a region, a season, and a recipe whispered down generations.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-[260px] md:auto-rows-[320px]">
          <Card dish={SIGNATURE_DISHES[0]} idx={0} className="md:col-span-7 md:row-span-2" />
          <Card dish={SIGNATURE_DISHES[1]} idx={1} className="md:col-span-5" />
          <Card dish={SIGNATURE_DISHES[2]} idx={2} className="md:col-span-5" />
          <Card dish={SIGNATURE_DISHES[3]} idx={3} className="md:col-span-4" />
          <Card dish={SIGNATURE_DISHES[4]} idx={4} className="md:col-span-4" />
          <Card dish={SIGNATURE_DISHES[5]} idx={5} className="md:col-span-4" />
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
