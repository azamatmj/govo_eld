
export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  formType?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  compatibility: string[];
  features: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaAction: string;
}

export interface TestimonialData {
  name: string;
  company: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
