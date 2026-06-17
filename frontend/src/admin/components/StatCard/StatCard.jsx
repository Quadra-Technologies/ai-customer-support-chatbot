const StatCard = ({
  title,
  value,
  color,
}) => {
  return (
    <div
      className="
      bg-white
      p-6
      rounded-2xl
      shadow-sm
      border
      border-gray-100
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      duration-300
      "
    >
      <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">
        {title}
      </h3>

      <h2
        className={`text-4xl font-bold mt-3 ${color}`}
      >
        {value}
      </h2>

      <p className="text-xs text-gray-400 mt-2">
        Updated in real-time
      </p>
    </div>
  );
};

export default StatCard;