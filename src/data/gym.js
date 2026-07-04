import { Dumbbell, Heart, Users, Zap, Shield, Activity } from 'lucide-react';

export const id = 'gym';
export const theme = 'theme-gym';
export const heroVariant = 'centered';
export const aboutVariant = 'default';
export const servicesVariant = 'grid';
export const galleryVariant = 'grid';
export const testimonialsVariant = 'carousel';
export const faqVariant = 'default';
export const contactVariant = 'default';

export const brand = { name: 'Iron Forge Gym', tagline: 'Transform Your Body, Transform Your Life', description: 'Premium fitness center with state-of-the-art equipment, expert trainers, and a supportive community.' };
export const navLinks = [
  { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
  { label: 'Programs', href: '#services' }, { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' }, { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Unleash Your Inner Strength',
  subtitle: 'State-of-the-art equipment, expert trainers, and a motivating community to help you reach your fitness goals. Join the strongest community in town.',
  cta: { text: 'Start Free Trial', href: '#contact' },
};

export const about = {
  title: 'More Than a Gym',
  content: 'Iron Forge Gym isn\'t just about lifting weights — it\'s about building a better you. Since 2018, we\'ve helped thousands of members transform their lives through fitness. Our 20,000 sq. ft. facility features premium equipment, dedicated training zones, and a community that pushes you to be your best.',
  features: [
    '20,000 sq ft of premium training space',
    'State-of-the-art cardio and strength equipment',
    'Certified personal trainers',
    'Group fitness classes included',
    'Nutrition counseling',
    'Clean, sanitized environment',
  ],
  stats: [
    { value: '3000+', label: 'Active Members' },
    { value: '50+', label: 'Group Classes/Week' },
    { value: '15+', label: 'Expert Trainers' },
    { value: '24/7', label: 'Access' },
  ],
};

export const services = {
  title: 'Training Programs',
  subtitle: 'Everything you need to reach your fitness goals',
  items: [
    { icon: Dumbbell, title: 'Strength Training', description: 'Full access to premium free weights, machines, and dedicated strength zones.', price: '$49/month' },
    { icon: Heart, title: 'Cardio Zone', description: 'Latest treadmills, bikes, rowers, and HIIT equipment with personal entertainment screens.', price: '$49/month' },
    { icon: Users, title: 'Group Classes', description: 'Yoga, spinning, HIIT, Zumba, Pilates, and more. 50+ classes weekly included with membership.', price: 'Included' },
    { icon: Zap, title: 'Personal Training', description: 'One-on-one coaching with certified personal trainers. Customized programs for your goals.', price: '$65/session' },
    { icon: Shield, title: 'Recovery Zone', description: 'Sauna, steam room, cold plunge, and stretching area for post-workout recovery.', price: '$49/month' },
    { icon: Activity, title: 'Nutrition Coaching', description: 'Personalized meal plans, macro tracking, and nutrition guidance from certified coaches.', price: '$99/month' },
  ],
};

export const gallery = { title: 'Our Facility', subtitle: 'See where you\'ll train', items: [
    { title: 'Strength Floor', category: 'Equipment' }, { title: 'Cardio Area', category: 'Equipment' },
    { title: 'Group Class Studio', category: 'Studio' }, { title: 'Free Weights', category: 'Equipment' },
    { title: 'Recovery Zone', category: 'Amenities' }, { title: 'Locker Room', category: 'Amenities' },
  ] };

export const testimonials = { title: 'Member Success Stories', subtitle: 'Real transformations from real people', items: [
    { name: 'Alex Turner', role: 'Member since 2022', content: 'Lost 45 lbs in 6 months with the personal training program. The trainers here are world-class and the community is incredibly supportive.', rating: 5 },
    { name: 'Jessica Park', role: 'Member since 2023', content: 'The group classes are amazing! I\'ve never been consistent with workouts until I joined Iron Forge. The energy is contagious.', rating: 5 },
    { name: 'Marcus Williams', role: 'Member since 2021', content: 'Best gym in the city. Equipment is always clean and well-maintained. The 24/7 access is perfect for my schedule.', rating: 5 },
  ] };

export const faq = { title: 'Frequently Asked Questions', subtitle: 'Everything about Iron Forge Gym', items: [
    { question: 'What memberships do you offer?', answer: 'We offer month-to-month, annual, and prepaid memberships. All include unlimited gym access and group classes. Student and corporate discounts are available.' },
    { question: 'Is there a joining fee?', answer: 'We frequently run promotions with no joining fee. Standard joining fee is $49 which includes a fitness assessment and orientation session.' },
    { question: 'Do you offer free trials?', answer: 'Yes! We offer a 7-day free trial with full access to the gym and group classes. No commitment required.' },
    { question: 'What COVID-19 safety measures are in place?', answer: 'We maintain strict cleaning protocols, provide sanitizing stations throughout, and ensure proper ventilation. Our HVAC system meets the highest air quality standards.' },
    { question: 'Can I freeze my membership?', answer: 'Yes, members can freeze their membership for up to 3 months per year at no charge for medical reasons, or a small fee for other circumstances.' },
  ] };

export const contact = {
  title: 'Get Started Today', subtitle: 'Your first week is free!',
  email: 'info@ironforgegym.com', phone: '+1 (555) 456-7890',
  address: '100 Fitness Way, Muscle City, MC 12345',
  hours: 'Open 24/7 | Staffed: Mon-Fri 5AM-10PM, Sat-Sun 7AM-8PM',
};

export const social = { facebook: 'https://facebook.com/ironforgegym', instagram: 'https://instagram.com/ironforgegym', youtube: 'https://youtube.com/@ironforgegym' };

export const footer = { brandName: 'Iron Forge Gym', description: 'Transform your body, transform your life. Join the strongest fitness community.', links: [
    { label: 'About', href: '#about' }, { label: 'Programs', href: '#services' },
    { label: 'Membership', href: '#contact' }, { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
  ], services: ['Strength Training', 'Cardio', 'Group Classes', 'Personal Training', 'Recovery Zone', 'Nutrition Coaching'] };

export const whatsapp = { phone: '+15554567890', message: 'Hi! I want to learn more about your gym membership options.' };
export const mapAddress = '100 Fitness Way, Muscle City, MC 12345';
