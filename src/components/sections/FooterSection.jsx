import { Facebook, Instagram, Twitter, Youtube, Linkedin, Heart } from 'lucide-react';
import Container from '../ui/Container';

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  linkedin: Linkedin,
};

export default function FooterSection({ footer, social }) {
  if (!footer) return null;

  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-400 dark:bg-black">
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-white">{footer.brandName}</h3>
            <p className="mt-3 text-sm leading-relaxed">{footer.description}</p>
          </div>

          {/* Quick Links */}
          {footer.links && (
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
              <ul className="space-y-3">
                {footer.links.map((link) => (
                  <li key={link.href || link.label}>
                    <a
                      href={link.href || '#'}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Services */}
          {footer.services && (
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
              <ul className="space-y-3">
                {footer.services.map((s) => (
                  <li key={s}>
                    <span className="text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Social */}
          {social && (
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Follow Us</h4>
              <div className="flex gap-3">
                {Object.entries(social).map(([platform, url]) => {
                  const Icon = socialIcons[platform];
                  if (!Icon || !url) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 transition-colors hover:bg-brand hover:text-white"
                      aria-label={platform}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm">
          <p className="flex items-center justify-center gap-1">
            &copy; {year} {footer.brandName}. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-zinc-600">
            Made with <Heart size={12} className="inline text-red-500" /> by Trios
          </p>
        </div>
      </Container>
    </footer>
  );
}
