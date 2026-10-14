import PageHero from '../components/ui/PageHero';
import FaqExplorer from '../components/sections/faq/FaqExplorer';
import DisclaimersBlock from '../components/sections/common/DisclaimersBlock';
import { disclaimers } from '../data/siteData';
import Seo from '../components/seo/Seo';

export default function FAQPage() {
  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Answers to common questions about DERMOLYXA's divisions, programs, services and products."
      />
      <PageHero
        eyebrow="Support"
        title="Frequently Asked Questions"
        description="Answers to common questions about DERMOLYXA's divisions, programs and services."
      />

      <FaqExplorer />

      <DisclaimersBlock
        items={[disclaimers.educationalOnly, disclaimers.illustrativeImagery]}
        eyebrow="Important notices"
        title="Content disclaimer"
      />
    </>
  );
}
