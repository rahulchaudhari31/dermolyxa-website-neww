import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60';

const variants = {
  primary: 'bg-teal-500 text-white hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-card-hover',
  gold: 'bg-gold-500 text-charcoal-900 hover:bg-gold-600 hover:-translate-y-0.5 hover:shadow-gold',
  outline: 'border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white hover:-translate-y-0.5',
  ghost: 'text-teal-600 hover:bg-teal-50',
  white: 'bg-white text-teal-600 shadow-card hover:bg-teal-50 hover:-translate-y-0.5',
  dark: 'bg-charcoal-800 text-white hover:bg-charcoal-900 hover:-translate-y-0.5 hover:shadow-card-hover',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#1EBE5A] hover:-translate-y-0.5 hover:shadow-card-hover',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-[0.9375rem]',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  external,
  className = '',
  children,
  ...props
}) {
  const cls = [base, variants[variant], sizes[size], className].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = external ?? /^https?:/i.test(href);
    const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={cls} {...externalProps} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
}
