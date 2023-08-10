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
const App = () => (
  <div className=" w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <div>
          <Service
            image={service1}
            description="At BEST POWER, we take pride in our meticulous manufacturing of top-quality electrical accessories. From reliable connectors to essential wiring components, our precision-crafted solutions ensure seamless electrical connectivity. With our dedication to excellence, we deliver the essential components that keep your power systems running efficiently and safely. Trust in our expertise to elevate your electrical projects to the next level."
            Title='Manufacturing Of <br className="sm:block hidden" /> Electrical Accessories'
            pos="left"
          />

          <Service
            image={service2}
            description="Your Power Solutions Provider - BEST POWER imports and distributes a wide array of premium power equipment, ensuring top-notch performance and reliability. From transformers to generators, we deliver seamless solutions that empower your projects to succeed. Partner with us for exceptional service and access to the finest power equipment available."
            Title='Import And Distribution<br className="sm:block hidden" />Of Power Equipments'
            pos="right"
          />
        </div>
        
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
