import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ExperienceSection from "./Pages/ExperienceSection";
import FootprintSection from "./Pages/FootPrintSection";
import HeroSection from "./Pages/HeroSection";
import Services from "./Pages/Services";
import SupportServices from "./Pages/SupportServices";
import WhatsAppButton from "./Pages/WhatsappButton";
import WhyUs from "./Pages/WhyUs";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ExperienceSection />
      <SupportServices />
      <WhyUs />
      <Services />
      <WhatsAppButton />
      <FootprintSection />
      <Footer />
    </>
  );
}

export default App;
