const FeatureCard = ({
  title,
  description,
}) => {
  return (
    <div
      className="
      bg-white
      shadow-md
      rounded-xl
      p-6
      transition
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;