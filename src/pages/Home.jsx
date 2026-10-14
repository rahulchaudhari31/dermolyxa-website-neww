import Hero from '../components/sections/home/Hero';
import MarqueeStrip from '../components/sections/home/MarqueeStrip';
import ScienceExplorer from '../components/sections/home/ScienceExplorer';
import Divisions from '../components/sections/common/DivisionsOverview';
import Philosophy from '../components/sections/common/Philosophy';
import CTABanner from '../components/sections/home/CTABanner';
import Seo from '../components/seo/Seo';

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <MarqueeStrip />
      <ScienceExplorer />
      <Divisions />
      <Philosophy />
      <CTABanner />
    </>
  );
}
