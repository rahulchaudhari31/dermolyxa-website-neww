import { Sparkles } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import ContentSection from '../components/sections/common/ContentSection';
import CategoryCards from '../components/sections/products/CategoryCards';
import DevelopmentRoadmap from '../components/sections/products/DevelopmentRoadmap';
import NotifyForm from '../components/sections/products/NotifyForm';
import DisclaimersBlock from '../components/sections/common/DisclaimersBlock';
import { productsPage } from '../data/siteData';
import Seo from '../components/seo/Seo';

export default function ProductsPage() {
  return (
    <>
      <Seo title={productsPage.title} description={productsPage.description} />
      <PageHero
        eyebrow={productsPage.eyebrow}
        title={productsPage.title}
        description={productsPage.description}
      >
        <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-3">
          <Badge variant="gold">
            <Sparkles className="h-3.5 w-3.5" />
            Coming Soon
          </Badge>
          <Button href="#notify" variant="primary">
            Notify me
          </Button>
        </Reveal>
      </PageHero>

      <ContentSection
        eyebrow={productsPage.intro.eyebrow}
        title={productsPage.intro.title}
        image={productsPage.intro.image}
        imageAlt="Illustrative product development"
        reverse
      >
        {productsPage.intro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ContentSection>

      <CategoryCards />

      <DevelopmentRoadmap />

      <NotifyForm />

      <DisclaimersBlock
        items={productsPage.disclaimers}
        eyebrow="Important notices"
        title="Product disclaimers"
      />
    </>
  );
}
