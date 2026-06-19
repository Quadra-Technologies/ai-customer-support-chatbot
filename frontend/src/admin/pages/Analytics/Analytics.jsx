import { useEffect, useState } from "react";
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

import Loader from "../../components/Loader/Loader";
import { getAnalytics } from "../../../services/analyticsApi";

const Analytics = () => {
  const [analytics, setAnalytics] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchAnalytics =
      async () => {
        try {
          const data =
            await getAnalytics();

          setAnalytics(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchAnalytics();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const statusData =
    analytics.statusDistribution.map(
      (item) => ({
        name: item._id,
        value: item.count,
      })
    );

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Leads</h3>
          <p className="text-3xl font-bold text-blue-600">
            {analytics.totalLeads}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Chats</h3>
          <p className="text-3xl font-bold text-green-600">
            {analytics.totalChats}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Today's Leads</h3>
          <p className="text-3xl font-bold text-purple-600">
            {analytics.todayLeads}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Today's Chats</h3>
          <p className="text-3xl font-bold text-orange-600">
            {analytics.todayChats}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Conversion Rate</h3>
          <p className="text-3xl font-bold text-red-600">
            {analytics.conversionRate}%
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow h-96">
        <h2 className="text-xl font-semibold mb-4">
          Lead Status Distribution
        </h2>

        <ResponsiveContainer
          width="100%"
          height="90%"
        >
          <PieChart>
            <Pie
              data={statusData}
              dataKey="value"
              outerRadius={120}
              label
            >
              {statusData.map(
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
  );
};

export default Analytics;