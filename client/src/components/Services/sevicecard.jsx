import styles, { layout } from "../../style";

const servicecard = ({ image, Title, description, pos }) =>
  pos === "left" ? (
    <section id="product" className={`${layout.section} `}>
      <div className={layout.sectionInfo}>
        <h2
          className={`${styles.heading4} text-red-500`}
          dangerouslySetInnerHTML={{ __html: Title }}
        ></h2>
        <p className={`${styles.paragraph2} text-justify `}>
          {description}
        </p>
      </div>

      <div className={layout.sectionImg}>
        <img
          src={image}
          alt="billing"
          className="relative z-[5] border-8 border-red-500 w-[26rem] h-[26rem] object-cover"
        />

   
      </div>
    </section>
  ) : (
    <section id="product" className={`${layout.sectionReverse} gap-10`}>
      <div className={layout.sectionImgReverse}>
        <img
          src={image}
          alt="billing"
          className="relative z-[5] border-8 border-red-500 w-[26rem] h-[26rem] object-cover"
        />

      </div>

      <div className={layout.sectionInfo}>
        <h2
          className={`${styles.heading4} text-red-500`}
          dangerouslySetInnerHTML={{ __html: Title }}
        ></h2>
        <p className={`${styles.paragraph2} text-justify `}>
          {description}
        </p>
      </div>
    </section>
  );

export default servicecard;
