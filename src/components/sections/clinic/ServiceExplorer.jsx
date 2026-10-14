import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarPlus } from 'lucide-react';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Icon from '../../ui/Icon';
import Button from '../../ui/Button';
import ImageWithFallback from '../../ui/ImageWithFallback';
import ImageCaption from '../../ui/ImageCaption';
import { clinicPage, contact } from '../../../data/siteData';
import { WhatsAppIcon } from '../../ui/BrandIcons';

/**
 * Interactive clinic service category tabs. Each tab shows an illustrative
 * image, a general educational description and a Book Consultation action.
 */
export default function ServiceExplorer() {
  const { services } = clinicPage;
  const [activeId, setActiveId] = useState(services[0].id);
  const tabRefs = useRef([]);
  const total = services.length;
  const index = Math.max(0, services.findIndex((service) => service.id === activeId));
  const active = services[index];

  const focusTab = (next) => {
    const target = (next + total) % total;
    setActiveId(services[target].id);
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
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Service areas"
          title="Explore our clinical services"
          subtitle="Switch between service areas to learn what each one covers. Every service begins with an individual professional consultation."
        />

        <div
          role="tablist"
          aria-label="Clinical service areas"
          onKeyDown={onTabKeyDown}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {services.map((service, i) => {
            const isActive = i === index;

            return (
              <button
                key={service.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`service-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="service-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(service.id)}
                className={[
                  'inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300',
                  isActive
                    ? 'border-teal-500 bg-teal-500 text-white shadow-card'
                    : 'border-charcoal-200 bg-white text-charcoal-700 hover:border-teal-300 hover:text-teal-600',
                ].join(' ')}
              >
                <Icon name={service.icon} className="h-4 w-4" />
                {service.category}
              </button>
            );
          })}
        </div>

        <div
          id="service-panel"
          role="tabpanel"
          aria-labelledby={`service-tab-${index}`}
          tabIndex={0}
          className="mt-10 overflow-hidden rounded-3xl border border-charcoal-100 bg-offwhite shadow-card focus:outline-none"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[280px] md:min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback src={active.image} alt={active.category} className="h-full w-full" />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-teal-900/35 to-transparent"
                    aria-hidden="true"
                  />
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
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                    <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
                    Service area
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-charcoal-800 sm:text-3xl">
                    {active.category}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">{active.description}</p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button to="/contact" variant="primary">
                      <CalendarPlus className="h-4 w-4" />
                      Book Consultation
                    </Button>
                    <Button href={contact.whatsapp} variant="whatsapp">
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>

                  <ImageCaption className="mt-6" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
