import Navbar from './components/Navbar';
import CommissionCTA from './components/CommissionCTA';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import CommissionsSection from './sections/CommissionsSection';
import GallerySection from './sections/GallerySection';
import ProcessSection from './sections/ProcessSection';
import TOSSection from './sections/TOSSection';
import FAQSection from './sections/FAQSection';
import AboutSection from './sections/AboutSection';
import CommissionRequestSection from './sections/CommissionRequestSection';

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-cream-100 custom-scrollbar">
      <Navbar />

      <main>
        <HeroSection />
        <CommissionsSection />
        <GallerySection />
        <ProcessSection />
        <TOSSection />
        <FAQSection />
        <AboutSection />
        <CommissionRequestSection />
      </main>

      <Footer />
      <CommissionCTA />
    </div>
  );
}
