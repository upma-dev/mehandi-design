/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Phone, Instagram, Send, MapPin, Mail, ShieldCheck, Heart, User } from 'lucide-react';
import { CLIENT_INFO } from '../data';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryText, setInquiryText] = useState('');
  const [sentInquirySuccess, setSentInquirySuccess] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryText) return;

    setSentInquirySuccess(true);
    setTimeout(() => {
      // open WhatsApp prefilled template query
      const msg = encodeURIComponent(
        `Hello Sapna Mehndi Art, I am custom-submitting an inquiry through your portal!\n\n💡 Name: ${inquiryName}\n📝 Inquiry: ${inquiryText}\n\nPlease help me coordinate my booking details!`
      );
      window.open(`${CLIENT_INFO.whatsappUrlPrimary}?text=${msg}`, '_blank');
      setInquiryName('');
      setInquiryText('');
      setSentInquirySuccess(false);
    }, 1000);
  };

  return (
    <footer id="contact" className="bg-[#180704] border-t border-mehndi-gold/25 relative text-mehndi-cream font-sans">
      <div className="absolute inset-0 bg-pattern opacity-5" />

      {/* Primary Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* BLOCK 1: BRAND BIO (Span 4) */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full border border-mehndi-gold flex items-center justify-center bg-[#54170D] overflow-hidden">
              <span className="font-display text-lg font-bold text-mehndi-gold">S</span>
            </div>
            <div>
              <span className="block font-display text-base tracking-widest text-[#FAF6EE] font-bold">
                SAPNA
              </span>
              <span className="block text-[10px] tracking-widest text-mehndi-gold font-sans uppercase font-medium">
                Mehndi Artistry
              </span>
            </div>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed font-sans">
            Meticulous bridal patterns, traditional blueprint measurements, and premium organic-only Kumkum & Gud ingredients formulated fresh in our kitchen. Proudly serving brides in Ahmedabad and beyond.
          </p>

          <p id="ig-link-desc" className="text-xs text-neutral-400">
            Find us on Instagram for daily updates: <br />
            <a
              id="footer-insta-tag"
              href={CLIENT_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-mehndi-gold font-semibold hover:underline inline-flex items-center gap-1 mt-1.5"
            >
              <Instagram className="w-4 h-4 shrink-0" />
              <span>{CLIENT_INFO.instagram}</span>
            </a>
          </p>

          <div className="flex items-center gap-1.5 text-xs text-neutral-400 pt-3">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Skin-safe, 100% Preservative-Free</span>
          </div>
        </div>

        {/* BLOCK 2: QUICK NAVIGATION LINKS (Span 2) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-display text-sm font-bold tracking-widest text-mehndi-gold uppercase border-b border-mehndi-gold/15 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                id="footer-link-home"
                onClick={() => onScrollTo('home')}
                className="text-neutral-400 hover:text-white hover:underline transition-colors block text-left cursor-pointer"
              >
                Top Home
              </button>
            </li>
            <li>
              <button
                id="footer-link-designs"
                onClick={() => onScrollTo('designs')}
                className="text-neutral-400 hover:text-white hover:underline transition-colors block text-left cursor-pointer"
              >
                Intricate Designs
              </button>
            </li>
            <li>
              <button
                id="footer-link-cones"
                onClick={() => onScrollTo('cones')}
                className="text-neutral-400 hover:text-white hover:underline transition-colors block text-left cursor-pointer"
              >
                Mehndi Cones
              </button>
            </li>
            <li>
              <button
                id="footer-link-workshop"
                onClick={() => onScrollTo('workshop')}
                className="text-neutral-400 hover:text-white hover:underline transition-colors block text-left cursor-pointer"
              >
                Event Workshop
              </button>
            </li>
            <li>
              <button
                id="footer-link-reviews"
                onClick={() => onScrollTo('reviews')}
                className="text-neutral-400 hover:text-white hover:underline transition-colors block text-left cursor-pointer"
              >
                Client Reviews
              </button>
            </li>
          </ul>
        </div>

        {/* BLOCK 3: PHYSICAL ADDRESS & PHONES (Span 3) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-display text-sm font-bold tracking-widest text-mehndi-gold uppercase border-b border-mehndi-gold/15 pb-2">
            Studio Contact
          </h4>
          
          <div className="space-y-4 text-xs font-sans">
            <div className="flex gap-2 text-neutral-400 leading-relaxed">
              <MapPin className="w-5 h-5 text-mehndi-terracotta shrink-0" />
              <div>
                <span className="block font-bold text-white text-[10px] uppercase tracking-wider">Studio Location Address</span>
                <span>{CLIENT_INFO.address}</span>
              </div>
            </div>

            <div className="flex gap-2 text-neutral-400">
              <Phone className="w-5 h-5 text-mehndi-terracotta shrink-0" />
              <div>
                <span className="block font-bold text-white text-[10px] uppercase tracking-wider">Call Directly</span>
                <a href={`tel:${CLIENT_INFO.primaryPhone}`} className="text-white font-mono font-bold hover:underline">
                  +91 {CLIENT_INFO.primaryPhone}
                </a>
                <span className="block text-[10px] text-neutral-500">Alt: +91 {CLIENT_INFO.secondaryPhone}</span>
              </div>
            </div>

            <div className="flex gap-2 text-neutral-400">
              <Mail className="w-5 h-5 text-mehndi-terracotta shrink-0" />
              <div>
                <span className="block font-bold text-white text-[10px] uppercase tracking-wider">Email Inquiry</span>
                <span>sapnarout7354@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 4: INTEGRATED DIRECT INQUIRY CONSOLE FORM (Span 3) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-display text-sm font-bold tracking-widest text-mehndi-gold uppercase border-b border-mehndi-gold/15 pb-2 font-serif">
            Direct Custom Query
          </h4>

          <form onSubmit={handleInquirySubmit} className="space-y-3">
            <div>
              <input
                id="footer-query-name"
                type="text"
                required
                placeholder="Your Name"
                value={inquiryName}
                onChange={(e) => setInquiryName(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 text-white px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-mehndi-gold font-sans placeholder:text-neutral-550"
              />
            </div>
            <div>
              <textarea
                id="footer-query-text"
                required
                rows={3}
                placeholder="What design or services query do you have?"
                value={inquiryText}
                onChange={(e) => setInquiryText(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 text-white px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-mehndi-gold font-sans placeholder:text-neutral-550"
              />
            </div>

            <button
              id="footer-query-submit-btn"
              type="submit"
              disabled={sentInquirySuccess}
              className="w-full py-2 rounded-lg bg-mehndi-maroon hover:bg-mehndi-terracotta text-white font-bold text-xs tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 border border-mehndi-gold/25"
            >
              {sentInquirySuccess ? (
                <span>Launching WhatsApp Chat...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 rotate-45 text-mehndi-gold" />
                  <span>Submit to WhatsApp</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>

      {/* Decorative Bottom Copyright details */}
      <div className="border-t border-neutral-900 py-6 bg-black/60 relative z-10 text-neutral-500 font-sans text-xs text-center px-4 sm:px-6">
        <p className="flex items-center justify-center gap-1">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="font-bold text-neutral-300">Sapna Mehndi Art</span>
          <span>• All rights reserved. Designed for cultural aesthetics in CTM Ahmedabad.</span>
        </p>
        <p className="text-[10px] text-neutral-600 mt-1 flex items-center justify-center gap-1">
          <span>Skinsafe 100% organic ayurvedic mixtures</span>
          <Heart className="w-3 h-3 text-mehndi-terracotta fill-mehndi-terracotta inline" />
          <span>Made with Pure Kumkum & Jaggery (Gud) formulations.</span>
        </p>
      </div>

    </footer>
  );
}
