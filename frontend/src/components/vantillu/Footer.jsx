import Logo from "./Logo";
import { FOOTER } from "@/constants/testIds/vantillu";
import { CONTACT_INFO, WHATSAPP_RESERVE } from "@/lib/vantillu";
import { Instagram, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      data-testid={FOOTER.section}
      className="relative bg-[#2C1E16] text-[#F9F6F0]/80 pt-20 pb-10 border-t border-[#F9F6F0]/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Logo className="text-5xl" color="#E8C77B" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed font-light">
            A traditional Telugu family kitchen — serving slow food, family
            recipes, and warm hospitality since 1972.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Ic, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="w-10 h-10 rounded-full border border-[#F9F6F0]/20 flex items-center justify-center hover:bg-[#E8C77B] hover:text-[#2C1E16] hover:border-[#E8C77B] transition-colors"
              >
                <Ic size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#E8C77B] mb-5">
            Visit
          </p>
          <p className="text-sm font-light leading-relaxed">{CONTACT_INFO.address}</p>
          <p className="text-sm font-light mt-2">{CONTACT_INFO.phone}</p>
          <p className="text-sm font-light">{CONTACT_INFO.email}</p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#E8C77B] mb-5">
            Hours
          </p>
          <p className="text-sm font-light">{CONTACT_INFO.hoursWeek}</p>
          <p className="text-sm font-light">{CONTACT_INFO.hoursWeekend}</p>
          <a
            href={WHATSAPP_RESERVE}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-sm link-underline text-[#E8C77B]"
          >
            Reserve via WhatsApp →
          </a>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-[#F9F6F0]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-[#F9F6F0]/40">
        <span>© {new Date().getFullYear()} Vantillu. All rights reserved.</span>
        <span>Crafted with tradition · Made in Hyderabad</span>
      </div>
    </footer>
  );
};

export default Footer;
