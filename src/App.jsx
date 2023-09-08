import styles from "./style";
import {
  Service,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import { service1, service2 } from "./assets";
import HomePage from "./pages/HomePage";
import ContactusPage from "./pages/ContactusPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactusPage />} />
  </Routes>
);

export default App;
