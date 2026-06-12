const Topbar = () => {
  return (
    <div className="h-16 bg-white shadow px-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold">
        Admin Dashboard
      </h2>

      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default Topbar;