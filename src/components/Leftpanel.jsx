import React from "react";
import tech from "../assets/tech.webp";
import exb from "../assets/expbowl.svg";

const Leftpanel = () => {
  return (
    <>
      <div className="w-full md:w-[20%] p-4 md:p-0 md:ml-10">
        <div className="cursor-pointer w-40  mt-8 p-2 rounded-md text-black bg-[#4CD681] hover:shadow-lg hover:border border-black">
          <button className="w-[full] font-medium p-2 ml-8"> + Post</button>
        </div>
        <div className="font-medium text-xl mt-4">My Bowls</div>
        <div className="flex p-2 mt-4 font-medium underline">
          <img
            src={tech}
            className="w-[22px] mr-1 h-[22px] border border-gray-200 rounded-full"
          />
          Tech India
        </div>
        <div className="mt-8 flex p-1 font-medium border border-black rounded-md hover:bg-[#4CD681] hover:border-none hover:text-white">
          <img src={exb} className="mx-2" />
          Explore bowls
        </div>
      </div>
    </>
  );
};

export default Leftpanel;
