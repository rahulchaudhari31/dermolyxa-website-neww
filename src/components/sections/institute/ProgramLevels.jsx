import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Clock } from 'lucide-react';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Icon from '../../ui/Icon';
import Badge from '../../ui/Badge';
import ImageWithFallback from '../../ui/ImageWithFallback';
import ImageCaption from '../../ui/ImageCaption';
import { institutePrograms, images } from '../../../data/siteData';

/**
 * Interactive tab/stepper exploring the five levels of institute programs.
 */
export default function ProgramLevels() {
  const [index, setIndex] = useState(0);
  const tabRefs = useRef([]);
  const total = institutePrograms.length;
  const active = institutePrograms[index];

  const go = (next) => setIndex((next + total) % total);

  const focusTab = (next) => {
    const target = (next + total) % total;
    setIndex(target);
    tabRefs.current[target]?.focus();
  };

  const onTabKeyDown = (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      focusTab(index + 1);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      focusTab(index - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      focusTab(total - 1);
    }
  };

  return (
    <section className="section-padding bg-offwhite">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Program levels"
          title="Five levels of learning"
          subtitle="From focused certificate courses to in-depth professional fellowships, each level builds practical competency at a different depth."
        />

        <div
          role="tablist"
          aria-label="Program levels"
          onKeyDown={onTabKeyDown}
          className="mt-10 flex gap-2 overflow-x-auto pb-2 sm:justify-center"
        >
          {institutePrograms.map((level, i) => {
            const isActive = i === index;

            return (
              <button
                key={level.category}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`program-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="program-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setIndex(i)}
                className={[
                  'inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all',
                  isActive
                    ? 'border-teal-500 bg-teal-500 text-white shadow-card'
                    : 'border-charcoal-200 bg-white text-charcoal-700 hover:border-teal-300 hover:text-teal-600',
                ].join(' ')}
              >
                <Icon name={level.icon} className="h-4 w-4" />
                {level.category}
              </button>
            );
          })}
        </div>

        <div
          id="program-panel"
          role="tabpanel"
          aria-labelledby={`program-tab-${index}`}
          tabIndex={0}
          className="mt-8 overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-card focus:outline-none"
        >
          <div className="grid md:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.category}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-3xl text-teal-500/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Badge variant="gold">Level {String(index + 1).padStart(2, '0')}</Badge>
                  </div>

                  <h3 className="mt-4 font-display text-2xl text-charcoal-800 sm:text-3xl">
                    {active.category}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">{active.description}</p>

                  {active.highlights?.length > 0 && (
                    <ul className="mt-6 space-y-2">
                      {active.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-charcoal-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" aria-hidden="true" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="mt-6 flex items-center gap-2 text-xs font-medium text-muted">
                    <Clock className="h-4 w-4 text-gold-500" aria-hidden="true" />
                    Duration: To be announced
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted">{active.note}</p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous level"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-200 text-charcoal-700 transition-colors hover:border-teal-300 hover:text-teal-600"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next level"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-200 text-charcoal-700 transition-colors hover:border-teal-300 hover:text-teal-600"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
                <span className="ml-1 text-xs font-medium text-muted">
                  Step {index + 1} of {total}
                </span>
              </div>
            </div>

            <div className="relative hidden min-h-[380px] md:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.category}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback src={images.divisions.institute} alt="" className="h-full w-full" />
                  <div className="absolute inset-0 bg-teal-900/35" aria-hidden="true" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/85 text-teal-600 backdrop-blur">
                      <Icon name={active.icon} className="h-9 w-9" />
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-4 left-4 right-4">
                <ImageCaption light />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
