import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      title: "AI Chat Support",
      description:
        "Provide instant responses using AI-powered conversations.",
    },

    {
      title: "Lead Generation",
      description:
        "Capture potential customer information automatically.",
    },

    {
      title: "Analytics Dashboard",
      description:
        "Track leads, chats, and business performance.",
    },

    {
      title: "Business Automation",
      description:
        "Reduce manual work through AI-driven workflows.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
        
        <h2 className="text-3xl md:text-4xl font-bold">
          Key Features
        </h2>
            
          <p className="mt-4 text-gray-600">
            Everything you need to automate support
            and generate leads.
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