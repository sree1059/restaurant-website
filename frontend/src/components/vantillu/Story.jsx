import { motion } from "framer-motion";
import { STORY } from "@/constants/testIds/vantillu";
import { IMAGES } from "@/lib/vantillu";

export const Story = () => {
  return (
    <section
      id="story"
      data-testid={STORY.section}
      className="relative py-32 md:py-44 bg-[#F9F6F0]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 md:col-start-1"
        >
          <p className="text-[#C65D47] text-[11px] uppercase tracking-[0.35em] font-medium mb-6">
            — Our Story
          </p>
          <h2
            className="font-serif-display text-[#2C1E16] leading-[1]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            A kitchen that
            <br />
            <span className="italic text-[#5C1A1B]">remembers</span>
            <br />
            three generations.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="md:col-span-6 md:col-start-7 space-y-6 text-[#5A453A] text-base md:text-[17px] leading-[1.8] font-light"
        >
          <p>
            <span className="font-serif-display text-2xl text-[#5C1A1B] italic">
              Vantillu
            </span>{" "}
            — meaning <em>&ldquo;the kitchen&rdquo;</em> in Telugu — was born from a single
            wood-fired hearth in a Banjara Hills home. What began as Sunday family
            feasts has become a temple to Andhra&rsquo;s slow, generous cooking.
          </p>
          <p>
            Every gongura leaf is hand-stripped. Every podi, hand-pounded. Our
            recipes are not written — they are inherited, in measures of memory and
            ghee.
          </p>
          <p>
            Step in, sit cross-legged or formal, eat with your fingers or a fork.
            Either way, you are family here.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2 }}
        className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20 md:mt-28"
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
          <img
            src={IMAGES.story}
            alt="Vantillu interior — arches and warm light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-[#F9F6F0]">
            <p className="font-serif-display italic text-2xl md:text-4xl">
              &ldquo;Eat slowly. Remember well.&rdquo;
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-[#E8C77B]">
              — Ammamma, 1972
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Story;
