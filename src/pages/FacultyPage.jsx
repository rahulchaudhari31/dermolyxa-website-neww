import PageHero from '../components/ui/PageHero';
import FacultyGrid from '../components/sections/faculty/FacultyGrid';
import FacultyCTA from '../components/sections/faculty/FacultyCTA';
import DisclaimersBlock from '../components/sections/common/DisclaimersBlock';
import { facultyPage } from '../data/siteData';
import Seo from '../components/seo/Seo';

export default function FacultyPage() {
  return (
    <>
      <Seo title={facultyPage.title} description={facultyPage.description} />
      <PageHero
        eyebrow={facultyPage.eyebrow}
        title={facultyPage.title}
        description={facultyPage.description}
      />

      <FacultyGrid />

      <FacultyCTA />

      <DisclaimersBlock
        items={facultyPage.disclaimers}
        eyebrow="Important notices"
        title="Faculty disclaimers"
        background="bg-white"
      />
    </>
  );
}
