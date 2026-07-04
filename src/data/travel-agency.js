import { Plane, Map, Compass, Camera, Luggage, Globe } from 'lucide-react';

export const id = 'travel-agency';
export const theme = 'theme-travel-agency';
export const heroVariant = 'centered';
export const aboutVariant = 'image-right';
export const servicesVariant = 'grid';
export const galleryVariant = 'masonry';
export const testimonialsVariant = 'carousel';
export const faqVariant = 'default';
export const contactVariant = 'default';

export const brand = { name: 'Wanderlust Travels', tagline: 'Explore More, Worry Less', description: 'Your trusted travel partner offering curated packages, expert guidance, and unforgettable experiences worldwide.' };
export const navLinks = [
  { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
  { label: 'Packages', href: '#services' }, { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' }, { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Adventure Awaits — Go Explore',
  subtitle: 'Curated travel experiences to the world\'s most breathtaking destinations. Let us plan your perfect getaway with personalized itineraries and expert local guides.',
  cta: { text: 'Explore Destinations', href: '#services' },
};

export const about = {
  title: 'Why Travel With Us?',
  content: 'With over 15 years of travel industry experience, Wanderlust Travels has sent thousands of travelers on unforgettable journeys. We believe travel transforms lives — and we\'re committed to making every trip seamless, safe, and extraordinary.',
  features: [
    'Expert travel consultants',
    'Curated, unique itineraries',
    '24/7 travel support worldwide',
    'Best price guarantee',
    'Sustainable travel practices',
    'VIP airport lounge access',
  ],
  stats: [
    { value: '10,000+', label: 'Travelers Served' },
    { value: '50+', label: 'Countries Covered' },
    { value: '500+', label: 'Curated Packages' },
    { value: '15+', label: 'Years of Excellence' },
  ],
};

export const services = {
  title: 'Travel Packages',
  subtitle: 'Handcrafted journeys for every traveler',
  items: [
    { icon: Plane, title: 'Beach Getaways', description: 'Tropical paradise retreats. Maldives, Bali, Phuket, Caribbean islands and more.', price: '$800-$3,000' },
    { icon: Map, title: 'European Tours', description: 'Explore Paris, Rome, Barcelona, London, and the Swiss Alps with expert guides.', price: '$1,500-$5,000' },
    { icon: Compass, title: 'Adventure Trips', description: 'Trekking, safaris, diving expeditions, and adrenaline-fueled adventures.', price: '$1,200-$4,000' },
    { icon: Camera, title: 'Cultural Experiences', description: 'Immerse yourself in local cultures with authentic experiences and homestays.', price: '$900-$3,500' },
    { icon: Luggage, title: 'Luxury Travel', description: '5-star accommodations, private transfers, and exclusive experiences for discerning travelers.', price: '$3,000-$10,000' },
    { icon: Globe, title: 'Custom Itineraries', description: 'Fully personalized trips designed around your preferences, budget, and timeline.', price: 'Custom' },
  ],
};

export const gallery = { title: 'Destinations', subtitle: 'A window to the world', items: [
    { title: 'Bali Sunset', category: 'Beach' }, { title: 'Paris Skyline', category: 'Europe' },
    { title: 'African Safari', category: 'Adventure' }, { title: 'Maldives', category: 'Beach' },
    { title: 'Swiss Alps', category: 'Europe' }, { title: 'Kyoto Temple', category: 'Cultural' },
  ] };

export const testimonials = { title: 'Traveler Stories', subtitle: 'Real experiences from real travelers', items: [
    { name: 'Emily & James', role: 'Honeymooners', content: 'Our Bali honeymoon was absolutely perfect! Every detail was taken care of, from the private villa to the sunset dinner on the beach. Unforgettable!', rating: 5 },
    { name: 'Mike Thompson', role: 'Solo Traveler', content: 'The European tour exceeded all expectations. Our guide was knowledgeable, the group was fantastic, and the itinerary was perfectly paced.', rating: 5 },
    { name: 'The Park Family', role: 'Family of 4', content: 'Our first family trip abroad and Wanderlust made it stress-free. The kids loved the activities and we loved the seamless organization.', rating: 5 },
  ] };

export const faq = { title: 'Frequently Asked Questions', subtitle: 'Everything about traveling with us', items: [
    { question: 'Are flights included in package prices?', answer: 'Some packages include flights while others are land-only. Each package clearly states what\'s included. We can also arrange flights separately at competitive rates.' },
    { question: 'What is your cancellation policy?', answer: 'Cancellation policies vary by package and provider. We offer flexible booking options and recommend travel insurance for full coverage. Standard packages offer free cancellation up to 30 days before departure.' },
    { question: 'Do I need travel insurance?', answer: 'We strongly recommend travel insurance for all bookings. It covers trip cancellation, medical emergencies, lost baggage, and other unexpected events. We offer comprehensive plans through our partners.' },
    { question: 'Can I customize a package?', answer: 'Absolutely! Our custom itinerary service is designed for travelers who want a personalized experience. We\'ll work with you to create the perfect trip.' },
    { question: 'What safety measures do you have?', answer: 'We vet all accommodations, transportation partners, and guides. We provide 24/7 support, real-time safety updates, and ensure all destinations meet our safety standards.' },
  ] };

export const contact = {
  title: 'Start Planning Your Trip', subtitle: 'Your dream vacation is just a message away',
  email: 'travel@wanderlust.com', phone: '+1 (555) 345-6789',
  address: '150 Adventure Avenue, Travel Plaza, TP 12345',
  hours: 'Mon-Fri: 9:00 AM - 7:00 PM | Sat: 10:00 AM - 4:00 PM',
};

export const social = { facebook: 'https://facebook.com/wanderlusttravels', instagram: 'https://instagram.com/wanderlusttravels', youtube: 'https://youtube.com/@wanderlusttravels' };

export const footer = { brandName: 'Wanderlust Travels', description: 'Explore more, worry less. Your trusted partner for unforgettable journeys worldwide.', links: [
    { label: 'About', href: '#about' }, { label: 'Packages', href: '#services' },
    { label: 'Destinations', href: '#gallery' }, { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ], services: ['Beach Getaways', 'European Tours', 'Adventure Trips', 'Cultural Experiences', 'Luxury Travel', 'Custom Itineraries'] };

export const whatsapp = { phone: '+15553456789', message: 'Hi! I want to plan my next trip with Wanderlust Travels.' };
export const mapAddress = '150 Adventure Avenue, Travel Plaza, TP 12345';
