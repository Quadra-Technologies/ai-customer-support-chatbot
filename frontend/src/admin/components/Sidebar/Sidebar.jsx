import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaComments,
  FaUserTie,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <FaUsers />,
    },
    {
      name: "Chats",
      path: "/admin/chats",
      icon: <FaComments />,
    },
    {
      name: "Leads",
      path: "/admin/leads",
      icon: <FaUserTie />,
    },
    {
      name: "Analytics",
      path: "/admin/analytics",
      icon: <FaChartBar />,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">
        Admin Panel
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;