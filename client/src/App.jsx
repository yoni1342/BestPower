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
import Services from "./pages/Services/index"
import ProductListPage from "./pages/Products"
import HomePage from "./pages/HomePage";
import ContactusPage from "./pages/ContactusPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProductDetail from './pages/Products/ProductDetailPage'
import ServiceDetail from "./pages/Services/ServiceDetail";
import About from "./pages/About";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactusPage />} />
    <Route path="/service" element={<Services />} />
    <Route path="/service/:service_id" element={<ServiceDetail />} />
    <Route path="/product" element={<ProductListPage />} />
    <Route path="/product/:cat_id/:product_id" element={<ProductDetail />} />
    {/* <Route path="/random" element={<About />} /> */}
  </Routes>
);

export default App;
