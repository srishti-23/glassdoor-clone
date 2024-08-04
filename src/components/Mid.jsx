import React from "react";
import { MdSearch } from "react-icons/md";
import acc from "../assets/account.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import mid2 from "../assets/mid2.png";

const Mid = () => {
  return (
    <>
      <div className="w-full md:w-[40%] p-4 md:p-0">
        <div className="mt-4 mx-auto bg-[#F4F4F4] rounded-full h-10 flex text-gray-500">
          <MdSearch size={30} className="ml-4 my-auto" />
          <input
            type="text"
            className="my-auto w-80 rounded-md text-lg font-normal ml-2 bg-[#F4F4F4] focus:outline-none"
            placeholder="Search for bowls or conversation"
          />
        </div>
        <div className="border border-gray-200 mx-auto mt-8 rounded-md">
          <div className="flex p-4">
            <img
              src={acc}
              className="w-10 h-10 border border-4 border-[#4CD681] rounded-full"
            />
            <MdKeyboardArrowDown size={30} className="ml-2 my-auto" />
            <input
              type="text"
              className="w-full cursor-pointer border border-gray-200 p-2"
              placeholder="Post as software Developer"
            />
          </div>
          <hr />
          <div className="flex p-2">
            <img src={mid2} className="w-32 h-28 rounded-md" />
            <p className="font-medium text-lg mx-2">
              💡Interested in Startups ?<br />
              <span className="text-sm font-medium mx-1">
                We have a new bowl for you! Click through here to check out the
                Indian Startups community and connect with like-minded people.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mid;
