import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Container from '../../ui/Container';
import Reveal from '../../ui/Reveal';
import Badge from '../../ui/Badge';
import ImageWithFallback from '../../ui/ImageWithFallback';
import { getFeaturedPost } from '../../../data/posts';

export default function FeaturedPost() {
  const post = getFeaturedPost();

  if (!post) return null;

  return (
    <section className="section-padding bg-white">
      <Container>
        <Reveal>
          <article className="group grid overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-card transition-all duration-300 hover:shadow-card-hover lg:grid-cols-2">
            <Link
              to={`/blog/${post.slug}`}
              className="relative min-h-[260px] overflow-hidden lg:min-h-[420px]"
              tabIndex={-1}
              aria-hidden="true"
            >
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="h-full w-full transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-5 top-5">
                <Badge variant="gold">Featured</Badge>
              </span>
            </Link>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="teal">{post.category}</Badge>
                <span className="flex items-center gap-1.5 text-xs text-muted">
                  <Clock className="h-3.5 w-3.5 text-teal-500" aria-hidden="true" />
                  {post.readingTime} min read
                </span>
                <span className="text-xs text-muted">{post.dateLabel}</span>
              </div>

              <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal-800 sm:text-4xl">
                <Link to={`/blog/${post.slug}`} className="transition-colors hover:text-teal-600">
                  {post.title}
                </Link>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-muted">{post.excerpt}</p>

              <div className="mt-8">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-card-hover"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
