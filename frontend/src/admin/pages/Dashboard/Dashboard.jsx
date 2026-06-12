import StatCard from "../../components/StatCard/StatCard";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "120",
      color: "text-blue-600",
    },
    {
      title: "Total Chats",
      value: "450",
      color: "text-green-600",
    },
    {
      title: "Total Leads",
      value: "75",
      color: "text-purple-600",
    },
    {
      title: "Active Users",
      value: "42",
      color: "text-orange-600",
    },
    {
      title: "Revenue",
      value: "₹25,000",
      color: "text-red-600",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            color={stat.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;