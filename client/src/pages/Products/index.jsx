import React from "react";
import styles from "../../style";
import { Footer, Navbar } from "../../components";
import ProductCategory from "../../components/Products/ProductCategory";
import { Categoris } from "../../constants/products";

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
            At Best Power, we don't just provide products; we deliver solutions
            that redefine possibilities. Our product lineup is a testament to
            our commitment to innovation, precision engineering, and unwavering
            reliability. As you explore our product page, you'll discover a
            diverse range of power equipment, ICT solutions, and cutting-edge
            technologies meticulously crafted to meet the demands of a dynamic
            and connected world.
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
