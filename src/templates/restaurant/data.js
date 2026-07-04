import { UtensilsCrossed, Wine, Coffee, Pizza, ChefHat, PartyPopper } from 'lucide-react';

export const id = 'restaurant';
export const theme = 'theme-restaurant';
export const heroVariant = 'split';
export const aboutVariant = 'default';
export const servicesVariant = 'grid';
export const galleryVariant = 'grid';
export const testimonialsVariant = 'carousel';
export const faqVariant = 'default';
export const contactVariant = 'default';

export const brand = { name: 'La Maison', tagline: 'Fine Dining, Unforgettable Moments', description: 'An exquisite fine dining experience blending contemporary cuisine with timeless elegance.' };
export const navLinks = [
  { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
  { label: 'Menu', href: '#services' }, { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' }, { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'An Exquisite Culinary Journey',
  subtitle: 'Experience contemporary French cuisine crafted with passion by Chef Antoine. Every dish tells a story of flavor, tradition, and innovation.',
  cta: { text: 'Reserve a Table', href: '#contact' },
};

export const about = {
  title: 'Our Story',
  content: 'La Maison brings the heart of Paris to your plate. Founded by Chef Antoine Laurent in 2012, our restaurant has earned a reputation for exceptional cuisine, warm hospitality, and an unforgettable dining atmosphere. Every ingredient is carefully sourced, every dish meticulously crafted.',
  features: [
    'Michelin-starred chef leading the kitchen',
    'Seasonally inspired menus',
    'Locally sourced, organic ingredients',
    'Extensive wine list with 200+ labels',
    'Private dining for special events',
    'Award-winning dessert program',
  ],
  stats: [
    { value: '15+', label: 'Years of Excellence' },
    { value: '2', label: 'Michelin Stars' },
    { value: '500+', label: 'Wine Selections' },
    { value: '98%', label: 'Satisfaction Rate' },
  ],
};

export const services = {
  title: 'Our Menu',
  subtitle: 'A celebration of flavor',
  items: [
    { icon: UtensilsCrossed, title: 'Tasting Menu', description: 'An 8-course journey through Chef\'s signature dishes. Paired wine options available.', price: '$180/person' },
    { icon: Coffee, title: 'À La Carte', description: 'Curated selection of starters, mains, and desserts. Seasonal ingredients, timeless techniques.', price: '$40-$80' },
    { icon: Wine, title: 'Wine Pairing', description: 'Expertly selected wines from our cellar to complement each course of your meal.', price: '$95/pairing' },
    { icon: Pizza, title: 'Weekend Brunch', description: 'A luxurious brunch experience with live piano music and signature cocktails.', price: '$65/person' },
    { icon: ChefHat, title: 'Chef\'s Table', description: 'An intimate dining experience in our kitchen. Watch the magic happen while you dine.', price: '$250/person' },
    { icon: PartyPopper, title: 'Private Events', description: 'Custom catering and private dining for weddings, corporate events, and celebrations.', price: 'Custom' },
  ],
};

export const gallery = { title: 'Our Ambiance', subtitle: 'A visual taste of La Maison', items: [
    { title: 'Dining Room', category: 'Interior' }, { title: 'Signature Dish', category: 'Food' },
    { title: 'Wine Cellar', category: 'Interior' }, { title: 'Dessert', category: 'Food' },
    { title: 'Outdoor Terrace', category: 'Interior' }, { title: 'Chef at Work', category: 'Kitchen' },
  ] };

export const testimonials = { title: 'Guest Reviews', subtitle: 'What our guests say', items: [
    { name: 'Sophie Lambert', role: 'Regular Guest', content: 'The tasting menu was absolutely divine. Every course was a masterpiece. The wine pairings were spot-on. An unforgettable evening.', rating: 5 },
    { name: 'James Mitchell', role: 'Food Critic', content: 'La Maison sets the standard for fine dining in the city. The attention to detail, the quality of ingredients, and the presentation are exceptional.', rating: 5 },
    { name: 'Elena Voss', role: 'Birthday Guest', content: 'We celebrated our anniversary here and it was perfect. The staff made us feel so special. The chocolate soufflé is life-changing!', rating: 5 },
  ] };

export const faq = { title: 'Frequently Asked Questions', subtitle: 'Planning your visit', items: [
    { question: 'What is your dress code?', answer: 'We maintain a smart casual dress code. Gentlemen are requested to wear collared shirts and closed shoes. Jackets are recommended but not required.' },
    { question: 'Do you accommodate dietary restrictions?', answer: 'Absolutely. Please inform us of any allergies or dietary requirements when booking. Our chef can prepare vegetarian, vegan, gluten-free, and other special menus.' },
    { question: 'What is your cancellation policy?', answer: 'We require 24 hours notice for cancellations. Late cancellations may incur a charge of $50 per person. No-shows will be charged the full tasting menu price.' },
    { question: 'Do you have parking?', answer: 'We offer valet parking Thursday through Sunday evenings. There is also a public parking garage adjacent to the restaurant.' },
    { question: 'Can I book the entire restaurant for a private event?', answer: 'Yes, we accommodate private events for up to 80 guests. Contact our events team for customized menus and pricing.' },
  ] };

export const contact = {
  title: 'Make a Reservation', subtitle: 'We look forward to serving you',
  email: 'reservations@lamaison.com', phone: '+1 (555) 567-8901',
  address: '200 Gourmet Street, Downtown, DT 12345',
  hours: 'Tue-Thu: 5:30 PM - 10:00 PM | Fri-Sat: 5:30 PM - 11:00 PM | Sun: 11:00 AM - 9:00 PM',
};

export const social = { facebook: 'https://facebook.com/lamaison', instagram: 'https://instagram.com/lamaison' };

export const footer = { brandName: 'La Maison', description: 'An exquisite fine dining experience. Every dish tells a story.', links: [
    { label: 'About', href: '#about' }, { label: 'Menu', href: '#services' },
    { label: 'Reservations', href: '#contact' }, { label: 'Gallery', href: '#gallery' },
    { label: 'Careers', href: '#' },
  ], services: ['Tasting Menu', 'À La Carte', 'Wine Pairing', 'Weekend Brunch', 'Chef\'s Table', 'Private Events'] };

export const whatsapp = { phone: '+15555678901', message: 'Hi! I would like to make a reservation at La Maison.' };
export const mapAddress = '200 Gourmet Street, Downtown, DT 12345';
