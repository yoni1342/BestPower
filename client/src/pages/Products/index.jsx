import React from "react";
import styles from "../../style";
import { Footer, Navbar } from "../../components";
import ProductCategory from "../../components/Products/ProductCategory";
import { Categoris } from "../../constants/index";

function index() {
  return (
    <div className="w-full overflow-hidden">
      {/* Nav Bar */}
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className="bg-gray-50">
        <div className={`${styles.flexColCenter} ${styles.paddingX}`}>
          <h1 className={`${styles.heading2} text-gradient w-fit`}>
            Our Products
          </h1>

          <p className={`${styles.paragraph}  text-justify ${styles.boxWidth}`}>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aI
          </p>
        </div>

        <div className={`${styles.flexColCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            {Categoris.map((category, index) => (
              <ProductCategory category={category} key={category.id} />
            ))}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
