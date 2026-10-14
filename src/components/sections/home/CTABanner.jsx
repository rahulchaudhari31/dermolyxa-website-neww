import { Phone } from 'lucide-react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import Reveal from '../../ui/Reveal';
import { WhatsAppIcon } from '../../ui/BrandIcons';
import { homeCTA, navCTA, contact, floatingActions } from '../../../data/siteData';

export default function CTABanner() {
  return (
    <section className="pb-20 pt-4">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-gold-50 px-8 py-14 text-center shadow-card sm:px-14">
            <div
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-gold-100/40 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-teal-100/40 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">{homeCTA.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{homeCTA.text}</p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href={`tel:+91${contact.phones[0]}`} external={false} variant="dark">
                  <Phone className="h-4 w-4" />
                  {floatingActions.call.label}
                </Button>
                <Button href={contact.whatsapp} variant="whatsapp">
                  <WhatsAppIcon className="h-4 w-4" />
                  {floatingActions.whatsapp.label}
                </Button>
                <Button to={navCTA.primary.path} variant="primary">
                  {navCTA.primary.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
