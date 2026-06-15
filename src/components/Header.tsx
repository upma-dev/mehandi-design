/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Instagram, Send, Sparkles } from 'lucide-react';
import { CLIENT_INFO } from '../data';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active link detector
      const sections = ['home', 'quotes', 'designs', 'cones', 'workshop', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSegment(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'designs', label: 'Designs' },
    { id: 'cones', label: 'Mehndi Cones' },
    { id: 'workshop', label: 'Event Workshop' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <>
      <header
        id="header-bar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-mehndi-maroon/95 backdrop-blur-md shadow-lg border-b border-mehndi-gold/20 py-3'
            : 'bg-gradient-to-b from-black/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full border-2 border-mehndi-gold flex items-center justify-center bg-mehndi-maroon overflow-hidden shadow-inner transition-transform duration-300 group-hover:scale-105">
              <span className="font-display text-lg font-bold text-mehndi-gold">S</span>
            </div>
            <div>
              <span className="block font-display text-sm sm:text-base tracking-widest text-mehndi-cream font-bold group-hover:text-mehndi-gold transition-colors">
                SAPNA
              </span>
              <span className="block text-[10px] tracking-widest text-mehndi-gold font-sans uppercase font-medium">
                Mehndi Artistry
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-navbar" className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                id={`nav-link-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-xs lg:text-sm tracking-wider uppercase transition-all relative py-1 cursor-pointer font-medium ${
                  activeSegment === item.id
                    ? 'text-mehndi-gold font-semibold'
                    : 'text-mehndi-cream/80 hover:text-mehndi-gold'
                }`}
              >
                {item.label}
                {activeSegment === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-mehndi-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-insta-btn"
              href={CLIENT_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-mehndi-cream hover:text-mehndi-gold p-1.5 transition-colors border border-transparent hover:border-mehndi-gold/30 rounded-full bg-white/5 hover:bg-white/10"
              title="Visit Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              id="header-phone-btn"
              href={`tel:${CLIENT_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-mehndi-gold/40 text-mehndi-cream bg-mehndi-maroon/20 hover:bg-mehndi-terracotta hover:border-mehndi-gold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-mehndi-gold" />
              <span>Call Us</span>
            </a>
            <a
              id="header-wa-btn"
              href={CLIENT_INFO.whatsappUrlPrimary}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-green-700/80 hover:bg-green-600 text-white shadow-md hover:shadow-green-950/20 transition-all border border-green-500/20"
            >
              <Send className="w-3 h-3 rotate-45" />
              <span>Direct Chat</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="header-wa-btn-mob"
              href={CLIENT_INFO.whatsappUrlPrimary}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-green-700 text-white hover:bg-green-600 transition-colors"
            >
              <Send className="w-4 h-4 rotate-45" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-mehndi-cream hover:text-mehndi-gold p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-0 right-0 bg-mehndi-maroon border-b border-mehndi-gold/20 z-40 md:hidden shadow-2xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4 bg-gradient-to-b from-mehndi-maroon to-black/90">
              {navItems.map((item) => (
                <button
                  id={`mob-nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left py-2 font-display text-lg tracking-widest uppercase transition-colors ${
                    activeSegment === item.id
                      ? 'text-mehndi-gold pl-2 border-l-2 border-mehndi-gold font-bold'
                      : 'text-mehndi-cream/80 hover:text-mehndi-gold hover:pl-2'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-6 border-t border-mehndi-gold/20 flex flex-col gap-3">
                <div className="flex items-center justify-around">
                  <a
                    id="mob-social-insta"
                    href={CLIENT_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-mehndi-cream/80 hover:text-mehndi-gold"
                  >
                    <Instagram className="w-4 h-4 text-mehndi-gold" />
                    <span>Instagram</span>
                  </a>
                  <a
                    id="mob-social-phone"
                    href={`tel:${CLIENT_INFO.primaryPhone}`}
                    className="flex items-center gap-2 text-sm text-mehndi-cream/80 hover:text-mehndi-gold"
                  >
                    <Phone className="w-4 h-4 text-mehndi-gold" />
                    <span>Call Studio</span>
                  </a>
                </div>
                
                <a
                  id="mob-whats-action"
                  href={CLIENT_INFO.whatsappUrlPrimary}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-green-700 hover:bg-green-600 text-white font-medium text-sm transition-all"
                >
                  <Send className="w-4 h-4 rotate-45" />
                  <span>Book Henna Design via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
