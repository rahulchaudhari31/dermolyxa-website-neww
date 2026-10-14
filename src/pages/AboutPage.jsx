import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ContentSection from '../components/sections/common/ContentSection';
import FeatureGrid from '../components/sections/common/FeatureGrid';
import DivisionsOverview from '../components/sections/common/DivisionsOverview';
import Philosophy from '../components/sections/common/Philosophy';
import DisclaimersBlock from '../components/sections/common/DisclaimersBlock';
import { about } from '../data/siteData';
import Seo from '../components/seo/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo title={about.title} description={about.description} />
      <PageHero eyebrow={about.eyebrow} title={about.title} description={about.description} />

      <ContentSection
        eyebrow={about.story.eyebrow}
        title={about.story.title}
        image={about.story.image}
        imageAlt="Illustrative professional learning environment"
      >
        {about.story.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ContentSection>

      <section className="section-padding bg-offwhite">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="What guides us"
            title="Mission, vision and values"
            subtitle="The principles that shape how DERMOLYXA™ presents its education, care and products."
          />
          <div className="mt-12">
            <FeatureGrid items={about.missionVisionValues} />
          </div>
        </Container>
      </section>

      <DivisionsOverview
        eyebrow="Our divisions"
        title="Three divisions, one identity"
        subtitle="Each division has a focused role — together they form one responsible DERMOLYXA™ identity."
        background="bg-white"
      />

      <Philosophy />

      <DisclaimersBlock
        items={about.disclaimers}
        eyebrow="Important notices"
        title="Regulatory & content disclaimers"
      />
    </>
  );
}
