import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const ThisWeek = () => {
  return (
    <div className="w-full bg-[#F2F0EB] max-w-480 py-16 ">
      <div className="w-340 mx-auto">
        {/* header */}
        <div className="w-full flex mb-8 items-center justify-between ">
          <div className="flex items-center justify-center gap-3 ">
            <div className="h-0.5 w-5 bg-[#C8401A] rounded-md "></div>
            <h1 className="font-[400] text-[36px] ">Featured This Week</h1>
          </div>

          <button className="border flex items-center justify-center gap-2 cursor-pointer border-[#B3B3B3] rounded-md py-2 px-4 ">
            All issues <BiRightArrowAlt />
          </button>
        </div>

        {/* content */}
        <div className="bg-white shadow-2xl flex justify-between rounded-md px-10 ">
          {/* left side */}
          <div className=" w-70 flex items-center justify-center h-135 bg-[#2D1208] px-7 ">
            <div className="h-[75%] flex flex-col items-center justify-start py-5 px-5 bg-amber-950 text-white/85">
              <p className="font-[play400] text-[15px] mb-7 ">
                Archeology Science
              </p>

              <p className="font-[play400] text-[36px] mb-7 ">24</p>

              <div className="w-[70%] h-px rounded-xl bg-white/80 mb-7 "></div>

              <p className="font-[play400] text-[36px] mb-7 text-center w-full">
                Deep Ocean Frontiers
              </p>

              <p className="font-[play400] text-[15px]">Winter 2025</p>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col py-12 w-[70%] items-start justify-start ">
            <div className="flex w-full items-center justify-start gap-4 ">
              <div className="bg-[#FFF4E0] rounded-md border border-[#F5DFA0] px-2.5 py-0.75 ">
                <p className="text-[#C9963A] text-base font-[400] ">
                  ★ Featured Issue
                </p>
              </div>

              <div className="bg-[#E8EDFF] rounded-md px-2.5 py-0.75 ">
                <p className="text-[#3B5BDB] text-base font-[400] ">
                  Open Access
                </p>
              </div>
            </div>

            <div className="w-full items-center mb-4 justify-start mt-[14.5px] ">
              <p className="uppercase text-[13px] text-[#737373] font-[400] ">
                FOLIO Science — Volume 12
              </p>
            </div>

            <div className="text-start mb-4 ">
              <h1 className="text-[#0D0D0D] font-[play400] leading-14 text-[48px] ">
                Deep Ocean Frontiers: Mapping the Unexplored 95%
              </h1>
            </div>

            <div className="w-[40%] text-start mb-4 ">
              <p className="text-[#737373] text-base ">
                Eighteen researchers, twelve institutions. This landmark issue
                brings together the most comprehensive survey of deep-sea
                biodiversity, hydrothermal vent ecosystems, and abyssal plain
                geology published in over a decade.
              </p>
            </div>

            <div className="w-full flex items-center justify-start gap-8 ">
                <div className="leading-5.5 ">
                    <p className="text-[#0D0D0D] font-[play400] text-[28px] ">24</p>
                    <p className="uppercase text-[#737373] text-[12px] font-[400] ">Articles</p>
                </div>

                <div className="leading-5.5  ">
                    <p className="text-[#0D0D0D] font-[play400] text-[28px] ">8400</p>
                    <p className="uppercase text-[#737373] text-[12px] font-[400] ">Downloads</p>
                </div>

                <div className="leading-5.5  ">
                    <p className="text-[#0D0D0D] font-[play400] text-[28px] ">340pp</p>
                    <p className="uppercase text-[#737373] text-[12px] font-[400] ">Pages</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisWeek;
