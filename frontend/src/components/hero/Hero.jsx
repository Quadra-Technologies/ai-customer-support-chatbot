import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import HeroPreview from "./HeroPreview";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <HeroContent />
            <HeroActions />
          </div>

          <HeroPreview />
        </div>
      </div>
    </section>
  );
};

export default Hero;