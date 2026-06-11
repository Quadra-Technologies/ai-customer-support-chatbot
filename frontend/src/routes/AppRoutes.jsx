import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Chat from "../Pages/Chat/Chat";
import Contact from "../Pages/Contact/Contact";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/chat"
            element={<Chat />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;