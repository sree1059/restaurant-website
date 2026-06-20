import { motion } from "framer-motion";
import { GALLERY } from "@/constants/testIds/vantillu";
import { IMAGES } from "@/lib/vantillu";

export const Gallery = () => {
  return (
    <section
      id="gallery"
      data-testid={GALLERY.section}
      className="relative py-28 md:py-40 bg-[#F9F6F0]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="text-[#C65D47] text-[11px] uppercase tracking-[0.35em] font-medium mb-6">
              — Gallery
            </p>
            <h2
              className="font-serif-display text-[#2C1E16] leading-[0.95]"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 5rem)" }}
            >
              Moments from<br />
              <span className="italic text-[#5C1A1B]">the table.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[#5A453A] text-base font-light leading-relaxed">
            A quiet album of flavors, faces, and the things our kitchen pours into a plate.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 [column-fill:_balance]">
          {IMAGES.gallery.map((src, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              className="group relative mb-4 md:mb-5 break-inside-avoid overflow-hidden rounded-sm"
            >
              <img
                src={src}
                alt={`Vantillu gallery ${i + 1}`}
                className="w-full h-auto object-cover transition-all duration-[1400ms] ease-out grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#2C1E16]/0 group-hover:bg-[#2C1E16]/10 transition-colors duration-700" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
