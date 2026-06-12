import { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: "EventAI Planner",
    email: "support@eventai.com",
    phone: "+91 9876543210",
    theme: "Light",
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Settings saved successfully!");
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-5"
      >
        <div>
          <label className="block mb-2 font-medium">
            Site Name
          </label>

          <input
            type="text"
            name="siteName"
            value={settings.siteName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Contact Email
          </label>

          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={settings.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Theme
          </label>

          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;