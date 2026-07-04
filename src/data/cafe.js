import { Coffee, CupSoda, Sandwich, Cake, Wifi, Heart } from 'lucide-react';

export const id = 'cafe';
export const theme = 'theme-cafe';
export const heroVariant = 'split';
export const aboutVariant = 'default';
export const servicesVariant = 'grid';
export const galleryVariant = 'masonry';
export const testimonialsVariant = 'carousel';
export const faqVariant = 'default';
export const contactVariant = 'default';

export const brand = { name: 'Brew & Bean', tagline: 'Good Coffee, Good Vibes', description: 'A cozy neighborhood cafe serving artisanal coffee, fresh pastries, and light meals in a warm, inviting atmosphere.' };
export const navLinks = [
  { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
  { label: 'Menu', href: '#services' }, { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' }, { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Where Every Sip Tells a Story',
  subtitle: 'Hand-roasted, ethically sourced coffee brewed with passion. Pair it with our freshly baked goods in a space that feels like home.',
  cta: { text: 'View Our Menu', href: '#services' },
};

export const about = {
  title: 'Our Coffee Philosophy',
  content: 'At Brew & Bean, we believe great coffee starts with great beans. We source directly from sustainable farms, roast in small batches, and brew with precision. Our cafe is designed to be your home away from home — a place where friends meet, ideas flow, and every cup is crafted with care.',
  features: [
    'Directly sourced, single-origin beans',
    'Small-batch roasted in-house',
    'Handcrafted espresso drinks',
    'Freshly baked pastries daily',
    'Plant-based milk options',
    'Free high-speed WiFi',
  ],
  stats: [
    { value: '50+', label: 'Coffee Varieties' },
    { value: '500+', label: 'Cups Served Daily' },
    { value: '8', label: 'Years Serving' },
    { value: '4.9', label: 'Star Rating' },
  ],
};

export const services = {
  title: 'Our Menu',
  subtitle: 'Crafted with love, served with a smile',
  items: [
    { icon: Coffee, title: 'Espresso Bar', description: 'Classic espresso, cappuccino, latte, flat white, and seasonal specialties.', price: '$3-$7' },
    { icon: CupSoda, title: 'Cold Brews', description: 'Smooth cold brew, nitro cold brew, and refreshing iced lattes in various flavors.', price: '$4-$8' },
    { icon: Sandwich, title: 'Light Meals', description: 'Fresh sandwiches, wraps, salads, and quiches made with locally sourced ingredients.', price: '$8-$14' },
    { icon: Cake, title: 'Pastries & Desserts', description: 'Croissants, muffins, cakes, and cookies — all baked fresh every morning.', price: '$3-$9' },
    { icon: Heart, title: 'Specialty Drinks', description: 'Matcha lattes, chai, hot chocolate, turmeric lattes, and seasonal creations.', price: '$4-$8' },
    { icon: Wifi, title: 'Work-Friendly Space', description: 'Comfortable seating, fast WiFi, plenty of outlets — perfect for remote work.', price: 'Free' },
  ],
};

export const gallery = { title: 'Our Cafe', subtitle: 'A visual tour of Brew & Bean', items: [
    { title: 'Interior', category: 'Space' }, { title: 'Latte Art', category: 'Coffee' },
    { title: 'Outdoor Seating', category: 'Space' }, { title: 'Fresh Pastries', category: 'Food' },
    { title: 'Barista at Work', category: 'Coffee' }, { title: 'Cozy Corner', category: 'Space' },
  ] };

export const testimonials = { title: 'What Our Customers Say', subtitle: 'The heart of our community', items: [
    { name: 'Emma Watson', role: 'Regular', content: 'Best flat white in town! The atmosphere is perfect for reading or catching up with friends. Love this place.', rating: 5 },
    { name: 'Tom Hardy', role: 'Remote Worker', content: 'I work from here at least 3 days a week. Great WiFi, plenty of outlets, and the staff remembers my order. Feels like family.', rating: 5 },
    { name: 'Lisa Park', role: 'Food Blogger', content: 'The almond croissant is heavenly and the matcha latte is perfectly balanced. A hidden gem!', rating: 5 },
  ] };

export const faq = { title: 'Frequently Asked Questions', subtitle: 'Everything about Brew & Bean', items: [
    { question: 'Do you have vegan options?', answer: 'Yes! We offer oat, almond, and soy milk alternatives. Our menu includes several vegan pastries and a delicious vegan breakfast bowl.' },
    { question: 'Is there WiFi?', answer: 'Yes, free high-speed WiFi is available for all customers. Ask our barista for the password.' },
    { question: 'Do you roast your own coffee?', answer: 'Yes, we roast all our coffee in small batches right here in our micro-roastery. You can also buy our beans to brew at home.' },
    { question: 'Can I book the space for an event?', answer: 'We host small private events and gatherings. Contact us for details about our evening rental options.' },
    { question: 'Do you have loyalty program?', answer: 'Yes! Get a stamp card — buy 10 drinks and get one free. We also have a mobile app for rewards.' },
  ] };

export const contact = {
  title: 'Find Us', subtitle: 'Come say hi!',
  email: 'hello@brewbean.cafe', phone: '+1 (555) 678-9012',
  address: '55 Coffee Lane, Arts District, AD 12345',
  hours: 'Mon-Fri: 7:00 AM - 7:00 PM | Sat-Sun: 8:00 AM - 6:00 PM',
};

export const social = { facebook: 'https://facebook.com/brewbean', instagram: 'https://instagram.com/brewbean' };

export const footer = { brandName: 'Brew & Bean Cafe', description: 'Good coffee, good vibes, great community. Your neighborhood cafe since 2016.', links: [
    { label: 'About', href: '#about' }, { label: 'Menu', href: '#services' },
    { label: 'Gallery', href: '#gallery' }, { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#' },
  ], services: ['Espresso Bar', 'Cold Brews', 'Pastries', 'Light Meals', 'Specialty Drinks', 'Coffee Beans'] };

export const whatsapp = { phone: '+15556789012', message: 'Hi! I have a question about Brew & Bean Cafe.' };
export const mapAddress = '55 Coffee Lane, Arts District, AD 12345';
