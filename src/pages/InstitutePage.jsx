import { Check } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import ContentSection from '../components/sections/common/ContentSection';
import FeatureGrid from '../components/sections/common/FeatureGrid';
import ProgramLevels from '../components/sections/institute/ProgramLevels';
import DisclaimersBlock from '../components/sections/common/DisclaimersBlock';
import { institute } from '../data/siteData';
import Seo from '../components/seo/Seo';

export default function InstitutePage() {
  return (
    <>
      <Seo title={institute.title} description={institute.description} />
      <PageHero
        eyebrow={institute.eyebrow}
        title={institute.title}
        description={institute.description}
      />

      <ContentSection
        eyebrow={institute.intro.eyebrow}
        title={institute.intro.title}
        image={institute.intro.image}
        imageAlt="Illustrative learning environment"
        reverse
      >
        {institute.intro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ContentSection>

      <ProgramLevels />

      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="How learning is designed"
            title="A practical, level-based approach"
            subtitle="Every program level is built around the same principles of clarity, responsibility and applied skill."
          />
          <div className="mt-12">
            <FeatureGrid items={institute.learningApproach} columns={4} />
          </div>
        </Container>
      </section>

      <section className="section-padding bg-offwhite">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <SectionHeading
              eyebrow="Who it is for"
              title="Built for learners at different stages"
              subtitle="Whether you are beginning your journey or deepening an established practice, the level pathway is designed to meet you where you are."
            />

            <div>
              <ul className="grid gap-4">
                {institute.whoItsFor.map((item, index) => (
                  <Reveal
                    as="li"
                    key={item}
                    delay={index * 0.07}
                    className="flex items-start gap-3 rounded-2xl border border-charcoal-100 bg-white p-5 shadow-card"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-500">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-charcoal-700">{item}</span>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.1} className="mt-8">
                <Button to="/courses" variant="primary">
                  View Courses &amp; Programs
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <DisclaimersBlock
        items={institute.disclaimers}
        eyebrow="Important notices"
        title="Education disclaimers"
        background="bg-white"
      />
    </>
  );
}
