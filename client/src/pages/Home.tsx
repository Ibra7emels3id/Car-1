import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Offers from '@/components/Offers';
import Team from '@/components/Team';
import MapSection from '@/components/MapSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Offers />
      <Team />
      <MapSection />
      <Contact />
      <Footer />
    </div>
  );
}
