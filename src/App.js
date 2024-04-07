import Benefits from "./components/Benefits";
import BenefitSection1 from "./components/BenefitSection1";
import BenefitSection2 from "./components/BenefitSection2";
import BenefitSection3 from "./components/BenefitSection3";
import ContactSales from "./components/ContactSales";
import Features from "./components/Features";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Benefits />
      <BenefitSection1 />
      <BenefitSection2 />
      <BenefitSection3 />
      <Features />
      <FeatureSection />
      <Testimonials />
      <ContactSales />
      <Footer />
    </div>
  );
}

export default App;
