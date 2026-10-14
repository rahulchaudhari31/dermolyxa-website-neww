import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import { InstagramIcon } from '../ui/BrandIcons';
import { brand, contact, footer, disclaimers } from '../../data/siteData';

const YEAR = new Date().getFullYear();

export default function Footer() {
  const [explore, legal] = footer.columns;

  return (
    <footer className="bg-teal-800 text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Logo light stacked />
          <p className="mt-5 font-display text-lg text-gold-300">{footer.blurb}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{brand.sub}</p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-display text-lg text-white">{explore.title}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {explore.links.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-white/70 transition-colors hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-lg text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {contact.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:+91${phone}`}
                  className="inline-flex items-center gap-2.5 text-white/70 transition-colors hover:text-gold-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-300" />
                  +91 {phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2.5 text-white/70 transition-colors hover:text-gold-300"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold-300" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-white/70 transition-colors hover:text-gold-300"
              >
                <InstagramIcon className="h-4 w-4 shrink-0 text-gold-300" />
                {contact.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-display text-lg text-white">{legal.title}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {legal.links.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-white/70 transition-colors hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Regulatory note bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs leading-relaxed text-white/60">
          <p>
            © {YEAR} {brand.name}. All rights reserved.
          </p>
          {footer.noteDisclaimers.map((key) => (
            <p key={key}>{disclaimers[key]}</p>
          ))}
        </Container>
      </div>
    </footer>
  );
}
