import { Info } from 'lucide-react';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Reveal from '../../ui/Reveal';
import FacultyCard from '../../ui/FacultyCard';
import ImageCaption from '../../ui/ImageCaption';
import { facultyPage } from '../../../data/siteData';

export default function FacultyGrid() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our faculty"
          title="Faculty profiles will be announced soon"
          subtitle="Programs are designed to be delivered by experienced practitioners. Individual profiles will be published once they are confirmed."
        />

        <Reveal delay={0.08} className="mx-auto mt-8 max-w-3xl">
          <p className="flex items-start gap-2 rounded-xl border border-gold-200 bg-gold-50 px-5 py-4 text-sm leading-relaxed text-gold-800">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{facultyPage.notice}</span>
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-2">
          {facultyPage.focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-charcoal-200 bg-white px-4 py-1.5 text-xs font-semibold text-charcoal-700"
            >
              {area}
            </span>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facultyPage.placeholders.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.08} className="h-full">
              <FacultyCard
                placeholder
                name="Faculty Member"
                role={member.role}
                focus="Profile and credentials to be announced once confirmed."
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <ImageCaption />
        </div>
      </Container>
    </section>
  );
}
