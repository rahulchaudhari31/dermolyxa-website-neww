import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Icon from '../../ui/Icon';
import ImageWithFallback from '../../ui/ImageWithFallback';
import ImageCaption from '../../ui/ImageCaption';
import DisclaimerNote from '../../ui/DisclaimerNote';
import { scienceExplorer, disclaimers } from '../../../data/siteData';

export default function ScienceExplorer() {
  const { tabs } = scienceExplorer;
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Interactive"
          title="Explore the science"
          subtitle="Switch between skin, hair and aesthetic science to see what each area covers."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => {
            const isActive = tab.id === active.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                aria-pressed={isActive}
                className={[
                  'inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300',
                  isActive
                    ? 'border-teal-500 bg-teal-500 text-white shadow-card'
                    : 'border-charcoal-200 bg-white text-charcoal-700 hover:border-teal-300 hover:text-teal-600',
                ].join(' ')}
              >
                <Icon name={tab.icon} className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-charcoal-100 bg-offwhite shadow-card">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[280px] md:min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback src={active.image} alt={active.title} className="h-full w-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent" aria-hidden="true" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">{active.label}</span>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl">{active.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{active.text}</p>
                  <ImageCaption className="mt-6" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <DisclaimerNote className="mx-auto mt-6 max-w-3xl">{disclaimers.educationalOnly}</DisclaimerNote>
      </Container>
    </section>
  );
}
