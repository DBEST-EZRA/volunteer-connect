import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ExperienceSection from "./Pages/ExperienceSection";
import FootprintSection from "./Pages/FootPrintSection";
import Services from "./Pages/Services";
import SupportServices from "./Pages/SupportServices";
import WhyUs from "./Pages/WhyUs";

function App() {
  return (
    <>
      <Header />
      <ExperienceSection />
      <SupportServices />
      <WhyUs />
      <Services />
      <FootprintSection />
      <Footer />
    </>
  );
}

export default App;
