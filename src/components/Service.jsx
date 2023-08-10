import styles, { layout } from "../style";

const Service = ({ image, Title, description, pos }) =>
  pos === "left" ? (
    <section id="product" className={layout.section}>

      <div className={layout.sectionInfo}>
        <h2
          className={`${styles.heading2} text-gradient`}
          dangerouslySetInnerHTML={{ __html: Title }}
        ></h2>
        <p className={`${styles.paragraph} text-justify max-w-[470px] mt-5`}>
          {description}
        </p>
      </div>
      
      <div className={layout.sectionImg}>
        <img src={image} alt="billing" className="relative z-[5] p-3" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full " />
        {/* gradient end */}
      </div>
    </section>
  ) : (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={image} alt="billing" className="relative z-[5] p-3" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2
          className={`${styles.heading2} text-gradient`}
          dangerouslySetInnerHTML={{ __html: Title }}
        ></h2>
        <p className={`${styles.paragraph} text-justify max-w-[470px] mt-5`}>
          {description}
        </p>
      </div>
    </section>
  );

export default Service;
