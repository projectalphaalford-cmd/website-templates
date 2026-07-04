import { Code, Palette, Globe, Smartphone, TrendingUp, Figma } from 'lucide-react';

export const id = 'portfolio';
export const theme = 'theme-portfolio';
export const heroVariant = 'split';
export const aboutVariant = 'default';
export const servicesVariant = 'grid';
export const galleryVariant = 'masonry';
export const testimonialsVariant = 'grid';
export const faqVariant = 'default';
export const contactVariant = 'minimal';

export const brand = { name: 'Alex Morgan', tagline: 'Full-Stack Developer & Designer', description: 'Building beautiful, performant digital experiences. Specializing in React, Node.js, and modern web technologies.' };
export const navLinks = [
  { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' }, { label: 'Work', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' }, { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Building Digital Experiences That Matter',
  subtitle: 'Full-stack developer crafting performant, accessible, and beautiful web applications. Let\'s bring your ideas to life with clean code and thoughtful design.',
  cta: { text: 'See My Work', href: '#gallery' },
};

export const about = {
  title: 'Hi, I\'m Alex',
  content: 'I\'m a full-stack developer with 8+ years of experience building web applications that users love. I specialize in React, Node.js, and modern CSS, with a passion for performance optimization and clean architecture. When I\'m not coding, you\'ll find me contributing to open source or exploring new technologies.',
  features: [
    '8+ years of professional experience',
    '50+ successful projects delivered',
    'Open source contributor',
    'Performance optimization specialist',
    'Clean, maintainable code',
    'End-to-end project management',
  ],
  stats: [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '8+', label: 'Years Exp.' },
    { value: '15+', label: 'Technologies' },
  ],
};

export const services = {
  title: 'What I Do',
  subtitle: 'Full-service development from concept to launch',
  items: [
    { icon: Code, title: 'Web Development', description: 'Custom websites and web applications built with React, Next.js, Node.js, and modern frameworks.', price: 'From $2,000' },
    { icon: Palette, title: 'UI/UX Design', description: 'User-centered interface design with clean aesthetics, thoughtful interactions, and pixel-perfect execution.', price: 'From $1,500' },
    { icon: Globe, title: 'E-Commerce', description: 'Online stores built with Shopify, WooCommerce, or custom solutions. Inventory, payments, and shipping integrated.', price: 'From $3,000' },
    { icon: Smartphone, title: 'Mobile Responsive', description: 'All projects are built mobile-first with responsive design ensuring a perfect experience on any device.', price: 'Included' },
    { icon: TrendingUp, title: 'SEO Optimization', description: 'Technical SEO, performance optimization, and analytics setup to help your site rank higher and load faster.', price: 'From $500' },
    { icon: Figma, title: 'Consulting', description: 'Technical consulting, code reviews, architecture planning, and mentorship for teams and startups.', price: '$150/hr' },
  ],
};

export const gallery = { title: 'Featured Projects', subtitle: 'Recent work I\'m proud of', items: [
    { title: 'E-Commerce Platform', category: 'Web Dev' }, { title: 'SaaS Dashboard', category: 'Web Dev' },
    { title: 'Mobile App UI', category: 'Design' }, { title: 'Restaurant Site', category: 'Web Dev' },
    { title: 'Brand Identity', category: 'Design' }, { title: 'API Architecture', category: 'Backend' },
  ] };

export const testimonials = { title: 'Client Feedback', subtitle: 'What it\'s like working with me', items: [
    { name: 'Sarah Johnson', role: 'Startup Founder', content: 'Alex transformed our MVP into a polished, production-ready application. His attention to detail and technical expertise exceeded our expectations.', rating: 5 },
    { name: 'Mike Chen', role: 'Product Manager', content: 'Working with Alex was a pleasure. He communicates clearly, delivers on time, and writes code that\'s a joy to maintain.', rating: 5 },
    { name: 'Emily Rodriguez', role: 'Designer', content: 'Alex is the rare developer who truly understands design. Our collaboration produced a site that looks gorgeous and performs flawlessly.', rating: 5 },
  ] };

export const faq = { title: 'Frequently Asked Questions', subtitle: 'Everything about working with me', items: [
    { question: 'What is your development process?', answer: 'I follow a streamlined process: Discovery & Planning → Design → Development → Testing → Launch → Maintenance. Regular updates and clear communication throughout every phase.' },
    { question: 'How long does a typical project take?', answer: 'A standard website takes 4-8 weeks. Complex web applications can take 3-6 months depending on scope. I\'ll provide a detailed timeline during our initial consultation.' },
    { question: 'Do you offer ongoing maintenance?', answer: 'Yes! I offer monthly maintenance plans that include security updates, content updates, performance monitoring, and technical support.' },
    { question: 'What technologies do you use?', answer: 'Frontend: React, Next.js, TypeScript, Tailwind CSS. Backend: Node.js, Express, PostgreSQL, MongoDB. DevOps: Vercel, AWS, Docker, GitHub Actions.' },
    { question: 'How do we get started?', answer: 'Simply reach out through the contact form or WhatsApp. We\'ll schedule a free 30-minute consultation to discuss your project, goals, and budget.' },
  ] };

export const contact = {
  title: 'Let\'s Work Together',
  subtitle: 'Have a project in mind? Let\'s talk about it.',
  email: 'hello@alexmorgan.dev',
  phone: '+1 (555) 567-8901',
  address: 'San Francisco, CA',
  hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
};

export const social = { github: 'https://github.com/alexmorgan', linkedin: 'https://linkedin.com/in/alexmorgan', twitter: 'https://twitter.com/alexmorgandev' };

export const footer = { brandName: 'Alex Morgan', description: 'Full-stack developer & designer building beautiful, performant digital experiences.', links: [
    { label: 'About', href: '#about' }, { label: 'Services', href: '#services' },
    { label: 'Work', href: '#gallery' }, { label: 'Contact', href: '#contact' },
    { label: 'GitHub', href: 'https://github.com/alexmorgan' },
  ], services: ['Web Development', 'UI/UX Design', 'E-Commerce', 'SEO Optimization', 'Consulting', 'Mobile Apps'] };

export const whatsapp = { phone: '+15555678901', message: 'Hi Alex! I\'d like to discuss a project with you.' };
export const mapAddress = 'San Francisco, CA';
