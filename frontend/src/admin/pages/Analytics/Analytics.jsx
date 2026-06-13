import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Analytics = () => {
  const monthlyData = [
    { month: "Jan", leads: 20 },
    { month: "Feb", leads: 35 },
    { month: "Mar", leads: 50 },
    { month: "Apr", leads: 40 },
    { month: "May", leads: 65 },
    { month: "Jun", leads: 80 },
  ];

  const eventData = [
    { name: "Wedding", value: 45 },
    { name: "Birthday", value: 20 },
    { name: "Corporate", value: 25 },
    { name: "Others", value: 10 },
  ];

  const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Leads</h3>
          <p className="text-3xl font-bold text-blue-600">
            250
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Chats</h3>
          <p className="text-3xl font-bold text-green-600">
            540
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Booked Events</h3>
          <p className="text-3xl font-bold text-purple-600">
            82
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Revenue</h3>
          <p className="text-3xl font-bold text-red-600">
            ₹12L
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow h-96">
          <h2 className="text-xl font-semibold mb-4">
            Monthly Leads
          </h2>

          <ResponsiveContainer
            width="100%"
            height="90%"
          >
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="leads"
                fill="#3B82F6"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow h-96">
          <h2 className="text-xl font-semibold mb-4">
            Event Distribution
          </h2>

          <ResponsiveContainer
            width="100%"
            height="90%"
          >
            <PieChart>
              <Pie
                data={eventData}
                dataKey="value"
                outerRadius={120}
                label
              >
                {eventData.map(
                  (entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;