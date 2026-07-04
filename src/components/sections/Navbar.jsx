import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Container from '../ui/Container';

export default function Navbar({ brand, navLinks = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isTemplate = location.pathname.startsWith('/template/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bgClass = scrolled || !isTemplate
    ? 'bg-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${bgClass}`}>
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center gap-2 text-xl font-bold transition-colors ${
              scrolled || !isTemplate ? 'text-zinc-900' : 'text-white'
            }`}
          >
            {brand?.logo ? (
              <img src={brand.logo} alt={brand.name} className="h-8 w-auto" />
            ) : (
              <span className="text-brand">{brand?.name || 'Business'}</span>
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled || !isTemplate
                    ? 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            {isHome && (
              <Link
                to="/templates"
                className="ml-4 rounded-lg bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                View Templates
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-lg p-2 md:hidden ${
              scrolled || !isTemplate ? 'text-zinc-600' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-zinc-100 bg-white md:hidden">
          <Container className="py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                >
                  {link.label}
                </a>
              ))}
              {isHome && (
                <Link
                  to="/templates"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 rounded-lg bg-brand px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  View Templates
                </Link>
              )}
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
