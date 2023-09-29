import React from "react";
import { Link } from "react-router-dom";

const Button = ({ styles, text, link = "#" }) => (
  // <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
  //   {text}
  // </button>
  <Link to={link}>
    <div className="p-3 w-40 border-2 border-red-500 text-center rounded-3xl hover:bg-red-500 hover:text-white cursor-pointer transition-transform ease-in-out duration-150 active:scale-95 font-bold font-poppins">
      {text}
    </div>
  </Link>
);

export default Button;
