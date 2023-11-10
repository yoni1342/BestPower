import React from "react";
import styles from "../../style";
import { Footer, Navbar, Service } from "../../components";
import { service1, service2 } from "../../assets";
import ServiceII from "../../components/Services/Servicepage";
import ServiceCard from "../../components/Services/sevicecard";
import ServicesCategory from "../../components/Services/ServicesCategory";
import {servicesCatagorey} from "../../constants/services"
function Index() {
  return (
    <div className={`w-full overflow-hidden`}>
      {/* Nav Bar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/*Heder and Description*/}

      <div className={`${styles.flexColCenter} ${styles.paddingX}`}>
        <h1 className={`${styles.heading2} text-gradient w-fit`}>
          Our Services
        </h1>

        <p className={`${styles.paragraph}  text-justify max-w-[970px] mt-5`}>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aI
        </p>
      </div>

      {/* List of Services */}

      <ServicesCategory ServicesCategoryData = {servicesCatagorey}/>

      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Index;
