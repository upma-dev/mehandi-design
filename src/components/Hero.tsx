/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowRight, Instagram, ShieldCheck, Heart } from 'lucide-react';
import { CLIENT_INFO, HERO_IMAGE } from '../data';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-16"
    >
      {/* Background Cinematic Banner */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Luxury Mehndi Banner"
          className="w-full h-full object-cover object-center opacity-45 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Rich vignettes matching Kumkum and Gud theme tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-mehndi-maroon via-neutral-950/80 to-neutral-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-mehndi-maroon/20 via-transparent to-black/50" />
      </div>

      {/* Decorative Traditional Indian Mandala Motif Background Vector */}
      <div className="absolute top-24 right-[-10%] w-[400px] h-[400px] rounded-full border border-mehndi-gold/10 opacity-20 pointer-events-none animate-[spin_120s_linear_infinite]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full border-2 border-dashed border-mehndi-gold/5 opacity-15 pointer-events-none animate-[spin_180s_sans_infinite]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Floating welcome badge */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mehndi-gold/15 border border-mehndi-gold/40 text-mehndi-cream text-xs uppercase tracking-widest font-semibold mb-6 shadow-inner"
        >
          <Sparkles className="w-3.5 h-3.5 text-mehndi-gold animate-pulse" />
          <span>Traditional Bridal Henna & Natural Cones</span>
        </motion.div>

        {/* Brand Main Title */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wider text-mehndi-cream mb-4 select-none drop-shadow-lg leading-none"
        >
          SAPNA
          <span className="block text-2xl sm:text-3xl md:text-5xl tracking-[0.25em] font-light mt-2 text-mehndi-gold leading-tight">
            MEHNDI ART
          </span>
        </motion.h1>

        {/* Poetic quote tagline */}
        <motion.p
          id="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl font-serif text-lg sm:text-xl md:text-2xl text-mehndi-soft-gold italic tracking-wide mb-10 text-center leading-relaxed font-light"
        >
          &ldquo;{CLIENT_INFO.tagline}&rdquo;
        </motion.p>

        {/* Action Buttons with high micro-interactions */}
        <motion.div
          id="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center mb-16"
        >
          <button
            id="hero-btn-portfolio"
            onClick={() => onScrollTo('designs')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-mehndi-terracotta to-mehndi-maroon text-mehndi-cream font-semibold tracking-wider hover:from-mehndi-gold hover:to-mehndi-terracotta hover:text-black transition-all duration-300 shadow-lg shadow-mehndi-maroon/50 cursor-pointer flex items-center justify-center gap-2 group border border-mehndi-gold/30"
          >
            <span>Explore Designs</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            id="hero-btn-workshop"
            onClick={() => onScrollTo('workshop')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border-2 border-mehndi-gold text-mehndi-gold hover:bg-mehndi-gold hover:text-black font-semibold tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Join Next Workshop</span>
          </button>
        </motion.div>

        {/* Trust & Credibility Badges (Bento Style Grid Segment) */}
        <motion.div
          id="hero-stats-panel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-black/60 backdrop-blur-md border border-mehndi-gold/20 shadow-2xl"
        >
          <div className="text-center p-2 border-r border-mehndi-gold/10 last:border-0">
            <span className="block font-display text-2xl sm:text-3xl md:text-4xl font-bold text-mehndi-gold">12+</span>
            <span className="block text-[10px] sm:text-xs tracking-widest text-mehndi-cream/70 uppercase mt-1">Years Crafting</span>
          </div>
          <div className="text-center p-2 border-r border-none md:border-r border-mehndi-gold/10">
            <span className="block font-display text-2xl sm:text-3xl md:text-4xl font-bold text-mehndi-gold">5000+</span>
            <span className="block text-[10px] sm:text-xs tracking-widest text-mehndi-cream/70 uppercase mt-1">Happy Brides</span>
          </div>
          <div className="text-center p-2 border-r border-mehndi-gold/10 border-none sm:border-r">
            <span className="block font-display text-2xl sm:text-3xl md:text-4xl font-bold text-mehndi-gold">100%</span>
            <span className="block text-[10px] sm:text-xs tracking-widest text-mehndi-cream/70 uppercase mt-1">Pure Organic</span>
          </div>
          <div className="text-center p-2 last:border-0">
            <span className="block font-display text-2xl sm:text-3xl md:text-4xl font-bold text-mehndi-gold">300+</span>
            <span className="block text-[10px] sm:text-xs tracking-widest text-mehndi-cream/70 uppercase mt-1">Students Taught</span>
          </div>
        </motion.div>

        {/* Scroll prompt icon */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-12 hidden md:flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => onScrollTo('quotes')}
        >
          <span className="text-[10px] tracking-widest uppercase font-sans text-mehndi-gold/60 font-medium">Scroll down</span>
          <div className="w-1 h-6 bg-gradient-to-b from-mehndi-gold to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
