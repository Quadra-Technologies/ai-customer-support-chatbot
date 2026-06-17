import {
  LayoutDashboard,
  Users,
  MessageCircle,
  UserRoundCheck,
  BarChart3,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <Users size={18} />,
    },
    {
      name: "Chats",
      path: "/admin/chats",
      icon: <MessageCircle size={18} />,
    },
    {
      name: "Leads",
      path: "/admin/leads",
      icon: <UserRoundCheck size={18} />,
    },
    {
      name: "Analytics",
      path: "/admin/analytics",
      icon: <BarChart3 size={18} />,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <Settings size={18} />,
    },
  ];

  return (
    <aside
      className="
      w-64
      min-h-screen
      bg-gradient-to-b
      from-slate-900
      to-indigo-900
      text-white
      p-5
      shadow-2xl
      "
    >
      <h1 className="text-3xl font-bold mb-10">
        Admin Panel
      </h1>

      <nav className="space-y-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-indigo-600 shadow-lg"
                  : "hover:bg-slate-700"
              }`
            }
          >
            {item.icon}

            <span className="font-medium">
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;