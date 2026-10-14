import { useEffect, useMemo, useState } from 'react';
import { Info, List } from 'lucide-react';
import PageHero from '../../ui/PageHero';
import Container from '../../ui/Container';
import Reveal from '../../ui/Reveal';
import Seo from '../../seo/Seo';

const DEFAULT_REVIEW_NOTE =
  'This is general template wording provided for structure and clarity. It should be reviewed and finalised by a qualified legal professional before launch.';

function Blocks({ blocks = [] }) {
  return blocks.map((block, index) => {
    if (block.type === 'ul') {
      return (
        <ul key={index} className="mt-4 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2 leading-relaxed text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={index} className="mt-4 leading-relaxed text-muted">
        {block.text}
      </p>
    );
  });
}

export default function LegalPage({
  eyebrow = 'Legal',
  title,
  description,
  lastUpdated,
  sections = [],
  reviewNote = DEFAULT_REVIEW_NOTE,
}) {
  const ids = useMemo(() => sections.map((section) => section.id), [sections]);
  const idsKey = ids.join('|');
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const idList = idsKey ? idsKey.split('|') : [];
    const elements = idList.map((id) => document.getElementById(id)).filter(Boolean);

    if (!elements.length || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-130px 0px -65% 0px', threshold: [0, 1] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [idsKey]);

  return (
    <>
      <Seo title={title} description={description} />
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="section-padding bg-white">
        <Container>
          <Reveal className="mb-10">
            <p className="flex items-start gap-2 rounded-xl border border-gold-200 bg-gold-50 px-5 py-4 text-sm leading-relaxed text-gold-800">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{reviewNote}</span>
            </p>
          </Reveal>

          <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
            <aside className="hidden lg:block">
              <nav className="sticky top-28" aria-label="On this page">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  <List className="h-4 w-4 text-teal-500" aria-hidden="true" />
                  On this page
                </p>
                <ul className="mt-4 border-l border-charcoal-100">
                  {sections.map((section) => {
                    const isActive = section.id === activeId;

                    return (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          aria-current={isActive ? 'true' : undefined}
                          className={[
                            'block border-l-2 py-1.5 pl-4 text-sm transition-colors',
                            isActive
                              ? 'border-teal-500 font-medium text-teal-600'
                              : 'border-transparent text-muted hover:border-teal-300 hover:text-teal-600',
                          ].join(' ')}
                        >
                          {section.heading}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            <div className="mt-10 lg:mt-0">
              {lastUpdated && (
                <p className="text-xs font-medium uppercase tracking-wide text-muted">{lastUpdated}</p>
              )}

              <div className="mt-6 space-y-10">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className="font-display text-2xl text-charcoal-800">{section.heading}</h2>
                    <Blocks blocks={section.blocks} />
                  </section>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
