import { ArrowRight, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

function HeroOverlay({ variant = 'gradient' }) {
  if (variant === 'dots')
    return (
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
    );
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand/80 to-brand-light/40" />
  );
}

export default function HeroSection({ hero, brand, variant = 'default' }) {
  if (!hero) return null;

  if (variant === 'split') {
    return (
      <section className="relative min-h-screen flex items-center bg-surface-alt pt-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-medium text-brand">
                <Sparkles size={16} /> {brand?.tagline || 'Welcome'}
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl">
                {hero.title}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-zinc-600">{hero.subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" href={hero.cta?.href || '#contact'}>
                  {hero.cta?.text || 'Get Started'} <ArrowRight size={20} />
                </Button>
                <Button size="lg" variant="outline" href="#about">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-brand-light/30 to-brand/10 p-8">
                <div className="grid h-full grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`rounded-2xl bg-white/60 shadow-sm ${i === 1 ? 'row-span-2' : ''}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (variant === 'centered') {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: brand?.colors?.primary || 'rgb(var(--color-brand-dark))' }}>
        <HeroOverlay variant="dots" />
        <Container className="relative z-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="white" href={hero.cta?.href || '#contact'}>
              {hero.cta?.text || 'Get Started'} <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline" className="!border-white/30 !text-white hover:!bg-white/10" href="#about">
              Learn More
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  // Default: gradient hero with CTA
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light" />
      <HeroOverlay />
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
            <Sparkles size={16} /> {brand?.name}
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" variant="white" href={hero.cta?.href || '#contact'}>
              {hero.cta?.text || 'Get Started'} <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline" className="!border-white/30 !text-white hover:!bg-white/10" href="#about">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
