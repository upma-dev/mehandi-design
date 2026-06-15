/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Sparkles, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { MEHNDI_QUOTES } from '../data';

export default function QuotesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % MEHNDI_QUOTES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + MEHNDI_QUOTES.length) % MEHNDI_QUOTES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % MEHNDI_QUOTES.length);
  };

  return (
    <section
      id="quotes"
      className="relative py-24 bg-gradient-to-b from-neutral-950 to-mehndi-maroon border-y border-mehndi-gold/20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-pattern" />

      {/* Symmetric floating visual glow circles */}
      <div className="absolute -top-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-mehndi-gold/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[0%] right-[15%] w-[350px] h-[350px] rounded-full bg-mehndi-terracotta/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Decorative Lotus Arch Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border border-double border-mehndi-gold/50 flex items-center justify-center bg-black/40 shadow-xl">
              <Quote className="w-6 h-6 text-mehndi-gold" />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-mehndi-terracotta rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-mehndi-gold rounded-full" />
          </div>
        </div>

        {/* Quotes Display Slider with interactive Framer Motion states */}
        <div className="min-h-[220px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -15 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-mehndi-cream/90 leading-relaxed font-semibold italic px-4 sm:px-10">
                &ldquo;{MEHNDI_QUOTES[activeIndex].text}&rdquo;
              </h2>
              
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-mehndi-gold" />
                <span className="text-sm font-semibold tracking-widest text-mehndi-gold uppercase">
                  {MEHNDI_QUOTES[activeIndex].author}
                </span>
                <span className="text-xs text-mehndi-cream/50">•</span>
                <span className="text-xs font-sans tracking-wider text-mehndi-cream/60">
                  {MEHNDI_QUOTES[activeIndex].context}
                </span>
                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-mehndi-gold" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel slide controllers */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            id="quote-prev-btn"
            onClick={handlePrev}
            className="p-2 sm:p-3 rounded-full bg-black/40 border border-mehndi-gold/30 text-mehndi-cream hover:bg-mehndi-gold hover:text-black transition-all cursor-pointer shadow-md"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {MEHNDI_QUOTES.map((_, i) => (
              <button
                id={`quote-indicator-${i}`}
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-6 bg-mehndi-gold' : 'w-2 bg-mehndi-cream/25'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            id="quote-next-btn"
            onClick={handleNext}
            className="p-2 sm:p-3 rounded-full bg-black/40 border border-mehndi-gold/30 text-mehndi-cream hover:bg-mehndi-gold hover:text-black transition-all cursor-pointer shadow-md"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Decorative auspicious subtitle */}
        <div className="mt-12 flex items-center justify-center gap-1.5 text-[10px] sm:text-xs tracking-widest font-sans uppercase font-semibold text-mehndi-cream/45">
          <Heart className="w-3.5 h-3.5 text-mehndi-terracotta fill-mehndi-terracotta" />
          <span>Made organically for celebrations of soul alignment</span>
        </div>
      </div>
    </section>
  );
}
