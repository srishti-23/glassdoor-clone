import React from "react";
import RightBanner from "../components/RightBanner";
import Leftpanel from "../components/Leftpanel";
import Mid from "../components/Mid";

const Community = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-8">
        <Leftpanel />
        <Mid />
        <RightBanner />
      </div>
    </>
  );
};

export default Community;
