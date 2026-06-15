/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, Sparkles, Check, Send, Award, AwardIcon, Sparkle, UserCheck } from 'lucide-react';
import { WORKSHOP_DETAIL, CLIENT_INFO } from '../data';

export default function WorkshopBanner() {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userMode, setUserMode] = useState<'Online (Zoom)' | 'Offline (CTM, Ahmedabad)'>('Online (Zoom)');
  const [userExp, setUserExp] = useState('Beginner');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Seat booking calculation simulation
  const [remainingSeats, setRemainingSeats] = useState(12);

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userPhone) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setRemainingSeats(prev => Math.max(11, prev - 1));
    }, 1500);
  };

  const generateWhatsAppRSVP = () => {
    const text = encodeURIComponent(
      `Hello Sapna, I just registered for your "Kumkum & Gud Mehndi Workshop" on the demo website!\n\n` +
      `👤 Name: ${userName}\n` +
      `📞 Phone: ${userPhone}\n` +
      `🌐 Study Mode: ${userMode}\n` +
      `🎓 Experience Level: ${userExp}\n\n` +
      `Please let me know the GPay/PhonePe number to pay the ₹${WORKSHOP_DETAIL.fees} registration fee!`
    );
    return `${CLIENT_INFO.whatsappUrlPrimary}?text=${text}`;
  };

  return (
    <section id="workshop" className="py-24 bg-gradient-to-b from-[#FAF6EE] to-[#FAF6EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="workshop-top-meta" className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mehndi-gold/15 text-mehndi-maroon text-xs tracking-wider uppercase font-bold mb-3">
            <Calendar className="w-3.5 h-3.5 text-mehndi-gold" />
            <span>Masterclass Workshop</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-mehndi-maroon tracking-wider mb-4">
            Live Henna Training Event
          </h2>
          <div className="w-16 h-1 bg-mehndi-gold mx-auto mb-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-neutral-700">
            Gain complete mastery of our secret natural compounding recipes. Learn the science of rich terracotta stains without toxic chemical preservatives.
          </p>
        </div>

        {/* Highlight Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: Workshop Highlights & Schedule Info (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-mehndi-gold/5 rounded-bl-full pointer-events-none" />
              
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-mehndi-gold uppercase block mb-1">
                  EXCLUSIVE MASTERCLASS SYLLABUS
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-mehndi-maroon mb-4">
                  {WORKSHOP_DETAIL.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 mb-6 italic font-serif">
                  &ldquo;{WORKSHOP_DETAIL.subtitle}&rdquo;
                </p>

                {/* Grid schedule details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-mehndi-terracotta shrink-0" />
                    <div>
                      <span className="block text-[9px] uppercase font-bold tracking-widest text-neutral-400">Date</span>
                      <span className="text-xs sm:text-sm font-bold text-neutral-800">{WORKSHOP_DETAIL.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-l border-none sm:border-l border-neutral-200 sm:pl-4">
                    <Clock className="w-5 h-5 text-mehndi-terracotta shrink-0" />
                    <div>
                      <span className="block text-[9px] uppercase font-bold tracking-widest text-neutral-400">Timings</span>
                      <span className="text-xs sm:text-sm font-bold text-neutral-800">{WORKSHOP_DETAIL.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-l border-none sm:border-l border-neutral-200 sm:pl-4">
                    <MapPin className="w-5 h-5 text-mehndi-terracotta shrink-0" />
                    <div>
                      <span className="block text-[9px] uppercase font-bold tracking-widest text-neutral-400">Location venue</span>
                      <span className="text-xs sm:text-sm font-bold text-neutral-800 shrink-none">CTM & Zoom</span>
                    </div>
                  </div>
                </div>

                {/* Checklist from the flyers */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-mehndi-maroon">
                    Workshop Highlights You will Learn:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {WORKSHOP_DETAIL.highlights.map((highlight, index) => (
                      <div key={index} className="flex gap-2 text-xs text-neutral-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional handouts bonuses */}
                <div className="border-t border-neutral-100 pt-6">
                  <span className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">
                    Bonus student additions:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {WORKSHOP_DETAIL.benefits.map((benefit, i) => (
                      <span key={i} className="text-[10px] sm:text-xs bg-mehndi-gold/15 text-mehndi-maroon font-bold px-3 py-1.5 rounded-lg border border-mehndi-gold/20">
                        ★ {benefit}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom fee display banner */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between bg-mehndi-maroon/5 p-4 rounded-xl">
                <div>
                  <span className="block text-[10px] tracking-wider uppercase font-semibold text-neutral-500">Premium Booking Fee</span>
                  <span className="text-2xl font-extrabold text-[#54170D] font-mono">₹{WORKSHOP_DETAIL.fees}</span>
                  <span className="text-[10px] block text-neutral-400">All materials included</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-mehndi-terracotta font-extrabold block uppercase tracking-wider animate-pulse">
                    ⚠️ {remainingSeats} Seats Left
                  </span>
                  <span className="text-[10px] text-neutral-400">Out of 50 student limit</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Dynamic Reservation Interactive Form (Span 5) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#54170D]/10 shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-mehndi-maroon via-mehndi-gold to-mehndi-terracotta" />
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkle className="w-5 h-5 text-mehndi-gold animate-spin" />
                        <h4 className="font-display text-lg font-bold text-neutral-800">
                          Secure Your Seat Instantly
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                        Fill in your real contact details to compile an reservation order. You can choose to join virtually or physically at Ahmedabad. We’ll register your details and confirm via GPay directly!
                      </p>

                      <form onSubmit={handleRSVP} className="space-y-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">
                            Your Complete Name
                          </label>
                          <input
                            id="workshop-name-input"
                            type="text"
                            required
                            placeholder="e.g., Deepika Sharma"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 rounded-lg text-sm focus:outline-none focus:border-mehndi-gold placeholder:text-neutral-400 font-sans font-medium"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">
                            WhatsApp Contact Number
                          </label>
                          <input
                            id="workshop-phone-input"
                            type="password" // protects contact info
                            required
                            placeholder="e.g., +91 9876543210"
                            value={userPhone}
                            onChange={(e) => setUserPhone(e.target.value)}
                            className="w-full bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 rounded-lg text-sm focus:outline-none focus:border-mehndi-gold placeholder:text-neutral-400 font-sans font-medium"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">
                            Choose Learning Mode
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              id="mode-picker-online"
                              type="button"
                              onClick={() => setUserMode('Online (Zoom)')}
                              className={`py-2 px-3 rounded-lg text-xs font-semibold uppercase text-center border transition-all cursor-pointer ${
                                userMode === 'Online (Zoom)'
                                  ? 'bg-mehndi-maroon text-white border-mehndi-gold'
                                  : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                              }`}
                            >
                              Online Zoom
                            </button>
                            <button
                              id="mode-picker-offline"
                              type="button"
                              onClick={() => setUserMode('Offline (CTM, Ahmedabad)')}
                              className={`py-2 px-3 rounded-lg text-xs font-semibold uppercase text-center border transition-all cursor-pointer ${
                                userMode === 'Offline (CTM, Ahmedabad)'
                                  ? 'bg-mehndi-maroon text-white border-mehndi-gold'
                                  : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                              }`}
                            >
                              Offline CTM
                            </button>
                          </div>
                          <span className="text-[10px] text-neutral-400 mt-1 block">
                            {userMode === 'Online (Zoom)'
                              ? '🎥 Streaming details will be sent with student certificates!'
                              : '📍 Address: Offline Venue CTM Regional Studio, Ahmedabad.'}
                          </span>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">
                            Your Mehndi Experience Level
                          </label>
                          <select
                            id="experience-dropdown"
                            value={userExp}
                            onChange={(e) => setUserExp(e.target.value)}
                            className="w-full bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 rounded-lg text-sm focus:outline-none focus:border-mehndi-gold font-sans font-medium text-neutral-800"
                          >
                            <option value="Beginner">A absolute Beginner (Never held a cone)</option>
                            <option value="Amateur">Self-Taught / Amateur (Slight line control)</option>
                            <option value="Professional">Hobby Artist or Professional (Bridal plans)</option>
                          </select>
                        </div>

                        <button
                          id="submit-rsvp-btn"
                          type="submit"
                          disabled={isLoading}
                          className="w-full py-3.5 rounded-xl bg-mehndi-maroon hover:bg-mehndi-terracotta text-white font-bold text-sm tracking-widest uppercase shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 border border-mehndi-gold/20"
                        >
                          {isLoading ? (
                            <>
                              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              <span>Reserving, Please wait...</span>
                            </>
                          ) : (
                            <>
                              <UserCheck className="w-4 h-4 text-mehndi-gold" />
                              <span>Reserve My Spot Now</span>
                            </>
                          )}
                        </button>
                      </form>
                    </div>

                    <span className="block text-center text-[10px] text-neutral-400 mt-4">
                      📞 Standard registration queries can also call: {CLIENT_INFO.primaryPhone}
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border-2 border-emerald-500/20">
                        <Check className="w-8 h-8 font-extrabold" />
                      </div>
                      
                      <h4 className="font-display text-2xl font-bold text-[#54170D] mb-1">
                        Seat Pre-Reserved!
                      </h4>
                      <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold mb-6">
                        Reservation Reference: #SMW-{Math.floor(1000 + Math.random() * 9000)}
                      </p>

                      <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 text-left space-y-2 mb-6">
                        <p className="text-xs text-neutral-600">
                          Thank you <strong>{userName}</strong>! We have mapped down your reservation for the <strong>{userMode}</strong> batch.
                        </p>
                        <p className="text-xs text-neutral-500">
                          To finalize your entry, please click the button below to text Sapna on WhatsApp and complete the ₹{WORKSHOP_DETAIL.fees} fee transfer via GPay/PhonePe to <strong>{CLIENT_INFO.primaryPhone}</strong>.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <a
                        id="rsvp-wa-success-btn"
                        href={generateWhatsAppRSVP()}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-sm tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-green-950/20"
                      >
                        <Send className="w-4 h-4 rotate-45" />
                        <span>Coordinate Payment via WhatsApp</span>
                      </a>
                      <button
                        id="rsvp-reset-btn"
                        onClick={() => {
                          setIsSubmitted(false);
                          setUserName('');
                          setUserPhone('');
                        }}
                        className="text-xs text-neutral-400 hover:text-neutral-700 font-semibold uppercase tracking-wider block mx-auto py-2 cursor-pointer"
                      >
                        ← Register Another Person
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
