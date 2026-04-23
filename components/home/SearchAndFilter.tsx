"use client";

import React, { useState, useEffect } from "react";
import SearchResultCard from "./SearchResultCard";
import { useGetCategoriesQuery } from "@/redux/services/categoryApi";
import { useGetMagazinesQuery } from "@/redux/services/magazineApi";
import { Pagination } from "antd";

import { useGetIssuesQuery } from "@/redux/services/issueApi";

const SearchAndFilter = () => {
  const [categoryId, setCategoryId] = useState<string | undefined>();
  const [magazineId, setMagazineId] = useState<string | undefined>();
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetIssuesQuery({
    page,
    limit: 5,
    categoryId,
    magazineId,
    search,
  });

  const { data: categories } = useGetCategoriesQuery();
  const { data: magazines } = useGetMagazinesQuery();

  const issues = data?.data || [];
  const total = data?.total || 0;

  useEffect(() => {
    const delay = setTimeout(() => {
      setSearch(inputValue);
      setPage(1);
    }, 400);

    return () => clearTimeout(delay);
  }, [inputValue]);

  return (
    <React.Fragment>
      <div className="w-full bg-[#F2F0EB] max-w-480 py-8 ">
        <div className="w-340 mx-auto">
          {/* search header */}
          <div className="w-full flex items-center justify-start gap-4 ">
            <input
              type="search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="bg-white w-[40%] text-[#0D0D0D] text-base font-sans font-normal py-2 px-3 rounded-md border border-[#B3B3B3] outline-0"
              placeholder="Search..."
            />

            <button
              onClick={() => {
                setSearch(inputValue);
                setPage(1);
              }}
              className="bg-black rounded-md text-white py-2 px-4 text-[14px] cursor-pointer"
            >
              Search
            </button>

            {/* ✅ CANCEL BUTTON */}
            {search && (
              <button
                onClick={() => {
                  setSearch("");
                  setInputValue("");
                  setPage(1);
                }}
                className="text-[#C8401A] text-[14px] cursor-pointer"
              >
                ✕ Clear
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-480 pb-16">
        <div className="w-340 py-8 flex items-start justify-between gap-8 mx-auto">
          {/* left sidebar */}
          <div className="w-[20%] py-5.75 ">
            <div className="w-full mb-6 ">
              <div className="w-full flex items-center justify-between mb-3">
                <p className="text-[#737373] font-sans font-normal text-[14px]">
                  Category
                </p>

                {categoryId && (
                  <button
                    onClick={() => {
                      setCategoryId(undefined);
                      setPage(1);
                    }}
                    className="text-[12px] text-[#C8401A] cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex px-1 flex-col items-baseline justify-start">
                {categories?.map((cat) => (
                  <p
                    key={cat.id}
                    onClick={() => {
                      setCategoryId(cat.id);
                      setPage(1);
                    }}
                    className={`py-2 text-[14px] font-sans font-normal cursor-pointer hover:text-[#C8401A] ${
                      categoryId === cat.id ? "text-[#C8401A]" : ""
                    }`}
                  >
                    {cat.name}
                  </p>
                ))}
              </div>
            </div>

            <div className="w-full mb-6 ">
              <div className="w-full flex items-center justify-between mb-3">
                <p className="text-[#737373] font-sans font-normal text-[14px]">
                  Magazine
                </p>

                {magazineId && (
                  <button
                    onClick={() => {
                      setMagazineId(undefined);
                      setPage(1);
                    }}
                    className="text-[12px] text-[#C8401A] cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex px-1 flex-col items-baseline justify-start">
                {magazines?.map((mag) => (
                  <p
                    key={mag.id}
                    onClick={() => {
                      setMagazineId(mag.id);
                      setPage(1);
                    }}
                    className={`py-2 text-[14px] font-sans font-normal cursor-pointer hover:text-[#C8401A] ${
                      magazineId === mag.id ? "text-[#C8401A]" : ""
                    }`}
                  >
                    {mag.title}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* right results */}
          <div className="w-[80%] ">
            {/* header */}
            <div className="w-full py-[7.5px] flex items-start justify-start ">
              <p>
                Showing {total} {total > 1 ? "results" : "result"}{" "}
                {search && `for "${search}"`}
              </p>
            </div>

            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <div className="w-full flex flex-col items-baseline justify-start divide-y divide-[#F0EFEC] ">
                {issues.map((issue) => (
                  <SearchResultCard key={issue.id} issue={issue} />
                ))}
              </div>
            )}

            <div className="w-full flex justify-center mt-8">
              <Pagination
                current={page}
                pageSize={5}
                total={total}
                onChange={(p) => setPage(p)}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchAndFilter;
