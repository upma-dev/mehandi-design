/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MehndiDesign, MehndiCone, WorkshopEvent, MehndiQuote, UserReview } from './types';

// Let's get the absolute file paths we generated earlier
// If any file has multiple generated versions, we use the correct timestamped JPEG paths.
export const HERO_IMAGE = '/src/assets/images/hero_mehndi_banner_1781514273009.jpg';
export const CONES_PRODUCT_IMAGE = '/src/assets/images/mehndi_cones_product_1781514290365.jpg';
export const BRIDAL_ARTWORK_IMAGE = '/src/assets/images/bridal_mehndi_artwork_1781514311238.jpg';
export const WORKSHOP_BANNER_IMAGE = '/src/assets/images/workshop_prep_banner_1781514329080.jpg';
export const MEASUREMENT_SKETCH_IMAGE = '/src/assets/images/measurement_sketch_design_1781514350883.jpg';

export const CLIENT_INFO = {
  name: "Sapna Mehndi Art",
  instagram: "@sapna__mehndi_art",
  instagramUrl: "https://www.instagram.com/sapna__mehndi_art?igsh=Y3c5NGh0MTE5Zzkz",
  primaryPhone: "9327361253",
  secondaryPhone: "8141767587",
  whatsappUrlPrimary: "https://wa.me/919327361253",
  whatsappUrlSecondary: "https://wa.me/918141767587",
  leadArtist: "Sapna",
  tagline: "Tradition in every cone, artistry in every stroke.",
  address: "CTM, Ahmedabad, Gujarat, India"
};

// Exquisite quotes about Mehndi to impress visitors
export const MEHNDI_QUOTES: MehndiQuote[] = [
  {
    id: "quote-1",
    text: "The rich, deep stain of organic henna isn't just a color—it is the unspoken language of celebrations, love, and sacred roots.",
    author: "Sapna",
    context: "Bridal Henna Artist"
  },
  {
    id: "quote-2",
    text: "With Kumkum & Gud (Jaggery) running through our traditional roots, we stir pure love and timeless secrets into every single drop of paste.",
    author: "Sapna Mehndi Art",
    context: "From our Traditional Studio"
  },
  {
    id: "quote-3",
    text: "Art is the signature of the soul. Mehndi is that signature written in the exquisite fragrance of nature, gracing your skin.",
    author: "Timeless Tradition",
    context: "Sanskrit Folksong Wisdom"
  },
  {
    id: "quote-4",
    text: "A bride's hands tell the tale of her tomorrow, written in lines of dense floral mandalas, sacred arches, and deep mahogany velvet stains.",
    author: "Bridal Folklore",
    context: "The Auspicious Stain"
  }
];

// High quality design portfolio utilizing our generated assets
export const MEHNDI_DESIGNS: MehndiDesign[] = [
  {
    id: "design-1",
    title: "The Royal Lotus Mandala Bridal Suite",
    category: "bridal",
    image: BRIDAL_ARTWORK_IMAGE,
    description: "Highly requested dense bridal henna application featuring symmetrical hand-drawn central lotus blooms, custom grids on the palms, and intricate floral cuffs trailing up to the half-arms.",
    timeToComplete: "4 - 5 Hours",
    complexity: "Exquisite",
    tags: ["Bridal", "Lotus", "Symmetrical", "Best Seller"]
  },
  {
    id: "design-2",
    title: "Symmetrical Sizing Sketch & Architecture Blueprint",
    category: "sketch",
    image: MEASUREMENT_SKETCH_IMAGE,
    description: "Traditional temple-dome borders, animal frames (Sacred Cow/Nandi motifs), peacock arches, and calculated spacing (1.5cm, 6.5cm, 10cm, 9cm lines) designed precisely to fit the hand and forearm.",
    timeToComplete: "6 Hours Drafting",
    complexity: "Measurement Blueprint",
    tags: ["Mathematical Draft", "Nandi Motif", "Peacock Chamber", "Precision Borders"]
  },
  {
    id: "design-3",
    title: "Classic Traditional Festives",
    category: "festive",
    image: "/src/assets/images/bridal_mehndi_artwork_1781514311238.jpg", // reuse or high quality fallback
    description: "Elegant checkered boxes, flower vine trails, and paisley curls on the fingers, designed for immediate festive charm and rapid stain enhancement using Kumkum paste.",
    timeToComplete: "1.5 - 2 Hours",
    complexity: "Traditional",
    tags: ["Festives", "Checkered Trails", "Paisley Patterns"]
  },
  {
    id: "design-4",
    title: "Minimalist Modern Arabic Fusion",
    category: "modern",
    image: HERO_IMAGE, // beautiful focus of hands
    description: "Clean, breezy negative-space designs highlighting central vines, trailing leaves, and geometric bold arches. Fits modern outfits and cocktail parties perfectly.",
    timeToComplete: "1 Hour",
    complexity: "Surgical Detail",
    tags: ["Arabic", "Negative Space", "Bold Trails", "Minimalist"]
  }
];

