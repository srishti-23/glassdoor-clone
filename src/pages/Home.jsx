import React from "react";
import { GiCircle } from "react-icons/gi";
import { GoCommentDiscussion } from "react-icons/go";
import { PiNotepadLight } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiMonitor } from "react-icons/fi";
import Footer from "../components/Footer";
import "./Home.css";
import right from "../assets/rightimg.svg";
import left from "../assets/leftimg.svg";
import bg from "../assets/bg.svg";
import { IoIosArrowDown } from "react-icons/io";
import Signup from "../components/Signup";

const Home = () => {
  return (
    <>
      <div className="md:flex hidden">
        <h1 className="flex mx-auto my-4 text-3xl md:text-5xl font-bold text-green-600 text-center">
          Your work people are here
        </h1>
      </div>
      <div className="container flex flex-col md:ml-0 items-center justify-center gap-4 md:gap-10 px-4 md:px-4">
        <div className="hidden md:ml-[-280px] md:flex w-full md:w-[600px] h-auto md:h-[580px]">
          <img src={left} className=" md:ml-[-50px] w-1/2" alt="left" />
          <Signup />
          <img src={right} className="w-1/2" alt="right" />
        </div>
        <div className="md:hidden w-full">
          <img src={bg} className="w-full h-auto mt-96" alt="small screen" />
          <h1 className="flex ml-16 my-4 text-3xl md:text-5xl font-bold text-green-600 text-center">
            Your work people are here
          </h1>
          <Signup />
        </div>
      </div>

      <div className="flex flex-col items-center mt-80 px-4 md:px-0 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-black">
          Get ahead with Glassdoor
        </h1>
        <p className="mt-2 md:mt-4 max-w-2xl">
          We're serving up trusted insights and anonymous conversation, so
          you'll have the goods you need to succeed.
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-14 mt-8">
          <div className="relative flex flex-col items-center">
            <GiCircle size={100} />
            <GoCommentDiscussion
              size={50}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <p className="mt-2 text-center">Join your work community</p>
          </div>
          <div className="relative flex flex-col items-center">
            <GiCircle size={100} />
            <PiNotepadLight
              size={50}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <p className="mt-2 text-center">Find and apply to jobs</p>
          </div>
          <div className="relative flex flex-col items-center">
            <GiCircle size={100} />
            <HiOutlineBuildingOffice2
              size={50}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <p className="mt-2 text-center">Search company reviews</p>
          </div>
          <div className="relative flex flex-col items-center">
            <GiCircle size={100} />
            <FiMonitor
              size={50}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <p className="mt-2 text-center">Compare Salaries</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-slate-200 mt-10 p-6 text-center">
        <h2 className="text-2xl font-bold">Start your search</h2>
        <p className="text-lg text-gray-500 my-2 max-w-2xl">
          Need some inspiration? See what millions of people are looking for on
          Glassdoor today.
        </p>
        <IoIosArrowDown size={25} className="mx-auto" />
      </div>

      <Footer />
    </>
  );
};

export default Home;