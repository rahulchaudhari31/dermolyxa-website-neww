import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Container from './Container';
import Reveal from './Reveal';
import ImageWithFallback from './ImageWithFallback';
import heroImage from '../../assets/hero.png';

export default function PageHero({ eyebrow, title, description, breadcrumb, image = heroImage, children }) {
  const crumbs =
    breadcrumb ?? [{ label: 'Home', path: '/' }, ...(title ? [{ label: title }] : [])];

  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36">
      <ImageWithFallback
        src={image}
        alt=""
        loading="eager"
        className="absolute inset-0 h-full w-full"
        imgClassName="brightness-105"
      />
      <div className="absolute inset-0 bg-white/85" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white"
        aria-hidden="true"
      />

      <Container className="relative">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted">
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;

              return (
                <li key={`${crumb.label}-${index}`} className="inline-flex items-center gap-1.5">
                  {isLast || !crumb.path ? (
                    <span className="text-teal-700">{crumb.label}</span>
                  ) : (
                    <Link to={crumb.path} className="transition-colors hover:text-teal-600">
                      {crumb.label}
                    </Link>
                  )}
                  {!isLast && <ChevronRight className="h-3.5 w-3.5 text-charcoal-300" aria-hidden="true" />}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
                {eyebrow}
              </span>
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <h1 className="font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">{title}</h1>
          </Reveal>

          {description && (
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-muted">{description}</p>
            </Reveal>
          )}

          {children}
        </div>
      </Container>
    </section>
  );
}
