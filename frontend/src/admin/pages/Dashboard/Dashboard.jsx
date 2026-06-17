import { useEffect, useState } from "react";

import StatCard from "../../components/StatCard/StatCard";
import Loader from "../../components/Loader/Loader";

import { getAnalytics } from "../../../services/analyticsApi";

const Dashboard = () => {
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

  const stats = [
    {
      title: "Total Leads",
      value: analytics.totalLeads,
      color: "text-blue-600",
    },
    {
      title: "Today's Leads",
      value: analytics.todayLeads,
      color: "text-green-600",
    },
    {
      title: "Total Chats",
      value: analytics.totalChats,
      color: "text-purple-600",
    },
    {
      title: "Today's Chats",
      value: analytics.todayChats,
      color: "text-orange-600",
    },
    {
      title: "Conversion Rate",
      value: `${analytics.conversionRate}%`,
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
    </div>
  );
};

export default Dashboard;