import { useState } from 'react';
import { ImageOff } from 'lucide-react';

/**
 * Renders an <img> and swaps to a graceful placeholder if the source is
 * missing or fails to load.
 */
export default function ImageWithFallback({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  loading = 'lazy',
  decoding = 'async',
  ...props
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    if (fallback) return fallback;

    return (
      <div
        className={[
          'flex items-center justify-center bg-offwhite text-teal-200',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        role="img"
        aria-label={alt || 'Image unavailable'}
      >
        <ImageOff className="h-8 w-8" aria-hidden="true" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onError={() => setFailed(true)}
      className={['object-cover', className, imgClassName].filter(Boolean).join(' ')}
      {...props}
    />
  );
}
