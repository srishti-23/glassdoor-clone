import React from "react";
import bowl from "../assets/bowl.webp";
import jobs from "../assets/jobs.jpg";
import { MdArrowRightAlt } from "react-icons/md";

const RightBanner = () => {
  return (
    <>
      <div className="w-full md:w-[30%] md:mt-10 p-4 md:p-0">
        <div className="bg-white h-full rounded-md border border-gray-200 p-2">
          <span className="text-lg font-medium">
            Bowls<sup>TM</sup> for you{" "}
          </span>
          <div className="flex">
            <span className="text-green-600 gap-2">Explore all bowls </span>
            <MdArrowRightAlt size={30} className="text-green-600 my-auto" />
          </div>
          <div className="flex flex-row mt-2 hover:bg-gray-100">
            <img src={bowl} className="w-40" />
            <div className="block">
              <span className="text-lg font-medium">Consulting India</span>
              <br />
              <span className="w-full">
                A bowl for Consulting professionals working in India.
              </span>
            </div>
          </div>
          <hr />
          <div className="flex flex-row mt-4 hover:bg-gray-100">
            <img src={jobs} className="w-40 my-2" />
            <div className="block">
              <span className="text-lg font-medium">
                Job referrals and opportunities
              </span>
              <br />
              <p className="overflow-hidden">
                Hi Fishes... This Bowl is for Job Openings and Referrals.. Post
                only About Openings and Job Searching with Clear JD
              </p>
            </div>
          </div>
          <hr />
          <div className="flex flex-row mt-4 hover:bg-gray-100">
            <img src={bowl} className="w-40" />
            <div className="block">
              <span className="text-lg font-medium">Consulting India</span>
              <br />
              <span className="">
                A bowl for Consulting professionals working in India.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightBanner;
