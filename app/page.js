import Image from 'next/image'
import Link from 'next/link';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import WhyUs from './components/WhyUs';
import SetUp from './components/Setup';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Bottom from './components/Bottom';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='w-full'>
        <Navigation />
      </div>
      <div className="w-full">
        <Intro />
      </div>
      <div className="w-full">
        <WhyUs />
      </div>
      <div className="w-full">
        <SetUp />
      </div>
      <div className="w-full">
        <Reviews />
      </div>
      <div className="w-full">
        <Pricing />
      </div>
      <div className="w-full">
        <Bottom />
      </div>
    </main>
  );
}

