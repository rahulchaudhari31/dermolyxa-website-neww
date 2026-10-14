import { Home, LifeBuoy } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import Seo from '../components/seo/Seo';

export default function NotFoundPage() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-white pt-28">
      <Seo title="Page not found" noindex />
      <div
        className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-teal-50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-gold-50 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative text-center">
        <Reveal>
          <p className="font-display text-7xl text-teal-500 sm:text-9xl">404</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl">This page wandered off</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
            The page you are looking for doesn&apos;t exist or may have been moved. Let&apos;s get you
            back on track.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/" variant="primary">
              <Home className="h-4 w-4" />
              Back to home
            </Button>
            <Button to="/contact" variant="outline">
              <LifeBuoy className="h-4 w-4" />
              Contact us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
