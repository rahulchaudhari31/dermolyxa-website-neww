import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import EnquiryForm from '../components/sections/common/EnquiryForm';
import ContactPanel from '../components/sections/contact/ContactPanel';
import MapPlaceholder from '../components/sections/contact/MapPlaceholder';
import DisclaimersBlock from '../components/sections/common/DisclaimersBlock';
import { disclaimers } from '../data/siteData';
import Seo from '../components/seo/Seo';

const interests = ['Institute', 'Clinic', 'Products', 'Other'];

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Reach the DERMOLYXA team by phone, email, WhatsApp or Instagram for Institute, Clinic and product enquiries."
      />
      <PageHero
        eyebrow="Get in touch"
        title="Contact DERMOLYXA™"
        description="We're happy to help with enquiries about our institute, clinic and upcoming products."
      />

      <section className="section-padding bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Reach us"
                title="Ways to connect"
                subtitle="Call, email, message us on WhatsApp or reach out on Instagram. Working hours are to be announced."
              />
              <div className="mt-8">
                <ContactPanel />
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Enquiry form"
                title="Send us a message"
                subtitle="Share your details and area of interest, and the DERMOLYXA team will follow up."
              />
              <Reveal className="mt-8 rounded-3xl border border-charcoal-100 bg-white p-6 shadow-card sm:p-8">
                <EnquiryForm programLabel="I'm interested in" programOptions={interests} />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-offwhite">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Visit us"
            title="Find us"
            subtitle="Location details will be shared once confirmed."
          />
          <div className="mt-10">
            <MapPlaceholder />
          </div>
        </Container>
      </section>

      <DisclaimersBlock
        items={[disclaimers.educationalOnly, disclaimers.illustrativeImagery]}
        eyebrow="Important notices"
        title="Contact disclaimer"
        background="bg-white"
      />
    </>
  );
}
