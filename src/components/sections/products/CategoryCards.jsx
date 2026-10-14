import { Sparkles } from 'lucide-react';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Reveal from '../../ui/Reveal';
import Icon from '../../ui/Icon';
import Badge from '../../ui/Badge';
import ImageWithFallback from '../../ui/ImageWithFallback';
import { productsPage } from '../../../data/siteData';

export default function CategoryCards() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Product range"
          title="Two categories in development"
          subtitle="The DERMOLYXA PRODUCTS™ range is being developed across skin and hair solutions."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {productsPage.categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className="relative h-52 overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/45 to-transparent" aria-hidden="true" />
                  <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-teal-600 backdrop-blur">
                    <Icon name={category.icon} className="h-5 w-5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <Badge variant="gold" className="mb-3 w-fit">
                    <Sparkles className="h-3.5 w-3.5" />
                    {category.status}
                  </Badge>
                  <h3 className="font-display text-2xl text-charcoal-800">{category.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{category.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
