import AboutUs from '@/components/AboutUs';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <section>
        <AboutUs />
      </section>
    </main>
  );
}
