import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = ({ name }) => {
  const [active, setActive] = useState({ name });
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
        <img src={logo} alt="bestpower" className="w-[80px]" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <Link to={nav.title == "Home" ? "/" : `/${nav.title}`}>
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-red-500" : ""
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              {nav.title}
            </li>
          </Link>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          {/* highlight */}
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-gray-400"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`/${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
