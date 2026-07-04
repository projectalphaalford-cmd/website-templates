import { Camera, Image, Video, Users, Heart, Award } from 'lucide-react';

export const id = 'photography';
export const theme = 'theme-photography';
export const heroVariant = 'centered';
export const aboutVariant = 'default';
export const servicesVariant = 'grid';
export const galleryVariant = 'masonry';
export const testimonialsVariant = 'carousel';
export const faqVariant = 'default';
export const contactVariant = 'default';

export const brand = { name: 'Lens & Light Studio', tagline: 'Capturing Moments That Last Forever', description: 'Professional photography studio specializing in wedding, portrait, commercial, and event photography with an artistic touch.' };
export const navLinks = [
  { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' }, { label: 'Portfolio', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' }, { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Every Picture Tells a Story',
  subtitle: 'Professional photography that captures the emotion, beauty, and essence of your most precious moments. Your story deserves to be told beautifully.',
  cta: { text: 'Book a Session', href: '#contact' },
};

export const about = {
  title: 'Our Vision',
  content: 'At Lens & Light Studio, we believe photography is more than just taking pictures — it\'s about freezing moments in time. Led by award-winning photographer Alex Morgan, our team brings artistic vision, technical expertise, and genuine passion to every project we undertake.',
  features: [
    'Award-winning lead photographer',
    'State-of-the-art professional equipment',
    'Artistic and natural editing style',
    'Quick turnaround times',
    'Private online galleries',
    'Print and album options available',
  ],
  stats: [
    { value: '500+', label: 'Weddings Shot' },
    { value: '2000+', label: 'Happy Clients' },
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Awards Won' },
  ],
};

export const services = {
  title: 'Photography Services',
  subtitle: 'Specialized coverage for every occasion',
  items: [
    { icon: Heart, title: 'Wedding Photography', description: 'Full-day coverage, engagement shoots, and stunning albums. Two photographers included.', price: '$2,500-$6,000' },
    { icon: Users, title: 'Portrait Sessions', description: 'Family, maternity, newborn, individual, and professional headshot sessions.', price: '$300-$800' },
    { icon: Image, title: 'Commercial Photography', description: 'Product photography, real estate, corporate events, and brand imagery.', price: '$500-$3,000' },
    { icon: Video, title: 'Videography', description: 'Cinematic wedding films, event highlights, promotional videos, and short documentaries.', price: '$1,500-$5,000' },
    { icon: Camera, title: 'Event Coverage', description: 'Birthday parties, corporate events, galas, and special celebrations.', price: '$500-$2,500' },
    { icon: Award, title: 'Fine Art Prints', description: 'Limited edition fine art prints for galleries, interior design, and collectors.', price: '$200-$2,000' },
  ],
};

export const gallery = { title: 'Our Portfolio', subtitle: 'A selection of our favorite work', items: [
    { title: 'Beach Wedding', category: 'Wedding' }, { title: 'Urban Portrait', category: 'Portrait' },
    { title: 'Product Shot', category: 'Commercial' }, { title: 'Family Session', category: 'Portrait' },
    { title: 'Corporate Event', category: 'Event' }, { title: 'Nature Landscape', category: 'Fine Art' },
  ] };

export const testimonials = { title: 'Client Love', subtitle: 'What our clients say', items: [
    { name: 'Sarah & David', role: 'Wedding Clients', content: 'Alex and the team captured our wedding day perfectly. Every time we look at our photos, we relive the magic. Worth every penny!', rating: 5 },
    { name: 'Jennifer Walsh', role: 'Portrait Client', content: 'Our family photoshoot was so much fun! Alex made us feel completely at ease and the results are stunning. We\'ll treasure these forever.', rating: 5 },
    { name: 'TechCorp Inc.', role: 'Commercial Client', content: 'Professional, creative, and efficient. The product photography exceeded our expectations and helped boost our online sales significantly.', rating: 5 },
  ] };

export const faq = { title: 'Frequently Asked Questions', subtitle: 'Everything about our photography services', items: [
    { question: 'How far in advance should I book?', answer: 'For weddings, we recommend booking 6-12 months in advance. Portrait sessions can usually be booked 2-4 weeks ahead. Contact us for last-minute availability.' },
    { question: 'What is your editing turnaround time?', answer: 'Portrait galleries are delivered within 1-2 weeks. Weddings and large events typically take 4-6 weeks for full delivery. We provide sneak peeks within 48 hours.' },
    { question: 'Do you travel for shoots?', answer: 'Yes! We love destination weddings and location shoots. Travel fees apply for locations over 50 miles from our studio. Contact us for a custom quote.' },
    { question: 'How many photos will we receive?', answer: 'For portrait sessions, expect 30-50 edited photos. Wedding coverage typically delivers 500-800+ edited images. All photos are professionally edited and delivered via online gallery.' },
    { question: 'Can we get RAW files?', answer: 'We deliver professionally edited high-resolution JPEGs. RAW files are not included as the editing is part of our artistic process. We ensure you love every image delivered.' },
  ] };

export const contact = {
  title: 'Book Your Session', subtitle: 'Let\'s create something beautiful together',
  email: 'hello@lensandlight.com', phone: '+1 (555) 456-7890',
  address: '99 Creative Studios Drive, Arts District, AD 12345',
  hours: 'Mon-Fri: 9:00 AM - 6:00 PM | Sat: 10:00 AM - 4:00 PM | By Appointment',
};

export const social = { facebook: 'https://facebook.com/lensandlight', instagram: 'https://instagram.com/lensandlight' };

export const footer = { brandName: 'Lens & Light Studio', description: 'Capturing moments that last forever. Professional photography with an artistic touch.', links: [
    { label: 'About', href: '#about' }, { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#gallery' }, { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ], services: ['Wedding Photography', 'Portrait Sessions', 'Commercial', 'Videography', 'Event Coverage', 'Fine Art Prints'] };

export const whatsapp = { phone: '+15554567890', message: 'Hi! I want to book a photography session with Lens & Light Studio.' };
export const mapAddress = '99 Creative Studios Drive, Arts District, AD 12345';
