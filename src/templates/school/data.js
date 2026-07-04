import { BookOpen, Microscope, Palette, Trophy, Bus, Shield } from 'lucide-react';

export const id = 'school';
export const theme = 'theme-school';
export const heroVariant = 'default';
export const aboutVariant = 'image-right';
export const servicesVariant = 'grid';
export const galleryVariant = 'grid';
export const testimonialsVariant = 'grid';
export const faqVariant = 'default';
export const contactVariant = 'default';

export const brand = { name: 'Greenfield School', tagline: 'Nurturing Tomorrow\'s Leaders', description: 'A premier educational institution committed to holistic development and academic excellence from kindergarten through grade 12.' };
export const navLinks = [
  { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
  { label: 'Academics', href: '#services' }, { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' }, { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Where Excellence Meets Character',
  subtitle: 'Providing world-class education from pre-K to grade 12. Our holistic approach develops academic excellence, creativity, and strong values.',
  cta: { text: 'Enroll Now', href: '#contact' },
};

export const about = {
  title: 'A Legacy of Excellence Since 1985',
  content: 'Greenfield School has been a cornerstone of educational excellence for nearly four decades. Our dedicated faculty, modern facilities, and comprehensive curriculum prepare students not just for college, but for life. We believe in nurturing each child\'s unique potential through a balanced approach to academics, arts, and athletics.',
  features: [
    'Highly qualified faculty with advanced degrees',
    'STEM-certified curriculum',
    'Comprehensive arts and music programs',
    'State-of-the-art science labs and libraries',
    'College counseling from grade 9',
    'Safe and inclusive learning environment',
  ],
  stats: [
    { value: '2000+', label: 'Students' },
    { value: '98%', label: 'College Acceptance' },
    { value: '150+', label: 'Faculty Members' },
    { value: '39+', label: 'Years of Excellence' },
  ],
};

export const services = {
  title: 'Academic Programs',
  subtitle: 'Comprehensive education for every stage',
  items: [
    { icon: BookOpen, title: 'Early Education (PreK-K)', description: 'Foundational learning through play-based curriculum, social development, and early literacy programs.', price: '' },
    { icon: Microscope, title: 'Elementary (1-5)', description: 'Strong foundations in core subjects with enrichment in art, music, physical education, and technology.', price: '' },
    { icon: Trophy, title: 'Middle School (6-8)', description: 'Exploratory learning with advanced courses, leadership opportunities, and character development programs.', price: '' },
    { icon: Shield, title: 'High School (9-12)', description: 'College-preparatory curriculum with AP courses, honors programs, and career counseling.', price: '' },
    { icon: Palette, title: 'Arts & Music', description: 'Comprehensive visual and performing arts programs including band, choir, theater, and studio art.', price: '' },
    { icon: Bus, title: 'Athletics & Activities', description: 'Competitive sports teams, clubs, community service, and outdoor education programs.', price: '' },
  ],
};

export const gallery = { title: 'Campus Life', subtitle: 'A glimpse into life at Greenfield', items: [
    { title: 'Main Building', category: 'Campus' }, { title: 'Science Lab', category: 'Facilities' },
    { title: 'Sports Day', category: 'Events' }, { title: 'Library', category: 'Facilities' },
    { title: 'Music Room', category: 'Facilities' }, { title: 'Graduation', category: 'Events' },
  ] };

export const testimonials = { title: 'Parent & Student Voices', subtitle: 'Hear from our community', items: [
    { name: 'Dr. Robert Chen', role: 'Parent', content: 'Greenfield has been transformative for our son. The teachers genuinely care about each student\'s success and well-being.', rating: 5 },
    { name: 'Amanda Foster', role: 'Student (Grade 12)', content: 'The college counseling program helped me get into my dream university. I feel prepared and confident for the future.', rating: 5 },
    { name: 'Maria Santos', role: 'Parent', content: 'The sense of community at Greenfield is unmatched. My children wake up excited to go to school every single day.', rating: 5 },
  ] };

export const faq = { title: 'Frequently Asked Questions', subtitle: 'Everything about Greenfield School', items: [
    { question: 'What is the student-to-teacher ratio?', answer: 'Our average class size is 18 students with a student-to-teacher ratio of 12:1. This ensures personalized attention for every student.' },
    { question: 'Do you offer financial aid or scholarships?', answer: 'Yes, we offer need-based financial aid and merit scholarships. Approximately 25% of our students receive some form of financial assistance.' },
    { question: 'What extracurricular activities are available?', answer: 'We offer over 40 clubs and activities including debate, robotics, coding, drama, choir, band, student government, and 15 competitive sports teams.' },
    { question: 'What is the admissions process?', answer: 'The process includes an application form, previous school records, a campus visit, and an interview. We accept applications year-round for most grade levels.' },
    { question: 'Do you provide transportation?', answer: 'Yes, we have a comprehensive bus service covering most neighborhoods within a 15-mile radius. Safety is our top priority with GPS-tracked buses and trained monitors.' },
  ] };

export const contact = {
  title: 'Admissions Open', subtitle: 'Schedule a campus tour today',
  email: 'admissions@greenfield.edu', phone: '+1 (555) 345-6789',
  address: '789 Academy Boulevard, School District, SF 12345',
  hours: 'Mon-Fri: 7:30 AM - 5:00 PM | Sat: 9:00 AM - 1:00 PM',
};

export const social = { facebook: 'https://facebook.com/greenfieldschool', instagram: 'https://instagram.com/greenfieldschool', youtube: 'https://youtube.com/@greenfieldschool' };

export const footer = { brandName: 'Greenfield School', description: 'Nurturing tomorrow\'s leaders through academic excellence and character development since 1985.', links: [
    { label: 'About', href: '#about' }, { label: 'Academics', href: '#services' },
    { label: 'Admissions', href: '#contact' }, { label: 'Calendar', href: '#' },
    { label: 'Careers', href: '#' },
  ], services: ['Early Education', 'Elementary', 'Middle School', 'High School', 'Arts', 'Athletics'] };

export const whatsapp = { phone: '+15553456789', message: 'Hi! I want to learn more about admissions at Greenfield School.' };
export const mapAddress = '789 Academy Boulevard, School District, SF 12345';
