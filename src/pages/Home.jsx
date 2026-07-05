import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
  ArrowRight, CheckCircle, Sparkles, Star, ChevronUp,
  MessageCircle, Phone, Mail, ExternalLink, Zap, Shield,
  Palette, Smartphone, BarChart3, Globe, Code, Lightbulb,
  Clock, Heart, MapPin, Send, Loader2, Quote,
  Layers, Target, Award, Users, Rocket,
  Menu, X, ChevronDown,
} from 'lucide-react';
import Container from '../components/ui/Container';
import Navbar from '../components/sections/Navbar';
import { useTheme } from '../context/ThemeContext';

// ===== DATA =====
const servicesList = [
  { icon: Globe, title: 'Business Websites', desc: 'Professional multi-page websites with modern design, contact forms, and mobile optimization for any local business.' },
  { icon: GraduationCap, title: 'Tuition Websites', desc: 'Dedicated platforms for coaching centers with course listings, timetables, and enrollment forms.' },
  { icon: School, title: 'School Websites', desc: 'Complete school websites with event calendars, staff directories, parent portals, and admissions.' },
  { icon: Music4, title: 'Dance Academy Websites', desc: 'Energetic sites for dance studios with class schedules, event showcases, and registration.' },
  { icon: PenTool, title: 'Stationery Websites', desc: 'Beautiful e-commerce ready sites for stationery shops with product catalogs and ordering.' },
  { icon: UtensilsCrossed, title: 'Restaurant Websites', desc: 'Appetizing restaurant websites with menu displays, table booking, and online ordering.' },
  { icon: Stethoscope, title: 'Medical Clinic Websites', desc: 'Trustworthy clinic sites with doctor profiles, appointment booking, and health resources.' },
  { icon: Dumbbell, title: 'Gym Websites', desc: 'High-energy fitness sites with class schedules, trainer profiles, and membership plans.' },
  { icon: Layout, title: 'Landing Pages', desc: 'High-converting single-page designs for product launches, events, and marketing campaigns.' },
  { icon: RefreshCw, title: 'Website Redesign', desc: 'Modernize your existing website with a complete visual and performance overhaul.' },
  { icon: Bot, title: 'AI Chatbot Integration', desc: 'Smart customer support chatbots that handle inquiries 24/7 and capture more leads.' },
  { icon: Wrench, title: 'Website Maintenance', desc: 'Ongoing updates, security patches, backups, and content changes to keep your site running smoothly.' },
];

// Import icons that are used in services
import {
  GraduationCap, School, Music4, PenTool, UtensilsCrossed,
  Stethoscope, Dumbbell, Layout, RefreshCw, Bot, Wrench,
} from 'lucide-react';

const templates = [
  { id: 'tuition-center', name: 'Tuition Center', desc: 'Education & tutoring services', img: '/screenshots/tuition-center.png' },
  { id: 'dance-academy', name: 'Dance Academy', desc: 'Dance classes & studios', img: '/screenshots/dance-academy.png' },
  { id: 'school', name: 'School', desc: 'Educational institutions', img: '/screenshots/school.png' },
  { id: 'stationery', name: 'Stationery Shop', desc: 'Stationery & art supplies', img: '/screenshots/stationery.png' },
  { id: 'restaurant', name: 'Restaurant', desc: 'Fine dining & eateries', img: '/screenshots/restaurant.png' },
  { id: 'gym', name: 'Gym', desc: 'Fitness centers & gyms', img: '/screenshots/gym.png' },
  { id: 'medical-clinic', name: 'Medical Clinic', desc: 'Healthcare & clinics', img: '/screenshots/medical-clinic.png' },
  { id: 'salon', name: 'Salon', desc: 'Beauty salons & spas', img: '/screenshots/salon.png' },
  { id: 'clothing-store', name: 'Clothing Store', desc: 'Fashion boutiques', img: '/screenshots/clothing-store.png' },
  { id: 'electronics', name: 'Electronics Shop', desc: 'Tech & electronics', img: '/screenshots/electronics.png' },
];

