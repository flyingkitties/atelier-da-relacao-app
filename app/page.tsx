import AboutUs from '@/components/AboutUs';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <section>
        <AboutUs />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Team />
      </section>
    </main>
  );
}
