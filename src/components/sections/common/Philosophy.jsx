import Container from '../../ui/Container';
import Reveal from '../../ui/Reveal';
import CountUp from '../../ui/CountUp';
import DisclaimerNote from '../../ui/DisclaimerNote';
import { brand, stats, disclaimers } from '../../../data/siteData';

/**
 * Brand philosophy statement with headline stats and regulatory notes.
 * Reused on Home and About.
 */
export default function Philosophy() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-teal-800 px-8 py-14 sm:px-14 sm:py-20">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
                <span className="h-px w-8 bg-gold-400" aria-hidden="true" />
                Our philosophy
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 font-display text-3xl leading-snug text-white sm:text-4xl lg:text-5xl">
                {brand.philosophy}
              </p>
            </Reveal>
          </div>

          <div className="relative mt-14 grid gap-10 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.1} className="text-center">
                <p className="font-display text-5xl text-gold-300">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.15em] text-white/70">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
          <DisclaimerNote>{disclaimers.regulatory}</DisclaimerNote>
          <DisclaimerNote>{disclaimers.noMedicalLicence}</DisclaimerNote>
        </div>
      </Container>
    </section>
  );
}
