/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MehndiDesign {
  id: string;
  title: string;
  category: 'bridal' | 'festive' | 'sketch' | 'modern';
  image: string;
  description: string;
  timeToComplete: string;
  complexity: 'Exquisite' | 'Surgical Detail' | 'Traditional' | 'Measurement Blueprint';
  tags: string[];
}

export interface MehndiCone {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  packSize: string;
  ingredients: string[];
  benefits: string[];
  image: string;
  isPopular?: boolean;
}

export interface WorkshopEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  mode: 'Online (Zoom)' | 'Offline (CTM, Ahmedabad)' | 'Both Modes Available';
  venue: string;
  onlineLink?: string;
  fees: number;
  highlights: string[];
  benefits: string[];
  image: string;
  totalSeats: number;
  seatsBooked: number;
}

export interface MehndiQuote {
  id: string;
  text: string;
  author: string;
  context: string;
}

export interface UserReview {
  id: string;
  name: string;
  rating: number;
  text: string;
  eventOrDesign: string;
  date: string;
}
