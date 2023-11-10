import React from "react";
import styles from "../../style";
import ServiceCard from "./sevicecard";
import { service1 } from "../../assets/index";
import { Categoris } from "../../constants";
function ServicesCategory(ServicesCategoryData) {
  console.log(ServicesCategoryData);
  return (
    <div>
      <div className={` ${styles.paddingX} ${styles.flexColCenter}`}>
        {ServicesCategoryData.ServicesCategoryData.map((Category, index) => (
          <div className={`${styles.boxWidth}`}>
            <div className="flex flex-col items-center mt-5">
              <h1 className={`${styles.heading3} text-red-500`}>
                {Category.title}
              </h1>
              <p className={`${styles.paragraph2} `}>{Category.description}</p>
            </div>
            {Category.services.map((service, index) => (
              <div className="">
                <ServiceCard
                  image={service.image}
                  description={service.description}
                  Title={service.name}
                  pos={index % 2 === 0 ? "left" : "right"}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesCategory;
