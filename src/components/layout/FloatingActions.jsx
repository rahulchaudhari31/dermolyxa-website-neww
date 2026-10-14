import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Send } from 'lucide-react';
import { WhatsAppIcon } from '../ui/BrandIcons';
import { contact, floatingActions } from '../../data/siteData';

const callHref = `tel:+91${contact.phones[0]}`;

export default function FloatingActions() {
  return (
    <>
      {/* Desktop: floating WhatsApp button */}
      <motion.a
        href={floatingActions.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DERMOLYXA on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card-hover lg:flex"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </motion.a>

      {/* Mobile: fixed bottom action bar */}
      <nav
        aria-label="Quick actions"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-charcoal-100 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(15,92,99,0.08)] backdrop-blur lg:hidden"
      >
        <a
          href={callHref}
          className="flex flex-col items-center gap-1 py-3 text-[0.68rem] font-semibold uppercase tracking-wide text-teal-700 transition-colors hover:bg-teal-50"
        >
          <Phone className="h-5 w-5" />
          {floatingActions.call.label}
        </a>

        <a
          href={floatingActions.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 border-x border-charcoal-100 py-3 text-[0.68rem] font-semibold uppercase tracking-wide text-[#128C7E] transition-colors hover:bg-teal-50/60"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {floatingActions.whatsapp.label}
        </a>

        <Link
          to={floatingActions.enquire.path}
          className="flex flex-col items-center gap-1 bg-teal-500 py-3 text-[0.68rem] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-teal-600"
        >
          <Send className="h-5 w-5" />
          {floatingActions.enquire.label}
        </Link>
      </nav>
    </>
  );
}