const team = [
  { name: 'Ansh', role: 'Client Communication', initials: 'AN', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Adarsh', role: 'Website Development', initials: 'AD', gradient: 'from-purple-500 to-pink-500' },
  { name: 'Abhas', role: 'Operations & Project Management', initials: 'AB', gradient: 'from-amber-500 to-orange-500' },
];

const processSteps = [
  { step: '01', title: 'Tell Us Your Requirements', desc: 'Share your business details, preferences, and what you want your website to achieve. We listen carefully.', icon: MessageCircle },
  { step: '02', title: 'We Prepare a Custom Demo', desc: 'Our team builds a fully functional demo tailored to your business. You\'ll see exactly what your site will look like.', icon: Eye },
  { step: '03', title: 'You Review It', desc: 'Go through every page, every section. Tell us what you love and what you\'d like to change.', icon: Search },
  { step: '04', title: 'We Improve It', desc: 'We refine the design based on your feedback until every detail matches your vision. No extra charges for revisions.', icon: RefreshCw },
  { step: '05', title: 'We Publish Your Website', desc: 'We deploy your site on a fast, secure server with your domain. Your business goes live with a professional online presence.', icon: Rocket },
  { step: '06', title: 'We Provide Ongoing Support', desc: 'We don\'t disappear after launch. We offer continuous maintenance, updates, and support whenever you need us.', icon: Heart },
];

const faqItems = [
  { q: 'How much does a website cost?', a: 'Our pricing starts at ₹3,999 for a basic business website and varies based on complexity, number of pages, and additional features like booking systems or e-commerce.' },
  { q: 'How long does it take to build a website?', a: 'Most projects are completed within 5–7 days. A custom demo is ready within 48 hours of you sharing your requirements.' },
  { q: 'Do I need to know coding?', a: 'Not at all. We handle everything from design to deployment. You only need to share your business information and preferences.' },
  { q: 'Will my website work on mobile phones?', a: 'Absolutely. Every website we build is fully responsive and looks great on all devices — mobile, tablet, and desktop.' },
  { q: 'Do you provide hosting and domain?', a: 'We help you set up hosting and can guide you through domain registration. We recommend reliable, affordable hosting options.' },
  { q: 'Can I update the website myself later?', a: 'Yes. We can build your site with a simple content management system, or we handle updates for you as part of our maintenance service.' },
  { q: 'What if I don\'t like the design?', a: 'We revise until you\'re happy. Your satisfaction is guaranteed. We typically nail it within 1–2 revision rounds.' },
  { q: 'Do you offer WhatsApp integration?', a: 'Yes! Every website includes a WhatsApp chat button so customers can message you directly from the site.' },
];

const whyChooseUs = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Websites optimized for speed. Load times under 2 seconds guaranteed.' },
  { icon: Palette, title: 'Premium Design', desc: 'Modern, conversion-focused UI that makes your business look professional.' },
  { icon: Smartphone, title: 'Mobile First', desc: 'Every pixel is crafted for mobile screens first, then scaled up.' },
  { icon: Shield, title: 'Reliable & Secure', desc: 'SSL certificates, security best practices, and reliable hosting.' },
  { icon: BarChart3, title: 'SEO Optimized', desc: 'Built with search engines in mind. Your customers will find you.' },
  { icon: Heart, title: 'Ongoing Support', desc: 'We don\'t disappear after launch. We\'re here whenever you need us.' },
];

// ===== SCROLL ANIMATION HOOK =====
function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function AnimateOnScroll({ children, className = '' }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`${className} ${visible ? 'visible' : ''}`}
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}>
      {children}
    </div>
  );
}

// ===== SECTION: Hero =====
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-primary/5 to-accent/5 dark:from-zinc-950 dark:via-primary/10 dark:to-accent/5" />
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl dark:bg-primary/5" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl dark:bg-accent/5" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <AnimateOnScroll>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles size={14} />
                Premium Web Agency
              </div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl">
                Modern Websites for{' '}
                <span className="gradient-text">Local Businesses</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
                We build beautiful, fast, and affordable websites that help local businesses 
                stand out online. From tuition centers to restaurants — we create your digital presence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02]"
                >
                  Get Your Website <ArrowRight size={20} />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-surface px-8 py-4 text-lg font-semibold text-text transition-all hover:border-primary/50 hover:text-primary"
                >
                  View Our Work
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-text-secondary">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-surface bg-gradient-to-br from-primary to-accent text-[10px] font-bold text-white">T</div>
                  ))}
                </div>
                <span>Trusted by local businesses</span>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Hero visual */}
          <AnimateOnScroll>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-1 shadow-2xl">
                <div className="rounded-xl bg-surface p-6 dark:bg-zinc-900">
                  <div className="flex items-center gap-3 border-b border-border pb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white text-xs font-bold">T</div>
                    <div className="flex-1">
                      <div className="h-2.5 w-32 rounded-full bg-border" />
                      <div className="mt-1.5 h-2 w-24 rounded-full bg-border/60" />
                    </div>
                    <div className="flex gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-red-400" />
                      <div className="h-2 w-2 rounded-full bg-amber-400" />
                      <div className="h-2 w-2 rounded-full bg-green-400" />
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="h-8 w-3/4 rounded-lg bg-gradient-to-r from-primary/20 to-primary/5" />
                    <div className="h-4 w-full rounded bg-border/60" />
                    <div className="h-4 w-5/6 rounded bg-border/60" />
                    <div className="flex gap-3 pt-2">
                      <div className="h-10 w-28 rounded-lg bg-gradient-to-r from-primary/30 to-accent/30" />
                      <div className="h-10 w-28 rounded-lg border border-border" />
                    </div>
                    <div className="grid grid-cols-3 gap-3 pt-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="aspect-video rounded-lg bg-border/40" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-xl border border-border bg-surface p-3 shadow-lg dark:bg-zinc-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-text">98%</div>
                  <div className="text-xs text-text-secondary">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}

