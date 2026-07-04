import { Monitor, Smartphone, Headphones, Camera, Tv, Cpu } from 'lucide-react';

export const id = 'electronics';
export const theme = 'theme-electronics';
export const heroVariant = 'default';
export const aboutVariant = 'default';
export const servicesVariant = 'grid';
export const galleryVariant = 'grid';
export const testimonialsVariant = 'grid';
export const faqVariant = 'default';
export const contactVariant = 'default';

export const brand = { name: 'TechZone', tagline: 'Your Trusted Electronics Store', description: 'Premier electronics retailer offering the latest gadgets, computers, home entertainment, and expert repair services.' };
export const navLinks = [
  { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
  { label: 'Products', href: '#services' }, { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' }, { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Your Tech, Our Expertise',
  subtitle: 'Discover the latest in consumer electronics. From laptops and smartphones to home entertainment — we have it all at unbeatable prices.',
  cta: { text: 'Browse Products', href: '#services' },
};

export const about = {
  title: 'Trusted for Quality & Service',
  content: 'TechZone has been serving tech enthusiasts since 2010. We partner with leading brands to bring you the latest innovations at competitive prices. Our knowledgeable staff provides expert advice, and our certified repair center ensures your devices stay in top condition.',
  features: [
    'Authorized retailer of major brands',
    'Price match guarantee',
    'Certified repair center',
    'Extended warranty options',
    'Interest-free financing available',
    'Free tech support with every purchase',
  ],
  stats: [
    { value: '50,000+', label: 'Products Sold' },
    { value: '500+', label: 'Brands Available' },
    { value: '95%', label: 'Customer Satisfaction' },
    { value: '14+', label: 'Years in Business' },
  ],
};

export const services = {
  title: 'Our Product Range',
  subtitle: 'Everything tech, all in one place',
  items: [
    { icon: Monitor, title: 'Computers & Laptops', description: 'Gaming PCs, ultrabooks, workstations, monitors, and accessories from top brands.', price: '$300-$3,000' },
    { icon: Smartphone, title: 'Smartphones & Tablets', description: 'Latest iPhones, Samsung, Google Pixel, and Android tablets with all carriers.', price: '$200-$1,500' },
    { icon: Headphones, title: 'Audio & Headphones', description: 'Wireless earbuds, noise-canceling headphones, speakers, soundbars, and home audio systems.', price: '$20-$500' },
    { icon: Camera, title: 'Cameras & Drones', description: 'DSLRs, mirrorless cameras, action cams, drones, and photography accessories.', price: '$200-$3,000' },
    { icon: Tv, title: 'TV & Home Theater', description: '4K/8K TVs, projectors, streaming devices, and complete home theater setups.', price: '$300-$3,000' },
    { icon: Cpu, title: 'Repair Services', description: 'Certified repairs for smartphones, laptops, tablets, and gaming consoles. Fast turnaround.', price: '$50-$200' },
  ],
};

export const gallery = { title: 'Our Store', subtitle: 'Explore TechZone', items: [
    { title: 'Store Front', category: 'Store' }, { title: 'Computer Section', category: 'Products' },
    { title: 'Phone Wall', category: 'Products' }, { title: 'Audio Room', category: 'Products' },
    { title: 'Repair Center', category: 'Services' }, { title: 'Accessories', category: 'Products' },
  ] };

export const testimonials = { title: 'Customer Reviews', subtitle: 'Why customers trust TechZone', items: [
    { name: 'Daniel Park', role: 'Tech Enthusiast', content: 'Best electronics store in town! The staff actually knows what they\'re talking about and helped me build my dream gaming PC.', rating: 5 },
    { name: 'Rachel Adams', role: 'Small Business Owner', content: 'We equip our entire office through TechZone. Great pricing for bulk orders and their business account team is incredibly helpful.', rating: 5 },
    { name: 'Tom Nakamura', role: 'Regular Customer', content: 'Bought a laptop here and the price matched an online competitor without hesitation. Excellent customer service!', rating: 5 },
  ] };

export const faq = { title: 'Frequently Asked Questions', subtitle: 'Your tech questions answered', items: [
    { question: 'What is your return policy?', answer: 'We offer 30-day returns on most items. Products must be in original condition with all accessories. Restocking fees may apply for opened items.' },
    { question: 'Do you price match?', answer: 'Yes! We match prices from major online and local retailers. Simply show us the lower price at the time of purchase.' },
    { question: 'How long do repairs take?', answer: 'Most smartphone and laptop repairs are completed within 24-48 hours. Complex repairs may take 3-5 business days. We provide free diagnostic estimates.' },
    { question: 'Do you offer financing?', answer: 'Yes, we offer 6 and 12-month interest-free financing options through our partner. Subject to credit approval. Ask in-store for details.' },
    { question: 'Can I test products before buying?', answer: 'Absolutely! We have demo units set up for most products. Our staff will gladly give you a hands-on demonstration.' },
  ] };

export const contact = {
  title: 'Contact Us', subtitle: 'We\'re here to help',
  email: 'support@techzone.com', phone: '+1 (555) 123-4567',
  address: '100 Tech Boulevard, Innovation Park, IP 12345',
  hours: 'Mon-Sat: 9:00 AM - 8:00 PM | Sun: 11:00 AM - 6:00 PM',
};

export const social = { facebook: 'https://facebook.com/techzone', instagram: 'https://instagram.com/techzone', youtube: 'https://youtube.com/@techzone' };

export const footer = { brandName: 'TechZone', description: 'Your trusted electronics store since 2010. Quality products, expert service, unbeatable prices.', links: [
    { label: 'About', href: '#about' }, { label: 'Products', href: '#services' },
    { label: 'Services', href: '#services' }, { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ], services: ['Computers', 'Smartphones', 'Audio', 'Cameras', 'TV & Home Theater', 'Repair Services'] };

export const whatsapp = { phone: '+15551234567', message: 'Hi! I have a question about your electronics products.' };
export const mapAddress = '100 Tech Boulevard, Innovation Park, IP 12345';
