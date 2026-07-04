import { Pen, BookOpen, Scissors, Ruler, Palette, Gift } from 'lucide-react';

export const id = 'stationery';
export const theme = 'theme-stationery';
export const heroVariant = 'default';
export const aboutVariant = 'default';
export const servicesVariant = 'grid';
export const galleryVariant = 'grid';
export const testimonialsVariant = 'grid';
export const faqVariant = 'default';
export const contactVariant = 'default';

export const brand = { name: 'Paper & Ink', tagline: 'Everything for Your Creative Journey', description: 'Your one-stop shop for premium stationery, art supplies, office essentials, and unique gifts.' };
export const navLinks = [
  { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
  { label: 'Products', href: '#services' }, { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' }, { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Your Ideas Deserve the Best Tools',
  subtitle: 'Premium stationery, art supplies, and office essentials that inspire creativity. From notebooks that spark ideas to pens that flow effortlessly.',
  cta: { text: 'Shop Now', href: '#services' },
};

export const about = {
  title: 'Our Story',
  content: 'Paper & Ink started from a simple belief: the right tools make all the difference. We curate the finest stationery and art supplies from around the world, bringing together quality craftsmanship, thoughtful design, and everyday functionality. Whether you\'re an artist, student, or professional — we have everything you need to create, organize, and inspire.',
  features: [
    'Premium Japanese and European stationery',
    'Professional art supplies',
    'Eco-friendly and sustainable products',
    'Custom engraving and personalization',
    'Gift wrapping services',
    'School and office supply bulk orders',
  ],
  stats: [
    { value: '5000+', label: 'Products' },
    { value: '200+', label: 'Brands' },
    { value: '15+', label: 'Years in Business' },
    { value: '4.8', label: 'Customer Rating' },
  ],
};

export const services = {
  title: 'Our Collections',
  subtitle: 'Curated for every creative need',
  items: [
    { icon: Pen, title: 'Writing Instruments', description: 'Fountain pens, ballpoints, rollerballs, and markers from top brands like Pilot, Lamy, and Kaweco.', price: '$5-$500' },
    { icon: BookOpen, title: 'Notebooks & Journals', description: 'Leather-bound journals, bullet notebooks, dotted planners, and premium writing pads.', price: '$8-$60' },
    { icon: Scissors, title: 'Office Supplies', description: 'Desk organizers, scissors, staplers, paper trimmers, and everything for a productive workspace.', price: '$2-$80' },
    { icon: Ruler, title: 'Art Supplies', description: 'Watercolors, acrylics, sketchbooks, colored pencils, and professional drawing materials.', price: '$3-$200' },
    { icon: Palette, title: 'Craft Materials', description: 'Paper crafting, calligraphy sets, washi tapes, stamps, and DIY kit supplies.', price: '$2-$50' },
    { icon: Gift, title: 'Gifts & Accessories', description: 'Curated gift sets, desk accessories, bookmarks, and unique finds for stationery lovers.', price: '$10-$150' },
  ],
};

export const gallery = { title: 'Our Store', subtitle: 'Explore Paper & Ink', items: [
    { title: 'Store Front', category: 'Store' }, { title: 'Pen Collection', category: 'Products' },
    { title: 'Notebook Display', category: 'Products' }, { title: 'Interior', category: 'Store' },
    { title: 'Art Supplies', category: 'Products' }, { title: 'Gift Section', category: 'Store' },
  ] };

export const testimonials = { title: 'Customer Love', subtitle: 'Why our customers keep coming back', items: [
    { name: 'Rachel Green', role: 'Artist', content: 'The best selection of art supplies in the city. I love the quality of their watercolor paper and the staff is always so helpful.', rating: 5 },
    { name: 'David Chen', role: 'Office Manager', content: 'We order all our office supplies from Paper & Ink. Reliable delivery, great pricing, and excellent customer service.', rating: 5 },
    { name: 'Maya Patel', role: 'Student', content: 'Perfect place for school supplies! They have everything I need for my architecture courses at reasonable prices.', rating: 5 },
  ] };

export const faq = { title: 'Frequently Asked Questions', subtitle: 'Everything about Paper & Ink', items: [
    { question: 'What brands do you carry?', answer: 'We carry over 200 brands including Pilot, Lamy, Kaweco, Rhodia, Leuchtturm1917, Moleskine, Faber-Castell, Staedtler, Tombow, and many more.' },
    { question: 'Do you offer online shopping?', answer: 'Yes! You can shop our full catalog on our website with nationwide delivery. Orders over $50 ship free.' },
    { question: 'Do you offer gift wrapping?', answer: 'Yes, complimentary gift wrapping is available for all purchases. We also offer custom gift baskets and corporate gift services.' },
    { question: 'Can I return or exchange items?', answer: 'We accept returns within 30 days with original receipt. Stationery items must be unused. Custom orders are non-refundable.' },
    { question: 'Do you have a loyalty program?', answer: 'Yes! Join our Ink Rewards program — earn points on every purchase and get exclusive discounts and early access to new collections.' },
  ] };

export const contact = {
  title: 'Visit Us', subtitle: 'Come explore our collection',
  email: 'hello@paperandink.com', phone: '+1 (555) 789-0123',
  address: '88 Creative Street, Artisan Quarter, AQ 12345',
  hours: 'Mon-Sat: 10:00 AM - 7:00 PM | Sun: 11:00 AM - 5:00 PM',
};

export const social = { facebook: 'https://facebook.com/paperandink', instagram: 'https://instagram.com/paperandink' };

export const footer = { brandName: 'Paper & Ink', description: 'Premium stationery, art supplies, and gifts for every creative journey.', links: [
    { label: 'About', href: '#about' }, { label: 'Products', href: '#services' },
    { label: 'Gallery', href: '#gallery' }, { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ], services: ['Writing Instruments', 'Notebooks', 'Office Supplies', 'Art Supplies', 'Craft Materials', 'Gifts'] };

export const whatsapp = { phone: '+15557890123', message: 'Hi! I have a question about your stationery products.' };
export const mapAddress = '88 Creative Street, Artisan Quarter, AQ 12345';
