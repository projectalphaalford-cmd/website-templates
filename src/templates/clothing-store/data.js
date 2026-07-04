import { Shirt, ShoppingBag, Watch, Sparkles, Tag, Truck } from 'lucide-react';

export const id = 'clothing-store';
export const theme = 'theme-clothing-store';
export const heroVariant = 'split';
export const aboutVariant = 'default';
export const servicesVariant = 'grid';
export const galleryVariant = 'grid';
export const testimonialsVariant = 'grid';
export const faqVariant = 'default';
export const contactVariant = 'default';

export const brand = { name: 'Velvet & Co.', tagline: 'Style That Speaks Volumes', description: 'A contemporary fashion boutique offering curated collections of clothing, accessories, and footwear for the modern individual.' };
export const navLinks = [
  { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
  { label: 'Collections', href: '#services' }, { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' }, { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Elevate Your Everyday Style',
  subtitle: 'Curated fashion for those who refuse to blend in. Discover our latest collections — where quality meets contemporary design.',
  cta: { text: 'Shop Collections', href: '#services' },
};

export const about = {
  title: 'Our Story',
  content: 'Velvet & Co. was born from a passion for fashion that\'s both accessible and aspirational. We curate pieces that transcend seasons — timeless designs with a modern edge. Every item in our collection is chosen for its quality, fit, and ability to make you feel confident.',
  features: [
    'Handpicked collections from global designers',
    'Sustainable and ethical fashion focus',
    'Personal styling consultations',
    'Free alterations on all purchases',
    'Easy 30-day returns',
    'Loyalty rewards program',
  ],
  stats: [
    { value: '5000+', label: 'Happy Customers' },
    { value: '200+', label: 'Designer Brands' },
    { value: '8+', label: 'Years in Fashion' },
    { value: '4.8', label: 'Customer Rating' },
  ],
};

export const services = {
  title: 'Our Collections',
  subtitle: 'Discover your next favorite outfit',
  items: [
    { icon: Shirt, title: 'Women\'s Apparel', description: 'Dresses, tops, blouses, pants, skirts, and outerwear from contemporary to formal.', price: '$30-$300' },
    { icon: ShoppingBag, title: 'Men\'s Collection', description: 'Shirts, blazers, trousers, casual wear, and accessories for the modern gentleman.', price: '$40-$400' },
    { icon: Watch, title: 'Accessories', description: 'Handbags, belts, watches, scarves, jewelry, and sunglasses to complete any look.', price: '$20-$500' },
    { icon: Sparkles, title: 'Footwear', description: 'Sneakers, heels, boots, loafers, and sandals from premium brands.', price: '$50-$350' },
    { icon: Tag, title: 'Seasonal Sale', description: 'Up to 70% off on selected items from past collections. Limited stock.', price: 'Sale' },
    { icon: Truck, title: 'Personal Styling', description: 'Book a one-on-one styling session for personalized outfit recommendations.', price: 'Free' },
  ],
};

export const gallery = { title: 'Lookbook', subtitle: 'Style inspiration', items: [
    { title: 'Summer Collection 2024', category: 'Women' }, { title: 'Tailored Fit', category: 'Men' },
    { title: 'Accessory Edit', category: 'Accessories' }, { title: 'Evening Wear', category: 'Women' },
    { title: 'Casual Luxe', category: 'Men' }, { title: 'Store Interior', category: 'Store' },
  ] };

export const testimonials = { title: 'What Our Customers Say', subtitle: 'Real reviews from real fashion lovers', items: [
    { name: 'Olivia Hart', role: 'Fashion Blogger', content: 'Velvet & Co. is my go-to for statement pieces. The quality is exceptional and their styling advice is always on point.', rating: 5 },
    { name: 'Marcus Brown', role: 'Regular Customer', content: 'Finally found a store that understands men\'s fashion. Great fit, quality fabrics, and the staff actually knows style.', rating: 5 },
    { name: 'Sophie Kim', role: 'Online Shopper', content: 'Online shopping experience is seamless. Delivery is fast and returns are hassle-free. Love their curated boxes!', rating: 5 },
  ] };

export const faq = { title: 'Frequently Asked Questions', subtitle: 'Everything about shopping at Velvet & Co.', items: [
    { question: 'What sizes do you carry?', answer: 'We carry XS to 3XL in most styles. Our collection includes both regular and plus-size options. Check individual product pages for specific size availability.' },
    { question: 'What is your return policy?', answer: 'We offer free returns within 30 days of purchase. Items must be unworn with tags attached. Refunds are processed within 5-7 business days.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship to over 50 countries. International delivery takes 7-14 business days. Duties and taxes may apply based on destination.' },
    { question: 'Can I book a personal styling session?', answer: 'Absolutely! Personal styling sessions are complimentary and can be booked online or in-store. Our stylists will curate looks based on your preferences.' },
    { question: 'Do you have a loyalty program?', answer: 'Yes! Join Velvet Rewards for free. Earn points on every purchase, get birthday discounts, early access to sales, and exclusive invitations to fashion events.' },
  ] };

export const contact = {
  title: 'Get in Touch', subtitle: 'We\'d love to hear from you',
  email: 'hello@velvetandco.com', phone: '+1 (555) 012-3456',
  address: '77 Fashion Avenue, Boutique District, BD 12345',
  hours: 'Mon-Sat: 10:00 AM - 8:00 PM | Sun: 11:00 AM - 6:00 PM',
};

export const social = { facebook: 'https://facebook.com/velvetandco', instagram: 'https://instagram.com/velvetandco' };

export const footer = { brandName: 'Velvet & Co.', description: 'Style that speaks volumes. Curated fashion for those who refuse to blend in.', links: [
    { label: 'About', href: '#about' }, { label: 'Collections', href: '#services' },
    { label: 'Lookbook', href: '#gallery' }, { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ], services: ['Women\'s Apparel', 'Men\'s Collection', 'Accessories', 'Footwear', 'Personal Styling', 'Sale'] };

export const whatsapp = { phone: '+15550123456', message: 'Hi! I have a question about your clothing collection.' };
export const mapAddress = '77 Fashion Avenue, Boutique District, BD 12345';
