import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import HeroPreview from "./HeroPreview";

const Hero = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <HeroContent />
            <HeroActions />
          </div>

          <div>
            <HeroPreview />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;