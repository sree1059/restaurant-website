import React, { useState } from "react";
import { motion } from "framer-motion";
import { Handshake, Send, CheckCircle2, Instagram, Award, Briefcase, Sparkles } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/vantillu";

export const Collaboration: React.FC = () => {
  const [collabData, setCollabData] = useState({
    name: "",
    orgOrHandle: "",
    phone: "",
    email: "",
    collabType: "Food Creator / Influencer",
    proposal: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let msg = `*🤝 PARTNERSHIP & COLLABORATION INQUIRY - VANTILLU (Kamareddy)*\n`;
    msg += `------------------------------------\n`;
    msg += `*Contact Name:* ${collabData.name}\n`;
    msg += `*Organization / Social Handle:* ${collabData.orgOrHandle || "Individual"}\n`;
    msg += `*Phone:* ${collabData.phone}\n`;
    if (collabData.email) msg += `*Email:* ${collabData.email}\n`;
    msg += `*Collaboration Category:* ${collabData.collabType}\n`;
    msg += `*Proposal / Message:* ${collabData.proposal}\n`;
    msg += `------------------------------------\n`;
    msg += `_Sent via Vantillu Website Collaboration Desk._`;

    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, "_blank");

    setSubmitted(true);
  };

  return (
    <section id="collaborate" className="relative py-28 md:py-36 bg-[#F9F6F0] text-[#2C1E16]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#C65D47] text-[11px] uppercase tracking-[0.35em] font-medium mb-3">
            — Partner With Us
          </p>
          <h2
            className="font-serif-display text-[#2C1E16] leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Collaborate with<br />
            <span className="italic text-[#5C1A1B]">Vantillu Kamareddy.</span>
          </h2>
          <p className="mt-5 text-[#5A453A] font-light text-base leading-relaxed">
            We are always eager to partner with passionate food creators, local farmers,
            corporate organizers, and wedding caterers who cherish authentic Telangana food heritage.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="bg-[#F2EBE1] p-6 rounded-2xl border border-[#E5D8C8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#5C1A1B] text-[#F9F6F0] flex items-center justify-center mb-4">
              <Instagram size={20} />
            </div>
            <h3 className="font-serif-display text-xl font-semibold mb-2">
              Food Creators & Influencers
            </h3>
            <p className="text-xs text-[#5A453A] leading-relaxed">
              We host food reviewers, culinary journalists, and content creators for tasting sessions
              and authentic kitchen behind-the-scenes stories.
            </p>
          </div>

          <div className="bg-[#F2EBE1] p-6 rounded-2xl border border-[#E5D8C8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#5C1A1B] text-[#F9F6F0] flex items-center justify-center mb-4">
              <Briefcase size={20} />
            </div>
            <h3 className="font-serif-display text-xl font-semibold mb-2">
              Event & Bulk Catering
            </h3>
            <p className="text-xs text-[#5A453A] leading-relaxed">
              Planning a celebration, office retreat, or family get-together in Kamareddy? We craft custom
              bulk catering menus with on-time delivery.
            </p>
          </div>

          <div className="bg-[#F2EBE1] p-6 rounded-2xl border border-[#E5D8C8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#5C1A1B] text-[#F9F6F0] flex items-center justify-center mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="font-serif-display text-xl font-semibold mb-2">
              Local Sourcing & Producers
            </h3>
            <p className="text-xs text-[#5A453A] leading-relaxed">
              We source desi country chicken, cold-pressed oils, wild mushrooms, and native chillies directly
              from verified regional producers.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-3xl border border-[#E5D8C8] shadow-xl">
          <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-[#E5D8C8]">
            <Handshake className="text-[#5C1A1B]" size={22} />
            <div>
              <h3 className="font-serif-display text-2xl font-semibold text-[#2C1E16]">
                Submit Collaboration Proposal
              </h3>
              <p className="text-xs text-[#5A453A]">
                Fill out the details below and our team will get back to you promptly.
              </p>
            </div>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center space-y-4"
            >
              <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="font-serif-display text-2xl font-semibold text-[#5C1A1B]">
                Proposal Sent Successfully!
              </h4>
              <p className="text-xs text-[#5A453A] max-w-md mx-auto">
                Thank you, <strong>{collabData.name}</strong>. Your collaboration details have been opened in WhatsApp.
                Our management will review your proposal and get in touch with you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full bg-[#5C1A1B] text-[#F9F6F0] text-xs uppercase tracking-wider font-medium hover:bg-[#4a1516] transition-colors"
              >
                Send Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#5A453A] font-semibold mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sneha Reddy"
                    value={collabData.name}
                    onChange={(e) => setCollabData({ ...collabData, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#E5D8C8] bg-[#F9F6F0] focus:outline-hidden focus:border-[#5C1A1B] text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[#5A453A] font-semibold mb-1">
                    Organization / Instagram Handle
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. @kamareddy_foodies or Spark Events"
                    value={collabData.orgOrHandle}
                    onChange={(e) => setCollabData({ ...collabData, orgOrHandle: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#E5D8C8] bg-[#F9F6F0] focus:outline-hidden focus:border-[#5C1A1B] text-xs"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#5A453A] font-semibold mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9849012345"
                    value={collabData.phone}
                    onChange={(e) => setCollabData({ ...collabData, phone: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#E5D8C8] bg-[#F9F6F0] focus:outline-hidden focus:border-[#5C1A1B] text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[#5A453A] font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. sneha@example.com"
                    value={collabData.email}
                    onChange={(e) => setCollabData({ ...collabData, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#E5D8C8] bg-[#F9F6F0] focus:outline-hidden focus:border-[#5C1A1B] text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#5A453A] font-semibold mb-1">
                  Collaboration Category *
                </label>
                <select
                  value={collabData.collabType}
                  onChange={(e) => setCollabData({ ...collabData, collabType: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-[#E5D8C8] bg-[#F9F6F0] focus:outline-hidden focus:border-[#5C1A1B] text-xs"
                >
                  <option value="Food Creator / Influencer">Food Creator / Influencer / Media</option>
                  <option value="Event / Party Bulk Catering">Event / Party Bulk Catering</option>
                  <option value="Local Produce / Spice Sourcing">Local Produce / Spice Sourcing</option>
                  <option value="Corporate Dining Partnership">Corporate Dining Partnership</option>
                  <option value="Culinary Workshop / Pop-up">Culinary Workshop / Pop-up</option>
                  <option value="Other">Other Proposal</option>
                </select>
              </div>

              <div>
                <label className="block text-[#5A453A] font-semibold mb-1">
                  Proposal Details & Requirements *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share a brief overview of your proposal, dates, expected guest count, or deliverables..."
                  value={collabData.proposal}
                  onChange={(e) => setCollabData({ ...collabData, proposal: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-[#E5D8C8] bg-[#F9F6F0] focus:outline-hidden focus:border-[#5C1A1B] text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#5C1A1B] text-[#F9F6F0] font-medium text-xs uppercase tracking-wider hover:bg-[#4a1516] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Send size={14} />
                <span>Submit Collaboration Proposal via WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
