import React from "react";
import styles from "../../style";
import { Footer, Navbar } from "../../components";
import { service1, service2 } from "../../assets";

function ServiceDetail() {
  return (
    <div className={`w-full overflow-hidden`}>
      {/* Nav Bar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexColCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} text-center`} >
          <img
            src={service1}
            alt="service1"
            className="w-full h-[550px] object-cover"
          />
          <h1 className={`${styles.heading2} ${styles.marginY} text-red-500`}>Import and Distribution of Power Equipment</h1>
          <p className={`${styles.paragraph} text-gray-700`}>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aI Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aI Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aI Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aIUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aI Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aI
          </p>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
