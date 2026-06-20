import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/constants/testIds/vantillu";
import { TESTIMONIALS_DATA } from "@/lib/vantillu";

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS_DATA[i];
  const next = () => setI((p) => (p + 1) % TESTIMONIALS_DATA.length);
  const prev = () =>
    setI((p) => (p - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);

  return (
    <section
      data-testid={TESTIMONIALS.section}
      className="relative py-28 md:py-40 bg-[#F2EBE1] overflow-hidden"
    >
      {/* Decorative big mark */}
      <Quote
        size={420}
        className="absolute -top-20 -left-10 text-[#E5D8C8]/40 rotate-180 pointer-events-none"
        strokeWidth={1}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 text-center">
        <p className="text-[#C65D47] text-[11px] uppercase tracking-[0.35em] font-medium mb-6">
          — Kind Words
        </p>
        <h2
          className="font-serif-display text-[#2C1E16] leading-[0.95] mb-16"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
        >
          What our guests<br />
          <span className="italic text-[#5C1A1B]">say at the table.</span>
        </h2>

        <div className="relative min-h-[280px] md:min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              data-testid={TESTIMONIALS.card(i)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl rounded-2xl bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_8px_40px_-12px_rgba(44,30,22,0.12)] p-10 md:p-14"
            >
              <p
                className="font-serif-display text-[#2C1E16] italic leading-[1.3]"
                style={{ fontSize: "clamp(1.35rem, 2.4vw, 2.1rem)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex flex-col items-center gap-1">
                <span className="font-medium text-[#5C1A1B] text-sm tracking-wide">
                  {t.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#5A453A]/70">
                  — {t.role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            data-testid={TESTIMONIALS.prev}
            aria-label="Previous"
            className="p-3 rounded-full border border-[#5C1A1B]/30 text-[#5C1A1B] hover:bg-[#5C1A1B] hover:text-[#F9F6F0] transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS_DATA.map((_, j) => (
              <button
                key={j}
                onClick={() => setI(j)}
                aria-label={`Go to testimonial ${j + 1}`}
                className={`h-[3px] transition-all duration-500 ${
                  j === i ? "w-10 bg-[#5C1A1B]" : "w-5 bg-[#5C1A1B]/25"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            data-testid={TESTIMONIALS.next}
            aria-label="Next"
            className="p-3 rounded-full border border-[#5C1A1B]/30 text-[#5C1A1B] hover:bg-[#5C1A1B] hover:text-[#F9F6F0] transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
