import AboutUs from '@/components/AboutUs';
import Banner from '@/components/banner /Banner';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Team from '@/components/TeamSection/Team';
import WhereWeAre from '@/components/WhereWeAre';
import Appointments from '@/components/appointmentsSection/Appointments';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const DynamicServices = dynamic(() => import('../components/Services'), {
  loading: () => <p>Loading...</p>,
});
const DynamicTeam = dynamic(() => import('../components/TeamSection/Team'), {
  loading: () => <p>Loading...</p>,
});
const DynamicAppointments = dynamic(
  () => import('../components/appointmentsSection/Appointments'),
  {
    loading: () => <p>Loading...</p>,
  },
);
const DynamicWhereWeAre = dynamic(() => import('../components/WhereWeAre'), {
  loading: () => <p>Loading...</p>,
});
const DynamicFooter = dynamic(() => import('../components/Footer'), {
  loading: () => <p>Loading...</p>,
});
export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <section id="aboutUs">
        <AboutUs />
      </section>
      <section id="services">
        <DynamicServices />
      </section>
      <section id="team">
        <DynamicTeam />
      </section>
      <section id="appointments">
        <DynamicAppointments />
      </section>
      <section id="location">
        <DynamicWhereWeAre />
      </section>
      <DynamicFooter />
    </main>
  );
}
