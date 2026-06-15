/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuotesCarousel from './components/QuotesCarousel';
import Portfolio from './components/Portfolio';
import ConeStore from './components/ConeStore';
import WorkshopBanner from './components/WorkshopBanner';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { CLIENT_INFO } from './data';
import { Calendar, Phone, Heart, Sparkles, X, MessageSquareQuote } from 'lucide-react';

export default function App() {
  const [showAuspiciousWidget, setShowAuspiciousWidget] = useState(true);
  const [weddingDaysCount, setWeddingDaysCount] = useState(25); // customized seasonal planner countdown

  // Anchor scroll utility
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="sapna-mehndi-app-root" className="min-h-screen bg-[#FAF6EE] text-neutral-800 overflow-x-hidden selection:bg-mehndi-gold selection:text-[#54170D]">
      
      {/* Sticky Premium Header */}
      <Header onScrollTo={handleScrollToSection} />

      {/* Main Sections */}
      <main id="main-content-scroller">
        
        {/* HERO BANNER SECTION */}
        <Hero onScrollTo={handleScrollToSection} />

        {/* POETIC MOTIFS & CAROUSEL SECTION */}
        <QuotesCarousel />

        {/* BRIDAL DESIGN SHOWCASE GALLERY */}
        <Portfolio />

        {/* SELL CORES STORE - MEHNDI CONES */}
        <ConeStore />

        {/* UPCOMING EVENTS / TRAINING WORKSHOP */}
        <WorkshopBanner />

        {/* STUDENT & BRIDE REVIEWS */}
        <Reviews />

      </main>

      {/* FOOTER & DIRECT CONTACT FORM */}
      <Footer onScrollTo={handleScrollToSection} />

      {/* Floating Call to Action Widget (Floating Bridal Consultation Indicator) */}
      {showAuspiciousWidget && (
        <div
          id="auspicious-floating-badge"
          className="fixed bottom-6 right-6 z-40 max-w-xs bg-white rounded-2xl p-4 shadow-2xl border border-mehndi-gold/30 hover:border-mehndi-gold transition-all duration-300 hidden md:block glow-subtle animate-[bounce_10s_sans_infinite]"
        >
          <button
            id="badge-close-btn"
            onClick={() => setShowAuspiciousWidget(false)}
            className="absolute top-2.5 right-2.5 text-neutral-400 hover:text-neutral-700 font-bold text-xs p-1"
            aria-label="Close message"
          >
            ✕
          </button>
          
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-mehndi-gold/15 flex items-center justify-center shrink-0 border border-mehndi-gold/30">
              <Calendar className="w-5 h-5 text-mehndi-maroon animate-pulse" />
            </div>
            <div>
              <span className="block text-[10px] tracking-widest uppercase font-bold text-mehndi-gold">
                Autumn Wedding Bookings Open
              </span>
              <p className="text-xs text-neutral-700 font-medium leading-relaxed mt-1">
                Currently taking bridal custom layout reservations in Ahmedabad CTM and nearby regions.
              </p>
              
              <div className="mt-3 flex gap-2">
                <a
                  id="float-badge-call"
                  href={`tel:${CLIENT_INFO.primaryPhone}`}
                  className="px-3 py-1.5 rounded-lg bg-[#54170D] text-white text-[10px] font-bold hover:bg-[#A4462F] transition-all flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-mehndi-gold" />
                  <span>Call Sapna</span>
                </a>
                <a
                  id="float-badge-wa"
                  href={CLIENT_INFO.whatsappUrlPrimary}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-green-700 text-white text-[10px] font-bold hover:bg-green-600 transition-all"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
