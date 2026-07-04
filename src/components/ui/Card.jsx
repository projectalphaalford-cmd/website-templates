export default function Card({ children, className = '', hover = true, padded = true }) {
  return (
    <div
      className={`rounded-2xl bg-surface shadow-lg ring-1 ring-zinc-100 transition-all duration-300 ${
        hover ? 'hover:-translate-y-1 hover:shadow-xl' : ''
      } ${padded ? 'p-6 md:p-8' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
