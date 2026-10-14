import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import { WhatsAppIcon } from '../ui/BrandIcons';
import { navLinks, navCTA, contact } from '../../data/siteData';
import useScrolled from '../../hooks/useScrolled';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import useFocusTrap from '../../hooks/useFocusTrap';

function navItemClass(active) {
  return [
    'relative inline-flex items-center gap-1 py-1 text-sm font-medium transition-colors',
    'after:pointer-events-none after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-gold-500 after:transition-transform after:duration-300',
    active
      ? 'text-teal-700 after:scale-x-100'
      : 'text-charcoal-700 after:scale-x-0 hover:text-teal-700 hover:after:scale-x-100',
  ].join(' ');
}

export default function Navbar() {
  const scrolled = useScrolled();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useLockBodyScroll(open);
  const drawerRef = useFocusTrap(open);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled ? 'border-b border-charcoal-100 bg-white/90 shadow-card backdrop-blur-md' : 'bg-white/70 backdrop-blur',
      ].join(' ')}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo image onClick={close} />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            if (link.children) {
              const parentActive =
                pathname === link.path || link.children.some((child) => child.path === pathname);

              return (
                <div key={link.label} className="group relative">
                  <NavLink to={link.path} className={navItemClass(parentActive)} aria-haspopup="true">
                    {link.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </NavLink>

                  <div className="invisible absolute left-1/2 top-full z-10 w-60 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-charcoal-100 bg-white p-2 shadow-card-hover">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={({ isActive }) =>
                            [
                              'block rounded-xl px-4 py-2 text-sm transition-colors',
                              isActive
                                ? 'bg-teal-50 font-semibold text-teal-600'
                                : 'text-charcoal-700 hover:bg-offwhite hover:text-teal-600',
                            ].join(' ')
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => navItemClass(isActive)}
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button href={navCTA.whatsapp.url} variant="outline" size="sm">
            <WhatsAppIcon className="h-4 w-4" />
            {navCTA.whatsapp.label}
          </Button>
          <Button to={navCTA.primary.path} variant="primary" size="sm">
            {navCTA.primary.label}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-charcoal-100 text-charcoal-700 transition-colors hover:bg-offwhite lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Container>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
              className="fixed inset-0 z-40 bg-charcoal-900/50 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            <motion.aside
              ref={drawerRef}
              key="drawer-panel"
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              tabIndex={-1}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-white shadow-card-hover focus:outline-none lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-charcoal-100 px-6 py-4">
                <Logo image onClick={close} />
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-charcoal-100 text-charcoal-700 transition-colors hover:bg-offwhite"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <NavLink
                        to={link.path}
                        end={link.path === '/'}
                        onClick={close}
                        className={({ isActive }) =>
                          [
                            'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                            isActive ? 'bg-teal-50 text-teal-700' : 'text-charcoal-700 hover:bg-offwhite',
                          ].join(' ')
                        }
                      >
                        {link.label}
                      </NavLink>

                      {link.children && (
                        <ul className="ml-4 mt-1 flex flex-col gap-0.5 border-l border-charcoal-100 pl-2">
                          {link.children.map((child) => (
                            <li key={child.path}>
                              <NavLink
                                to={child.path}
                                onClick={close}
                                className={({ isActive }) =>
                                  [
                                    'block rounded-lg px-4 py-2 text-sm transition-colors',
                                    isActive
                                      ? 'font-semibold text-teal-600'
                                      : 'text-muted hover:text-teal-600',
                                  ].join(' ')
                                }
                              >
                                {child.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-3 border-t border-charcoal-100 px-6 py-5">
                <Button href={navCTA.whatsapp.url} variant="outline" className="w-full">
                  <WhatsAppIcon className="h-4 w-4" />
                  {navCTA.whatsapp.label}
                </Button>
                <Button to={navCTA.primary.path} variant="primary" className="w-full" onClick={close}>
                  {navCTA.primary.label}
                </Button>
                <a
                  href={`tel:+91${contact.phones[0]}`}
                  className="flex items-center justify-center gap-2 text-sm font-medium text-muted transition-colors hover:text-teal-600"
                >
                  <Phone className="h-4 w-4" />
                  +91 {contact.phones[0]}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
