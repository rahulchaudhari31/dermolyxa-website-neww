import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Icon from '../../ui/Icon';
import Accordion from '../../ui/Accordion';
import Reveal from '../../ui/Reveal';
import DisclaimerNote from '../../ui/DisclaimerNote';
import { faqGroups } from '../../../data/faq';
import { disclaimers } from '../../../data/siteData';

export default function FaqExplorer() {
  const [query, setQuery] = useState('');

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqGroups;

    return faqGroups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  const total = groups.reduce((count, group) => count + group.items.length, 0);

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Support"
          title="Frequently asked questions"
          subtitle="General answers about our institute, clinic, products and policies. For individual concerns, please consult a qualified professional."
        />

        <div className="relative mx-auto mt-10 w-full max-w-md">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search questions…"
            aria-label="Search frequently asked questions"
            className="w-full rounded-xl border border-charcoal-200 bg-white py-3 pl-11 pr-10 text-sm text-charcoal-800 outline-none transition-colors placeholder:text-charcoal-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-muted transition-colors hover:bg-offwhite hover:text-charcoal-700"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-10">
          {total > 0 ? (
            groups.map((group) => (
              <div key={group.id}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-500">
                    <Icon name={group.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl text-charcoal-800">{group.title}</h3>
                </div>
                <Accordion key={`${group.id}-${query}`} items={group.items} allowMultiple />
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-charcoal-200 bg-offwhite px-6 py-16 text-center">
              <p className="font-display text-xl text-charcoal-800">No questions match your search.</p>
              <p className="mt-2 text-sm text-muted">Try a different keyword, or contact us directly.</p>
            </div>
          )}
        </div>

        <Reveal className="mx-auto mt-12 max-w-3xl space-y-2">
          <DisclaimerNote>{disclaimers.regulatory}</DisclaimerNote>
          <DisclaimerNote>{disclaimers.noMedicalLicence}</DisclaimerNote>
        </Reveal>
      </Container>
    </section>
  );
}
