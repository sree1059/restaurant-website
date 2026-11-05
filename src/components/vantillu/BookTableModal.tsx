import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  Users,
  Utensils,
  Sparkles,
  Phone,
  User,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { useReservation } from "@/context/ReservationContext";
import { WHATSAPP_NUMBER } from "@/lib/vantillu";

export const BookTableModal: React.FC = () => {
  const { isReserveOpen, closeReserveModal } = useReservation();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("13:00");
  const [mealSession, setMealSession] = useState<"lunch" | "dinner">("lunch");
  const [guests, setGuests] = useState<number>(4);
  const [seatingPreference, setSeatingPreference] = useState<string>("Main Dining Hall");
  const [occasion, setOccasion] = useState<string>("Casual Dining");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const seatingOptions = [
    "Main Dining Hall",
    "Air-Conditioned Private Dining",
    "Family Booth",
    "Quiet Corner",
  ];

  const occasions = [
    "Casual Dining",
    "Family Reunion",
    "Birthday Celebration",
    "Anniversary",
    "Business / Meeting",
  ];

  const handleTimeSlotSelect = (t: string, session: "lunch" | "dinner") => {
    setTime(t);
    setMealSession(session);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let msg = `*🍽️ TABLE RESERVATION REQUEST - VANTILLU (Kamareddy)*\n`;
    msg += `------------------------------------\n`;
    msg += `*Name:* ${fullName || "Guest"}\n`;
    msg += `*Phone:* ${phone}\n`;
    msg += `*Date:* ${date}\n`;
    msg += `*Time Slot:* ${time} (${mealSession.toUpperCase()})\n`;
    msg += `*Guests:* ${guests} Persons\n`;
    msg += `*Seating Preference:* ${seatingPreference}\n`;
    msg += `*Occasion:* ${occasion}\n`;
    if (specialRequests.trim()) {
      msg += `*Special Requests / Notes:* ${specialRequests.trim()}\n`;
    }
    msg += `------------------------------------\n`;
    msg += `_Please confirm my table reservation. Thank you!_`;

    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, "_blank");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      closeReserveModal();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isReserveOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeReserveModal}
            className="fixed inset-0 bg-[#2C1E16]/75 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative w-full max-w-2xl bg-[#F9F6F0] rounded-2xl shadow-2xl border border-[#E5D8C8] overflow-hidden my-8 z-10"
          >
            {/* Header */}
            <div className="bg-[#5C1A1B] text-[#F9F6F0] px-6 py-5 flex items-center justify-between">
              <div>
                <p className="text-[#E8C77B] text-[10px] uppercase tracking-[0.3em] font-medium">
                  Vantillu · Kamareddy
                </p>
                <h3 className="font-serif-display text-2xl md:text-3xl font-normal mt-0.5">
                  Book a Table
                </h3>
              </div>
              <button
                type="button"
                onClick={closeReserveModal}
                className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close reservation modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            {isSubmitted ? (
              <div className="p-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="font-serif-display text-2xl text-[#2C1E16]">
                  Reservation Request Sent!
                </h4>
                <p className="text-sm text-[#5A453A] max-w-md mx-auto">
                  We have opened WhatsApp to confirm your table for{" "}
                  <strong>{guests} guests</strong> on <strong>{date}</strong> at{" "}
                  <strong>{time}</strong>. Our team will message you back shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2C1E16] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <User size={14} className="text-[#5C1A1B]" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5D8C8] bg-white text-sm text-[#2C1E16] focus:outline-hidden focus:border-[#5C1A1B]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2C1E16] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Phone size={14} className="text-[#5C1A1B]" />
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5D8C8] bg-white text-sm text-[#2C1E16] focus:outline-hidden focus:border-[#5C1A1B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Date */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2C1E16] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#5C1A1B]" />
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#E5D8C8] bg-white text-sm text-[#2C1E16] focus:outline-hidden focus:border-[#5C1A1B]"
                    />
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2C1E16] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Users size={14} className="text-[#5C1A1B]" />
                      Guests *
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="1"
                        max="50"
                        required
                        value={guests}
                        onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full px-3 py-2 rounded-lg border border-[#E5D8C8] bg-white text-sm font-semibold text-center text-[#2C1E16] focus:outline-hidden focus:border-[#5C1A1B]"
                      />
                    </div>
                  </div>

                  {/* Meal Session */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2C1E16] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Clock size={14} className="text-[#5C1A1B]" />
                      Meal Session
                    </label>
                    <div className="grid grid-cols-2 gap-1 bg-[#F2EBE1] p-1 rounded-lg">
                      <button
                        type="button"
                        onClick={() => {
                          setMealSession("lunch");
                          setTime("13:00");
                        }}
                        className={`py-1.5 text-xs font-semibold rounded transition-colors ${
                          mealSession === "lunch"
                            ? "bg-[#5C1A1B] text-white"
                            : "text-[#5A453A] hover:bg-white/60"
                        }`}
                      >
                        Lunch
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setMealSession("dinner");
                          setTime("20:00");
                        }}
                        className={`py-1.5 text-xs font-semibold rounded transition-colors ${
                          mealSession === "dinner"
                            ? "bg-[#5C1A1B] text-white"
                            : "text-[#5A453A] hover:bg-white/60"
                        }`}
                      >
                        Dinner
                      </button>
                    </div>
                  </div>
                </div>

                {/* Popular Time Slots */}
                <div>
                  <span className="text-[11px] font-semibold text-[#5A453A] uppercase tracking-wider block mb-2">
                    Select Exact Time Slot:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {(mealSession === "lunch"
                      ? ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00"]
                      : ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"]
                    ).map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                          time === slot
                            ? "bg-[#5C1A1B] text-white border-[#5C1A1B]"
                            : "bg-white text-[#2C1E16] border-[#E5D8C8] hover:border-[#5C1A1B]"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Seating and Occasion */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2C1E16] uppercase tracking-wider mb-1.5">
                      Seating Area
                    </label>
                    <select
                      value={seatingPreference}
                      onChange={(e) => setSeatingPreference(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#E5D8C8] bg-white text-xs text-[#2C1E16] focus:outline-hidden focus:border-[#5C1A1B]"
                    >
                      {seatingOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C1E16] uppercase tracking-wider mb-1.5">
                      Occasion
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#E5D8C8] bg-white text-xs text-[#2C1E16] focus:outline-hidden focus:border-[#5C1A1B]"
                    >
                      {occasions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold text-[#2C1E16] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <MessageSquare size={14} className="text-[#5C1A1B]" />
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need high chair for child, quiet booth, Jain preparation, birthday cake table"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg border border-[#E5D8C8] bg-white text-xs text-[#2C1E16] focus:outline-hidden focus:border-[#5C1A1B]"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-[0.99] cursor-pointer"
                  >
                    <span>Confirm &amp; Send on WhatsApp</span>
                  </button>
                  <p className="mt-2 text-center text-[11px] text-[#5A453A]">
                    Free instant booking · No deposit required · Vikas Nagar Colony, Kamareddy
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookTableModal;
