import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Card from "../Card";

const LastIssues = () => {
  return (
    <div className="w-full max-w-480 py-16 ">
      <div className="w-340 mx-auto">
        {/* header */}
        <div className="w-full flex mb-8 items-center justify-between ">
          <div className="flex items-center justify-center gap-3 ">
            <div className="h-0.5 w-5 bg-[#C8401A] rounded-md "></div>
            <h1 className="font-[400] text-[36px] ">Last Issues</h1>
          </div>

          <div className="flex items-center justify-center gap-2 ">
            <div className="bg-black rounded-full cursor-pointer text-white font-[400] text-center py-1 px-3.5 ">
                <p>All</p>
            </div>
            <div className=" rounded-full cursor-pointer text-[#404040] border border-[#D9D9D9] font-[400] text-center py-1 px-3.5 ">
                <p>Science</p>
            </div>
            <div className=" rounded-full cursor-pointer text-[#404040] border border-[#D9D9D9] font-[400] text-center py-1 px-3.5 ">
                <p>Technology</p>
            </div> 
            <div className=" rounded-full cursor-pointer text-[#404040] border border-[#D9D9D9] font-[400] text-center py-1 px-3.5 ">
                <p>Arts</p>
            </div> 
            <div className=" rounded-full cursor-pointer text-[#404040] border border-[#D9D9D9] font-[400] text-center py-1 px-3.5 ">
                <p>Medicine</p>
            </div> 
            <button className="border flex items-center justify-center gap-2 cursor-pointer border-[#B3B3B3] rounded-md py-1 px-4 ">
              All issues <BiRightArrowAlt />
            </button>
          </div>
        </div>

        {/* cards */}
        <div className="w-full grid gap-6 grid-cols-4 ">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    </div>
  );
};

export default LastIssues;
