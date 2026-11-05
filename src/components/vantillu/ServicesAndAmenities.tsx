import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Car,
  Bike,
  Store,
  Utensils,
  Sun,
  Users,
  CreditCard,
  Baby,
  SquareParking,
  Sparkles,
  CheckCircle2,
  Wifi,
  Droplets,
  Wind,
  Accessibility,
  Zap,
  CalendarCheck,
} from "lucide-react";
import { RESTAURANT_SERVICES_AMENITIES } from "@/lib/vantillu";
import { useReservation } from "@/context/ReservationContext";

export const ServicesAndAmenities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { openReserveModal } = useReservation();

  const categories = [
    { id: "all", label: "All Features" },
    { id: "amenities", label: "Amenities & Facilities" },
    { id: "services", label: "Service Options" },
    { id: "dining", label: "Dining & Timings" },
    { id: "offerings", label: "Special Offerings" },
    { id: "payments", label: "Payments & Parking" },
  ];

  const {
    serviceOptions,
    popularFor,
    offerings,
    diningOptions,
    amenities,
    atmosphere,
    crowd,
    payments,
    children,
    parking,
  } = RESTAURANT_SERVICES_AMENITIES;

  const quickAmenityBadges = [
    { label: "Clean Restroom", icon: CheckCircle2, desc: "Sanitized Male & Female" },
    { label: "Handwash Station", icon: Droplets, desc: "Liquid Soap & Hand Dryer" },
    { label: "Central AC Dining", icon: Wind, desc: "Private Dining Available" },
    { label: "Free High-Speed Wi-Fi", icon: Wifi, desc: "Guest Internet Access" },
    { label: "Pure RO Water", icon: Droplets, desc: "UV Filtered & Safe" },
    { label: "High Chairs", icon: Baby, desc: "Toddlers & Kids Friendly" },
    { label: "Wheelchair Ramp", icon: Accessibility, desc: "Step-free Ground Access" },
    { label: "100% Power Backup", icon: Zap, desc: "Generator Supported" },
    { label: "Free Parking", icon: SquareParking, desc: "Dedicated Lot & Street" },
  ];

  return (
    <section id="services" className="relative py-28 md:py-36 bg-[#F2EBE1] text-[#2C1E16]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-[#C65D47] text-[11px] uppercase tracking-[0.35em] font-medium mb-4">
            — Guest Comfort, Amenities & Conveniences
          </p>
          <h2
            className="font-serif-display text-[#2C1E16] leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Thoughtful amenities &amp; services for<br />
            <span className="italic text-[#5C1A1B]">every dining occasion.</span>
          </h2>
          <p className="mt-6 text-[#5A453A] font-light text-base leading-relaxed">
            From spotless sanitized restrooms and central air-conditioned family rooms to
            free parking and kerbside takeout, Vantillu delivers genuine Telangana hospitality
            with modern dining conveniences right in Kamareddy.
          </p>
        </div>

        {/* Featured Amenities Quick Strip */}
        <div className="mb-12 bg-white/70 backdrop-blur-xs p-6 md:p-8 rounded-2xl border border-[#E5D8C8] shadow-xs">
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#E5D8C8]">
            <div className="flex items-center gap-2.5">
              <Sparkles size={18} className="text-[#5C1A1B]" />
              <h3 className="font-serif-display text-xl text-[#2C1E16]">
                Restaurant Amenities &amp; Facilities
              </h3>
            </div>
            <span className="text-[11px] font-medium uppercase tracking-wider text-[#C65D47] bg-[#C65D47]/10 px-3 py-1 rounded-full">
              Full Guest Comfort
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {quickAmenityBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 bg-[#F9F6F0] rounded-xl border border-[#E5D8C8]/80 flex flex-col justify-between hover:border-[#5C1A1B] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#5C1A1B]/10 text-[#5C1A1B] flex items-center justify-center mb-2">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-[#2C1E16]">{badge.label}</h4>
                    <p className="text-[11px] text-[#5A453A]/80 font-light mt-0.5">{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-8 mb-6 border-b border-[#E5D8C8]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "bg-[#5C1A1B] text-[#F9F6F0] shadow-md"
                  : "bg-white/80 text-[#5A453A] border border-[#E5D8C8] hover:bg-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Amenities & Facilities (Prominent Dedicated Card) */}
          {(activeTab === "all" || activeTab === "amenities") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-xs p-7 rounded-2xl border-2 border-[#5C1A1B]/20 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#5C1A1B] text-[#F9F6F0] flex items-center justify-center mb-5">
                  <Sparkles size={20} />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif-display text-2xl text-[#2C1E16]">
                    Amenities &amp; Facilities
                  </h3>
                  <span className="text-[10px] uppercase font-bold text-[#5C1A1B] bg-[#5C1A1B]/10 px-2 py-0.5 rounded">
                    Included
                  </span>
                </div>
                <ul className="space-y-3.5">
                  {amenities.map((opt) => (
                    <li key={opt.title} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#5C1A1B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-xs text-[#2C1E16]">{opt.title}:</span>{" "}
                        <span className="text-xs text-[#5A453A] font-light">{opt.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5D8C8]/60 text-[11px] text-[#5C1A1B] font-semibold tracking-wide">
                ✓ Restrooms • Handwash • Wi-Fi • AC • Pure RO • Power Backup
              </div>
            </motion.div>
          )}

          {/* Service Options */}
          {(activeTab === "all" || activeTab === "services") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xs p-7 rounded-2xl border border-[#E5D8C8] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#5C1A1B]/10 text-[#5C1A1B] flex items-center justify-center mb-5">
                  <Bike size={20} />
                </div>
                <h3 className="font-serif-display text-2xl text-[#2C1E16] mb-3">
                  Service Options
                </h3>
                <ul className="space-y-3.5">
                  {serviceOptions.map((opt) => (
                    <li key={opt.title} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#5C1A1B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-xs text-[#2C1E16]">{opt.title}:</span>{" "}
                        <span className="text-xs text-[#5A453A] font-light">{opt.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5D8C8]/60 text-[11px] text-[#C65D47] font-medium tracking-wide">
                ✓ Kerbside Pickup • Delivery • Takeaway • Dine-In
              </div>
            </motion.div>
          )}

          {/* Popular For & Dining Options */}
          {(activeTab === "all" || activeTab === "dining") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xs p-7 rounded-2xl border border-[#E5D8C8] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#5C1A1B]/10 text-[#5C1A1B] flex items-center justify-center mb-5">
                  <Sun size={20} />
                </div>
                <h3 className="font-serif-display text-2xl text-[#2C1E16] mb-3">
                  Dining &amp; Timings
                </h3>
                <ul className="space-y-3.5">
                  {popularFor.map((opt) => (
                    <li key={opt.title} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#5C1A1B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-xs text-[#2C1E16]">{opt.title}:</span>{" "}
                        <span className="text-xs text-[#5A453A] font-light">{opt.desc}</span>
                      </div>
                    </li>
                  ))}
                  {diningOptions.map((opt) => (
                    <li key={opt.title} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#5C1A1B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-xs text-[#2C1E16]">{opt.title}:</span>{" "}
                        <span className="text-xs text-[#5A453A] font-light">{opt.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5D8C8]/60 text-[11px] text-[#C65D47] font-medium tracking-wide">
                ✓ Lunch • Dinner • Solo Dining • Table &amp; Counter Service
              </div>
            </motion.div>
          )}

          {/* Special Offerings */}
          {(activeTab === "all" || activeTab === "offerings") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xs p-7 rounded-2xl border border-[#E5D8C8] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#5C1A1B]/10 text-[#5C1A1B] flex items-center justify-center mb-5">
                  <Utensils size={20} />
                </div>
                <h3 className="font-serif-display text-2xl text-[#2C1E16] mb-3">
                  Offerings &amp; Cuisines
                </h3>
                <ul className="space-y-3">
                  {offerings.map((opt) => (
                    <li key={opt.title} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#5C1A1B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-xs text-[#2C1E16]">{opt.title}:</span>{" "}
                        <span className="text-xs text-[#5A453A] font-light">{opt.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5D8C8]/60 text-[11px] text-[#C65D47] font-medium tracking-wide">
                ✓ Private Dining • Late Night • Vegan &amp; Veg • Small Plates
              </div>
            </motion.div>
          )}

          {/* Atmosphere, Crowd & Children */}
          {(activeTab === "all" || activeTab === "amenities") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xs p-7 rounded-2xl border border-[#E5D8C8] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#5C1A1B]/10 text-[#5C1A1B] flex items-center justify-center mb-5">
                  <Users size={20} />
                </div>
                <h3 className="font-serif-display text-2xl text-[#2C1E16] mb-3">
                  Atmosphere &amp; Crowd
                </h3>
                <ul className="space-y-3.5">
                  {atmosphere.map((opt) => (
                    <li key={opt.title} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#5C1A1B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-xs text-[#2C1E16]">{opt.title}:</span>{" "}
                        <span className="text-xs text-[#5A453A] font-light">{opt.desc}</span>
                      </div>
                    </li>
                  ))}
                  {crowd.map((opt) => (
                    <li key={opt.title} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#5C1A1B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-xs text-[#2C1E16]">{opt.title}:</span>{" "}
                        <span className="text-xs text-[#5A453A] font-light">{opt.desc}</span>
                      </div>
                    </li>
                  ))}
                  {children.map((opt) => (
                    <li key={opt.title} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#5C1A1B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-xs text-[#2C1E16]">{opt.title}:</span>{" "}
                        <span className="text-xs text-[#5A453A] font-light">{opt.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5D8C8]/60 text-[11px] text-[#C65D47] font-medium tracking-wide">
                ✓ Casual &amp; Quiet • Family Friendly • Groups • Kids Approved
              </div>
            </motion.div>
          )}

          {/* Payment Methods & Parking */}
          {(activeTab === "all" || activeTab === "payments") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xs p-7 rounded-2xl border border-[#E5D8C8] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#5C1A1B]/10 text-[#5C1A1B] flex items-center justify-center mb-5">
                  <CreditCard size={20} />
                </div>
                <h3 className="font-serif-display text-2xl text-[#2C1E16] mb-3">
                  Payments &amp; Parking
                </h3>
                <ul className="space-y-3.5">
                  {payments.map((opt) => (
                    <li key={opt.title} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#5C1A1B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-xs text-[#2C1E16]">{opt.title}:</span>{" "}
                        <span className="text-xs text-[#5A453A] font-light">{opt.desc}</span>
                      </div>
                    </li>
                  ))}
                  {parking.map((opt) => (
                    <li key={opt.title} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#5C1A1B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-xs text-[#2C1E16]">{opt.title}:</span>{" "}
                        <span className="text-xs text-[#5A453A] font-light">{opt.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5D8C8]/60 text-[11px] text-[#C65D47] font-medium tracking-wide">
                ✓ Google Pay • Tap-to-Pay • Cards • Free Lot &amp; Street Parking
              </div>
            </motion.div>
          )}
        </div>

        {/* Action Callout: Table Reservation Modal Trigger */}
        <div className="mt-14 bg-gradient-to-r from-[#5C1A1B] to-[#3f1213] rounded-2xl p-8 md:p-10 text-[#F9F6F0] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8C77B]">
              Experience Vantillu Firsthand
            </span>
            <h3 className="font-serif-display text-2xl md:text-3xl font-normal">
              Planning lunch, family dinner, or a celebration?
            </h3>
            <p className="text-xs md:text-sm text-[#F9F6F0]/80 font-light max-w-xl">
              Enjoy our full amenities: climate-controlled private dining, clean restrooms,
              high chairs for kids, and complimentary parking right at Vikas Nagar Colony.
            </p>
          </div>

          <button
            type="button"
            onClick={openReserveModal}
            className="shrink-0 px-8 py-3.5 rounded-full bg-[#E8C77B] hover:bg-[#F9F6F0] text-[#2C1E16] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer flex items-center gap-2"
          >
            <CalendarCheck size={16} />
            <span>Book Table</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesAndAmenities;
