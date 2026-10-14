import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import StepsTimeline from '../components/sections/common/StepsTimeline';
import EnquiryForm from '../components/sections/common/EnquiryForm';
import DisclaimersBlock from '../components/sections/common/DisclaimersBlock';
import { admissions } from '../data/siteData';
import Seo from '../components/seo/Seo';

export default function AdmissionsPage() {
  return (
    <>
      <Seo title={admissions.title} description={admissions.description} />
      <PageHero
        eyebrow={admissions.eyebrow}
        title={admissions.title}
        description={admissions.description}
      />

      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="Four simple steps to enrolment"
            subtitle="From your first enquiry to enrolment, the admissions pathway is designed to be clear and straightforward."
          />

          <div className="mt-14">
            <StepsTimeline steps={admissions.steps} />
          </div>

          <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl">
            <p className="rounded-xl border border-gold-200 bg-gold-50 px-5 py-4 text-center text-sm leading-relaxed text-gold-800">
              {admissions.eligibilityNote}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section-padding bg-offwhite">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHeading
              eyebrow="Enquiry form"
              title="Start your enquiry"
              subtitle="Share your details and the program you are interested in. This form records your enquiry so the DERMOLYXA team can follow up."
            />

            <Reveal className="rounded-3xl border border-charcoal-100 bg-white p-6 shadow-card sm:p-8">
              <EnquiryForm variant="full" />
            </Reveal>
          </div>
        </Container>
      </section>

      <DisclaimersBlock
        items={admissions.disclaimers}
        eyebrow="Important notices"
        title="Admissions disclaimers"
        background="bg-white"
      />
    </>
  );
}
