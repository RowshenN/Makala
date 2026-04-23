import { Issue } from "@/types/issue";
import Link from "next/link";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Card = ({ issue }: { issue: Issue }) => {
  return (
    <Link href={`/issue/${issue.id}`}>
      <div className="shadow-xl rounded-md ">
        <div className="bg-[#2D1208] py-4 px-3.5 h-85 rounded-tr-md rounded-tl-md relative ">
          <p className="text-white/60 text-[14px] mb-4 font-[play400] ">
            {issue.magazine?.title}
          </p>

          <p className="text-white/60 text-[28px] mb-4 font-[play400]">
            {issue.week}
          </p>

          <p className="text-white/60 text-[15px] font-[play400]">
            {issue.title}
          </p>

          <p className="text-white/60 text-[13px] absolute bottom-3 left-3 font-[play400]">
            {issue.year}
          </p>
        </div>

        <div className="w-full pt-4 px-4 border-b border-[#F0EFEC] ">
          <div className="w-full mb-2 flex items-center justify-between ">
            <div className="bg-[#F0EFEC] px-2.5 py-0.75 rounded-md text-center ">
              <p className="text-[13px] text-[#404040] font-sans font-normal">
                {issue.category?.name}
              </p>
            </div>

            <p className="text-[#737373] text-[13px] font-sans font-normal">
              {issue.year}
            </p>
          </div>

          <div className="w-full h-[170px]">
            <p className="mb-2 text-[#0D0D0D] text-[22px] font-[play-400] ">
              {issue.title}
            </p>
            <p className="text-[#404040] line-clamp-3 text-[14px] font-sans font-normalw-[80%] ">
              {issue.description}
            </p>
          </div>
        </div>

        <div className="w-full px-4 py-5 flex items-center justify-between ">
          <p className="text-[#737373] text-[13px] font-sans font-normal">
            {issue.articles?.length || 0} Articles, {issue.pageCount}pg
          </p>

          <button className="flex items-center cursor-pointer border border-[#B3B3B3] rounded-md px-4 py-2 text-center justify-center gap-1 ">
            Read <BiRightArrowAlt />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
