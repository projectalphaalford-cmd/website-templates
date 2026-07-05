import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Container from '../ui/Container';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar({ brand, navLinks = [], transparent = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isTemplate = location.pathname.startsWith('/template/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showBg = scrolled || (!transparent && !isTemplate) || (isTemplate && scrolled);

  // Agency nav on home page
  if (isHome) {
    const agencyLinks = [
      { label: 'Home', href: '#hero' },
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Process', href: '#process' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' },
    ];

    return (
      <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        showBg ? 'glass-strong shadow-sm' : 'bg-transparent'
      }`}>
        <Container>
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white text-sm font-bold shadow-lg shadow-primary/25">
                T
              </div>
              <span className="text-xl font-extrabold tracking-tight text-text">
                Trios
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-1 md:flex">
              {agencyLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-text-secondary transition-all hover:bg-primary/10 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="ml-2 h-5 w-px bg-border" />
              <button
                onClick={toggle}
                className="ml-2 flex h-10 w-10 items-center justify-center rounded-xl text-text-secondary transition-all hover:bg-primary/10 hover:text-primary"
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a
                href="#contact"
                className="ml-3 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
              >
                Get a Website
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggle}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-text-secondary transition-all hover:bg-primary/10 hover:text-primary"
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-text-secondary transition-all hover:bg-primary/10 hover:text-primary"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-border bg-surface md:hidden">
            <Container className="py-4">
              <div className="flex flex-col gap-1">
                {agencyLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-text-secondary transition-all hover:bg-primary/10 hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="my-2 border-t border-border" />
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-white shadow-lg"
                >
                  Get a Website
                </a>
              </div>
            </Container>
          </div>
        )}
      </nav>
    );
  }

  // Template navbar (original)
  const bgClass = showBg
    ? 'bg-white/95 backdrop-blur-md shadow-sm dark:bg-zinc-900/95'
    : 'bg-transparent';

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${bgClass}`}>
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            {brand?.logo ? (
              <img src={brand.logo} alt={brand.name} className="h-8 w-auto" />
            ) : (
              <span className="text-xl font-bold text-text transition-colors group-hover:text-primary">
                {brand?.name || 'Trios'}
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href || link.label}
                href={link.href || '#'}
                className="rounded-lg px-4 py-2 text-sm font-medium text-text-secondary transition-all hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggle}
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-xl text-text-secondary transition-all hover:bg-primary/10 hover:text-primary"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggle}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-text-secondary"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-text-secondary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-surface md:hidden">
          <Container className="py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href || link.label}
                  href={link.href || '#'}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-text-secondary hover:bg-primary/10 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
