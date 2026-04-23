"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetIssuesQuery } from "@/redux/services/issueApi";
import { BiSearchAlt } from "react-icons/bi";

const HomeMain = () => {
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setSearch(inputValue);
    }, 400);

    return () => clearTimeout(delay);
  }, [inputValue]);

  const { data, isLoading } = useGetIssuesQuery(
    {
      page: 1,
      limit: 10,
      search,
    },
    {
      skip: !search, // don't call if empty
    },
  );

  const issues = data?.data || [];

  useEffect(() => {
    const handleClickOutside = () => setShowDropdown(false);
    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

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
              <p className=" text-[14px] font-sans font-normal text-[#737373] ">
                Articles
              </p>
            </div>

            <div className="flex flex-col items-baseline justify-start gap-0.5 ">
              <p className="text-[36px] font-[play500] ">38</p>
              <p className="text-[14px] font-sans font-normal text-[#737373] ">
                Magazines
              </p>
            </div>

            <div className="flex flex-col items-baseline justify-start gap-0.5 ">
              <p className="text-[36px] font-[play500]">12</p>
              <p className="text-[14px] font-sans font-normal text-[#737373] ">
                Subjects
              </p>
            </div>
          </div>
        </div>

        {/* search div */}
        <div className="w-1/2 border border-[#D9D9D9] rounded-md py-2 px-2 shadow-lg ">
          <div className="w-full " onClick={(e) => e.stopPropagation()}>
            <div className="w-full flex gap-2 items-start justify-between ">
              <input
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setShowDropdown(true);
                }}
                placeholder="Search for articles, magazines, topics…"
                className="bg-[#F0EFEC] py-3 px-3 rounded-md outline-0 w-[80%] mb-2 "
                type="search"
              />

              <button
                onClick={() => {
                  if (!inputValue) return;
                  router.push(`/search?search=${inputValue}`);
                }}
                className="flex items-center gap-2 justify-center cursor-pointer text-[14px] font-sans font-normal w-[30%] bg-[#0D0D0D] text-white rounded-md py-3.25 "
              >
                <BiSearchAlt className="text-[16px] " /> Search
              </button>
            </div>

            {showDropdown && search && (
              <div className="bg-white border border-[#D9D9D9] rounded-md mt-2 shadow-md max-h-80 overflow-y-auto">
                {isLoading ? (
                  <p className="p-3 text-sm">Loading...</p>
                ) : issues.length > 0 ? (
                  <>
                    {issues.slice(0, 10).map((issue) => (
                      <div
                        key={issue.id}
                        onClick={() => router.push(`/issue/${issue.id}`)}
                        className="p-3 cursor-pointer hover:bg-[#F5F5F5] border-b border-gray-300"
                      >
                        <p className="text-sm font-medium">{issue.title}</p>
                        <p className="text-xs text-gray-500">
                          {issue.magazine?.title}
                        </p>
                      </div>
                    ))}

                    {/* SEE ALL */}
                    <div
                      onClick={() => router.push(`/search?search=${search}`)}
                      className="p-3 text-center cursor-pointer text-[#C8401A] font-medium hover:bg-[#F5F5F5]"
                    >
                      See all results →
                    </div>
                  </>
                ) : (
                  <p className="p-3 text-sm text-gray-500">No results found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
