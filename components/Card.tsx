import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Card = () => {
  return (
    <div className="shadow-xl rounded-md ">
      <div className="bg-[#2D1208] py-4 px-3.5 h-85 rounded-tr-md rounded-tl-md relative ">
        <p className="text-white/60 text-[14px] mb-4 font-[play400] ">
          Folio Science
        </p>

        <p className="text-white/60 text-[28px] mb-4 font-[play400]">12</p>

        <div className="h-0.5 bg-white/60 w-[90%] mb-3 "></div>

        <p className="text-white/60 text-[15px] font-[play400]">
          Deep Ocean Frontiers
        </p>

        <p className="text-white/60 text-[13px] absolute bottom-3 left-3 font-[play400]">
          Winter 2025
        </p>
      </div>

      <div className="w-full py-4 px-4 ">
        <div className="w-full mb-2 flex items-center justify-between ">
          <div className="bg-[#F0EFEC] px-2.5 py-0.75 rounded-md text-center ">
            <p className="text-[13px] text-[#404040] font-[400] ">Science</p>
          </div>

          <p className="text-[#737373] text-[13px] font-[400] ">2025</p>
        </div>

        <div className="w-full mb-4 ">
          <p className="mb-2 text-[#0D0D0D] text-[22px] font-[play-400] ">
            Deep Ocean Frontiers
          </p>
          <p className=" text-[#404040] text-[14px] font-[400] w-[80%] ">
            Hydrothermal vent ecosystems and abyssal plain geology in a landmark
            survey.
          </p>
        </div>
      </div>

      <div className="w-full border-t px-4 border-[#F0EFEC] py-5 flex items-center justify-between ">
        <p className="text-[#737373] text-[13px] font-[400] ">
          240 Articles, 340pg
        </p>

        <button className="flex items-center cursor-pointer border border-[#B3B3B3] rounded-md px-4 py-2 text-center justify-center gap-1 ">
          Read <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
};

export default Card;
