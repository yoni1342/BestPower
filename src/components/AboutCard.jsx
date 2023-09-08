import React from "react";
import Rocket from "../assets/Group.png";

const AboutCard = ({ icon, title, description }) => {
  return (
      <div className='bg-white w-[325px] h-[357px] shadow rounded-xl flex flex-col font-poppins'>
          <img src={icon} alt="icon" className='w-[78px] h-[86px] mx-auto mt-10 mb-5' />
          <h2 className='text-center text-lg font-bold'>{title}</h2>
          <p className='text-base  p-4 text-center'>{description}</p>
      </div>
  );
}
export default AboutCard;




