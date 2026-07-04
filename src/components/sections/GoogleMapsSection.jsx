import Container from '../ui/Container';

export default function GoogleMapsSection({ address }) {
  if (!address) return null;

  const encoded = encodeURIComponent(address);
  const src = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encoded}`;

  return (
    <section className="py-12 md:py-16 bg-surface-alt">
      <Container>
        <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-zinc-100">
          <div className="aspect-[21/9] w-full min-h-[300px] bg-zinc-100">
            <iframe
              title="Business Location"
              src={src}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
        <p className="mt-3 text-center text-sm text-zinc-500">
          <a
            href={`https://maps.google.com/?q=${encoded}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            {address}
          </a>
        </p>
      </Container>
    </section>
  );
}
