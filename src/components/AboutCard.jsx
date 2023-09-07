import React from "react";
import Rocket from "../assets/Group.png";
const AboutCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[325px] h-[357px] space-y-4 bg-[#EEEEEE] rounded-2xl">
      <img src={Rocket} alt="" />
      <h3 className="font-poppins font-bold text-[16px] ">Lorem ipsum is simply</h3>
      <p className="text-center mx-[22px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore{" "}
      </p>
    </div>
  );
};

export default AboutCard;
