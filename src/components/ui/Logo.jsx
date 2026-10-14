import { Link } from 'react-router-dom';
import { brand } from '../../data/siteData';
import logoImage from '../../assets/logo-dermolyxa.png';

export default function Logo({ className = '', stacked = false, light = false, image = false, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${brand.name} home`}
      className={['inline-flex flex-col leading-none', className].filter(Boolean).join(' ')}
    >
      {image ? (
        <img
          src={logoImage}
          alt={brand.name}
          width="446"
          height="322"
          className="h-12 w-auto object-contain sm:h-14"
        />
      ) : (
        <>
          <span
            className={[
              'font-display text-xl font-semibold tracking-tight sm:text-2xl',
              light ? 'text-white' : 'text-teal-600',
            ].join(' ')}
          >
            DERMOLYXA
            <span className="align-super text-[0.5em] text-gold-500">™</span>
          </span>
          {stacked && (
            <span
              className={[
                'mt-1 text-[0.65em] font-medium uppercase tracking-[0.3em]',
                light ? 'text-white/60' : 'text-charcoal-300',
              ].join(' ')}
            >
              {brand.logoSub}
            </span>
          )}
        </>
      )}
    </Link>
  );
}
