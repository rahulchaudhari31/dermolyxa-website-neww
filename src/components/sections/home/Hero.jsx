import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import Reveal from '../../ui/Reveal';
import Icon from '../../ui/Icon';
import ImageWithFallback from '../../ui/ImageWithFallback';
import ImageCaption from '../../ui/ImageCaption';
import { brand, divisions, images } from '../../../data/siteData';

function GlassBadge({ label, icon, className, delay = 0 }) {
  return (
    <motion.div
      className={[
        'absolute flex items-center gap-2 rounded-2xl border border-white/50 bg-white/70 px-3.5 py-2.5 shadow-card backdrop-blur-md',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      initial={{ opacity: 0, scale: 0.9, y: 0 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.4 },
      }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500 text-white">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <span className="text-sm font-semibold text-charcoal-800">{label}</span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-28 sm:pt-36">
      <div
        className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-teal-50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-48 h-72 w-72 rounded-full bg-gold-50 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        {/* Copy */}
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-200 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />
              Skin • Hair • Aesthetic
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{brand.tagline}</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted">{brand.sub}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 font-display text-lg italic text-teal-600">{brand.philosophy}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {divisions.map((division, index) => (
                <Button
                  key={division.id}
                  to={division.homeLink}
                  variant={index === 0 ? 'primary' : 'outline'}
                >
                  <Icon name={division.icon} className="h-4 w-4" />
                  Explore {division.short}
                </Button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Collage */}
        <Reveal delay={0.1} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[2rem] border border-charcoal-100 shadow-card-hover">
              <ImageWithFallback
                src={images.hero.primary}
                alt="Illustrative aesthetic skincare"
                loading="eager"
                className="h-[420px] w-full sm:h-[500px]"
              />
            </div>

            <div className="absolute -bottom-7 -left-5 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-card sm:block">
              <ImageWithFallback src={images.hero.secondary} alt="Illustrative spa setting" className="h-32 w-full" />
            </div>

            <div className="absolute -right-5 top-8 hidden w-32 overflow-hidden rounded-2xl border-4 border-white shadow-card sm:block">
              <ImageWithFallback
                src={images.hero.tertiary}
                alt="Illustrative learning setting"
                className="h-28 w-full"
              />
            </div>

            <GlassBadge label="Skin" icon="Sparkles" className="left-5 top-6" delay={0.3} />
            <GlassBadge label="Hair" icon="Wind" className="-right-3 top-28" delay={0.45} />
            <GlassBadge label="Aesthetic" icon="Star" className="left-8 bottom-24" delay={0.6} />
          </div>

          <div className="mt-14 flex">
            <ImageCaption className="max-w-md" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
