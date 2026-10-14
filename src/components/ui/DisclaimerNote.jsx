import { ShieldCheck } from 'lucide-react';

export default function DisclaimerNote({ children, className = '' }) {
  return (
    <p
      className={[
        'flex items-start gap-2 rounded-xl border border-charcoal-100 bg-offwhite px-4 py-3 text-xs leading-relaxed text-muted',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

export function DisclaimerList({ items = [], className = '' }) {
  if (!items.length) return null;

  return (
    <ul className={['space-y-2', className].filter(Boolean).join(' ')}>
      {items.map((item) => (
        <li key={item}>
          <DisclaimerNote>{item}</DisclaimerNote>
        </li>
      ))}
    </ul>
  );
}
