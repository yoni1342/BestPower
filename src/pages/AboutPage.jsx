import React from "react";
import AboutCard from "../components/AboutCard";
import styles from "../style";
import Electrician from "../assets/electrician.jpg";

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
        <div className="flex flex-col items-center justify-center w-[345px] h-[313px] md:w-[890px] md:h-[234px] ">
          <h1
            className={`${styles.boxWidth} font-poppins font-semibold xs:text-[48px]  xs:leading-[76.8px] leading-[66.8px] w-full text-gradient text-center text-[24px] md:text-[40px]`}
          >
            Who we are
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum
          </p>
        </div>
        {/* heading */}
        {/* <h1 className={`${styles.boxWidth} ${styles.heading2} text-gradient`}>
          About Us
        </h1> */}


      </div>

      <section
          style={{
            backgroundImage: `url(${Electrician})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="rounded-2xl mt-16 w-11/12 mx-auto"
          
        >
          <div className="w-[1230px] h-[424px] overflow-hidden bg-white  opacity-40 z-10">
            
          </div>
        </section>
    </div>
  );
}

export default AboutPage;
