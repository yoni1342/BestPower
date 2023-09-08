import React from "react";
import AboutCard from "../components/AboutCard";
import styles from "../style";
import Electrician from "../assets/electrician.jpg";
import Icon from "../assets/Group.png";
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
import icon1 from "../assets/love.jpg";

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
          <p className="text-center font-poppins text-[16px]">
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

      <div
        className="relative md:w-[1230px] md:h-[424px]  mt-5 mb-20 mx-auto rounded-xl md:bg-url(electrician) md:bg-cover md:bg-center "
        style={{
          backgroundImage: `url(${Electrician})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: 0,
        }}
      >
        <div className="absolute inset-0 bg-white md:opacity-30 rounded-xl"></div>
        <div className="relative z-10 flex justify-center h-full items-center">
          <div className="flex flex-col md:flex-row gap-10">
            <AboutCard
              icon={Icon}
              title="Lorem ipsum dolor sit"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, mollitia ipsa sapiente"
            />
            <AboutCard
              icon={Icon}
              title="Lorem ipsum dolor sit"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, mollitia ipsa sapiente"
            />
            <AboutCard
              icon={Icon}
              title="Lorem ipsum dolor sit"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, mollitia ipsa sapiente"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.flexCenter} mt-5`}>
        <div className="flex flex-col items-center justify-center w-[345px]  md:w-[890px]  ">
          <h1
            className={`${styles.boxWidth} font-poppins font-semibold xs:text-[48px]  xs:leading-[76.8px] leading-[66.8px] w-full text-gradient text-center text-[24px] md:text-[40px]`}
          >
            Our Values
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </p>

          <div className="grid grid-cols-1 gap-6 mt-11 mb-12 md:grid-cols-3">

            <div className="flex flex-col w-[300px] h-[258px] space-y-3 shadow-lg pl-4">
              <img src={icon1} className="w-[76px] h-[70px]" alt="" />
              <h1 className="text-[20px] font-poppins">Lorem ipsum dolor sit amet</h1>
              <p className="text-[12px] font-poppins">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>

            <div className="flex flex-col w-[300px] h-[258px] space-y-3 shadow-lg pl-4">
              <img src={icon1} className="w-[76px] h-[70px]" alt="" />
              <h1 className="text-[20px] font-poppins">Lorem ipsum dolor sit amet</h1>
              <p className="text-[12px] font-poppins">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>

            <div className="flex flex-col w-[300px] h-[258px] space-y-3 shadow-lg pl-4">
              <img src={icon1} className="w-[76px] h-[70px]" alt="" />
              <h1 className="text-[20px] font-poppins">Lorem ipsum dolor sit amet</h1>
              <p className="text-[12px] font-poppins">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>

            <div className="flex flex-col w-[300px] h-[258px] space-y-3 shadow-lg pl-4">
              <img src={icon1} className="w-[76px] h-[70px]" alt="" />
              <h1 className="text-[20px] font-poppins">Lorem ipsum dolor sit amet</h1>
              <p className="text-[12px] font-poppins">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>

            <div className="flex flex-col w-[300px] h-[258px] space-y-3 shadow-lg pl-4">
              <img src={icon1} className="w-[76px] h-[70px]" alt="" />
              <h1 className="text-[20px] font-poppins">Lorem ipsum dolor sit amet</h1>
              <p className="text-[12px] font-poppins">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>

            <div className="flex flex-col w-[300px] h-[258px] space-y-3 shadow-lg pl-4">
              <img src={icon1} className="w-[76px] h-[70px]" alt="" />
              <h1 className="text-[20px] font-poppins">Lorem ipsum dolor sit amet</h1>
              <p className="text-[12px] font-poppins">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>

          </div>

        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
    </div>
  );
}

export default AboutPage;
