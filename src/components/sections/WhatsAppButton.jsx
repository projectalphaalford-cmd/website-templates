import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({ phone, message = 'Hi! I would like to know more about your services.' }) {
  if (!phone) return null;

  const encoded = encodeURIComponent(message);
  const href = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encoded}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30 animate-fade-in"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
