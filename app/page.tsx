import AboutUs from '@/components/AboutUs';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Team from '@/components/Team';
import WhereWeAre from '@/components/WhereWeAre';
import Appointments from '@/components/Appointments';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <Header />
      <Banner />
      <section
        id="aboutUs"
        className="snap"
      >
        <AboutUs />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="appointments">
        <Appointments />
      </section>
      <section id="location">
        <WhereWeAre />
      </section>
      <Footer />
    </main>
  );
}
