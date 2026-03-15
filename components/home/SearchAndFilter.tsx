import React from "react";
import SearchResultCard from "./SearchResultCard";

const SearchAndFilter = () => {
  return (
    <React.Fragment>
      <div className="w-full bg-[#F2F0EB] max-w-480 py-8 ">
        <div className="w-340 mx-auto">
          {/* search header */}
          <div className="w-full flex items-center justify-start gap-4 ">
            <input
              type="search"
              className=" bg-white w-[40%] text-[#0D0D0D] text-base font-[400] py-2 px-3 rounded-md border border-[#B3B3B3] outline-0  "
              placeholder="Search..."
            />
            <button className="bg-black rounded-md outline-0 text-white text-center py-2 px-4 text-[14px] font-[400] cursor-pointer ">
              Search
            </button>
            <p className="text-[#737373] text-[13px] font-[400] ">
              142 results
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-480 pb-16">
        <div className="w-340 py-8 flex items-start justify-between gap-8 mx-auto">
          {/* left sidebar */}
          <div className="w-[20%] py-[23px] ">
            <div className="w-full mb-6 ">
              <p className="w-full text-[#737373] font-[400] text-[14px] mb-3 ">
                Category
              </p>
              <div className="flex px-1 flex-col items-baseline justify-start">
                <p className="py-2 text-[#C8401A] text-[14px] font-[400] cursor-pointer hover:text-[#C8401A]  ">
                  Technology
                </p>
                <p className="py-2 text-[14px] font-[400] cursor-pointer hover:text-[#C8401A] ">Science</p>
                <p className="py-2 text-[14px] font-[400] cursor-pointer hover:text-[#C8401A] ">Engineering</p>
                <p className="py-2 text-[14px] font-[400] cursor-pointer hover:text-[#C8401A] ">Mathematics</p>
              </div>
            </div>

            <div className="w-full mb-6 ">
              <p className="w-full text-[#737373] font-[400] text-[14px] mb-3 ">
                Publication Year
              </p>
              <div className="flex px-1 flex-col items-baseline justify-start">
                <p className="py-2 text-[#C8401A] text-[14px] font-[400] cursor-pointer hover:text-[#C8401A]  ">
                  2025
                </p>
                <p className="py-2 text-[14px] font-[400] cursor-pointer hover:text-[#C8401A] ">2024</p>
                <p className="py-2 text-[14px] font-[400] cursor-pointer hover:text-[#C8401A] ">2023</p>
                <p className="py-2 text-[14px] font-[400] cursor-pointer hover:text-[#C8401A] ">2022</p>
              </div>
            </div>

            <div className="w-full mb-6 ">
              <p className="w-full text-[#737373] font-[400] text-[14px] mb-3 ">
                Magazine
              </p>
              <div className="flex px-1 flex-col items-baseline justify-start">
                <p className="py-2  text-[14px] font-[400] cursor-pointer hover:text-[#C8401A]  ">
                  FOLIO Technology
                </p>
                <p className="py-2 text-[14px] font-[400] cursor-pointer hover:text-[#C8401A] ">FOLIO Science</p>
                <p className="py-2 text-[14px] font-[400] cursor-pointer hover:text-[#C8401A] ">
                  {" "}
                  FOLIO Engineering
                </p>
              </div>
            </div>
          </div>

          {/* right results */}
          <div className="w-[80%] ">
            {/* header */}
            <div className="w-full py-[7.5px] flex items-start justify-start ">
                <p className="">Showing 142 results for "quantum computing"</p>
            </div>

            <div className="w-full flex flex-col items-baseline justify-start divide-y divide-[#F0EFEC] ">
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
            </div>


            <div className="bg-amber-950 text-white text-[20px] w-full flex items-center justify-center mt-8 ">
                Pagination
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchAndFilter;
