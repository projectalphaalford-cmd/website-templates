import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

export default function ServicesSection({ services, variant = 'grid' }) {
  if (!services || services.length === 0) return null;

  const Icon = ({ icon: IconComponent, ...props }) =>
    IconComponent ? <IconComponent size={28} {...props} /> : null;

  if (variant === 'list') {
    return (
      <section id="services" className="py-20 md:py-28 bg-surface-alt">
        <Container>
          <SectionHeading title={services.title} subtitle={services.subtitle} />
          <div className="space-y-4">
            {services.items?.map((service) => (
              <Card key={service.title} className="flex items-center gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  {service.icon && <Icon icon={service.icon} />}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-900">{service.title}</h3>
                  <p className="mt-1 text-zinc-600">{service.description}</p>
                </div>
                {service.price && (
                  <span className="shrink-0 text-xl font-bold text-brand">{service.price}</span>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  // Default: grid of cards
  return (
    <section id="services" className="py-20 md:py-28">
      <Container>
        <SectionHeading title={services.title} subtitle={services.subtitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items?.map((service, i) => (
            <Card key={service.title || i}>
              {service.icon && (
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon icon={service.icon} />
                </div>
              )}
              <h3 className="text-xl font-semibold text-zinc-900">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-zinc-600">{service.description}</p>
              {service.price && (
                <p className="mt-4 text-lg font-bold text-brand">{service.price}</p>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
