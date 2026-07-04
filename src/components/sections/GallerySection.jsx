import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

export default function GallerySection({ gallery, variant = 'grid' }) {
  const [lightbox, setLightbox] = useState(null);
  const [filter, setFilter] = useState('all');

  if (!gallery?.items || gallery.items.length === 0) return null;

  const categories = [...new Set(gallery.items.map((img) => img.category).filter(Boolean))];
  const filtered = filter === 'all' ? gallery.items : gallery.items.filter((img) => img.category === filter);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i > 0 ? i - 1 : filtered.length - 1));
  const next = () => setLightbox((i) => (i < filtered.length - 1 ? i + 1 : 0));

  if (variant === 'masonry') {
    return (
      <section id="gallery" className="py-20 md:py-28 bg-surface-alt">
        <Container>
          <SectionHeading title={gallery.title} subtitle={gallery.subtitle} />
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="group relative mb-4 w-full overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-brand-light/20 to-brand/10" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                  <ImageIcon size={32} className="text-white/0 transition-all group-hover:text-white/80" />
                </div>
                {img.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium text-white">{img.title}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </Container>

        {/* Lightbox */}
        {lightbox !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={closeLightbox}>
            <button onClick={closeLightbox} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20">
              <X size={24} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20">
              <ChevronLeft size={24} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20">
              <ChevronRight size={24} />
            </button>
            <div className="aspect-[4/3] max-h-[80vh] w-full max-w-4xl rounded-2xl bg-gradient-to-br from-brand-light/30 to-brand/20" onClick={(e) => e.stopPropagation()} />
          </div>
        )}
      </section>
    );
  }

  // Default: grid with optional filter
  return (
    <section id="gallery" className="py-20 md:py-28">
      <Container>
        <SectionHeading title={gallery.title} subtitle={gallery.subtitle} />

        {categories.length > 0 && (
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === 'all' ? 'bg-brand text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  filter === cat ? 'bg-brand text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-light/20 to-brand/10 shadow-md transition-transform hover:scale-[1.02]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-medium text-brand/30">{img.title || `Photo ${i + 1}`}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </button>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20">
            <X size={24} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20">
            <ChevronLeft size={24} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20">
            <ChevronRight size={24} />
          </button>
          <div className="aspect-[4/3] max-h-[80vh] w-full max-w-4xl rounded-2xl bg-gradient-to-br from-brand-light/30 to-brand/20" onClick={(e) => e.stopPropagation()}>
            <div className="flex h-full items-center justify-center">
              <span className="text-2xl text-white/60">{filtered[lightbox].title}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
