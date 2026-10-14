import Logo from './Logo';

/**
 * Branded fallback shown while a lazily-loaded route chunk is fetched.
 */
export default function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-white px-6"
    >
      <Logo stacked />

      <span className="block h-1.5 w-36 overflow-hidden rounded-full bg-teal-50" aria-hidden="true">
        <span className="block h-full w-1/2 animate-loader rounded-full bg-gradient-to-r from-teal-500 to-gold-500" />
      </span>

      <span className="sr-only">Loading page…</span>
    </div>
  );
}
