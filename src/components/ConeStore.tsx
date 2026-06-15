/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Sparkles, Check, Truck, BadgePercent, Send, ChevronRight, Calculator, RefreshCw } from 'lucide-react';
import { MEHNDI_CONES, CLIENT_INFO } from '../data';
import { MehndiCone } from '../types';

export default function ConeStore() {
  const [selectedConeId, setSelectedConeId] = useState<string>('cone-kumkum');
  const [quantity, setQuantity] = useState<number>(3);
  const [shippingCity, setShippingCity] = useState<string>('');
  const [customAddon, setCustomAddon] = useState<boolean>(false);
  const [showInvoicePreview, setShowInvoicePreview] = useState<boolean>(true);

  const activeProduct = MEHNDI_CONES.find(c => c.id === selectedConeId) || MEHNDI_CONES[0];

  const calculateSubtotal = () => {
    return activeProduct.price * quantity;
  };

  const calculateAddonCost = () => {
    return customAddon ? 49 * quantity : 0; // ₹49 extra for premium eucalyptus essential wood oil dilution
  };

  const calculateShipping = () => {
    if (!shippingCity) return 0;
    // Free local shipping inside Ahmedabad, ₹60 elsewhere in India
    return shippingCity.toLowerCase().includes('ahmedabad') ? 0 : 60;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateAddonCost() + calculateShipping();
  };

  const handleWhatsAppCheckout = () => {
    const subtotal = calculateSubtotal();
    const addon = calculateAddonCost();
    const sCost = calculateShipping();
    const total = calculateTotal();
    
    let text = `Hello Sapna Mehndi Art, I am visiting your website and would like to buy: \n\n`;
    text += `📦 Product: ${activeProduct.name}\n`;
    text += `🔢 Quantity: ${quantity} units\n`;
    text += `🌿 Custom Oil Boost: ${customAddon ? 'Yes (Eucalyptus Extra)' : 'No'}\n`;
    text += `📍 Destination City: ${shippingCity || 'Not specified'}\n\n`;
    text += `---------------------------\n`;
    text += `💵 Subtotal: ₹${subtotal}\n`;
    if (addon > 0) text += `🧪 Addon Extract: ₹${addon}\n`;
    text += `🚚 Courier Fee: ${sCost === 0 ? 'FREE Shipping (Ahmedabad)' : `₹${sCost}`}\n`;
    text += `💰 TOTAL PAYABLE: ₹${total}\n`;
    text += `---------------------------\n\n`;
    text += `Please confirm my request and share your bank/GPay details for booking!`;

    const encodedText = encodeURIComponent(text);
    window.open(`${CLIENT_INFO.whatsappUrlPrimary}?text=${encodedText}`, '_blank');
  };

  const isBulkDiscountActive = quantity >= 5;

  return (
    <section id="cones" className="py-24 bg-gradient-to-b from-neutral-900 to-black relative">
      <div className="absolute top-[30%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-mehndi-gold/25 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mehndi-gold/15 text-mehndi-gold text-xs tracking-wider uppercase font-bold mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Store Marketplace</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-mehndi-cream tracking-wider mb-4">
            Buy Organic Mehndi Cones
          </h2>
          <div className="w-16 h-1 bg-mehndi-gold mx-auto mb-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-mehndi-cream/80">
            Hand-filtered with pure ingredients (Kumkum and Sugarcane Gud). Timeless color formulation, zero chemicals, and premium durability. Secure your fresh stock today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Product Visualizer Column (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-neutral-950/80 rounded-3xl p-6 sm:p-8 border border-neutral-800 flex flex-col h-full shadow-2xl relative overflow-hidden group">
              {/* Highlight Badge */}
              {activeProduct.isPopular && (
                <div className="absolute top-4 right-4 z-10 bg-mehndi-terracotta text-mehndi-cream text-[10px] tracking-wider uppercase font-bold px-3 py-1 rounded-full border border-mehndi-gold/40 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  <span>Popular Pick</span>
                </div>
              )}

              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-inner mb-6 relative">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <span className="text-xs font-mono text-mehndi-gold tracking-widest uppercase block mb-1">
                  {activeProduct.packSize}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-wide transition-colors">
                  {activeProduct.name}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  {activeProduct.description}
                </p>

                <div className="space-y-2.5">
                  <span className="block text-xs font-bold text-mehndi-gold/90 uppercase tracking-widest">
                    Formulation Benefits:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProduct.benefits.slice(0, 4).map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-green-500 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Pricing Calculator Store (Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900/40 rounded-3xl p-6 sm:p-8 border border-mehndi-gold/15 shadow-2xl backdrop-blur-md flex flex-col justify-between h-full">
              
              <div>
                <span className="text-xs font-sans tracking-widest uppercase font-semibold text-mehndi-gold flex items-center gap-1 mb-4">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Interactive Volume Price Calculator</span>
                </span>

                {/* Step 1: SELECT PRODUCT SCHEMATIC */}
                <div className="mb-6">
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-widest mb-2">
                    Step 1: Choose Packaging Size
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {MEHNDI_CONES.map((cone) => (
                      <button
                        id={`product-selector-${cone.id}`}
                        key={cone.id}
                        type="button"
                        onClick={() => {
                          setSelectedConeId(cone.id);
                          // Reset quantity logic boundaries
                          if (cone.id === 'cone-kumkum-pack' && quantity > 12) {
                            setQuantity(2);
                          }
                        }}
                        className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                          selectedConeId === cone.id
                            ? 'bg-mehndi-maroon/40 border-mehndi-gold shadow-md'
                            : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        <div>
                          <span className="block font-bold text-sm text-white">{cone.name}</span>
                          <span className="block text-[10px] text-neutral-400 mt-0.5">{cone.packSize}</span>
                        </div>
                        <div className="mt-3 flex items-baseline gap-1.5 justify-between w-full">
                          <span className="text-xs text-mehndi-gold font-medium">₹{cone.price} / unit</span>
                          <span className="text-sm font-extrabold text-mehndi-gold">Select</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: CHOOSE QUANTITY SLIDER / INPUTS */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-widest">
                      Step 2: Set Quantity
                    </label>
                    <span className="text-xs font-bold font-mono text-mehndi-gold bg-zinc-800 px-2.5 py-1 rounded-md">
                      {quantity} {selectedConeId === 'cone-kumkum' ? 'Cones' : 'Boxes'}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <input
                      id="quantity-picker-slider"
                      type="range"
                      min="1"
                      max={selectedConeId === 'cone-kumkum' ? "48" : "15"}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-mehndi-gold"
                    />
                    <div className="flex gap-1.5 shrink-0">
                      <button
                        id="qty-minus"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-lg bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 cursor-pointer font-bold text-sm"
                      >
                        -
                      </button>
                      <button
                        id="qty-plus"
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-lg bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 cursor-pointer font-bold text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Bulk Discount Alert Notification */}
                  <AnimatePresence>
                    {isBulkDiscountActive && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="mt-3 p-2.5 rounded-lg bg-green-950/45 border border-green-800 text-[11px] text-green-300 flex items-center gap-2"
                      >
                        <BadgePercent className="w-4 h-4 shrink-0 animate-bounce" />
                        <span>Awesome! You requested a bulk volume. We prioritise custom packaging for large orders.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Step 3: DELIVER ROUTING DETAILS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-widest mb-1.5">
                      Step 3: Delivery Destination City
                    </label>
                    <input
                      id="delivery-city-input"
                      type="text"
                      placeholder="e.g., Ahmedabad, Surat, Mumbai"
                      value={shippingCity}
                      onChange={(e) => setShippingCity(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 text-white px-3.5 py-2.5 rounded-lg text-sm focus:outline-none focus:border-mehndi-gold placeholder:text-neutral-600 font-sans font-medium"
                    />
                    <span className="text-[9px] text-neutral-400 mt-1 block">
                      💡 Free home delivery across <strong>Ahmedabad CTM region</strong>!
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-widest mb-1.5 font-sans">
                      Step 4: Premium Natural Add-on
                    </label>
                    <button
                      id="addon-toggle-btn"
                      type="button"
                      onClick={() => setCustomAddon(!customAddon)}
                      className={`w-full p-2.5 rounded-lg border text-left flex items-center justify-between text-xs transition-colors cursor-pointer ${
                        customAddon
                          ? 'bg-mehndi-gold/20 border-mehndi-gold text-white font-bold'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Check className={`w-3.5 h-3.5 ${customAddon ? 'text-mehndi-gold' : 'text-transparent'}`} />
                        <span>Extra Dilute Eucalyptus Oil (+₹49)</span>
                      </div>
                      <span className="font-semibold text-mehndi-gold font-mono">Booster</span>
                    </button>
                    <span className="text-[9px] text-neutral-500 mt-1 block">
                      Renders double the color intensity and cooling ayurvedic aromatherapy stain boost.
                    </span>
                  </div>
                </div>

              </div>

              {/* INVOICE PREVIEW BOX */}
              <div className="p-5 rounded-2xl bg-black border border-neutral-800 text-neutral-300 space-y-2">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2 text-[10px] tracking-widest uppercase text-neutral-400 font-bold">
                  <span>Order Invoice Detail</span>
                  <span>Estimate Pricing Details</span>
                </div>
                
                <div className="flex justify-between text-xs sm:text-sm">
                  <span>Subtotal ({quantity} x ₹{activeProduct.price}):</span>
                  <span className="font-mono text-white">₹{calculateSubtotal()}</span>
                </div>

                {customAddon && (
                  <div className="flex justify-between text-xs sm:text-sm text-mehndi-soft-gold">
                    <span>Eucalyptus Essence Oil booster extract:</span>
                    <span className="font-mono">₹{calculateAddonCost()}</span>
                  </div>
                )}

                <div className="flex justify-between text-xs sm:text-sm text-neutral-400">
                  <span>Courier & Transport Charges:</span>
                  <span className="font-mono text-white">
                    {calculateShipping() === 0 ? (
                      <span className="font-bold text-green-400">FREE ROUTE</span>
                    ) : (
                      `₹${calculateShipping()}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between font-display text-base border-t border-neutral-800 pt-3 text-white font-bold tracking-wide">
                  <span className="text-mehndi-gold flex items-center gap-1">
                    <span>Grand Total Payable:</span>
                  </span>
                  <span className="font-mono text-mehndi-gold text-lg">₹{calculateTotal()}</span>
                </div>
              </div>

              {/* ACTION SEND TO WHATSAPP DETAILS */}
              <div className="mt-6">
                <button
                  id="checkout-wa-btn-submit"
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold tracking-wide shadow-lg hover:shadow-green-950/20 transition-all cursor-pointer flex items-center justify-center gap-2 group border border-emerald-500/30"
                >
                  <Send className="w-4 h-4 rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span>Send Order Inquiry on WhatsApp</span>
                </button>
                <div className="flex items-center justify-center gap-4 text-[10px] text-neutral-500 mt-2 font-medium">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-zinc-600" />
                    <span>Safe Packaging</span>
                  </span>
                  <span>•</span>
                  <span>Dispatch within 24 Hours</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
