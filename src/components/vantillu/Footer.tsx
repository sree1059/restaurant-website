import React from "react";
import Logo from "./Logo";
import { FOOTER } from "@/constants/testIds/vantillu";
import {
  CONTACT_INFO,
  WHATSAPP_RESERVE,
  GOOGLE_MAPS_LINK,
  RESTAURANT_ADDRESS,
} from "@/lib/vantillu";
import { Instagram, Facebook, Youtube, ExternalLink, MapPin } from "lucide-react";

import { useReservation } from "@/context/ReservationContext";

export const Footer: React.FC = () => {
  const { openReserveModal } = useReservation();

  return (
    <footer
      data-testid={FOOTER.section}
      className="relative bg-[#2C1E16] text-[#F9F6F0]/80 pt-20 pb-10 border-t border-[#F9F6F0]/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Logo className="text-5xl" color="#E8C77B" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed font-light">
            Vantillu brings slow-cooked, uncompromised Telugu kitchen traditions to
            Kamareddy. Authentic wood-fired spices, zero artificial colors, and warm
            hospitality for every family.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((IconComponent, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="w-10 h-10 rounded-full border border-[#F9F6F0]/20 flex items-center justify-center hover:bg-[#E8C77B] hover:text-[#2C1E16] hover:border-[#E8C77B] transition-colors"
              >
                <IconComponent size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#E8C77B] mb-5 font-medium">
            Location & Redirection
          </p>
          <div className="flex items-start gap-2">
            <MapPin size={16} className="text-[#E8C77B] shrink-0 mt-0.5" />
            <p className="text-sm font-light leading-relaxed">{RESTAURANT_ADDRESS}</p>
          </div>
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#E8C77B] hover:underline"
          >
            <span>Open in Google Maps</span>
            <ExternalLink size={12} />
          </a>
          <p className="text-sm font-light mt-3">{CONTACT_INFO.phone}</p>
          <p className="text-sm font-light">{CONTACT_INFO.email}</p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#E8C77B] mb-5 font-medium">
            Quick Navigation
          </p>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <a href="/menu" className="hover:text-[#E8C77B] transition-colors">
                • Digital Food Menu (with Photos)
              </a>
            </li>
            <li>
              <a href="/#services" className="hover:text-[#E8C77B] transition-colors">
                • Services & Amenities
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={openReserveModal}
                className="hover:text-[#E8C77B] transition-colors text-left cursor-pointer"
              >
                • Book a Table
              </button>
            </li>
            <li>
              <a href="/#collaborate" className="hover:text-[#E8C77B] transition-colors">
                • Collaboration & Catering Desk
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_RESERVE}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 font-medium text-[#E8C77B] hover:underline"
              >
                WhatsApp Order & Enquiries →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-[#F9F6F0]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-[#F9F6F0]/40">
        <span>© {new Date().getFullYear()} Vantillu. All rights reserved.</span>
        <span>Vikas Nagar Colony, Kamareddy, Telangana</span>
      </div>
    </footer>
  );
};

export default Footer;
