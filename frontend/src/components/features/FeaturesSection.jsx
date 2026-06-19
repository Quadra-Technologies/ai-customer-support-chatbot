import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      title: "Wedding Planning",
      description:
        "Complete wedding management from venue booking to decoration.",
    },

    {
      title: "Birthday Events",
      description:
        "Creative birthday celebrations for children and adults.",
    },

    {
      title: "Corporate Events",
      description:
        "Professional conferences, meetings and business events.",
    },

    {
      title: "Catering & Decoration",
      description:
        "Food, decoration and entertainment arrangements for every event.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Event Services
          </h2>

          <p className="mt-4 text-gray-600">
            Everything you need to plan and manage
            unforgettable events.
          </p>
        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;