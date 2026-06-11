import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Chat from "../pages/Chat/Chat";
import Contact from "../pages/Contact/Contact";
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