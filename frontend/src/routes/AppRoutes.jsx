import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

import MainLayout from "../layouts/MainLayout";
import AdminRoutes from "../admin/routes/AdminRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Website Routes */}
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={<AdminRoutes />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;