// ===== SECTION: About =====
function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white text-3xl font-black shadow-xl shadow-primary/30">
                    T
                  </div>
                  <h3 className="mt-6 text-3xl font-bold text-text">Trios</h3>
                  <p className="mt-2 text-text-secondary">Modern Websites for Local Businesses</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-xl border border-border bg-surface p-4 shadow-lg dark:bg-zinc-800">
                <Award size={24} className="text-primary" />
                <div>
                  <div className="text-sm font-bold text-text">50+ Websites</div>
                  <div className="text-xs text-text-secondary">Delivered & counting</div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                About Us
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
                We Help Local Businesses <span className="gradient-text">Go Digital</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Trios is a team of three passionate developers dedicated to helping local businesses 
                build a strong online presence. We believe every business — big or small — deserves 
                a website that looks premium, loads fast, and actually brings in customers.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                Our mission is simple: make professional web development accessible and affordable 
                for every local business owner. No complicated jargon, no hidden fees — just 
                beautiful websites that work.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: '50+', label: 'Websites Built' },
                  { value: '5–7', label: 'Day Delivery' },
                  { value: '98%', label: 'Happy Clients' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-surface-card p-4 text-center">
                    <div className="text-2xl font-extrabold gradient-text">{s.value}</div>
                    <div className="mt-1 text-xs text-text-secondary">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}

