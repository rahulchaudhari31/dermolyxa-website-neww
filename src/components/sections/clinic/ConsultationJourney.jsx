import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Reveal from '../../ui/Reveal';
import StepsTimeline from '../common/StepsTimeline';
import { clinicPage } from '../../../data/siteData';

export default function ConsultationJourney() {
  return (
    <section className="section-padding bg-offwhite">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title="Your consultation journey"
          subtitle="A clear, responsible pathway from your first enquiry through to follow-up care."
        />

        <div className="mt-14">
          <StepsTimeline steps={clinicPage.journey} />
        </div>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <p className="rounded-xl border border-teal-100 bg-teal-50 px-5 py-4 text-center text-sm leading-relaxed text-teal-800">
            {clinicPage.responsibleNote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
