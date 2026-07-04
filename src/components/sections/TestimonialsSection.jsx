import { Star } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

export default function TestimonialsSection({ testimonials, variant = 'grid' }) {
  if (!testimonials?.items || testimonials.items.length === 0) return null;

  const Stars = ({ rating }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={16}
          className={i <= rating ? 'fill-amber-400 text-amber-400' : 'text-zinc-200'}
        />
      ))}
    </div>
  );

  if (variant === 'carousel') {
    return (
      <section id="testimonials" className="py-20 md:py-28 bg-surface-alt">
        <Container>
          <SectionHeading title={testimonials.title} subtitle={testimonials.subtitle} />
          <div className="overflow-hidden">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {testimonials.items.map((t, i) => (
                <div key={i} className="min-w-[300px] flex-shrink-0 snap-start md:min-w-[400px]">
                  <Card className="h-full">
                    <Stars rating={t.rating || 5} />
                    <p className="mt-4 leading-relaxed text-zinc-600">"{t.content}"</p>
                    <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                        {t.name?.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                        <p className="text-xs text-zinc-500">{t.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // Default: grid
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <Container>
        <SectionHeading title={testimonials.title} subtitle={testimonials.subtitle} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Card key={i}>
              <Stars rating={t.rating || 5} />
              <p className="mt-4 leading-relaxed text-zinc-600">"{t.content}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                  {t.name?.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
