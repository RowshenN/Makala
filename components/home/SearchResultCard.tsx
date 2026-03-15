import React from "react";
import { GoDownload } from "react-icons/go";

const SearchResultCard = () => {
  return (
    <div className="w-full py-4 flex items-center justify-start gap-4 ">
      <div className="h-18 w-14 bg-[#1A0D2D] rounded-md ">
        {/* <img src="" alt="" /> */}
      </div>

      <div className="flex w-[77%] items-baseline justify-start flex-col gap-1 ">
        <p className="text-[18px] font-[400] ">Fault-Tolerant Quantum Computing: A 2025 Roadmap</p>

        <p className="text-[#737373] text-[12px] font-[400] ">FOLIO Technology · Vol.7 · 2025 · 28 pages</p>
      </div>

      <div className="flex items-center justify-center gap-4 ">
        <div className="bg-[#E8EDFF] text-[#3B5BDB] text-[12px] font-[400] py-1 px-2.5 rounded-md ">
          <p>Open Access</p>
        </div>
        <button className="border border-[#B3B3B3] rounded-md cursor-pointer py-1 px-4 ">
          <GoDownload />{" "}
        </button>
      </div>
    </div>
  );
};

export default SearchResultCard;
