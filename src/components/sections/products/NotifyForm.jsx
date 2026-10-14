import { useState } from 'react';
import { BellRing, Check } from 'lucide-react';
import Container from '../../ui/Container';
import Reveal from '../../ui/Reveal';
import Button from '../../ui/Button';

/**
 * "Notify me" email capture with validation and a success state.
 * No backend is connected; submission is simulated.
 */
export default function NotifyForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = (event) => {
    event.preventDefault();
    const value = email.trim();

    if (!value) {
      setError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 600);
  };

  return (
    <section id="notify" className="section-padding bg-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-gold-50 px-8 py-12 text-center shadow-card sm:px-14">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-100/40 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-teal-100/40 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-xl">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500 text-white">
                <BellRing className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-3xl text-charcoal-800 sm:text-4xl">
                Be the first to know
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Leave your email and we will notify you when the DERMOLYXA PRODUCTS™ range is ready.
                No product prices are shown while the range is in development.
              </p>

              {status === 'success' ? (
                <div
                  role="status"
                  className="mt-7 flex flex-col items-center gap-2 rounded-2xl border border-teal-100 bg-white/80 px-6 py-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-500 text-white">
                    <Check className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="font-display text-xl text-charcoal-800">Thank you</p>
                  <p className="text-sm leading-relaxed text-muted">
                    You are on the list. We will be in touch when the range launches.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="mt-7">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <label className="flex-1">
                      <span className="sr-only">Email address</span>
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          setError('');
                        }}
                        placeholder="you@example.com"
                        autoComplete="email"
                        aria-invalid={Boolean(error)}
                        className={[
                          'w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal-800 outline-none transition-colors placeholder:text-charcoal-300 focus:ring-2',
                          error
                            ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                            : 'border-charcoal-200 focus:border-teal-400 focus:ring-teal-100',
                        ].join(' ')}
                      />
                    </label>
                    <Button type="submit" variant="primary" disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Submitting…' : 'Notify me'}
                    </Button>
                  </div>
                  {error && (
                    <p className="mt-2 text-left text-xs font-medium text-red-500" role="alert">
                      {error}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
