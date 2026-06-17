import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import Chats from "../pages/Chats/Chats";
import Leads from "../pages/Leads/Leads";
import Analytics from "../pages/Analytics/Analytics";
import Settings from "../pages/Settings/Settings";
import Login from "../pages/Login/Login";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Login Route */}
      <Route
        path="login"
        element={<Login />}
      />

      {/* Admin Pages */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="dashboard"
          element={<Dashboard />}
        />

        <Route
          path="users"
          element={<Users />}
        />

        <Route
          path="chats"
          element={<Chats />}
        />

        <Route
          path="leads"
          element={<Leads />}
        />

        <Route
          path="analytics"
          element={<Analytics />}
        />

        <Route
          path="settings"
          element={<Settings />}
        />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;