export function Input({ label, name, type = 'text', ...props }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-zinc-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="block w-full rounded-lg border-zinc-300 bg-surface px-4 py-3 text-zinc-900 placeholder-zinc-400 transition focus:border-brand focus:ring-2 focus:ring-brand/20"
        {...props}
      />
    </div>
  );
}

export function Textarea({ label, name, rows = 4, ...props }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-zinc-700">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        rows={rows}
        className="block w-full rounded-lg border-zinc-300 bg-surface px-4 py-3 text-zinc-900 placeholder-zinc-400 transition focus:border-brand focus:ring-2 focus:ring-brand/20"
        {...props}
      />
    </div>
  );
}
