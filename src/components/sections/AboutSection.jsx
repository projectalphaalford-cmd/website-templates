import { CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

export default function AboutSection({ about, variant = 'default' }) {
  if (!about) return null;

  if (variant === 'minimal') {
    return (
      <section id="about" className="py-20 md:py-28 bg-surface-alt">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading title={about.title} subtitle={about.content} />
            {about.stats && (
              <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
                {about.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-brand md:text-4xl">{stat.value}</div>
                    <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>
    );
  }

  // Default: image + text
  return (
    <section id="about" className="py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className={`space-y-6 ${variant === 'image-right' ? 'lg:order-2' : ''}`}>
            <SectionHeading title={about.title} align="left" />
            <p className="text-lg leading-relaxed text-zinc-600">{about.content}</p>
            {about.features && (
              <ul className="mt-6 space-y-3">
                {about.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle size={20} className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-zinc-700">{f}</span>
                  </li>
                ))}
              </ul>
            )}
            {about.stats && (
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-zinc-200 pt-8">
                {about.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-brand">{stat.value}</div>
                    <div className="text-sm text-zinc-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={`relative ${variant === 'image-right' ? 'lg:order-1' : ''}`}>
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-brand-light/40 to-brand/10 shadow-xl">
              <div className="flex h-full items-center justify-center">
                <span className="text-6xl font-bold text-brand/20">{about.stats?.[0]?.value || '10+'}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
