import Container from '../../ui/Container';
import Reveal from '../../ui/Reveal';
import SectionHeading from '../../ui/SectionHeading';
import ImageWithFallback from '../../ui/ImageWithFallback';
import ImageCaption from '../../ui/ImageCaption';

/**
 * Two-column text + illustrative image block. Reused across inner pages.
 */
export default function ContentSection({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = '',
  reverse = false,
  showCaption = true,
  background = 'bg-white',
  className = '',
  children,
}) {
  const hasMedia = Boolean(image);

  return (
    <section className={['section-padding', background, className].filter(Boolean).join(' ')}>
      <Container>
        <div className={['grid items-center gap-12', hasMedia ? 'lg:grid-cols-2 lg:gap-16' : ''].join(' ')}>
          <div className={reverse ? 'lg:order-2' : ''}>
            <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
            {children && (
              <Reveal delay={0.1} className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                {children}
              </Reveal>
            )}
          </div>

          {hasMedia && (
            <Reveal className={reverse ? 'lg:order-1' : ''}>
              <div className="overflow-hidden rounded-3xl border border-charcoal-100 shadow-card">
                <ImageWithFallback
                  src={image}
                  alt={imageAlt}
                  className="h-[320px] w-full sm:h-[420px]"
                />
              </div>
              {showCaption && <ImageCaption className="mt-3" />}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
