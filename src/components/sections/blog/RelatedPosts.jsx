import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Reveal from '../../ui/Reveal';
import PostCard from '../../ui/PostCard';
import { getRelatedPosts } from '../../../data/posts';

export default function RelatedPosts({ slug }) {
  const related = getRelatedPosts(slug, 3);

  if (!related.length) return null;

  return (
    <section className="section-padding bg-offwhite">
      <Container>
        <SectionHeading
          eyebrow="Keep reading"
          title="Related articles"
          subtitle="More general, educational reading on skin, hair and aesthetic science."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08} className="h-full">
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
