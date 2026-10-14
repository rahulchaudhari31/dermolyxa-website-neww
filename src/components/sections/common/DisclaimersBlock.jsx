import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Reveal from '../../ui/Reveal';
import { DisclaimerList } from '../../ui/DisclaimerNote';

/**
 * Centered block of regulatory / content disclaimers used to close a page.
 */
export default function DisclaimersBlock({
  items = [],
  eyebrow = 'Important notices',
  title = 'Disclaimers',
  background = 'bg-offwhite',
  className = '',
}) {
  if (!items.length) return null;

  return (
    <section className={['section-padding', background, className].filter(Boolean).join(' ')}>
      <Container>
        <SectionHeading align="center" eyebrow={eyebrow} title={title} />
        <Reveal delay={0.08} className="mx-auto mt-8 max-w-3xl">
          <DisclaimerList items={items} />
        </Reveal>
      </Container>
    </section>
  );
}
