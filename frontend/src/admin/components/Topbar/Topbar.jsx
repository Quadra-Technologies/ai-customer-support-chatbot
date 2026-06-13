import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(
      "adminToken"
    );

    navigate("/admin/login");
  };

  return (
    <div className="h-16 bg-white shadow px-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold">
        Admin Dashboard
      </h2>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Topbar;