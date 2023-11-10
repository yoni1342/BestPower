import React from "react";
import Electricity from "../assets/Electricity.jpg";
import phoneIcon from "../assets/phoneIcon.png";
import messageIcon from "../assets/messageIcon.png";
import locationIcon from "../assets/locationIcon.png";
import styles from "../style";
import Button from "./Button";
import EditableLineInput from "../components/EditableLineInput";
import send from "../assets/phoneIcon.png";

const ContactUs = () => {
  return (
    <div>
      <h1
        className={`${styles.boxWidth} font-poppins font-semibold xs:text-[48px]  xs:leading-[76.8px] leading-[66.8px] w-full text-gradient text-center text-[24px] md:text-[40px]`}
      >
        Contact us
      </h1>
      <p className="font-poppins text-center mb-5 mx-auto w-3/4 text-[14px]">
        Any question or remarks? Just write us a message!
      </p>
      <div className="md:flex">
        <div
          style={{
            backgroundImage: `url(${Electricity})`,
            backgroundSize: "cover",  
            backgroundPosition: "center",
          }}
          className="w-[329.38px] h-[397px] overflow-hidden rounded-2xl mx-auto md:w-[420px] md:h-[460px]"
        >
          <div className="opacity-40 z-10">
            <h1 className="font-poppins text-xl font-semibold text-white text-center mt-[15px]">
              Contact Information
            </h1>
            <p className="text-white font-poppins text-[11px] text-center mt-[10px]">
              say something to start a live chat
            </p>
            <div className="flex flex-col space-y-3 items-center mt-3 md:mt-11">
              <div className="md:flex md:space-x-5">
                <img className="mx-auto mb-2" src={phoneIcon} alt="" />

                <p className="text-white font-poppins text-[12px]">
                  +1012 3456 789
                </p>
              </div>

              <div className="md:flex md:space-x-5">
                <img className="mx-auto mb-2 " src={messageIcon} alt="" />

                <p className="text-white font-poppins font-semibold text-[12px]">
                  demo@gmail.com
                </p>
              </div>

              <div className="md:flex md:space-x-5">
                <img className="mx-auto mb-2" src={locationIcon} alt="" />

                <p className="text-white font-poppins font-semibold text-[12px] mx-auto text-center w-4/5 md:text-left md:w-3/5">
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-6 mt-8">
          <div className="md:flex md:space-x-6">


            <div className="flex flex-col mt-6">
              <label htmlFor="" className="font-poppins text-[12px] ">
                First Name
              </label>
              <input
              type="text"
              placeholder="John"
              className="block w-72 py-1  px-0 placeholder-poppins text-sm text-white border-b border-gray-400 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-[#cf3333]"
              />
            </div>



            <div className="flex flex-col mt-6">
              <label htmlFor="" className="font-poppins text-[12px]">
                Last Name
              </label>
              <input
              type="text"
              placeholder="Doe"
              className="block w-72 py-1  px-0 placeholder-poppins text-sm text-white border-b border-gray-400 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-[#cf3333]"
              />
            </div>
          </div>


          <div className="md:flex md:space-x-6">

            <div className="flex flex-col mt-6">
              <label htmlFor="" className="font-poppins text-[12px]">
                Email
              </label>
              <input
              type="text"
              placeholder="john@gmail.com"
              className="block w-72 py-1  px-0 placeholder-poppins text-sm text-white border-b border-gray-400 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-[#cf3333]"
              />
            </div>

          {/* Phone Number */}
            <div className="flex flex-col mt-6">

              <label htmlFor="" className="font-poppins text-[12px]">
                Phone Number
              </label>
              <input
              type="text"
              placeholder="+251-9-43-85-23-47"
              className="block w-72 py-1  px-0 placeholder-poppins text-sm text-white border-b border-gray-400 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-[#cf3333]"
              />
            </div>



          </div>
          <div className="md:mt-11 mt-6">
            <label htmlFor="" className="font-poppins text-[12px]">
              Message
            </label>
            <input
              type="text"
              placeholder="Write your Message"
              className="block w-72 py-1  px-0 placeholder-poppins text-sm text-white border-b border-gray-400 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-[#cf3333] md:w-[600px]"
            />
          </div>
          <button
            type="button"
            className={`py-2 px-24 font-poppins font-medium text-[12.95px] text-white mt-6 bg-blue-gradient rounded-[3.2px] outline-none md:w-[214px] md:h-[54px] md:text-[16px] md:px-12 md:ml-96 md:mr-0 md:mt-11 ${styles}`}
          >
            Send Message
          </button>
        </div>

        <img src={send} alt="" />
      </div>
    </div>
  );
};

export default ContactUs;

/* 

      <section
          style={{
            backgroundImage: `url(${Electrician})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="rounded-2xl mt-16 w-11/12 mx-auto"
          
        >
          <div className="w-[1230px] h-[424px] overflow-hidden bg-white  opacity-40 z-10">
            <AboutCard />
            
          </div>
          <AboutCard />
        </section>

*/
