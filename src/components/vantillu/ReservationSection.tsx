import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Utensils, CheckCircle, Send, Sparkles } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/vantillu";

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "19:30",
    guests: "4",
    seatingArea: "Private Dining Room",
    mealType: "Dinner",
    specialOccasion: "",
    specialRequests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let msg = `*🍷 TABLE RESERVATION REQUEST - VANTILLU (Kamareddy)*\n`;
    msg += `------------------------------------\n`;
    msg += `*Guest Name:* ${formData.name}\n`;
    msg += `*Contact Phone:* ${formData.phone}\n`;
    if (formData.email) msg += `*Email:* ${formData.email}\n`;
    msg += `*Date:* ${formData.date || "Today"}\n`;
    msg += `*Time:* ${formData.time}\n`;
    msg += `*Number of Guests:* ${formData.guests} Guests\n`;
    msg += `*Meal:* ${formData.mealType}\n`;
    msg += `*Preferred Seating:* ${formData.seatingArea}\n`;
    if (formData.specialOccasion) msg += `*Occasion:* ${formData.specialOccasion}\n`;
    if (formData.specialRequests) msg += `*Special Requests:* ${formData.specialRequests}\n`;
    msg += `------------------------------------\n`;
    msg += `_Please confirm my table availability. Looking forward to our visit!_`;

    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, "_blank");

    setSubmitted(true);
  };

  return (
    <section id="reservations" className="relative py-28 md:py-36 bg-[#2C1E16] text-[#F9F6F0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Information */}
        <div className="lg:col-span-5 space-y-6">
          <p className="text-[#E8C77B] text-[11px] uppercase tracking-[0.35em] font-medium">
            — Table Reservations
          </p>
          <h2
            className="font-serif-display leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Reserve your seat<br />
            <span className="italic text-[#E8C77B]">at the family table.</span>
          </h2>
          <p className="text-[#F9F6F0]/75 font-light text-base leading-relaxed">
            Planning a relaxed family feast, birthday party, or an intimate dinner in Kamareddy?
            Book in advance to ensure your preferred seating, including our dedicated Private
            Dining Room.
          </p>

          <div className="space-y-4 pt-4 border-t border-[#F9F6F0]/15">
            <div className="flex items-center gap-3 text-sm text-[#F9F6F0]/90">
              <Sparkles size={18} className="text-[#E8C77B] shrink-0" />
              <span>Private AC Dining Room available for groups & meetings</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#F9F6F0]/90">
              <Clock size={18} className="text-[#E8C77B] shrink-0" />
              <span>Instant confirmation via WhatsApp concierge</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#F9F6F0]/90">
              <Utensils size={18} className="text-[#E8C77B] shrink-0" />
              <span>Fresh cooking made to order with zero food coloring</span>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-[#F9F6F0] text-[#2C1E16] p-8 md:p-10 rounded-3xl shadow-2xl border border-[#E5D8C8]">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-serif-display text-3xl font-semibold text-[#5C1A1B]">
                  Reservation Request Sent!
                </h3>
                <p className="text-sm text-[#5A453A] max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your reservation details for{" "}
                  <strong>{formData.guests} guests</strong> on <strong>{formData.date || "Today"}</strong> at{" "}
                  <strong>{formData.time}</strong> have been opened in WhatsApp. Our host will confirm your table shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#5C1A1B] text-[#F9F6F0] text-xs uppercase tracking-wider font-medium hover:bg-[#4a1516] transition-colors"
                >
                  Make Another Reservation
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#5A453A] font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#E5D8C8] bg-white focus:outline-hidden focus:border-[#5C1A1B] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5A453A] font-semibold mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9988776655"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#E5D8C8] bg-white focus:outline-hidden focus:border-[#5C1A1B] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[#5A453A] font-semibold mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-[#E5D8C8] bg-white focus:outline-hidden focus:border-[#5C1A1B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5A453A] font-semibold mb-1">
                      Time *
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-[#E5D8C8] bg-white focus:outline-hidden focus:border-[#5C1A1B]"
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-[#5A453A] font-semibold mb-1">
                      Guests *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-[#E5D8C8] bg-white focus:outline-hidden focus:border-[#5C1A1B]"
                    >
                      <option value="1">1 Person (Solo)</option>
                      <option value="2">2 People (Couple)</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6-8">6–8 People (Family)</option>
                      <option value="9-12">9–12 People (Group)</option>
                      <option value="15+">15+ People (Private Hall)</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#5A453A] font-semibold mb-1">
                      Seating Preference
                    </label>
                    <select
                      value={formData.seatingArea}
                      onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-[#E5D8C8] bg-white focus:outline-hidden focus:border-[#5C1A1B]"
                    >
                      <option value="Private Dining Room">Private Dining Room (AC)</option>
                      <option value="Main Family Hall">Main Family Hall</option>
                      <option value="Quiet Corner">Quiet Corner (Solo/Couples)</option>
                      <option value="Window Booth">Window Booth</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#5A453A] font-semibold mb-1">
                      Meal Session
                    </label>
                    <select
                      value={formData.mealType}
                      onChange={(e) => setFormData({ ...formData, mealType: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-[#E5D8C8] bg-white focus:outline-hidden focus:border-[#5C1A1B]"
                    >
                      <option value="Lunch">Lunch (12:00 PM – 4:00 PM)</option>
                      <option value="Dinner">Dinner (7:00 PM – 11:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#5A453A] font-semibold mb-1">
                      Occasion (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Birthday, Anniversary, Business Lunch"
                      value={formData.specialOccasion}
                      onChange={(e) => setFormData({ ...formData, specialOccasion: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-[#E5D8C8] bg-white focus:outline-hidden focus:border-[#5C1A1B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5A453A] font-semibold mb-1">
                      Special Requests / Dietary Notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. High chair for baby, mild spice"
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-[#E5D8C8] bg-white focus:outline-hidden focus:border-[#5C1A1B]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-2 rounded-full bg-[#5C1A1B] text-[#F9F6F0] font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#4a1516] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Send size={15} />
                  <span>Confirm Table Reservation via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
