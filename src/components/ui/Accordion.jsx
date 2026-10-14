import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Accessible accordion. `items` is an array of { question|title, answer|content }.
 */
export default function Accordion({ items = [], allowMultiple = false, defaultOpen = null, className = '' }) {
  const baseId = useId();
  const [open, setOpen] = useState(() => {
    if (defaultOpen === null) return allowMultiple ? [] : null;
    return allowMultiple ? [defaultOpen] : defaultOpen;
  });

  const isOpen = (index) => (allowMultiple ? open.includes(index) : open === index);

  const toggle = (index) => {
    setOpen((prev) => {
      if (allowMultiple) {
        return prev.includes(index) ? prev.filter((value) => value !== index) : [...prev, index];
      }
      return prev === index ? null : index;
    });
  };

  return (
    <div
      className={[
        'divide-y divide-charcoal-100 overflow-hidden rounded-2xl border border-charcoal-100 bg-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {items.map((item, index) => {
        const isItemOpen = isOpen(index);
        const key = item.id ?? item.question ?? item.title ?? index;
        const buttonId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={key}>
            <button
              type="button"
              id={buttonId}
              onClick={() => toggle(index)}
              aria-expanded={isItemOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-offwhite sm:px-6"
            >
              <span className="font-display text-lg text-charcoal-800">{item.question ?? item.title}</span>
              <ChevronDown
                className={[
                  'h-5 w-5 shrink-0 text-teal-500 transition-transform duration-300',
                  isItemOpen ? 'rotate-180' : '',
                ].join(' ')}
              />
            </button>

            <AnimatePresence initial={false}>
              {isItemOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 leading-relaxed text-muted sm:px-6">{item.answer ?? item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
