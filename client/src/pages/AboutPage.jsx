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
import emoji from "../assets/emoji.jpg";
import flag from "../assets/flag.jpg";
import friends from "../assets/friends.jpg";
import increase from "../assets/increase.jpg";
import light from "../assets/light.jpg";

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
            Welcome to Best Power, where innovation meets reliability, and
            progress is powered by cutting-edge solutions. As a leader in the
            field of power equipment, ICT solutions, and embedded technologies,
            we are more than a company; we are architects of a connected and
            empowered future.
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
              title="Innovation Leaders"
              description="At Best Power, we are pioneers in innovation. We continually explore new technologies, fostering creativity to deliver cutting-edge solutions in power equipment, ICT, and embedded systems."
            />
            <AboutCard
              icon={Icon}
              title="Unwavering Reliability"
              description="Our commitment to reliability is unwavering. Every product, from transformers to software solutions, undergoes rigorous testing. Best Power stands for quality assurance, ensuring products exceed expectations and deliver dependability."
            />
            <AboutCard
              icon={Icon}
              title="Customer-Centric Excellence"
              description="Building lasting relationships is core to Best Power. We prioritize customer needs, fostering partnerships founded on trust, collaboration, and mutual growth. We are not just suppliers; we are dedicated partners in our clients' progress."
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
          <p className="text-center font-poppins">
          These values represent the guiding principles that shape our decisions, actions, and interactions at Best Power. They reflect our commitment to excellence, innovation, and building meaningful relationships as we work together to power progress and connect possibilities.
          </p>

          <div className="grid grid-cols-1 gap-6 mt-11 mb-12 md:grid-cols-3">
            <div className="flex flex-col w-[300px] h-[258px] space-y-3 shadow-lg pl-4">
              <img src={icon1} className="w-[76px] h-[70px]" alt="" />
              <h1 className="text-[20px] font-poppins">Innovation</h1>
              <p className="text-[12px] font-poppins">
                We embrace a culture of continuous innovation, where creativity
                and forward-thinking drive our solutions. At Best Power, we
                believe in pushing boundaries, exploring new possibilities, and
                staying at the forefront of technological advancements to
                deliver products and services that shape the future.
              </p>
            </div>

            <div className="flex flex-col w-[300px] h-[258px] space-y-3 shadow-lg pl-4">
              <img src={emoji} className="w-[76px] h-[70px]" alt="" />
              <h1 className="text-[20px] font-poppins">Reliability</h1>
              <p className="text-[12px] font-poppins">
                Reliability is the bedrock of our identity. We are committed to
                delivering products and services that our clients can depend on.
                From power equipment to embedded systems, quality assurance and
                rigorous testing are at the heart of everything we do. Best
                Power is synonymous with trust and dependability.
              </p>
            </div>

            <div className="flex flex-col w-[300px] h-[258px] space-y-3 shadow-lg pl-4">
              <img src={friends} className="w-[76px] h-[70px]" alt="" />
              <h1 className="text-[20px] font-poppins">Customer-Centricity</h1>
              <p className="text-[12px] font-poppins">
                Our clients are at the center of our universe. We listen
                actively, understand their unique needs, and work
                collaboratively to find tailored solutions. Best Power is not
                just a provider; we are partners in progress, committed to
                building enduring relationships founded on trust, collaboration,
                and shared success.
              </p>
            </div>

            <div className="flex flex-col w-[300px] h-[258px] space-y-3 shadow-lg pl-4">
              <img src={flag} className="w-[76px] h-[70px]" alt="" />
              <h1 className="text-[20px] font-poppins">Excellence</h1>
              <p className="text-[12px] font-poppins">
                Excellence is our standard. From manufacturing processes to
                customer service, we strive for excellence in every aspect of
                our business. We are dedicated to meeting and exceeding the
                highest industry standards, ensuring that our clients receive
                nothing short of the best from Best Power.
              </p>
            </div>

            <div className="flex flex-col w-[300px] h-[258px] space-y-3 shadow-lg pl-4">
              <img src={light} className="w-[76px] h-[70px]" alt="" />
              <h1 className="text-[20px] font-poppins">
              Sustainability
              </h1>
              <p className="text-[12px] font-poppins">
              We are committed to sustainability in both our operations and the solutions we provide. Best Power actively seeks environmentally responsible practices, aiming to reduce our ecological footprint. Our focus on sustainability extends to delivering energy-efficient solutions that contribute to a greener future.
              </p>
            </div>

            <div className="flex flex-col w-[300px] h-[258px] space-y-3 shadow-lg pl-4">
              <img src={increase} className="w-[76px] h-[70px]" alt="" />
              <h1 className="text-[20px] font-poppins">
              Integrity
              </h1>
              <p className="text-[12px] font-poppins">
                Integrity is the foundation of our interactions. We operate with honesty, transparency, and ethical conduct in every aspect of our business. Best Power is dedicated to upholding the highest standards of integrity, fostering trust within our team and with our clients, partners, and the community.
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
