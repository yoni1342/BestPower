import React from "react";
import styles from "../style";
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
  } from "../components";
function AboutPage() {
  return (
    <div className=" w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar name={"About"} />
        </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        {/* heading */}
        <h1 className={`${styles.boxWidth} ${styles.heading2} text-gradient`}>About Us</h1>
        <p>
            
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
