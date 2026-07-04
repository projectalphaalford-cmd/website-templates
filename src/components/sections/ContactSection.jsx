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
            <SectionHeading title={contact.title || 'Contact Us'} subtitle={contact.subtitle} />
            <div className="space-y-4">
              {info.map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-xl bg-surface p-4 shadow-sm">
                  <item.icon size={20} className="text-brand" />
                  <div>
                    <p className="text-xs text-zinc-500">{item.label}</p>
                    <p className="font-medium text-zinc-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // Default: form + info side by side
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <SectionHeading title={contact.title || 'Contact Us'} subtitle={contact.subtitle || 'Get in touch with us'} />
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          {submitted ? (
            <div className="flex items-center justify-center rounded-2xl bg-brand/5 p-12 text-center">
              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Send size={28} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-900">Message Sent!</h3>
                <p className="mt-2 text-zinc-600">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-surface p-8 shadow-lg ring-1 ring-zinc-100">
              <div className="grid gap-5 sm:grid-cols-2">
                <Input label="First Name" name="firstName" required />
                <Input label="Last Name" name="lastName" required />
              </div>
              <Input label="Email Address" name="email" type="email" required />
              <Input label="Phone (optional)" name="phone" type="tel" />
              <Textarea label="Your Message" name="message" required />
              <Button type="submit" className="w-full">
                Send Message <Send size={18} />
              </Button>
            </form>
          )}

          {/* Info */}
          <div className="space-y-6">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <item.icon size={22} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500">{item.label}</p>
                  <p className="mt-0.5 text-base font-semibold text-zinc-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
