"use client";

import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Card from "../Card";

import { useState } from "react";
import { useGetLatestIssuesQuery } from "@/redux/services/issueApi";
import { useGetCategoriesQuery } from "@/redux/services/categoryApi";

const LastIssues = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { data: categories } = useGetCategoriesQuery();

  const { data: issues, isLoading } = useGetLatestIssuesQuery({
    limit: 4,
    categoryId: selectedCategory || undefined,
  });

  if (!issues) {
    return (
      <div>
        <h1>There is no Issues</h1>
      </div>
    );
  }

  return (
    <div className="w-full max-w-480 py-16 ">
      <div className="w-340 mx-auto">
        {/* header */}
        <div className="w-full flex mb-8 items-center justify-between ">
          <div className="flex items-center justify-center gap-3 ">
            <div className="h-0.5 w-5 bg-[#C8401A] rounded-md "></div>
            <h1 className="font-sans font-normal text-[36px] ">Last Issues</h1>
          </div>

          <div className="flex items-center justify-center gap-2 ">
            {/* ALL BUTTON */}
            <div
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full cursor-pointer px-3.5 py-1 ${
                selectedCategory === null
                  ? "bg-black text-white"
                  : "border text-[#404040]"
              }`}
            >
              <p>All</p>
            </div>

            {/* DYNAMIC CATEGORIES */}
            {categories?.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full cursor-pointer px-3.5 py-1 ${
                  selectedCategory === cat.id
                    ? "bg-black text-white"
                    : "border text-[#404040]"
                }`}
              >
                <p>{cat.name}</p>
              </div>
            ))}

            {/* <button className="border flex items-center gap-2 cursor-pointer border-[#B3B3B3] rounded-md py-1 px-4 ">
              All issues <BiRightArrowAlt />
            </button> */}
          </div>
        </div>

        {/* cards */}
        <div className="w-full grid gap-6 grid-cols-4 ">
          {isLoading && <p>Loading...</p>}

          {issues?.map((issue) => (
            <Card key={issue.id} issue={issue} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastIssues;
