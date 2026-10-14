import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import PostCard from '../../ui/PostCard';
import { blogCategories, posts } from '../../../data/posts';

// The featured post is showcased separately, so exclude it from the grid.
const gridPosts = posts.filter((post) => !post.featured);

export default function BlogExplorer() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return gridPosts.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section className="section-padding bg-offwhite">
      <Container>
        <SectionHeading
          eyebrow="All articles"
          title="Educational insights"
          subtitle="General, educational articles on skin, hair and aesthetic science. Content is for learning only and is not medical advice."
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
              placeholder="Search articles…"
              aria-label="Search articles"
              className="w-full rounded-xl border border-charcoal-200 bg-white py-3 pl-11 pr-10 text-sm text-charcoal-800 outline-none transition-colors placeholder:text-charcoal-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-muted transition-colors hover:bg-white hover:text-charcoal-700"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {blogCategories.map((option) => {
              const isActive = category === option;

              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setCategory(option)}
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
                {filtered.map((post, index) => (
                  <motion.div
                    layout
                    key={post.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.2) }}
                    className="h-full"
                  >
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border border-dashed border-charcoal-200 bg-white px-6 py-16 text-center"
            >
              <p className="font-display text-xl text-charcoal-800">No articles match your search.</p>
              <p className="mt-2 text-sm text-muted">Try a different keyword or category.</p>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
