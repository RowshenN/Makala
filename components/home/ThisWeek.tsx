"use client";

import React from "react";
// import { BiRightArrowAlt } from "react-icons/bi";
import { useGetThisWeekIssueQuery } from "@/redux/services/issueApi";
// import Image from "next/image";
// import { Issue, IssueWithArticles } from "@/types/Issue";
// import Link from "next/link";

const ThisWeek = () => {
  const { data, isLoading } = useGetThisWeekIssueQuery();

  if (isLoading) {
    return <div className="p-10">Loading...</div>;
  }

  if (!data) {
    return <div className="p-10">No issue this week</div>;
  }

  return (
    <div className="w-full bg-[#F2F0EB] max-w-480 py-16 ">
      <div className="w-340 mx-auto">
        {/* header */}
        <div className="w-full flex mb-8 items-center justify-between ">
          <div className="flex items-center justify-center gap-3 ">
            <div className="h-0.5 w-5 bg-[#C8401A] rounded-md "></div>
            <h1 className="font-sans font-normal text-[36px] ">
              Featured This Week
            </h1>
          </div>

          {/* <Link href={"/Issues"}>
            <button className="border flex items-center justify-center gap-2 cursor-pointer border-[#B3B3B3] rounded-md py-2 px-4 ">
              All issues <BiRightArrowAlt />
            </button>
          </Link> */}
        </div>

        {/* content */}
        <div className="bg-white shadow-2xl flex justify-between rounded-md px-10 ">
          {/* left */}
          <div className=" w-70 flex items-center justify-center h-135 bg-[#2D1208] px-7 ">
            <div className="h-[75%]">
              <img
                src={`${data.image}`}
                alt={`${data.title}`}
                className="object-cover w-full h-full rounded-md "
              />
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col py-12 w-[70%] items-start justify-start ">
            <div className="flex w-full items-center justify-start gap-4 ">
              <div className="bg-[#FFF4E0] rounded-md border border-[#F5DFA0] px-2.5 py-0.75 ">
                <p className="text-[#C9963A] text-base font-sans font-normal ">
                  ★ Featured Issue
                </p>
              </div>

              <div className="bg-[#E8EDFF] rounded-md px-2.5 py-0.75 ">
                <p className="text-[#3B5BDB] text-base font-sans font-normal ">
                  Open Access
                </p>
              </div>
            </div>

            <div className="w-full items-center mb-4 justify-start mt-[14.5px] ">
              <p className="uppercase text-[13px] text-[#737373] font-sans font-normal ">
                Issue — {data.category?.name}
              </p>
            </div>

            <div className="text-start mb-4 ">
              <h1 className="text-[#0D0D0D] font-[play400] leading-14 text-[48px] ">
                {data.title}
              </h1>
            </div>

            <div className="w-[40%] text-start mb-4 ">
              <p className="text-[#737373] text-base ">{data.description}</p>
            </div>

            <div className="w-full flex items-center justify-start gap-8 ">
              <div className="leading-5.5 ">
                <p className="text-[#0D0D0D] font-[play400] text-[28px] ">
                  {data.articles?.length || 0}
                </p>
                <p className="uppercase text-[#737373] text-[12px] font-sans font-normal ">
                  Articles
                </p>
              </div>

              <div className="leading-5.5  ">
                <p className="text-[#0D0D0D] font-[play400] text-[28px] ">
                  {data.pageCount}
                </p>
                <p className="uppercase text-[#737373] text-[12px] font-sans font-normal ">
                  Pages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisWeek;
