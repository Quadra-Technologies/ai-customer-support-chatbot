import Hero from "../../components/hero/Hero";
import ProductOverview from "../../components/features/ProductOverview";
import FeaturesSection from "../../components/features/FeaturesSection";
import ContactSection from "../../components/contact/ContactSection";

function Home() {
  return (
    <>
      <Hero />

      <ProductOverview />

      <FeaturesSection />

      <ContactSection />
    </>
  );
}

export default Home;