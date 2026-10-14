import PageHero from '../components/ui/PageHero';
import FeaturedPost from '../components/sections/blog/FeaturedPost';
import BlogExplorer from '../components/sections/blog/BlogExplorer';
import DisclaimersBlock from '../components/sections/common/DisclaimersBlock';
import { disclaimers } from '../data/siteData';
import Seo from '../components/seo/Seo';

export default function BlogPage() {
  return (
    <>
      <Seo
        title="Blog"
        description="Educational insights on skin, hair and aesthetic science from the DERMOLYXA team."
      />
      <PageHero
        eyebrow="Insights"
        title="Blog"
        description="Educational insights on skin, hair and aesthetic science from the DERMOLYXA team."
      />

      <FeaturedPost />

      <BlogExplorer />

      <DisclaimersBlock
        items={[disclaimers.educationalOnly, disclaimers.illustrativeImagery]}
        eyebrow="Important notices"
        title="Content disclaimer"
        background="bg-white"
      />
    </>
  );
}
