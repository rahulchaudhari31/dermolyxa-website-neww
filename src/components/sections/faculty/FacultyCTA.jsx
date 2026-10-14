import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Reveal from '../../ui/Reveal';
import EnquiryForm from '../common/EnquiryForm';
import { facultyPage } from '../../../data/siteData';

export default function FacultyCTA() {
  return (
    <section className="section-padding bg-offwhite">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow={facultyPage.cta.eyebrow}
            title={facultyPage.cta.title}
            subtitle={facultyPage.cta.text}
          />

          <Reveal className="rounded-3xl border border-charcoal-100 bg-white p-6 shadow-card sm:p-8">
            <EnquiryForm
              variant="full"
              programLabel="Collaboration type"
              programOptions={facultyPage.collaborationTypes}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
