import { Clock, Mail, Phone } from 'lucide-react';
import Reveal from '../../ui/Reveal';
import Button from '../../ui/Button';
import { InstagramIcon, WhatsAppIcon } from '../../ui/BrandIcons';
import { contact } from '../../../data/siteData';

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-charcoal-100 bg-white p-5 shadow-card">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-500">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{label}</p>
        <div className="mt-1 text-charcoal-800">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPanel() {
  return (
    <div className="space-y-4">
      <Reveal>
        <InfoRow icon={<Phone className="h-5 w-5" />} label="Call us">
          <div className="flex flex-col gap-1">
            {contact.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:+91${phone}`}
                className="font-medium transition-colors hover:text-teal-600"
              >
                +91 {phone}
              </a>
            ))}
          </div>
        </InfoRow>
      </Reveal>

      <Reveal delay={0.05}>
        <InfoRow icon={<Mail className="h-5 w-5" />} label="Email">
          <a
            href={`mailto:${contact.email}`}
            className="break-all font-medium transition-colors hover:text-teal-600"
          >
            {contact.email}
          </a>
        </InfoRow>
      </Reveal>

      <Reveal delay={0.1}>
        <InfoRow icon={<InstagramIcon className="h-5 w-5" />} label="Instagram">
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors hover:text-teal-600"
          >
            {contact.instagramHandle}
          </a>
        </InfoRow>
      </Reveal>

      <Reveal delay={0.15}>
        <InfoRow icon={<Clock className="h-5 w-5" />} label="Working hours">
          <span className="font-medium text-muted">To be announced</span>
        </InfoRow>
      </Reveal>

      <Reveal delay={0.2}>
        <Button href={contact.whatsapp} variant="whatsapp" className="w-full">
          <WhatsAppIcon className="h-4 w-4" />
          Chat on WhatsApp
        </Button>
      </Reveal>
    </div>
  );
}
