import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { CONTACT } from "@/constants/testIds/vantillu";
import { CONTACT_INFO, WHATSAPP_RESERVE } from "@/lib/vantillu";

export const Contact = () => {
  const mapsQuery = encodeURIComponent(CONTACT_INFO.address);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
  const mapEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <section
      id="contact"
      data-testid={CONTACT.section}
      className="relative py-28 md:py-40 bg-[#F2EBE1]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5"
          >
            <p className="text-[#C65D47] text-[11px] uppercase tracking-[0.35em] font-medium mb-6">
              — Visit Us
            </p>
            <h2
              className="font-serif-display text-[#2C1E16] leading-[0.95]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
            >
              Come for a meal,<br />
              <span className="italic text-[#5C1A1B]">stay for an evening.</span>
            </h2>

            <div className="mt-10 space-y-7">
              <div className="flex gap-4">
                <MapPin className="text-[#5C1A1B] mt-1" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#5A453A]/70 mb-2">Address</p>
                  <p className="text-[#2C1E16] font-light leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-[#5C1A1B] mt-1" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#5A453A]/70 mb-2">Hours</p>
                  <p className="text-[#2C1E16] font-light">{CONTACT_INFO.hoursWeek}</p>
                  <p className="text-[#2C1E16] font-light">{CONTACT_INFO.hoursWeekend}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-[#5C1A1B] mt-1" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#5A453A]/70 mb-2">Reach Us</p>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                    data-testid={CONTACT.call}
                    className="block text-[#2C1E16] font-light link-underline w-fit"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="inline-flex items-center gap-2 mt-1 text-[#2C1E16] font-light link-underline w-fit"
                  >
                    <Mail size={14} /> {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_RESERVE}
                target="_blank"
                rel="noreferrer"
                data-testid={CONTACT.whatsapp}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#5C1A1B] text-[#F9F6F0] text-[12px] uppercase tracking-[0.25em] hover:bg-[#4A1516] transition-colors duration-500"
              >
                Reserve via WhatsApp
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                data-testid={CONTACT.directions}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#5C1A1B] text-[#5C1A1B] text-[12px] uppercase tracking-[0.25em] hover:bg-[#5C1A1B] hover:text-[#F9F6F0] transition-colors duration-500"
              >
                Get Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="md:col-span-7"
          >
            <div className="relative aspect-[4/5] md:aspect-square rounded-sm overflow-hidden border border-[#E5D8C8]">
              <iframe
                title="Vantillu location"
                src={mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "sepia(0.25) saturate(0.85) hue-rotate(-10deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