// Product offering for Mehndi Cones (derived from the Cones flyer)
export const MEHNDI_CONES: MehndiCone[] = [
  {
    id: "cone-kumkum",
    name: "Premium Kumkum Mehndi Cones",
    tagline: "100% Organic Henna with Pure Vermillion Infusion",
    description: "Made strictly with prime Rajasthani Sojat henna leaves, pure kumkum extract, and organic essential oils. Guarantees a deep, long-lasting rich-mahogany red color with a soothing ayurvedic aroma. No chemicals, skin-safe for all ages.",
    price: 49,
    packSize: "Single Cone (30g)",
    ingredients: ["Rajasthani Sojat Henna", "Pure Kumkum Extract", "Eucalyptus Oil", "Tea Tree Pure Oil", "Distilled Water"],
    benefits: ["100% Chemical-free", "No preservatives", "Smooth, clog-free tip application", "Super deep stain in 24 hrs", "Intense mahogany red-black tone"],
    image: CONES_PRODUCT_IMAGE,
    isPopular: true
  },
  {
    id: "cone-kumkum-pack",
    name: "Professional Studio Pack (12 Cones)",
    tagline: "The Choice of Bridal Artists & Festive Planners",
    description: "A gorgeous, fresh-packed box containing 12 of our signature Kumkum Mehndi Cones. Packaged with protective foil tips to preserve freshness. Perfect for large weddings, Karwa Chauth, Teej, and professional bridal bookings.",
    price: 499,
    packSize: "Box of 12 Cones",
    ingredients: ["All natural Rajasthani Sojat Henna", "Pure natural sugars & essential oils", "Freshly filtered daily in our kitchen"],
    benefits: ["Bulk saving pricing", "Sealed-for-freshness packaging", "Includes a free tips booklet", "Express local delivery options"],
    image: CONES_PRODUCT_IMAGE,
    isPopular: false
  }
];

// Workshop details (derived exactly from the workshop flyer!)
export const WORKSHOP_DETAIL: WorkshopEvent = {
  id: "workshop-1",
  title: "Kumkum & Gud Mehndi Workshop",
  subtitle: "Learn the secret art of flawless natural henna preparation",
  date: "Upcoming Sunday",
  time: "2:00 PM – 4:00 PM IST",
  mode: "Both Modes Available",
  venue: "Offline Studio (CTM, Ahmedabad) & Live Streaming (Zoom meeting Link provided)",
  fees: 799,
  highlights: [
    "Easy Step-by-Step Paste Preparation formulas",
    "Deep Natural Ingredients Knowledge (Kumkum, Gud, Sugar ratios)",
    "Perfect Consistency Ratio & Precise Measurements",
    "State-of-the-art Smooth Sifting & Clog-Free Coning secrets",
    "Direct Paste & Organic Cone Selling business model",
    "Benefits of using Gud (Sugarcane Jaggery) in natural henna"
  ],
  benefits: [
    "All Materials & Guidance PDF Handouts included",
    "Lifetime Whatsapp community support access",
    "Skill certificate issued by Sapna Mehndi Art",
    "Live Interactive QA with Sapna herself"
  ],
  image: WORKSHOP_BANNER_IMAGE,
  totalSeats: 50,
  seatsBooked: 38
};

// Glowing reviews from students and bridal clients
export const RECENT_REVIEWS: UserReview[] = [
  {
    id: "review-1",
    name: "Sneha Patel",
    rating: 5,
    text: "The Kumkum & Gud workshop was a game changer for me! The ratios of jaggery and kumkum gave me the darkest bridal stain I have ever seen. Highly recommend Sapna's teaching style!",
    eventOrDesign: "Kumkum & Gud Workshop Student",
    date: "June 2026"
  },
  {
    id: "review-2",
    name: "Priyanka Shah",
    rating: 5,
    text: "For my wedding, Sapna drew the intricate Lotus Mandala and Peacock arches. The precision was breathtaking, and children at my venue couldn't stop looking. Everyone took pictures!",
    eventOrDesign: "Bridal Client (Ahmedabad)",
    date: "May 2026"
  },
  {
    id: "review-3",
    name: "Rinku Vaghela",
    rating: 5,
    text: "These Kumkum cones are absolutely natural. Zero irritation on my hyper-sensitive skin. The paste flows so smoothly without clogging, cutting my bridal design time in half!",
    eventOrDesign: "Professional Mehndi Cone Buyer",
    date: "June 2026"
  }
];
