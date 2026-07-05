import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { Input, Textarea } from '../ui/Input';
import Button from '../ui/Button';

export default function ContactSection({ contact, variant = 'default' }) {
  const [submitted, setSubmitted] = useState(false);

  if (!contact) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const info = [
    { icon: Phone, label: 'Phone', value: contact.phone },
    { icon: Mail, label: 'Email', value: contact.email },
    { icon: MapPin, label: 'Address', value: contact.address },
    { icon: Clock, label: 'Hours', value: contact.hours },
  ].filter((item) => item.value);

  if (variant === 'minimal') {
    return (
      <section id="contact" className="py-20 md:py-28 bg-surface-alt">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading title={contact.title || 'Contact Us'} subtitle={contact.subtitle || 'Get in touch'} />
            {submitted ? (
              <div className="rounded-2xl bg-primary/5 p-12 text-center">
                <h3 className="text-xl font-bold text-text">Thank You!</h3>
                <p className="mt-2 text-text-secondary">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-surface-card p-8">
                <Input placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Textarea placeholder="Your Message" rows={4} required />
                <Button type="submit" className="w-full"><Send size={16} /> Send Message</Button>
              </form>
            )}
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
          {/* Form */}
          {submitted ? (
            <div className="flex items-center justify-center rounded-2xl bg-primary/5 p-12 text-center">
              <div>
                <h3 className="text-xl font-bold text-text">Message Sent!</h3>
                <p className="mt-2 text-text-secondary">Thank you for reaching out. We'll respond shortly.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6">Send Another</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-surface-card p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Input placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={4} required />
              <Button type="submit" className="w-full"><Send size={16} /> Send Message</Button>
            </form>
          )}

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