// ===== SECTION: Why Choose Us =====
function WhyChooseSection() {
  return (
    <section className="py-24 md:py-32 bg-surface-alt">
      <Container>
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
              Why Choose <span className="gradient-text">Trios</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              We don't just build websites. We build digital experiences that grow your business.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, idx) => (
            <AnimateOnScroll key={item.title}>
              <div className="group rounded-2xl border border-border bg-surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-all group-hover:from-primary group-hover:to-accent group-hover:text-white">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ===== SECTION: Services =====
function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <Container className="relative">
        <AnimateOnScroll>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Our Services
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
              What We <span className="gradient-text">Build</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              From simple landing pages to full-featured business websites — we've got you covered.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicesList.map((service, idx) => (
            <AnimateOnScroll key={service.title}>
              <div className="group relative rounded-2xl border border-border bg-surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-all group-hover:from-primary group-hover:to-accent group-hover:text-white">
                  <service.icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-bold text-text">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{service.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02]"
            >
              Start Your Project <ArrowRight size={20} />
            </a>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

// ===== SECTION: Portfolio / Templates =====
function PortfolioSection() {
  const templateRefs = templates.slice(0, 6);
  const remainingTemplates = templates.slice(6);
  const [showAll, setShowAll] = useState(false);
  const display = showAll ? templates : templateRefs;

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-surface-alt">
      <Container>
        <AnimateOnScroll>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Our Portfolio
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
              Website <span className="gradient-text">Templates</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              Explore our collection of professional website templates. Each one is fully customizable 
              for your business.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {display.map((t) => (
            <AnimateOnScroll key={t.id}>
              <div className="group rounded-2xl border border-border bg-surface-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">{getEmoji(t.id)}</div>
                    <div className="text-lg font-bold text-text">{t.name}</div>
                    <div className="text-sm text-text-secondary">{t.desc}</div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-text">{t.name}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{t.desc}</p>
                  <div className="mt-4 flex gap-3">
                    <Link
                      to={`/template/${t.id}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </Link>
                    <a
                      href="#contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-text transition-all hover:border-primary/50 hover:text-primary"
                    >
                      Request This Design
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {templates.length > 6 && (
          <AnimateOnScroll>
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-border px-8 py-3.5 text-base font-semibold text-text transition-all hover:border-primary/50 hover:text-primary"
              >
                {showAll ? 'Show Less' : `View All ${templates.length} Templates`}
                <ChevronDown size={18} className={`transition-transform ${showAll ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </AnimateOnScroll>
        )}
      </Container>
    </section>
  );
}

function getEmoji(id) {
  const map = {
    'tuition-center': '🎓', 'dance-academy': '💃', 'school': '🏫',
    'stationery': '✏️', 'restaurant': '🍽️', 'gym': '💪',
    'medical-clinic': '🏥', 'salon': '💇', 'clothing-store': '👗', 'electronics': '📱',
  };
  return map[id] || '🌐';
}

// ===== SECTION: Our Process =====
function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32">
      <Container>
        <AnimateOnScroll>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Our Process
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              A simple, transparent process from start to launch — and beyond.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, idx) => (
            <AnimateOnScroll key={step.step}>
              <div className="group relative rounded-2xl border border-border bg-surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-lg font-bold text-white">
                    {step.step}
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    <step.icon size={20} />
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-bold text-text">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ===== SECTION: FAQ =====
function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section id="faq" className="py-24 md:py-32 bg-surface-alt">
      <Container>
        <AnimateOnScroll>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              FAQ
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqItems.map((item, idx) => (
            <AnimateOnScroll key={idx}>
              <div className="rounded-xl border border-border bg-surface-card overflow-hidden transition-all">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-all hover:bg-primary/5"
                >
                  <span className="font-semibold text-text pr-4">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-text-secondary transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-text-secondary">{item.a}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ===== SECTION: Meet the Team =====
function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-32">
      <Container>
        <AnimateOnScroll>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Our Team
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
              Meet the <span className="gradient-text">Trios</span> Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              Three passionate individuals working together to build your digital presence.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {team.map((member, idx) => (
            <AnimateOnScroll key={member.name}>
              <div className="group rounded-2xl border border-border bg-surface-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                <div className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} p-1 shadow-lg`}>
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-surface text-2xl font-extrabold text-text">
                    {member.initials}
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-text">{member.name}</h3>
                <div className="mx-auto mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                  {member.role}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ===== SECTION: Contact =====
function ContactSection() {
  const [form, setForm] = useState({
    name: '', business: '', phone: '', email: '',
    businessType: '', budget: '', message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validate = () => {
    if (!form.name.trim()) return 'Name is required.';
    if (!form.business.trim()) return 'Business name is required.';
    if (!form.phone.trim()) return 'Phone number is required.';
    if (!/^[+]?[\d\s()-]{7,20}$/.test(form.phone)) return 'Please enter a valid phone number.';
    if (!form.email.trim()) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.';
    if (!form.businessType) return 'Please select a business type.';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) { setError(validationError); return; }
    setError('');
    setLoading(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          business_name: form.business,
          phone: form.phone,
          email: form.email,
          business_type: form.businessType,
          budget: form.budget || 'Not specified',
          message: form.message,
          to_email: 'triosbyaaa1807@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      if (result.status === 200) {
        setSubmitted(true);
        setForm({ name: '', business: '', phone: '', email: '', businessType: '', budget: '', message: '' });
      }
    } catch (err) {
      setError('Failed to send message. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const businessTypes = [
    'Tuition Center', 'Dance Academy', 'School', 'Restaurant', 'Gym',
    'Medical Clinic', 'Salon', 'Clothing Store', 'Electronics Shop',
    'Stationery Shop', 'Landing Page', 'Redesign', 'Other',
  ];

  if (submitted) {
    return (
      <section id="contact" className="py-24 md:py-32 bg-surface-alt">
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-text">Thank You!</h3>
            <p className="mt-4 text-lg text-text-secondary">
              Your request has been received. Team Trios will contact you during business hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-dark"
            >
              Send Another Request
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-alt">
      <Container>
        <AnimateOnScroll>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Contact Us
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
              Let's Build Your <span className="gradient-text">Website</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              Tell us about your business and we'll create a website that helps you grow.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-5">
            <AnimateOnScroll className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-surface-card p-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Name *</label>
                    <input type="text" value={form.name} onChange={handleChange('name')}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-secondary/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Business Name *</label>
                    <input type="text" value={form.business} onChange={handleChange('business')}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-secondary/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Your business" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Phone *</label>
                    <input type="tel" value={form.phone} onChange={handleChange('phone')}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-secondary/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Email *</label>
                    <input type="email" value={form.email} onChange={handleChange('email')}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-secondary/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Business Type *</label>
                    <select value={form.businessType} onChange={handleChange('businessType')}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                      <option value="">Select type...</option>
                      {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Budget (Optional)</label>
                    <select value={form.budget} onChange={handleChange('budget')}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                      <option value="">Not sure yet</option>
                      <option value="₹3,000 - ₹5,000">₹3,000 - ₹5,000</option>
                      <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                      <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
                      <option value="₹20,000+">₹20,000+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">Message</label>
                  <textarea rows={3} value={form.message} onChange={handleChange('message')}
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-secondary/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Tell us about your project..." />
                </div>
                {error && (
                  <div className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={18} /> Send Request</>
                  )}
                </button>
              </form>
            </AnimateOnScroll>

            <AnimateOnScroll className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-border bg-surface-card p-6">
                <h4 className="font-bold text-text">Contact Info</h4>
                <div className="mt-4 space-y-4">
                  <a href="mailto:triosbyaaa1807@gmail.com" className="flex items-center gap-3 text-sm text-text-secondary hover:text-primary transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                      <Mail size={18} />
                    </div>
                    <span>triosbyaaa1807@gmail.com</span>
                  </a>
                  <a href="tel:+91989005950" className="flex items-center gap-3 text-sm text-text-secondary hover:text-primary transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                      <Phone size={18} />
                    </div>
                    <span>+91 98900 05950</span>
                  </a>
                  <div className="flex items-start gap-3 text-sm text-text-secondary">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-text">Business Hours</div>
                      <div className="mt-0.5">Mon–Sat</div>
                      <div>2:00 PM – 4:00 PM IST</div>
                      <div>6:00 PM – 12:00 AM IST</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                <h4 className="font-bold text-text">Prefer WhatsApp?</h4>
                <p className="mt-2 text-sm text-text-secondary">Chat with us directly on WhatsApp for a faster response.</p>
                <a
                  href="https://wa.me/91989005950?text=Hi%20Trios!%20I%20want%20to%20build%20a%20website%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#20bd5a] hover:shadow-lg"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ===== SECTION: Footer =====
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-zinc-900 text-zinc-400 dark:bg-black">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white text-sm font-bold">
                T
              </div>
              <span className="text-xl font-extrabold text-white">Trios</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">Modern websites for local businesses. We build your digital presence so you can focus on what you do best.</p>
            <div className="mt-6 flex gap-3">
              <a href="mailto:triosbyaaa1807@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 transition-all hover:bg-primary hover:text-white" aria-label="Email">
                <Mail size={16} />
              </a>
              <a href="tel:+91989005950" className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 transition-all hover:bg-primary hover:text-white" aria-label="Phone">
                <Phone size={16} />
              </a>
              <a href="https://wa.me/91989005950" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 transition-all hover:bg-[#25D366] hover:text-white" aria-label="WhatsApp">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Process', href: '#process' },
                { label: 'Team', href: '#team' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-3">
              {['Business Websites', 'E-commerce', 'Landing Pages', 'Website Redesign', 'AI Chatbots', 'Maintenance'].map((s) => (
                <li key={s}>
                  <span className="text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Business Hours</h4>
            <div className="space-y-2 text-sm">
              <p>Monday – Saturday</p>
              <p>2:00 PM – 4:00 PM IST</p>
              <p>6:00 PM – 12:00 AM IST</p>
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg"
              >
                Get Started <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">&copy; {year} Trios. All Rights Reserved.</p>
          <p className="text-xs text-zinc-600">Built with ❤️ by the Trios team</p>
        </div>
      </Container>
    </footer>
  );
}

// ===== FLOATING ACTIONS =====
function FloatingActions() {
  const [showBackTop, setShowBackTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/91989005950?text=Hi%20Trios!%20I%20want%20to%20build%20a%20website%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-200 hover:scale-110 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Call */}
      <a
        href="tel:+91989005950"
        className="fixed bottom-[5.5rem] right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-all duration-200 hover:scale-110 hover:shadow-xl"
        aria-label="Call us"
      >
        <Phone size={20} />
      </a>

      {/* Email */}
      <a
        href="mailto:triosbyaaa1807@gmail.com"
        className="fixed bottom-[9.5rem] right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30 transition-all duration-200 hover:scale-110 hover:shadow-xl"
        aria-label="Email us"
      >
        <Mail size={20} />
      </a>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-[13.5rem] right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-secondary shadow-lg transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-primary/30 ${
          showBackTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp size={18} />
      </button>
    </>
  );
}

// ===== PAGE: Home =====
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white text-2xl font-black shadow-xl shadow-primary/30 animate-pulse-slow">
          T
        </div>
        <div className="mt-6 loader" />
        <p className="mt-4 text-sm text-text-secondary">Loading Trios...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface text-text">
      <Navbar transparent />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <FaqSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
