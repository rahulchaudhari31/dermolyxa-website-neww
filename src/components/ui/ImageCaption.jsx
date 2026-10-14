import { Info } from 'lucide-react';
import { disclaimers } from '../../data/siteData';

/**
 * The mandatory caption shown alongside any illustrative imagery.
 */
export default function ImageCaption({ className = '', light = false }) {
  return (
    <p
      className={[
        'flex items-start gap-1.5 text-[0.7rem] leading-relaxed',
        light ? 'text-white/60' : 'text-muted',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span>{disclaimers.illustrativeImagery}</span>
    </p>
  );
}
