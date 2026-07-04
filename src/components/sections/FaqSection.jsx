import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

function FaqItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-brand"
      >
        <span className="text-base font-semibold text-zinc-900">{faq.question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-zinc-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FaqSection({ faq, variant = 'default' }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faq?.items || faq.items.length === 0) return null;

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className={`py-20 md:py-28 ${variant === 'alt' ? 'bg-surface-alt' : ''}`}>
      <Container>
        <SectionHeading title={faq.title} subtitle={faq.subtitle} />
        <div className="mx-auto max-w-3xl">
          {faq.items.map((item, i) => (
            <FaqItem key={i} faq={item} isOpen={openIndex === i} onClick={() => toggle(i)} />
          ))}
        </div>
      </Container>
    </section>
  );
}
