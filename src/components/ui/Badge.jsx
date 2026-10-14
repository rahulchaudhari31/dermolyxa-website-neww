const variants = {
  teal: 'border-teal-100 bg-teal-50 text-teal-700',
  gold: 'border-gold-200 bg-gold-50 text-gold-700',
  outline: 'border-charcoal-200 bg-transparent text-charcoal-700',
  muted: 'border-charcoal-100 bg-offwhite text-muted',
  dark: 'border-teal-600 bg-teal-600 text-white',
};

const sizes = {
  sm: 'px-2.5 py-0.5 text-[0.68rem]',
  md: 'px-3 py-1 text-xs',
};

export default function Badge({ variant = 'teal', size = 'md', className = '', children, ...props }) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 rounded-full border font-semibold uppercase tracking-wide',
        variants[variant],
        sizes[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </span>
  );
}
