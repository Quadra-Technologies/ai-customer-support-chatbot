import {
  Menu,
  Bell,
  LogOut,
  UserCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const Topbar = ({
  setSidebarOpen,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(
      "adminToken"
    );

    navigate("/admin/login");
  };

  return (
    <div
      className="
      h-16
      bg-white
      border-b
      border-gray-200
      px-6
      flex
      items-center
      justify-between
      shadow-sm
      "
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          className="
          md:hidden
          p-2
          rounded-lg
          hover:bg-gray-100
          transition
          "
          onClick={() =>
            setSidebarOpen(true)
          }
        >
          <Menu size={22} />
        </button>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Admin Dashboard
          </h2>

          <p className="text-sm text-gray-500">
            AI Event Planner CRM
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button
          className="
          p-2
          rounded-full
          hover:bg-gray-100
          transition
          "
        >
          <Bell
            size={20}
            className="text-gray-600"
          />
        </button>

        <div className="flex items-center gap-2">
          <UserCircle
            size={34}
            className="text-indigo-600"
          />

          <div className="hidden md:block">
            <p className="font-semibold text-slate-800">
              Bhavani
            </p>

            <p className="text-xs text-gray-500">
              Admin
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="
          flex
          items-center
          gap-2
          bg-rose-500
          hover:bg-rose-600
          text-white
          px-4
          py-2
          rounded-xl
          transition
          shadow-md
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;