import { marqueeItems } from '../../../data/siteData';

export default function MarqueeStrip() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <section aria-label="Focus areas" className="border-y border-teal-900/20 bg-teal-800 py-5">
      <div className="relative flex overflow-hidden">
        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
              {loop.map((item, index) => (
                <span key={`${item}-${index}`} className="flex items-center">
                  <span className="px-8 font-display text-xl text-white/90 sm:text-2xl">{item}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
