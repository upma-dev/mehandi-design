/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, Clock, Layers, Crosshair, Send, MessageSquareHeart } from 'lucide-react';
import { MEHNDI_DESIGNS, CLIENT_INFO } from '../data';
import { MehndiDesign } from '../types';

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'bridal' | 'sketch' | 'festive' | 'modern'>('all');
  const [activeModalDesign, setActiveModalDesign] = useState<MehndiDesign | null>(null);

  const filterTabs = [
    { value: 'all', label: 'All Creations' },
    { value: 'bridal', label: 'Bridal Art' },
    { value: 'sketch', label: 'Traditional Sketches' },
    { value: 'festive', label: 'Festive Charm' },
    { value: 'modern', label: 'Modern Arabic' }
  ] as const;

  const filteredDesigns = MEHNDI_DESIGNS.filter((design) => {
    if (selectedFilter === 'all') return true;
    return design.category === selectedFilter;
  });

  const generateWhatsAppMessage = (designTitle: string) => {
    const text = encodeURIComponent(
      `Hello Sapna, I am visiting your demo website and I absolutely loved your design layout: "${designTitle}". I would like to inquire about its pricing, booking availability, and custom layout requests!`
    );
    return `${CLIENT_INFO.whatsappUrlPrimary}?text=${text}`;
  };

  return (
    <section id="designs" className="py-24 bg-[#FAF6EE] min-h-screen relative">
      {/* Light subtle visual details of background pattern */}
      <div className="absolute inset-0 bg-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mehndi-gold/10 text-mehndi-maroon text-xs tracking-wider uppercase font-bold mb-3">
            <Crosshair className="w-3.5 h-3.5 text-mehndi-gold" />
            <span>Exquisite Gallery</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-mehndi-maroon tracking-wider mb-4">
            Our Masterpiece Designs
          </h2>
          <div className="w-16 h-1 bg-mehndi-gold mx-auto mb-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-neutral-700/85">
            Every bridal sketch is meticulously crafted with high structural symmetry. Click on any design to inspect the detailing, complexity level, and book with Sapna directly on WhatsApp!
          </p>
        </div>

        {/* Dynamic Category Filtering Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              id={`tab-filter-${tab.value}`}
              key={tab.value}
              onClick={() => setSelectedFilter(tab.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer border ${
                selectedFilter === tab.value
                  ? 'bg-mehndi-maroon text-mehndi-cream border-mehndi-gold shadow-md shadow-mehndi-maroon/20'
                  : 'bg-white text-neutral-700 hover:text-white hover:bg-neutral-800 hover:border-transparent border-neutral-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Designs Portfolio Grid with staggered Framer Motion items */}
        <motion.div
          id="portfolio-grid"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDesigns.map((design, index) => (
              <motion.div
                id={`design-card-${design.id}`}
                key={design.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/60 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image Showcase Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glassmorph Hover Overlay details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-mehndi-maroon/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <button
                      id={`inspect-btn-${design.id}`}
                      onClick={() => setActiveModalDesign(design)}
                      className="inline-flex self-start items-center gap-1.5 text-xs text-mehndi-gold bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full hover:bg-mehndi-gold hover:text-black transition-colors mb-3 tracking-wide font-semibold cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Details</span>
                    </button>
                    <h3 className="font-display text-lg text-white font-bold leading-snug">
                      {design.title}
                    </h3>
                  </div>

                  {/* Absolute Badge Category Tags */}
                  <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-full bg-mehndi-cream/90 text-mehndi-maroon shadow-sm backdrop-blur-sm border border-mehndi-gold/30">
                    {design.category === 'sketch' ? 'Measured Sketch' : `${design.category} Style`}
                  </span>
                </div>

                {/* Card footer description */}
                <div className="p-5 border-t border-neutral-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-sans tracking-widest uppercase font-semibold text-mehndi-gold flex items-center gap-1">
                      <Layers className="w-3 h-3" />
                      {design.complexity}
                    </span>
                    <span className="text-neutral-300">|</span>
                    <span className="text-[10px] font-sans tracking-widest uppercase font-semibold text-neutral-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {design.timeToComplete}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-600 line-clamp-2 h-8 leading-relaxed">
                    {design.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {design.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[9px] bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-md font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <a
                      id={`whatsapp-order-${design.id}`}
                      href={generateWhatsAppMessage(design.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-mehndi-terracotta hover:text-mehndi-maroon flex items-center gap-1 transition-colors"
                    >
                      <span>Inquire Now</span>
                      <Send className="w-3 h-3 rotate-45" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Portfolio Quote Segment */}
        <div id="portfolio-subquote" className="mt-16 text-center">
          <p className="font-serif italic text-lg text-neutral-700">
            &ldquo;Every custom trace of your bridal henna is aligned dynamically to perfectly fit your hand contours.&rdquo;
          </p>
          <span className="block text-xs font-sans text-neutral-500 uppercase tracking-widest mt-1.5 font-bold">
            - Sapna Mehndi Architecture
          </span>
        </div>
      </div>

      {/* Exquisite Lightbox/Design Details Modal popup */}
      <AnimatePresence>
        {activeModalDesign && (
          <motion.div
            id="portfolio-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-md"
          >
            <motion.div
              id="portfolio-modal-card"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-mehndi-gold/25"
            >
              {/* Close Button top-right */}
              <button
                id="modal-close-trigger"
                onClick={() => setActiveModalDesign(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
                aria-label="Close details"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Column One: Image Details zoom visual */}
                <div className="relative aspect-[4/5] bg-neutral-900 md:h-[480px]">
                  <img
                    src={activeModalDesign.image}
                    alt={activeModalDesign.title}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-mehndi-maroon/90 text-mehndi-cream text-[10px] sm:text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-mehndi-gold/50">
                    {activeModalDesign.complexity}
                  </div>
                </div>

                {/* Column Two: Meta descriptions */}
                <div className="p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#FAF6EE] to-white">
                  <div>
                    <span className="text-[10px] font-sans tracking-widest uppercase font-bold text-mehndi-gold mt-1 block">
                      Sapna's Showcase Design
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-mehndi-maroon tracking-wide mb-3">
                      {activeModalDesign.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-600 mb-4 bg-white p-3 rounded-xl border border-neutral-200 shadow-inner">
                      <div>
                        <span className="block text-[9px] text-neutral-400 uppercase tracking-widest">Auspicious Time</span>
                        <span className="text-neutral-800">{activeModalDesign.timeToComplete}</span>
                      </div>
                      <div className="w-[1px] h-6 bg-neutral-300" />
                      <div>
                        <span className="block text-[9px] text-neutral-400 uppercase tracking-widest">Detail Class</span>
                        <span className="text-neutral-800">{activeModalDesign.complexity}</span>
                      </div>
                    </div>

                    <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                      {activeModalDesign.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">Features included in drafting:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeModalDesign.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-mehndi-gold/15 text-mehndi-maroon font-semibold px-2.5 py-1 rounded-lg">
                            ✔ {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Interactive Button */}
                  <div className="pt-4 border-t border-neutral-200">
                    <a
                      id="modal-wa-primary-click"
                      href={generateWhatsAppMessage(activeModalDesign.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-mehndi-maroon hover:bg-mehndi-terracotta text-mehndi-cream font-bold text-sm tracking-wider shadow-lg hover:shadow-mehndi-maroon/20 transition-all border border-mehndi-gold/30"
                    >
                      <MessageSquareHeart className="w-4 h-4 text-mehndi-gold animate-pulse" />
                      <span>Request Custom Pricing</span>
                    </a>
                    <span className="block text-center text-[10px] text-neutral-400 mt-2 font-medium">
                      Direct connection to Whatsapp: {CLIENT_INFO.primaryPhone}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
