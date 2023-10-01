// Component for services page

import React from "react";
import styles, { layout } from "../../style";
import { service2 } from "../../assets";
import Button from "../Button";
import { Link } from "react-router-dom";
function ServiceII({
  ServiceTitel,
  ServiceDesc,
  ServiceImage,
  ServicePageLink,
}) {
  return (
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div className={`${styles.flexColCenter} py-10`}>
          {/* Title */}
          <h2 className={`${styles.heading3} w-fit text-gradient text-center`}>
            {ServiceTitel}
          </h2>

          <section
            id="service"
            className={`${layout.sectionReverse} flex justify-center space-x-3`}
          >
            <div className={layout.sectionImg}>
              <img
                src={ServiceImage}
                alt="billing"
                className="relative z-[5] p-3"
              />
            </div>

            <div
              className={`${layout.sectionInfo} flex flex-col items-center space-y-10 h-full`}
            >
              <p className={`${styles.paragraph} text-justify max-w-[570px]`}>
                {ServiceDesc}
              </p>
              <Button text={"See More"} link={ServicePageLink} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ServiceII;
