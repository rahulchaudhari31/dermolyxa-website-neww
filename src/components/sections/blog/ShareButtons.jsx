import { useState } from 'react';
import { Check, Link2, Mail } from 'lucide-react';
import { WhatsAppIcon } from '../../ui/BrandIcons';

/**
 * Share actions for an article: copy link, WhatsApp and email.
 */
export default function ShareButtons({ title, className = '' }) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => (typeof window !== 'undefined' ? window.location.href : '');
  const shareText = `${title} — ${getUrl()}`;

  const copyLink = async () => {
    const url = getUrl();
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const buttonClass =
    'inline-flex items-center gap-2 rounded-full border border-charcoal-200 bg-white px-4 py-2 text-xs font-semibold text-charcoal-700 transition-colors hover:border-teal-300 hover:text-teal-600';

  return (
    <div className={['flex flex-wrap items-center gap-2', className].filter(Boolean).join(' ')}>
      <span className="text-xs font-semibold uppercase tracking-wide text-muted">Share</span>

      <button type="button" onClick={copyLink} className={buttonClass} aria-live="polite">
        {copied ? <Check className="h-3.5 w-3.5 text-teal-500" /> : <Link2 className="h-3.5 w-3.5" />}
        {copied ? 'Copied' : 'Copy link'}
      </button>

      <a
        href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
      >
        <WhatsAppIcon className="h-3.5 w-3.5" />
        WhatsApp
      </a>

      <a
        href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(getUrl())}`}
        className={buttonClass}
      >
        <Mail className="h-3.5 w-3.5" />
        Email
      </a>
    </div>
  );
}
