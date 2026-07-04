import { Home, Building2, Key, TrendingUp, MapPin, Shield } from 'lucide-react';

export const id = 'real-estate';
export const theme = 'theme-real-estate';
export const heroVariant = 'centered';
export const aboutVariant = 'default';
export const servicesVariant = 'grid';
export const galleryVariant = 'grid';
export const testimonialsVariant = 'carousel';
export const faqVariant = 'default';
export const contactVariant = 'default';

export const brand = { name: 'Premier Homes Realty', tagline: 'Find Your Dream Home', description: 'A leading real estate agency specializing in residential and commercial properties. Expert guidance for buyers, sellers, and investors.' };
export const navLinks = [
  { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' }, { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' }, { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Your Dream Home Starts Here',
  subtitle: 'Expert real estate guidance for buyers, sellers, and investors. We turn houses into homes with personalized service and market expertise.',
  cta: { text: 'Browse Properties', href: '#services' },
};

export const about = {
  title: 'Why Choose Premier Homes?',
  content: 'With over 20 years of combined experience, our team of dedicated real estate professionals has helped hundreds of families find their perfect homes. We combine local market knowledge with innovative marketing strategies to deliver exceptional results for every client.',
  features: [
    'Deep local market expertise',
    'Advanced property marketing',
    'Expert negotiation skills',
    'Full-service buying and selling support',
    'Property management services',
    'Free market evaluations',
  ],
  stats: [
    { value: '500+', label: 'Properties Sold' },
    { value: '50+', label: 'Expert Agents' },
    { value: '20+', label: 'Years Experience' },
    { value: '99%', label: 'Client Satisfaction' },
  ],
};

export const services = {
  title: 'Our Services',
  subtitle: 'Comprehensive real estate solutions',
  items: [
    { icon: Home, title: 'Home Buying', description: 'Find your perfect home with expert guidance. We help you navigate listings, negotiations, and closing with confidence.', price: '' },
    { icon: Key, title: 'Home Selling', description: 'Maximize your property\'s value with professional staging, photography, marketing, and strategic pricing.', price: '' },
    { icon: Building2, title: 'Commercial Property', description: 'Office spaces, retail locations, and investment properties for businesses and investors.', price: '' },
    { icon: TrendingUp, title: 'Investment Advisory', description: 'Data-driven investment strategies to build and manage your real estate portfolio.', price: '' },
    { icon: MapPin, title: 'Property Management', description: 'Full-service management for rental properties including tenant screening, maintenance, and accounting.', price: '' },
    { icon: Shield, title: 'Free Valuation', description: 'Get a no-obligation market analysis of your property\'s current value and selling potential.', price: 'Free' },
  ],
};

export const gallery = { title: 'Featured Properties', subtitle: 'A glimpse at what we offer', items: [
    { title: 'Modern Family Home', category: 'Residential' }, { title: 'Luxury Condo', category: 'Residential' },
    { title: 'Commercial Space', category: 'Commercial' }, { title: 'Garden Villa', category: 'Residential' },
    { title: 'Office Building', category: 'Commercial' }, { title: 'Beachfront Property', category: 'Luxury' },
  ] };

export const testimonials = { title: 'Client Testimonials', subtitle: 'Hear from happy homeowners', items: [
    { name: 'Jennifer & Mark Taylor', role: 'Home Buyers', content: 'Premier Homes made our first home-buying experience stress-free. They found us the perfect house within our budget and guided us through every step.', rating: 5 },
    { name: 'Robert Chen', role: 'Property Seller', content: 'Our house sold in just 5 days for above asking price! The marketing and staging were exceptional. Highly recommend this team.', rating: 5 },
    { name: 'Sarah Williams', role: 'Investor', content: 'I\'ve worked with Premier Homes on several investment properties. Their market analysis is always accurate and their property management team is outstanding.', rating: 5 },
  ] };

export const faq = { title: 'Frequently Asked Questions', subtitle: 'Your real estate questions answered', items: [
    { question: 'How much is my home worth?', answer: 'We offer free, no-obligation home valuations. Our agents will analyze recent comparable sales, current market conditions, and your property\'s unique features to provide an accurate estimate.' },
    { question: 'What are the steps to buy a home?', answer: 'The process includes: 1) Get pre-approved for a mortgage, 2) Define your criteria, 3) Start viewing properties, 4) Make an offer, 5) Home inspection, 6) Closing. We guide you through each step.' },
    { question: 'What is your commission rate?', answer: 'Our standard commission is 5% for full-service listings, which includes professional photography, virtual tours, staging consultation, marketing, and open houses.' },
    { question: 'How long does it take to sell a home?', answer: 'On average, homes in our market sell within 30-45 days. This varies based on location, pricing, and market conditions. We provide a customized marketing plan to expedite the sale.' },
    { question: 'Do you help with relocation?', answer: 'Yes! We offer comprehensive relocation services including neighborhood tours, school information, and temporary housing assistance for clients moving from out of town.' },
  ] };

export const contact = {
  title: 'Let\'s Find Your Dream Home', subtitle: 'Schedule a consultation today',
  email: 'info@premierhomes.com', phone: '+1 (555) 234-5678',
  address: '200 Realty Row, Suite 300, Dream City, DC 12345',
  hours: 'Mon-Fri: 9:00 AM - 6:00 PM | Sat: 10:00 AM - 4:00 PM | Sun: By Appointment',
};

export const social = { facebook: 'https://facebook.com/premierhomes', instagram: 'https://instagram.com/premierhomes', linkedin: 'https://linkedin.com/company/premierhomes' };

export const footer = { brandName: 'Premier Homes Realty', description: 'Find your dream home with the region\'s most trusted real estate agency.', links: [
    { label: 'About', href: '#about' }, { label: 'Services', href: '#services' },
    { label: 'Properties', href: '#gallery' }, { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ], services: ['Home Buying', 'Home Selling', 'Commercial Property', 'Investment Advisory', 'Property Management', 'Free Valuation'] };

export const whatsapp = { phone: '+15552345678', message: 'Hi! I want to learn more about your real estate services.' };
export const mapAddress = '200 Realty Row, Suite 300, Dream City, DC 12345';
