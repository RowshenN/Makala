import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const HomeMain = () => {
  return (
    <div className="w-full max-w-480">
      <div className="w-340 mx-auto  py-15 flex items-center gap-16 justify-between">
        <div className="w-1/2 ">
          <div className="flex items-center justify-start gap-3 ">
            <div className="py-1 rounded-sm px-2 bg-[#C8401A] text-white ">
              Open Access
            </div>
            <p>No Sign in required</p>
          </div>

          <p className="w-[70%] font-[play900italic] text-[72px] p-0 m-0 leading-tight font-extrabold ">
            Every Issue{" "}
            <span className="italic text-[#C8401A] ">Every Article</span> Free
            to Read.{" "}
          </p>

          <p className="w-[70%] ">
            FOLIO is an open magazine archive. Search, read, and download
            thousands of peer- reviewed articles — completely free.
          </p>

          <div className="flex items-center justify-start mt-6 gap-8 ">
            <div className="flex flex-col items-baseline justify-start gap-0.5 ">
              <p className="text-[36px] font-[play500] ">
                4200 <sup>+</sup>
              </p>
              <p className=" text-[14px] font-[400] text-[#737373] ">
                Articles
              </p>
            </div>

            <div className="flex flex-col items-baseline justify-start gap-0.5 ">
              <p className="text-[36px] font-[play500] ">38</p>
              <p className="text-[14px] font-[400] text-[#737373] ">
                Magazines
              </p>
            </div>

            <div className="flex flex-col items-baseline justify-start gap-0.5 ">
              <p className="text-[36px] font-[play500]">12</p>
              <p className="text-[14px] font-[400] text-[#737373] ">Subjects</p>
            </div>
          </div>
        </div>

        {/* search div */}
        <div className="w-1/2 border border-[#D9D9D9] rounded-md py-2 px-2 shadow-lg ">
          <div className="w-full ">
            <div className="w-full flex gap-2 items-start justify-between ">
              <input
                placeholder="Search for articles, magazines, topics…"
                className="bg-[#F0EFEC] py-3 px-3 rounded-md outline-0 w-[80%] mb-2 "
                type="search"
              />
              <button className="flex items-center gap-2 justify-center cursor-pointer text-[14px] font-[400] w-[30%] bg-[#0D0D0D] text-white rounded-md py-3 ">
                <BiSearchAlt className="text-[16px] " /> Search
              </button>
            </div>

            <div className="w-full text-left ">
              <p className="text-[#737373] font-[400] text-[13px] ">
                Popular :{" "}
                <span className="text-[#C8401A] ">
                  {" "}
                  Quantum computing · climate science · neural networks
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
