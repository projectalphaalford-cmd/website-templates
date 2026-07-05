import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import emailjs from '@emailjs/browser';
import SectionHeading from '../ui/SectionHeading';
import { Input, Textarea } from '../ui/Input';
import Button from '../ui/Button';

export default function ContactSection({ contact, variant = 'default' }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', business: '',
    type: '', budget: '', message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!contact) return null;

  const validate = () => {
    if (!form.name.trim()) return 'Full Name is required.';
    if (!form.email.trim()) return 'Email address is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address.';
    if (!form.phone.trim()) return 'Phone number is required.';
    if (!/^[+]?[\d\s()-]{7,20}$/.test(form.phone)) return 'Please enter a valid phone number.';
    if (!form.message.trim()) return 'Project details are required.';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) { setError(validationError); return; }
    setError('');
    setLoading(true);

    const now = new Date();
    const time = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true });

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          business: form.business,
          type: form.type,
          budget: form.budget || 'Not specified',
          message: form.message,
          time,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      if (result.status === 200) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', business: '', type: '', budget: '', message: '' });
      }
    } catch (err) {
      setError('Failed to send your inquiry. Please check your connection or try again.');
      setSubmitted(false);
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

  const info = [
    { icon: Phone, label: 'Phone', value: contact.phone },
    { icon: Mail, label: 'Email', value: contact.email },
    { icon: MapPin, label: 'Address', value: contact.address },
    { icon: Clock, label: 'Hours', value: contact.hours },
  ].filter((item) => item.value);

  const formFields = (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-surface-card p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Full Name *" name="name" type="text" value={form.name} onChange={handleChange('name')} placeholder="Your full name" required />
        <Input label="Email Address *" name="email" type="email" value={form.email} onChange={handleChange('email')} placeholder="you@example.com" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Phone Number *" name="phone" type="tel" value={form.phone} onChange={handleChange('phone')} placeholder="+91 98765 43210" required />
        <Input label="Business Name" name="business" type="text" value={form.business} onChange={handleChange('business')} placeholder="Your business name" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700">Business Type</label>
          <select value={form.type} onChange={handleChange('type')}
            className="block w-full rounded-lg border-zinc-300 bg-surface px-4 py-3 text-zinc-900 transition focus:border-brand focus:ring-2 focus:ring-brand/20">
            <option value="">Select type...</option>
            {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700">Budget (Optional)</label>
          <select value={form.budget} onChange={handleChange('budget')}
            className="block w-full rounded-lg border-zinc-300 bg-surface px-4 py-3 text-zinc-900 transition focus:border-brand focus:ring-2 focus:ring-brand/20">
            <option value="">Not sure yet</option>
            <option value="₹3,000 - ₹5,000">₹3,000 - ₹5,000</option>
            <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
            <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
            <option value="₹20,000+">₹20,000+</option>
          </select>
        </div>
      </div>
      <Textarea label="Project Details *" name="message" value={form.message} onChange={handleChange('message')} placeholder="Tell us about your project, goals, and requirements..." rows={4} required />
      {error && (
        <div className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-600 dark:text-red-400">
          <p>{error}</p>
          <button type="button" onClick={() => setError('')}
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-red-600 dark:text-red-400 hover:underline">
            Retry
          </button>
        </div>
      )}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={16} /> Send Request</>}
      </Button>
    </form>
  );

  const successView = (
    <div className="flex items-center justify-center rounded-2xl bg-primary/5 p-12 text-center">
      <div>
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-text">Thank You!</h3>
        <p className="mt-2 text-text-secondary">✅ Your inquiry has been sent successfully. We'll contact you soon.</p>
        <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6">Send Another Request</Button>
      </div>
    </div>
  );

  if (variant === 'minimal') {
    return (
      <section id="contact" className="py-20 md:py-28 bg-surface-alt">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading title={contact.title || 'Contact Us'} subtitle={contact.subtitle || 'Get in touch'} />
            {submitted ? successView : formFields}
          </div>
        </Container>
      </section>
    );
  }

  // Default: form + info side by side
  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-alt">
      <Container>
        <SectionHeading title={contact.title || 'Contact Us'} subtitle={contact.subtitle || 'Get in touch with us'} />
        <div className="grid gap-10 lg:grid-cols-2">
          {submitted ? successView : formFields}
          {/* Info */}
          <div className="space-y-6">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-text">{item.label}</p>
                  <p className="mt-0.5 text-text-secondary">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
