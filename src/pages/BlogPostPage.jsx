import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, ChevronRight, Clock, Info } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Reveal from '../components/ui/Reveal';
import ImageWithFallback from '../components/ui/ImageWithFallback';
import ImageCaption from '../components/ui/ImageCaption';
import ShareButtons from '../components/sections/blog/ShareButtons';
import RelatedPosts from '../components/sections/blog/RelatedPosts';
import { getPostBySlug } from '../data/posts';
import Seo from '../components/seo/Seo';

function ArticleBody({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === 'h2') {
      return (
        <h2 key={index} className="mt-10 font-display text-2xl text-charcoal-800 sm:text-3xl">
          {block.text}
        </h2>
      );
    }

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

    if (block.type === 'quote') {
      return (
        <blockquote
          key={index}
          className="mt-8 rounded-2xl border-l-4 border-teal-400 bg-offwhite px-6 py-5 font-display text-lg italic text-teal-800"
        >
          {block.text}
        </blockquote>
      );
    }

    return (
      <p key={index} className="mt-4 leading-relaxed text-muted">
        {block.text}
      </p>
    );
  });
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <section className="flex min-h-[70vh] items-center bg-white pt-32">
        <Seo title="Article not found" noindex />
        <Container className="text-center">
          <p className="font-display text-6xl text-teal-500">404</p>
          <h1 className="mt-4 font-display text-3xl">Article not found</h1>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
            The article you are looking for doesn&apos;t exist or may have been moved.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/blog" variant="primary">
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        image={post.image}
        type="article"
      />
      <article className="pb-4 pt-28 sm:pt-32">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted">
              <li className="inline-flex items-center gap-1.5">
                <Link to="/" className="transition-colors hover:text-teal-600">
                  Home
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-charcoal-300" aria-hidden="true" />
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Link to="/blog" className="transition-colors hover:text-teal-600">
                  Blog
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-charcoal-300" aria-hidden="true" />
              </li>
              <li>
                <span className="text-teal-700">{post.category}</span>
              </li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="teal">{post.category}</Badge>
                <span className="flex items-center gap-1.5 text-xs text-muted">
                  <Calendar className="h-3.5 w-3.5 text-teal-500" aria-hidden="true" />
                  {post.dateLabel}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted">
                  <Clock className="h-3.5 w-3.5 text-teal-500" aria-hidden="true" />
                  {post.readingTime} min read
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-4 font-display text-3xl leading-tight text-charcoal-900 sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-muted">{post.excerpt}</p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-6 flex items-center gap-3 border-y border-charcoal-100 py-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 font-display text-sm text-teal-600">
                  D
                </span>
                <span className="text-sm text-muted">
                  By <span className="font-medium text-charcoal-700">{post.author}</span>
                </span>
              </div>
            </Reveal>
          </div>
        </Container>

        <Container className="mt-8">
          <Reveal className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-3xl border border-charcoal-100 shadow-card">
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                loading="eager"
                className="h-[280px] w-full sm:h-[420px]"
              />
            </div>
            <ImageCaption className="mt-3" />
          </Reveal>
        </Container>

        <Container className="mt-10">
          <div className="mx-auto max-w-3xl">
            <p className="flex items-start gap-2 rounded-xl border border-teal-100 bg-teal-50 px-4 py-3 text-sm leading-relaxed text-teal-800">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Educational content only. Not medical advice.</span>
            </p>

            <div className="mt-8">
              <ArticleBody blocks={post.body} />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-charcoal-200 bg-white px-3 py-1 text-xs font-medium text-charcoal-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-charcoal-100 pt-6">
              <ShareButtons title={post.title} />
            </div>

            <div className="mt-8">
              <Button to="/blog" variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4" />
                Back to all articles
              </Button>
            </div>
          </div>
        </Container>
      </article>

      <RelatedPosts slug={post.slug} />
    </>
  );
}
