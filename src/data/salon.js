import { Scissors, Sparkles, Eye, Wind, SprayCan, Star } from 'lucide-react';

export const id = 'salon';
export const theme = 'theme-salon';
export const heroVariant = 'centered';
export const aboutVariant = 'default';
export const servicesVariant = 'list';
export const galleryVariant = 'grid';
export const testimonialsVariant = 'carousel';
export const faqVariant = 'default';
export const contactVariant = 'default';

export const brand = { name: 'Glam & Grace Salon', tagline: 'Where Beauty Meets Elegance', description: 'A premium salon offering expert hair, nail, and beauty services in a luxurious, relaxing environment.' };
export const navLinks = [
  { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' }, { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' }, { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Reveal Your Inner Glow',
  subtitle: 'Experience luxury beauty services in a serene, sophisticated setting. Expert stylists, premium products, and personalized care for every client.',
  cta: { text: 'Book an Appointment', href: '#contact' },
};

export const about = {
  title: 'Our Philosophy',
  content: 'At Glam & Grace, we believe beauty is a form of self-care. Our team of skilled stylists and aestheticians use premium products and latest techniques to deliver stunning results. Step into our sanctuary and let us pamper you from head to toe.',
  features: [
    'Internationally trained stylists',
    'Premium hair care products',
    'Hygiene-first approach',
    'Relaxing spa-like atmosphere',
    'Bridal and event packages',
    'Men\'s grooming services',
  ],
  stats: [
    { value: '10,000+', label: 'Happy Clients' },
    { value: '20+', label: 'Beauty Experts' },
    { value: '12+', label: 'Years in Business' },
    { value: '4.9', label: 'Star Rating' },
  ],
};

export const services = {
  title: 'Our Services',
  subtitle: 'Premium beauty services tailored to you',
  items: [
    { icon: Scissors, title: 'Haircuts & Styling', description: 'Precision cuts, blow-dries, updos, and styling for any occasion.', price: '$45-$120' },
    { icon: Sparkles, title: 'Hair Color & Highlights', description: 'Balayage, ombre, full color, highlights, and creative color techniques.', price: '$80-$250' },
    { icon: Eye, title: 'Makeup Services', description: 'Natural glam, bridal makeup, editorial looks, and airbrush application.', price: '$60-$200' },
    { icon: Wind, title: 'Blowouts & Treatments', description: 'Smoothing treatments, keratin, deep conditioning, and scalp treatments.', price: '$40-$150' },
    { icon: SprayCan, title: 'Nail Services', description: 'Manicure, pedicure, gel, acrylics, dip powder, and nail art.', price: '$25-$80' },
    { icon: Star, title: 'Bridal Packages', description: 'Complete bridal beauty including trial, hair, makeup, and nail services.', price: '$350-$800' },
  ],
};

export const gallery = { title: 'Our Work', subtitle: 'Transformation by our talented team', items: [
    { title: 'Bridal Makeup', category: 'Makeup' }, { title: 'Balayage', category: 'Hair' },
    { title: 'Nail Art', category: 'Nails' }, { title: 'Updo Styling', category: 'Hair' },
    { title: 'Editorial Look', category: 'Makeup' }, { title: 'Salon Interior', category: 'Salon' },
  ] };

export const testimonials = { title: 'Client Reviews', subtitle: 'Why our clients love us', items: [
    { name: 'Amanda Lewis', role: 'Regular Client', content: 'I\'ve been coming to Glam & Grace for 3 years and I\'ve never had a bad experience. The color work is incredible and the salon is so relaxing.', rating: 5 },
    { name: 'Jessica Moore', role: 'Bride', content: 'My wedding hair and makeup were absolutely perfect! The team made me feel like a princess on my big day. Thank you!', rating: 5 },
    { name: 'Chris Bennett', role: 'Client', content: 'Finally found a salon that does great men\'s cuts! Professional, quick, and reasonably priced. Highly recommend.', rating: 5 },
  ] };

export const faq = { title: 'Frequently Asked Questions', subtitle: 'Everything about Glam & Grace', items: [
    { question: 'Do I need to book an appointment?', answer: 'While we welcome walk-ins, we recommend booking an appointment to ensure availability — especially for color services and weekends.' },
    { question: 'What products do you use?', answer: 'We use premium professional products including Oribe, Kerastase, Olaplex, and Redken. We also carry a selection of products for purchase.' },
    { question: 'How long does a color service take?', answer: 'Color services typically take 2-4 hours depending on the complexity. Balayage and highlights are on the longer end. We\'ll provide a time estimate when you book.' },
    { question: 'What is your cancellation policy?', answer: 'We require 24 hours notice for cancellations. Late cancellations may be charged 50% of the service fee.' },
    { question: 'Do you offer bridal trials?', answer: 'Yes! We recommend booking a trial 4-6 weeks before your wedding to perfect your look. Trials are $150 and include hair and makeup.' },
  ] };

export const contact = {
  title: 'Book Your Appointment', subtitle: 'Transform your look today',
  email: 'hello@glamandgrace.com', phone: '+1 (555) 901-2345',
  address: '500 Beauty Boulevard, Suite 100, Style City, SC 12345',
  hours: 'Tue-Fri: 10:00 AM - 8:00 PM | Sat: 9:00 AM - 7:00 PM | Sun: 10:00 AM - 5:00 PM',
};

export const social = { facebook: 'https://facebook.com/glamandgrace', instagram: 'https://instagram.com/glamandgrace' };

export const footer = { brandName: 'Glam & Grace Salon', description: 'Where beauty meets elegance. Experience luxury beauty services in a serene setting.', links: [
    { label: 'About', href: '#about' }, { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' }, { label: 'Book Now', href: '#contact' },
    { label: 'Careers', href: '#' },
  ], services: ['Haircuts & Styling', 'Color & Highlights', 'Makeup', 'Nail Services', 'Treatments', 'Bridal Packages'] };

export const whatsapp = { phone: '+15559012345', message: 'Hi! I would like to book an appointment at Glam & Grace Salon.' };
export const mapAddress = '500 Beauty Boulevard, Suite 100, Style City, SC 12345';
