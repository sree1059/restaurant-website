import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";
import { CONTACT } from "@/constants/testIds/vantillu";
import {
  CONTACT_INFO,
  WHATSAPP_RESERVE,
  GOOGLE_MAPS_LINK,
  GOOGLE_MAPS_EMBED,
  RESTAURANT_ADDRESS,
} from "@/lib/vantillu";

export const Contact: React.FC = () => {
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
              — Visit Us in Kamareddy
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
                <MapPin className="text-[#5C1A1B] mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#5A453A]/70 mb-2">
                    Address
                  </p>
                  <p className="text-[#2C1E16] font-medium leading-relaxed">
                    {RESTAURANT_ADDRESS}
                  </p>
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs text-[#5C1A1B] font-semibold hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-[#5C1A1B] mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#5A453A]/70 mb-2">
                    Hours
                  </p>
                  <p className="text-[#2C1E16] font-light">{CONTACT_INFO.hoursWeek}</p>
                  <p className="text-[#2C1E16] font-light">{CONTACT_INFO.hoursWeekend}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-[#5C1A1B] mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#5A453A]/70 mb-2">
                    Reach Us
                  </p>
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
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                data-testid={CONTACT.directions}
                className="inline-flex items-center gap-2 justify-center px-8 py-4 rounded-full bg-[#5C1A1B] text-[#F9F6F0] text-[12px] uppercase tracking-[0.25em] hover:bg-[#4A1516] transition-colors duration-500 shadow-md cursor-pointer"
              >
                <span>Google Maps Redirection</span>
                <ExternalLink size={14} />
              </a>
              <a
                href={WHATSAPP_RESERVE}
                target="_blank"
                rel="noreferrer"
                data-testid={CONTACT.whatsapp}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#5C1A1B] text-[#5C1A1B] text-[12px] uppercase tracking-[0.25em] hover:bg-[#5C1A1B] hover:text-[#F9F6F0] transition-colors duration-500 cursor-pointer"
              >
                Reserve via WhatsApp
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
            <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden border border-[#E5D8C8] shadow-xl group">
              <iframe
                title="Vantillu Kamareddy Location"
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E5D8C8] shadow-lg flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-2.5">
                  <MapPin size={18} className="text-[#5C1A1B] shrink-0" />
                  <div>
                    <span className="font-semibold text-xs text-[#2C1E16] block">
                      Vantillu Restaurant
                    </span>
                    <span className="text-[11px] text-[#5A453A]">
                      Vikas Nagar Colony, Kamareddy
                    </span>
                  </div>
                </div>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-[#5C1A1B] text-white text-[11px] uppercase tracking-wider font-medium hover:bg-[#4a1516] transition-colors flex items-center gap-1"
                >
                  <span>Open Map</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
