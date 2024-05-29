import { logo } from "../assets/index";
import { FiAlignRight, FiX } from "react-icons/fi";
import { useState } from "react";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span>
            <img className="w-fit h-fit" src={logo} alt="logo" />
          </span>
          <span>
            {toggle ? (
              <FiX
                className="w-[22px] h-[22px] md:hidden block cursor-pointer"
                onClick={() => {
                  console.log(toggle);
                  setToggle(!toggle);
                }}
              />
            ) : (
              <FiAlignRight
                className="w-[22px] h-[22px] md:hidden block cursor-pointer"
                onClick={() => {
                  console.log(toggle);
                  setToggle(!toggle);
                }}
              />
            )}
          </span>
        </div>
        <ul
          className={`md:flex md:items-center z[-1] md:z-auto md:static absolute bg-white 
           w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] 
           transition-all ease-in duration-500 ${
             toggle ? "top-[80px] opacity-100 " : ""
           }`}
        >
          <li className="mx-4 my-6 md:my-0 nav-bar-text font-bolded">
            Pricing
          </li>
          <li className="mx-4 my-6 md:my-0 nav-bar-text font-bolded">
            Product
          </li>
          <li className="mx-4 my-6 md:my-0 nav-bar-text font-bolded">
            About Us
          </li>
          <li className="mx-4 my-6 md:my-0 nav-bar-text font-bolded">
            Careers
          </li>
          <li className="mx-4 my-6 md:my-0 nav-bar-text font-bolded">
            Community
          </li>
          <button
            className={` my-0 bright-red  rounded-3xl py-2 px-6 w-fit text-white hover:opacity-50 hover:cursor-pointer `}
          >
            Get Started
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
