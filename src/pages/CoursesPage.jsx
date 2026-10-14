import PageHero from '../components/ui/PageHero';
import CourseGrid from '../components/sections/courses/CourseGrid';
import DisclaimersBlock from '../components/sections/common/DisclaimersBlock';
import { disclaimers } from '../data/siteData';
import Seo from '../components/seo/Seo';

export default function CoursesPage() {
  return (
    <>
      <Seo
        title="Courses & Programs"
        description="Structured, skill-based education across certificate courses, diploma programs, advanced programs, professional fellowships and hands-on workshops."
      />
      <PageHero
        eyebrow="Institute"
        title="Courses & Programs"
        description="Structured, skill-based education across certificate courses, diploma programs, advanced programs, professional fellowships and hands-on workshops."
      />

      <CourseGrid />

      <DisclaimersBlock
        items={[disclaimers.regulatory, disclaimers.noMedicalLicence]}
        eyebrow="Important notices"
        title="Program disclaimers"
      />
    </>
  );
}
