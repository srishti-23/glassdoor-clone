import React from "react";
import icon from "../assets/icon.svg";
import "../index.css";
import signin from "../assets/signin.svg";
import { Link } from "react-router-dom";

const NavBef = () => {
  return (
    <>
      <div className="h-16 flex w-full bg-[#FFFFFF] border-b border-gray-200">
        <div className="mt-4 ml-2 mb-4">
          <Link to="/">
            <img src={icon} className="w-32 h-[9] ml-8" />
          </Link>
        </div>
        <ul className="li-none flex justify-center gap-12 ml-72 font-medium mt-4 mb-4">
          <li className="hover-underline ">
            <Link to="/community">Community</Link>
          </li>

          <li className="hover-underline ">
            <Link to="/jobs">Jobs</Link>
          </li>

          <li className="hover-underline">
            <Link to="/companies">Companies</Link>
          </li>
          <li className="hover-underline">
            <Link to="/salary">Salaries</Link>
          </li>
          <li className="hover-underline">
            <Link to="/foremployers">ForEmployers</Link>
          </li>
        </ul>
      
        <button className="flex items-center bg-black w-32 h-12 text-white ml-40 p-4 my-2 rounded-md">
          <img src={signin} className="w-8 h-8 ml-0" alt="Sign in" />
          <span className="font-medium ml-2">Sign in</span>
        </button>
      </div>
    </>
  );
};

export default NavBef;
