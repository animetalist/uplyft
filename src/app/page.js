import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import Steps from '@/components/Steps';
import Features from '@/components/Features';
import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <Advantages />
      <Steps />
      <Features />
      <Reviews />
      <Cta />
    </main>
  );
}
