import PageHero from '../components/ui/PageHero';
import ContentSection from '../components/sections/common/ContentSection';
import ServiceExplorer from '../components/sections/clinic/ServiceExplorer';
import ConsultationJourney from '../components/sections/clinic/ConsultationJourney';
import DisclaimersBlock from '../components/sections/common/DisclaimersBlock';
import { clinicPage } from '../data/siteData';
import Seo from '../components/seo/Seo';

export default function ClinicPage() {
  return (
    <>
      <Seo title={clinicPage.title} description={clinicPage.description} />
      <PageHero
        eyebrow={clinicPage.eyebrow}
        title={clinicPage.title}
        description={clinicPage.description}
      />

      <ContentSection
        eyebrow={clinicPage.intro.eyebrow}
        title={clinicPage.intro.title}
        image={clinicPage.intro.image}
        imageAlt="Illustrative clinical environment"
      >
        {clinicPage.intro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ContentSection>

      <ServiceExplorer />

      <ConsultationJourney />

      <DisclaimersBlock
        items={clinicPage.disclaimers}
        eyebrow="Important notices"
        title="Clinical disclaimers"
        background="bg-white"
      />
    </>
  );
}
