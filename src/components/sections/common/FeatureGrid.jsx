import Reveal from '../../ui/Reveal';
import Icon from '../../ui/Icon';
import Card from '../../ui/Card';

const columnClasses = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

/**
 * Responsive grid of icon feature cards. Reused for mission/vision/values,
 * learning approach, and similar blocks.
 */
export default function FeatureGrid({ items = [], columns = 3, className = '' }) {
  const cols = columnClasses[columns] ?? columnClasses[3];

  return (
    <div className={['grid gap-6', cols, className].filter(Boolean).join(' ')}>
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.07} className="h-full">
          <Card className="flex h-full flex-col">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-500">
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-xl text-charcoal-800">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
