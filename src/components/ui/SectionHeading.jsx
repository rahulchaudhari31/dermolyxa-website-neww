import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  as: Tag = 'h2',
  className = '',
}) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left';

  return (
    <Reveal className={['flex max-w-3xl flex-col gap-4', alignment, className].filter(Boolean).join(' ')}>
      {eyebrow && (
        <span
          className={[
            'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]',
            light ? 'text-gold-300' : 'text-gold-700',
          ].join(' ')}
        >
          <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      {title && (
        <Tag
          className={[
            'font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]',
            light ? 'text-white' : '',
          ].join(' ')}
        >
          {title}
        </Tag>
      )}
      {subtitle && (
        <p className={['text-base leading-relaxed sm:text-lg', light ? 'text-white/75' : 'text-muted'].join(' ')}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
