import { Music, Theater, Users, Sparkles, Heart, Star } from 'lucide-react';

export const id = 'dance-academy';
export const theme = 'theme-dance-academy';
export const heroVariant = 'centered';
export const aboutVariant = 'default';
export const servicesVariant = 'grid';
export const galleryVariant = 'masonry';
export const testimonialsVariant = 'carousel';
export const faqVariant = 'default';
export const contactVariant = 'default';

export const brand = {
  name: 'Rhythm & Motion',
  tagline: 'Dance Like Nobody\'s Watching',
  description: 'Premier dance academy offering classes in ballet, hip-hop, contemporary, and more for all ages and skill levels.',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Classes', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Find Your Rhythm',
  subtitle: 'Discover the joy of dance with expert instructors. From ballet to hip-hop, we have the perfect class for every age and skill level.',
  cta: { text: 'Start Your Free Class', href: '#contact' },
};

export const about = {
  title: 'Our Story',
  content: 'Founded by professional dancers with over 20 years of combined experience, Rhythm & Motion Dance Academy has been nurturing talent and spreading the love of dance since 2010. We believe dance is for everyone — regardless of age, background, or skill level.',
  features: [
    'Professional instructors with performance experience',
    'State-of-the-art sprung floors and studios',
    'Classes for ages 3 to adults',
    'Performance opportunities throughout the year',
    'Supportive and encouraging environment',
    'Competition teams for advanced dancers',
  ],
  stats: [
    { value: '1000+', label: 'Students Enrolled' },
    { value: '25+', label: 'Expert Instructors' },
    { value: '8', label: 'Dance Studios' },
    { value: '14+', label: 'Years of Excellence' },
  ],
};

export const services = {
  title: 'Our Classes',
  subtitle: 'Find your perfect dance style',
  items: [
    { icon: Music, title: 'Ballet', description: 'Classical ballet training from beginner to advanced. Build strength, grace, and technique.', price: '$35/class' },
    { icon: Sparkles, title: 'Hip-Hop', description: 'High-energy hip-hop classes combining street dance with modern choreography.', price: '$30/class' },
    { icon: Theater, title: 'Contemporary', description: 'Expressive contemporary dance blending elements of ballet, jazz, and modern.', price: '$35/class' },
    { icon: Heart, title: 'Salsa & Latin', description: 'Passionate Latin dance including salsa, bachata, and cha-cha for all levels.', price: '$30/class' },
    { icon: Users, title: 'Kids Dance', description: 'Fun, age-appropriate dance classes for children ages 3-12.', price: '$25/class' },
    { icon: Star, title: 'Competition Team', description: 'Advanced training for dancers ready to compete at regional and national levels.', price: '$45/class' },
  ],
};

export const gallery = {
  title: 'Our Studio',
  subtitle: 'Moments captured at Rhythm & Motion',
  items: [
    { title: 'Ballet Recital 2024', category: 'Performances' },
    { title: 'Hip-Hop Workshop', category: 'Classes' },
    { title: 'Contemporary Showcase', category: 'Performances' },
    { title: 'Kids Dance Camp', category: 'Events' },
    { title: 'Competition Team', category: 'Classes' },
    { title: 'Studio Facilities', category: 'Studio' },
  ],
};

export const testimonials = {
  title: 'Dancer Testimonials',
  subtitle: 'Hear from our dance community',
  items: [
    { name: 'Emily Rodriguez', role: 'Student (5 years)', content: 'Rhythm & Motion is my second home. The instructors are incredibly talented and supportive. I\'ve grown so much as a dancer!', rating: 5 },
    { name: 'Lisa Thompson', role: 'Parent', content: 'My daughter has been taking classes here for 3 years. The confidence and joy she\'s gained is priceless. Wonderful academy!', rating: 5 },
    { name: 'David Kim', role: 'Adult Beginner', content: 'I started at 35 with zero dance experience. The beginner classes are welcoming and fun. I never thought I could dance!', rating: 5 },
  ],
};

export const faq = {
  title: 'Frequently Asked Questions',
  subtitle: 'Everything about dancing with us',
  items: [
    { question: 'What should I wear to my first class?', answer: 'Wear comfortable clothing that allows for movement (leggings, t-shirts, tank tops). Ballet requires ballet shoes; for other styles, clean sneakers or bare feet are fine. We\'ll provide details after registration.' },
    { question: 'Do I need prior experience?', answer: 'Not at all! We offer classes for absolute beginners through advanced levels. Our instructors will meet you where you are and help you progress at your own pace.' },
    { question: 'What is your age policy?', answer: 'We welcome dancers from age 3 to adults. Children\'s classes are grouped by age, teen classes by skill level, and adult classes are open to all.' },
    { question: 'Can I try a class before committing?', answer: 'Yes! We offer a free trial class for new students. It\'s a great way to see if our teaching style and studio environment are right for you.' },
    { question: 'Do you host recitals?', answer: 'Absolutely! We hold two major recitals per year — a winter showcase and a spring gala. Students also have opportunities to perform at community events.' },
  ],
};

export const contact = {
  title: 'Join Us Today',
  subtitle: 'Your first class is on us!',
  email: 'hello@rhythmmotion.com',
  phone: '+1 (555) 234-5678',
  address: '456 Dance Avenue, Studio City, DC 12345',
  hours: 'Mon-Fri: 8:00 AM - 9:00 PM | Sat: 9:00 AM - 6:00 PM | Sun: 10:00 AM - 4:00 PM',
};

export const social = {
  facebook: 'https://facebook.com/rhythmmotion',
  instagram: 'https://instagram.com/rhythmmotion',
  youtube: 'https://youtube.com/@rhythmmotion',
};

export const footer = {
  brandName: 'Rhythm & Motion Dance Academy',
  description: 'Where passion meets movement. Join our community of dancers today.',
  links: [
    { label: 'About', href: '#about' },
    { label: 'Classes', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  services: ['Ballet', 'Hip-Hop', 'Contemporary', 'Salsa & Latin', 'Kids Dance', 'Competition Team'],
};

export const whatsapp = { phone: '+15552345678', message: 'Hi! I want to learn more about your dance classes.' };
export const mapAddress = '456 Dance Avenue, Studio City, DC 12345';
