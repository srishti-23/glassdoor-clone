import React from "react";
import img from "../assets/companybg.jpg";

const Companies = () => {
  return (
    <>
   <div className="relative h-screen bg-cover bg-center" >
        <img src={img} />
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Search salaries and compensation</h1>
      </div>
    </div>


{/* //         <div className="bg-[#F5F6F7] h-8">
//           <p clasName="text-orange-500	">NEW ! </p>
// Dive into anonymous, candid conversations with a community of professionals like you. 
//         </div> */}
  
    </>
  );
};

export default Companies;
