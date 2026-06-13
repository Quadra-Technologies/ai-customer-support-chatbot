const StatCard = ({ title, value, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <h2 className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </h2>
    </div>
  );
};

export default StatCard;