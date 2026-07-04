import { Stethoscope, Heart, Activity, Shield, Syringe, Microscope } from 'lucide-react';

export const id = 'medical-clinic';
export const theme = 'theme-medical-clinic';
export const heroVariant = 'default';
export const aboutVariant = 'default';
export const servicesVariant = 'grid';
export const galleryVariant = 'grid';
export const testimonialsVariant = 'carousel';
export const faqVariant = 'default';
export const contactVariant = 'default';

export const brand = { name: 'MediCare Plus', tagline: 'Your Health, Our Priority', description: 'A modern multi-specialty clinic providing comprehensive healthcare services with compassion and excellence.' };
export const navLinks = [
  { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' }, { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' }, { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Caring for Your Health, Every Step of the Way',
  subtitle: 'Expert medical care in a warm, welcoming environment. From routine check-ups to specialized treatments — your well-being is our mission.',
  cta: { text: 'Book an Appointment', href: '#contact' },
};

export const about = {
  title: 'Excellence in Healthcare',
  content: 'MediCare Plus Clinic brings together a team of experienced healthcare professionals dedicated to providing personalized, comprehensive medical care. With state-of-the-art diagnostic equipment and a patient-centered approach, we ensure every visit is comfortable, thorough, and effective.',
  features: [
    'Board-certified physicians and specialists',
    'Modern diagnostic equipment',
    'Electronic health records for seamless care',
    'Short wait times and same-day appointments',
    'Comprehensive preventive care programs',
    'Accepting most insurance plans',
  ],
  stats: [
    { value: '50,000+', label: 'Patients Treated' },
    { value: '25+', label: 'Specialist Doctors' },
    { value: '15+', label: 'Years of Service' },
    { value: '99%', label: 'Patient Satisfaction' },
  ],
};

export const services = {
  title: 'Our Medical Services',
  subtitle: 'Comprehensive care under one roof',
  items: [
    { icon: Stethoscope, title: 'General Medicine', description: 'Comprehensive primary care including annual check-ups, acute illness treatment, and chronic disease management.', price: '' },
    { icon: Heart, title: 'Cardiology', description: 'Heart health assessments, ECG, stress testing, and preventive cardiovascular care.', price: '' },
    { icon: Activity, title: 'Pediatrics', description: 'Child healthcare from newborn to adolescent. Vaccinations, developmental screenings, and well-child visits.', price: '' },
    { icon: Shield, title: 'Preventive Care', description: 'Health screenings, immunizations, annual physicals, and wellness programs tailored to your age and risk factors.', price: '' },
    { icon: Syringe, title: 'Vaccinations', description: 'Complete vaccination services for children and adults. Flu shots, travel vaccines, and routine immunizations.', price: '' },
    { icon: Microscope, title: 'Diagnostics', description: 'In-house laboratory, X-ray, ultrasound, and other diagnostic services with quick results.', price: '' },
  ],
};

export const gallery = { title: 'Our Facility', subtitle: 'State-of-the-art healthcare environment', items: [
    { title: 'Reception', category: 'Facility' }, { title: 'Consultation Room', category: 'Facility' },
    { title: 'Lab', category: 'Facility' }, { title: 'Waiting Area', category: 'Facility' },
    { title: 'Pharmacy', category: 'Facility' }, { title: 'Treatment Room', category: 'Facility' },
  ] };

export const testimonials = { title: 'Patient Testimonials', subtitle: 'Hear from our patients', items: [
    { name: 'John Anderson', role: 'Patient', content: 'The care I received at MediCare Plus was exceptional. The doctors took time to listen and explain everything clearly. Highly recommended!', rating: 5 },
    { name: 'Sarah Mitchell', role: 'Mother', content: 'I trust MediCare Plus with my entire family\'s health. The pediatricians are wonderful with children and the staff is always friendly.', rating: 5 },
    { name: 'Robert Kim', role: 'Senior Patient', content: 'As a senior with multiple health conditions, I appreciate how they coordinate my care. All my specialists communicate with each other seamlessly.', rating: 5 },
  ] };

export const faq = { title: 'Frequently Asked Questions', subtitle: 'Your health questions answered', items: [
    { question: 'What insurance plans do you accept?', answer: 'We accept most major insurance plans including Medicare and Medicaid. Contact our billing department to verify your specific coverage.' },
    { question: 'How do I schedule an appointment?', answer: 'You can book online through our website, call us directly, or visit our front desk. Same-day appointments are often available for urgent concerns.' },
    { question: 'What should I bring to my first visit?', answer: 'Please bring your ID, insurance card, a list of current medications, and any relevant medical records. Arrive 15 minutes early to complete paperwork.' },
    { question: 'Do you offer telemedicine?', answer: 'Yes, we offer virtual consultations for follow-ups and non-urgent concerns. Our telemedicine platform is secure and easy to use.' },
    { question: 'What are your hours?', answer: 'We are open Monday through Friday with extended hours on Wednesdays. We also offer Saturday morning appointments for urgent care.' },
  ] };

export const contact = {
  title: 'Book an Appointment', subtitle: 'Your health journey begins here',
  email: 'appointments@medicareplus.com', phone: '+1 (555) 890-1234',
  address: '300 Health Parkway, Medical District, MD 12345',
  hours: 'Mon-Fri: 8:00 AM - 6:00 PM | Wed: 8:00 AM - 8:00 PM | Sat: 9:00 AM - 1:00 PM',
};

export const social = { facebook: 'https://facebook.com/medicareplus', instagram: 'https://instagram.com/medicareplus' };

export const footer = { brandName: 'MediCare Plus Clinic', description: 'Your health, our priority. Providing compassionate, comprehensive healthcare since 2009.', links: [
    { label: 'About', href: '#about' }, { label: 'Services', href: '#services' },
    { label: 'Patients', href: '#testimonials' }, { label: 'Contact', href: '#contact' },
    { label: 'Insurance', href: '#' },
  ], services: ['General Medicine', 'Cardiology', 'Pediatrics', 'Preventive Care', 'Vaccinations', 'Diagnostics'] };

export const whatsapp = { phone: '+15558901234', message: 'Hi! I would like to book an appointment at MediCare Plus Clinic.' };
export const mapAddress = '300 Health Parkway, Medical District, MD 12345';
