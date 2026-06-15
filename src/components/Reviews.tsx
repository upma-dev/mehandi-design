/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote, Heart, Calendar } from 'lucide-react';
import { RECENT_REVIEWS } from '../data';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-neutral-900 text-[#FAF6EE] relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mehndi-maroon/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mehndi-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mehndi-gold/15 text-mehndi-gold text-xs tracking-wider uppercase font-bold mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Success Stories</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wider mb-4">
            Love From Our Clients
          </h2>
          <div className="w-16 h-1 bg-mehndi-gold mx-auto mb-4 rounded-full" />
          <p className="text-sm sm:text-base text-neutral-400">
            Read real-time satisfaction notes from wedding couples in Gujarat, professional mehndi artist buyers, and masterclass graduates who changed their careers!
          </p>
        </div>

        {/* Reviews Cards List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {RECENT_REVIEWS.map((review, idx) => (
            <motion.div
              id={`review-card-${review.id}`}
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-neutral-950/80 p-6 sm:p-8 rounded-2xl border border-neutral-800 flex flex-col justify-between hover:border-mehndi-gold/35 shadow-xl transition-all group"
            >
              <div>
                {/* Visual rating stars */}
                <div className="flex items-center gap-1.5 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-mehndi-gold fill-mehndi-gold shrink-0 animate-pulse" />
                  ))}
                  <span className="text-xs text-neutral-500 font-bold ml-1">5.0 / 5.0 Rating</span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="border-t border-neutral-800/80 pt-4 mt-auto flex items-center justify-between">
                <div>
                  <h4 className="font-display text-sm font-extrabold text-white group-hover:text-mehndi-gold transition-colors">
                    {review.name}
                  </h4>
                  <span className="block text-[10px] text-mehndi-soft-gold uppercase tracking-widest font-semibold mt-0.5">
                    {review.eventOrDesign}
                  </span>
                </div>
                <div className="text-right flex items-center gap-1 text-[10px] text-neutral-500 font-bold">
                  <Calendar className="w-3 h-3 text-neutral-600" />
                  <span>{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA booking prompt at bottom */}
        <div id="student-milestone-cta" className="mt-16 text-center border-t border-neutral-800/70 pt-10">
          <p className="text-sm text-neutral-400 mb-4 flex items-center justify-center gap-1.5">
            <Heart className="w-4 h-4 text-mehndi-terracotta fill-mehndi-terracotta" />
            <span>Join over <strong>300+ students</strong> and <strong>5,000+ brides</strong> who recommend Sapna.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
