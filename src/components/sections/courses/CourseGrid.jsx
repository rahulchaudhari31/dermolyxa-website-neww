import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Clock, Search, X } from 'lucide-react';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import EnquiryForm from '../common/EnquiryForm';
import { courseDuration, courseFilters, courses } from '../../../data/courses';

/**
 * Filterable, searchable grid of proposed programs with a per-course
 * enquiry modal.
 */
export default function CourseGrid() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesFilter = filter === 'All' || course.level === filter;
      const matchesQuery =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.summary.toLowerCase().includes(q) ||
        course.level.toLowerCase().includes(q);

      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  const openEnquiry = (course) => {
    setSelected(course);
    setOpen(true);
  };

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Courses & Programs"
          title="Proposed Programs"
          subtitle="A preview of the programs proposed across skin, hair and aesthetic science. All listings are indicative and subject to finalisation."
        />

        <div className="mt-10 flex flex-col gap-5">
          <div className="relative mx-auto w-full max-w-md">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search programs…"
              aria-label="Search programs"
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

          <div className="flex flex-wrap justify-center gap-2">
            {courseFilters.map((option) => {
              const isActive = filter === option;

              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setFilter(option)}
                  className={[
                    'rounded-full border px-4 py-2 text-sm font-semibold transition-all',
                    isActive
                      ? 'border-teal-500 bg-teal-500 text-white shadow-card'
                      : 'border-charcoal-200 bg-white text-charcoal-700 hover:border-teal-300 hover:text-teal-600',
                  ].join(' ')}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10">
          {filtered.length > 0 ? (
            <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((course, index) => (
                  <motion.article
                    layout
                    key={course.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.2) }}
                    className="group flex h-full flex-col rounded-2xl border border-charcoal-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <Badge variant="gold">Proposed</Badge>
                      <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                        {course.level}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl leading-snug text-charcoal-800">
                      {course.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{course.summary}</p>

                    <p className="mt-4 flex items-center gap-2 text-xs font-medium text-muted">
                      <Clock className="h-4 w-4 text-gold-500" aria-hidden="true" />
                      Duration: {courseDuration}
                    </p>

                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-5 w-full"
                      onClick={() => openEnquiry(course)}
                    >
                      Enquire
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Button>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border border-dashed border-charcoal-200 bg-offwhite px-6 py-16 text-center"
            >
              <p className="font-display text-xl text-charcoal-800">No programs match your search.</p>
              <p className="mt-2 text-sm text-muted">Try a different keyword or filter.</p>
            </motion.div>
          )}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted">
          All programs shown are proposed and subject to finalisation. No accreditation, affiliation or
          pricing is implied by these listings.
        </p>
      </Container>

      <Modal open={open} onClose={() => setOpen(false)} title="Program enquiry">
        {selected && (
          <p className="mb-4 text-sm leading-relaxed text-muted">
            Enquiring about:{' '}
            <span className="font-semibold text-charcoal-800">{selected.title}</span>
          </p>
        )}
        <EnquiryForm variant="compact" presetProgram={selected?.title ?? ''} />
      </Modal>
    </section>
  );
}
