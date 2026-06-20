import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants/testIds/vantillu";
import { IMAGES } from "@/lib/vantillu";

const items = [
  { src: IMAGES.interiors[0], label: "The Arches", span: "md:col-span-7 md:row-span-2" },
  { src: IMAGES.interiors[1], label: "Family Hall", span: "md:col-span-5" },
  { src: IMAGES.interiors[2], label: "Brass & Wood", span: "md:col-span-5" },
];

export const Experience = () => {
  return (
    <section
      data-testid={EXPERIENCE.section}
      className="relative py-28 md:py-40 bg-[#5C1A1B] text-[#F9F6F0] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="md:col-span-7"
          >
            <p className="text-[#E8C77B] text-[11px] uppercase tracking-[0.35em] font-medium mb-6">
              — The Experience
            </p>
            <h2
              className="font-serif-display leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              An interior that feels like<br />
              <span className="italic text-[#E8C77B]">an old family home.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="md:col-span-4 md:col-start-9 self-end text-[#F9F6F0]/75 font-light text-base md:text-[17px] leading-[1.8]"
          >
            Hand-plastered arches, terracotta tiles, brass lamps that have been
            polished by hand every morning. The kind of room you don&rsquo;t want to
            leave.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-[280px] md:auto-rows-[340px]">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-sm ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16]/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 text-[11px] uppercase tracking-[0.3em] text-[#F9F6F0]">
                — {it.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
