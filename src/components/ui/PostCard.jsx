import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Badge from './Badge';
import ImageWithFallback from './ImageWithFallback';

export default function PostCard({ post, className = '' }) {
  return (
    <article
      className={[
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Link to={`/blog/${post.slug}`} className="relative block h-48 overflow-hidden" tabIndex={-1} aria-hidden="true">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Badge variant="teal" className="w-fit">
          {post.category}
        </Badge>

        <h3 className="mt-3 font-display text-xl leading-snug text-charcoal-800">
          <Link to={`/blog/${post.slug}`} className="transition-colors hover:text-teal-600">
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>

        <div className="mt-5 flex items-center justify-between border-t border-charcoal-100 pt-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-teal-500" aria-hidden="true" />
            {post.readingTime} min read
          </span>
          <span>{post.dateLabel}</span>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
        >
          Read article
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
