import StatCard from "../../components/StatCard/StatCard";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Leads",
      value: 24,
      color: "text-blue-600",
    },
    {
      title: "New Leads Today",
      value: 8,
      color: "text-green-600",
    },
    {
      title: "Active Chats",
      value: 15,
      color: "text-purple-600",
    },
    {
      title: "Booked Events",
      value: 6,
      color: "text-orange-600",
    },
    {
      title: "Conversion Rate",
      value: "25%",
      color: "text-red-600",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Welcome to AI Event Planner CRM Dashboard
        </p>
      </div>

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3">
            <li className="border-b pb-2">
              🎉 New Wedding lead received
            </li>

            <li className="border-b pb-2">
              📞 Customer contacted for Birthday Event
            </li>

            <li className="border-b pb-2">
              ✅ Corporate Event booked
            </li>

            <li className="border-b pb-2">
              💬 5 new chatbot conversations today
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Quick Insights
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Most Popular Event</span>
              <span className="font-bold">
                Wedding
              </span>
            </div>

            <div className="flex justify-between">
              <span>Average Budget</span>
              <span className="font-bold">
                ₹3,50,000
              </span>
            </div>

            <div className="flex justify-between">
              <span>Lead Source</span>
              <span className="font-bold">
                AI Chatbot
              </span>
            </div>

            <div className="flex justify-between">
              <span>Top Conversion</span>
              <span className="font-bold">
                Corporate Events
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;