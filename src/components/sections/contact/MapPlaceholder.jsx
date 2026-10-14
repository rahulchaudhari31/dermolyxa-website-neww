import { MapPin } from 'lucide-react';
import Reveal from '../../ui/Reveal';

/**
 * Styled placeholder standing in for a map. No address is shown until it is
 * confirmed, so this deliberately contains no location details.
 */
export default function MapPlaceholder() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-charcoal-100 shadow-card">
        <div
          className="relative flex min-h-[280px] items-center justify-center bg-teal-50/50 sm:min-h-[340px]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15,92,99,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,92,99,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          role="img"
          aria-label="Map placeholder — location details to be announced"
        >
          <div className="relative z-10 mx-6 max-w-md rounded-2xl border border-charcoal-100 bg-white/95 px-8 py-8 text-center shadow-card backdrop-blur">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500 text-white">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-xl text-charcoal-800">Location</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Location details will be announced soon. No address is shown until it is confirmed.
            </p>
          </div>

          <span className="pointer-events-none absolute left-8 top-8 h-3 w-3 rounded-full bg-gold-400/60" aria-hidden="true" />
          <span className="pointer-events-none absolute bottom-10 right-10 h-3 w-3 rounded-full bg-teal-400/50" aria-hidden="true" />
        </div>
      </div>
    </Reveal>
  );
}
