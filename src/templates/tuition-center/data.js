import {
  GraduationCap,
  BookOpen,
  Calculator,
  Globe,
  Users,
  Target,
} from 'lucide-react';

export const id = 'tuition-center';
export const theme = 'theme-tuition-center';
export const heroVariant = 'default';
export const aboutVariant = 'default';
export const servicesVariant = 'grid';
export const galleryVariant = 'grid';
export const testimonialsVariant = 'carousel';
export const faqVariant = 'default';
export const contactVariant = 'default';

export const brand = {
  name: 'Excel Academy',
  tagline: 'Building Bright Futures',
  description:
    'Excel Academy is a premier tuition center dedicated to helping students achieve academic excellence through personalized learning programs.',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Unlock Your Child\'s Academic Potential',
  subtitle:
    'Expert tutoring in Mathematics, Science, and English. Small class sizes, personalized attention, and proven results since 2015.',
  cta: { text: 'Book a Free Trial', href: '#contact' },
};

export const about = {
  title: 'Why Choose Excel Academy?',
  content:
    'We believe every student has unique learning needs. Our experienced tutors use proven methodologies to help students build confidence, master concepts, and achieve top grades. With a track record of 95% grade improvement, we are the trusted choice for parents.',
  features: [
    'Qualified and experienced teachers',
    'Small class sizes (max 8 students)',
    'Personalized learning plans',
    'Regular progress reports',
    'Free trial class',
    'Affordable fees',
  ],
  stats: [
    { value: '500+', label: 'Students Taught' },
    { value: '95%', label: 'Grade Improvement' },
    { value: '15+', label: 'Expert Tutors' },
    { value: '8+', label: 'Years Experience' },
  ],
};

export const services = {
  title: 'Our Programs',
  subtitle: 'Comprehensive academic support for all levels',
  items: [
    { icon: Calculator, title: 'Mathematics', description: 'From basic arithmetic to advanced calculus. Build strong foundations and problem-solving skills.', price: '$30/hr' },
    { icon: BookOpen, title: 'English Language', description: 'Grammar, composition, literature analysis, and creative writing for all grade levels.', price: '$28/hr' },
    { icon: GraduationCap, title: 'Science', description: 'Physics, Chemistry, and Biology with hands-on experiments and exam preparation.', price: '$32/hr' },
    { icon: Globe, title: 'Languages', description: 'French, Spanish, Mandarin, and Arabic. Conversational and academic tracks available.', price: '$25/hr' },
    { icon: Users, title: 'Group Tutoring', description: 'Small group sessions for collaborative learning at reduced rates.', price: '$20/hr' },
    { icon: Target, title: 'Exam Prep', description: 'Intensive preparation for SAT, ACT, IGCSE, A-Levels, and local board exams.', price: '$35/hr' },
  ],
};

export const gallery = {
  title: 'Our Learning Environment',
  subtitle: 'See where the magic happens',
  items: [
    { title: 'Modern Classroom', category: 'Facilities' },
    { title: 'Science Lab', category: 'Facilities' },
    { title: 'Group Study Session', category: 'Activities' },
    { title: 'One-on-One Tutoring', category: 'Activities' },
    { title: 'Computer Lab', category: 'Facilities' },
    { title: 'Student Achievements', category: 'Events' },
  ],
};

export const testimonials = {
  title: 'What Parents & Students Say',
  subtitle: 'Hear from our learning community',
  items: [
    { name: 'Sarah Johnson', role: 'Parent', content: 'My daughter\'s grades improved from C\'s to A\'s within three months. The tutors are incredibly patient and skilled.', rating: 5 },
    { name: 'Mike Chen', role: 'Student', content: 'The personalized attention helped me understand topics I struggled with for years. I finally enjoy learning math!', rating: 5 },
    { name: 'Priya Patel', role: 'Parent', content: 'Excellent academy with dedicated teachers. The regular progress updates keep us informed about our child\'s development.', rating: 5 },
    { name: 'James Wilson', role: 'Student', content: 'Score A* in my IGCSEs thanks to the intensive exam preparation program. Highly recommend!', rating: 5 },
  ],
};

export const faq = {
  title: 'Frequently Asked Questions',
  subtitle: 'Everything you need to know about our tuition center',
  items: [
    { question: 'What age groups do you teach?', answer: 'We cater to students from primary school (age 6) through high school and university preparation. Our programs are tailored to each age group\'s specific curriculum needs.' },
    { question: 'How are tutors selected?', answer: 'All our tutors hold relevant degrees and teaching certifications. They undergo a rigorous selection process including subject knowledge tests, demo lessons, and background checks.' },
    { question: 'Do you offer online classes?', answer: 'Yes, we offer both in-person and live online classes. Our virtual classroom platform allows for interactive learning with screen sharing, digital whiteboards, and real-time feedback.' },
    { question: 'What is your refund policy?', answer: 'We offer a full refund for unused sessions. If you\'re not satisfied after the first class, we\'ll refund your payment in full with no questions asked.' },
    { question: 'How do you track student progress?', answer: 'We conduct regular assessments and provide monthly progress reports. Parents receive detailed feedback on strengths, areas for improvement, and recommendations.' },
    { question: 'Can I switch tutors if needed?', answer: 'Absolutely. We want every student to have the best learning experience. If the teaching style doesn\'t match, we\'ll assign a different tutor at no extra cost.' },
  ],
};

export const contact = {
  title: 'Get In Touch',
  subtitle: 'Start your child\'s journey to academic success',
  email: 'info@excelacademy.com',
  phone: '+1 (555) 123-4567',
  address: '123 Education Lane, Suite 200, Academic City, AC 12345',
  hours: 'Mon-Fri: 9:00 AM - 8:00 PM | Sat: 9:00 AM - 5:00 PM',
};

export const social = {
  facebook: 'https://facebook.com/excelacademy',
  instagram: 'https://instagram.com/excelacademy',
  youtube: 'https://youtube.com/@excelacademy',
};

export const footer = {
  brandName: 'Excel Academy',
  description: 'Empowering students with quality education and personalized attention since 2015.',
  links: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Programs', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  services: ['Mathematics', 'English', 'Science', 'Languages', 'Exam Prep', 'Group Tutoring'],
};

export const whatsapp = { phone: '+15551234567', message: 'Hi! I would like to know more about your tuition programs.' };
export const mapAddress = '123 Education Lane, Academic City, AC 12345';
