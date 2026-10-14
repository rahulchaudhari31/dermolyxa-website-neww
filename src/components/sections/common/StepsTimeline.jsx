import Reveal from '../../ui/Reveal';
import Icon from '../../ui/Icon';

/**
 * Numbered, connected step timeline. Horizontal on desktop, stacked on mobile.
 * Reused by the admissions process.
 */
export default function StepsTimeline({ steps = [], className = '' }) {
  return (
    <ol className={['relative grid gap-10 md:grid-cols-4 md:gap-6', className].filter(Boolean).join(' ')}>
      <span
        className="pointer-events-none absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-teal-200 via-teal-200 to-charcoal-100 md:block"
        aria-hidden="true"
      />
      {steps.map((step, index) => (
        <Reveal
          as="li"
          key={step.title}
          delay={index * 0.08}
          className="relative flex flex-col items-center text-center md:items-start md:text-left"
        >
          <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-teal-500 font-display text-lg text-white shadow-card">
            {index + 1}
          </span>
          <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
            <Icon name={step.icon} className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-display text-xl text-charcoal-800">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
