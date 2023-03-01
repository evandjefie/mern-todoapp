import React, { useState } from "react";
import Applogo from "../assets/img/eticket - logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const TopBar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "SIGN IN", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          {/* Open
        <span className='p-1 ml-1 rounded-xl bg-orange-200 text-white text-2xl cursor-pointer flex items-center'>
          eticket 
        </span> */}
          <img
            className="h-auto w-10 rounded-xl md:h-auto md:w-12"
            src={Applogo}
            alt="applogo"
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
        >
          <MenuIcon name={open ? "close" : "menu"}></MenuIcon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button
            className="bg-amber-400 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500"
          >
            SIGN UP
          </button>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
