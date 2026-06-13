import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaComments,
  FaUserTie,
  FaChartBar,
  FaCog,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
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
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}

      <div
        className={`fixed md:static z-50 w-64 min-h-screen bg-slate-900 text-white p-5 transform transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">
            Admin Panel
          </h1>

          <button
            className="md:hidden"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <FaTimes />
          </button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={
                item.path === "/admin"
              }
              onClick={() =>
                setSidebarOpen(false)
              }
              className={({
                isActive,
              }) =>
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
    </>
  );
};

export default Sidebar;git a