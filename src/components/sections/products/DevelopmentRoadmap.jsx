import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Badge from '../../ui/Badge';
import { productsPage } from '../../../data/siteData';

const revealViewport = { once: true, margin: '-80px' };

export default function DevelopmentRoadmap() {
  return (
    <section className="section-padding bg-offwhite">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Roadmap"
          title="From research to launch"
          subtitle="A planned, staged path for developing the DERMOLYXA PRODUCTS™ range. All stages are planned and indicative."
        />

        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-0.5 bg-charcoal-100 md:block"
            aria-hidden="true"
          >
            <motion.span
              className="block h-full origin-left bg-gradient-to-r from-teal-500 to-gold-400"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={revealViewport}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            />
          </div>

          {productsPage.roadmap.map((item, index) => (
            <motion.li
              key={item.title}
              className="relative flex flex-col items-center text-center md:items-start md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-teal-500 font-display text-lg text-white shadow-card">
                {index + 1}
              </span>
              <Badge variant="muted" className="mt-4">
                Planned
              </Badge>
              <h3 className="mt-2 font-display text-xl text-charcoal-800">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
