import Badge from './Badge';
import ImageWithFallback from './ImageWithFallback';

function AvatarPlaceholder() {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-50 to-gold-50"
      role="img"
      aria-label="Neutral faculty avatar placeholder"
    >
      <svg viewBox="0 0 120 120" className="h-24 w-24 text-teal-200" fill="currentColor" aria-hidden="true">
        <circle cx="60" cy="44" r="22" />
        <path d="M18 108c0-23 19-42 42-42s42 19 42 42z" />
      </svg>
    </div>
  );
}

/**
 * Reusable faculty profile card. When no confirmed photo is available it shows
 * a neutral avatar, and placeholder cards are clearly marked.
 */
export default function FacultyCard({
  name,
  role,
  focus,
  photo,
  placeholder = false,
  className = '',
}) {
  return (
    <article
      className={[
        'group flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover',
        placeholder ? 'border-dashed border-charcoal-200' : 'border-charcoal-100',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {photo ? (
          <ImageWithFallback
            src={photo}
            alt={name}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <AvatarPlaceholder />
        )}

        {placeholder && (
          <Badge variant="muted" className="absolute left-4 top-4 bg-white/90">
            To Be Announced
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg text-charcoal-800">{name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-700">{role}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{focus}</p>
      </div>
    </article>
  );
}
