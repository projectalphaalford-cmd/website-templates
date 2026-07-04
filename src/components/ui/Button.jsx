import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30',
  outline:
    'border-2 border-brand text-brand hover:bg-brand hover:text-white',
  ghost: 'text-brand hover:bg-brand/10',
  white: 'bg-white text-brand hover:bg-zinc-100',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) {
  const base = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={base} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={base} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
