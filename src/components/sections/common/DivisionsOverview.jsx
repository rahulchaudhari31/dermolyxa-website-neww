import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Reveal from '../../ui/Reveal';
import Icon from '../../ui/Icon';
import Badge from '../../ui/Badge';
import ImageWithFallback from '../../ui/ImageWithFallback';
import ImageCaption from '../../ui/ImageCaption';
import { divisions, images } from '../../../data/siteData';

/**
 * Overview of the three DERMOLYXA divisions. Reused on Home and About.
 */
export default function DivisionsOverview({
  eyebrow = 'Three divisions, one identity',
  title = 'A unified brand across education, care and science',
  subtitle = 'Education, clinical care and science-driven solutions — each with a clear, focused role under one premium identity.',
  background = 'bg-offwhite',
  showCaption = true,
  className = '',
}) {
  return (
    <section className={['section-padding', background, className].filter(Boolean).join(' ')}>
      <Container>
        <SectionHeading align="center" eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {divisions.map((division, index) => {
            const number = String(index + 1).padStart(2, '0');

            return (
              <Reveal key={division.id} delay={index * 0.08} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                  <div className="relative h-44 overflow-hidden">
                    <ImageWithFallback
                      src={images.divisions[division.id]}
                      alt={division.name}
                      className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent" aria-hidden="true" />
                    <span className="absolute left-5 top-4 font-display text-4xl text-white/90">{number}</span>
                    <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-teal-600 backdrop-blur">
                      <Icon name={division.icon} className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    {division.comingSoon && (
                      <Badge variant="gold" className="mb-3 w-fit">
                        <Sparkles className="h-3.5 w-3.5" />
                        Coming Soon
                      </Badge>
                    )}

                    <h3 className="font-display text-xl leading-snug text-charcoal-800">{division.name}</h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gold-700">
                      {division.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{division.description}</p>

                    {division.comingSoon ? (
                      <p className="mt-5 rounded-xl border border-gold-200 bg-gold-50 px-4 py-3 text-sm font-medium text-gold-800">
                        {division.comingSoonText}
                      </p>
                    ) : (
                      <ul className="mt-5 space-y-2">
                        {division.offerings.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-charcoal-700">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link
                      to={division.homeLink}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
                    >
                      {division.homeLinkLabel}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {showCaption && (
          <div className="mt-8 flex justify-center">
            <ImageCaption />
          </div>
        )}
      </Container>
    </section>
  );
}
