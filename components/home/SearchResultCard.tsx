import React from "react";
import { GoDownload } from "react-icons/go";
import { Issue } from "@/types/issue";
import Link from "next/link";

const SearchResultCard = ({ issue }: { issue: Issue }) => {
  return (
    <Link href={`/issue/${issue.id}`} className="w-full">
      <div className="w-full py-4 flex items-center justify-start gap-4 ">
        <div className="h-18 w-14 bg-[#1A0D2D] rounded-md ">
          {/* optional image */}
          <img
            src={`${issue?.image}`}
            alt={`${issue?.image}`}
            className="w-full h-full object-cover rounded-md "
          />
        </div>

        <div className="flex w-[77%] items-baseline justify-start flex-col gap-1 ">
          <p className="text-[18px] font-sans font-normal ">{issue.title}</p>

          <p className="text-[#737373] text-[12px] font-sans font-normal ">
            {issue.magazine?.title} · {issue.year} · {issue.pageCount} pages
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 ">
          <div className="bg-[#E8EDFF] text-[#3B5BDB] text-[12px] font-sans font-normal py-1 px-2.5 rounded-md ">
            <p>Open Access</p>
          </div>
          <button className="border border-[#B3B3B3] rounded-md cursor-pointer py-1 px-4 ">
            <GoDownload />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultCard;
