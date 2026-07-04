export default function SectionHeading({ title, subtitle, align = 'center', light = false }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';

  return (
    <div className={`mb-12 md:mb-16 ${alignClass}`}>
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${light ? 'text-white' : 'text-zinc-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-lg leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-zinc-300' : 'text-zinc-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-brand ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
