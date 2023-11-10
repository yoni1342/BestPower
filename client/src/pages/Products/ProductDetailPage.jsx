import React from "react";
import { useParams } from "react-router-dom";
import { Categoris } from "../../constants/products";
import { Footer, Navbar } from "../../components";
import styles from "../../style";
import MainSwiper from "../../components/Products/MainSwiper";
import { telegram, whatssapp } from "../../assets";
function ProductDetailPage() {
  const { cat_id, product_id } = useParams();
  const product = Categoris.find((cat) => cat.id === cat_id).products.find(
    (product) => product.id === product_id
  );

  return (
    <div className="w-full overflow-hidden">
      {/* Nav Bar */}
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div>
        <div className={`${styles.flexColCenter} ${styles.paddingX}`}>
          <div
            className={`${styles.boxWidth} flex flex-col space-y-5 md:space-y-0 md:flex-row `}
          >
            <div className=" md:w-[50%] ">
              <MainSwiper images={product.images} />
            </div>
            <div className={`md:w-[50%] ${styles.flexColCenter}`}>
              <h1 className={`${styles.heading3}`}>{product?.name}</h1>
              <div>
                <p className={`${styles.paragraph} ${styles.paddingX}`}>
                  {product.desc}
                </p>
                <div
                  className={`${styles.paragraph} ${styles.paddingX} ${styles.marginY}`}
                >
                  To Buy Contact Us
                  <div className="flex items-center">
                    {/* Telegram */}
                    <a
                      href={`#`}
                    >
                      <img src={telegram} alt="" className="w-14" />
                    </a>
                    {/* Whatsapp */}
                    <a
                      href={`#`}
                    >
                      <img src={whatssapp} alt="" className="w-14" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} ${styles.marginX} `}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
