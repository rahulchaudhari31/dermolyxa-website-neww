export default function Card({ as: Tag = 'div', hover = true, padded = true, className = '', children, ...props }) {
  return (
    <Tag
      className={[
        'rounded-2xl border border-charcoal-100 bg-white shadow-card',
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover' : '',
        padded ? 'p-6 sm:p-8' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Tag>
  );
}
