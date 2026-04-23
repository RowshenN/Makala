"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Pagination } from "antd";

import Card from "@/components/Card";
import { useGetIssuesQuery } from "@/redux/services/issueApi";
import { useGetCategoriesQuery } from "@/redux/services/categoryApi";
import { useGetMagazinesQuery } from "@/redux/services/magazineApi";

// Internal component to handle the search logic
const SearchContent = () => {
  const searchParams = useSearchParams();

  const query = searchParams.get("search") || "";

  const [search, setSearch] = useState(query);
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState<string | undefined>();
  const [magazineId, setMagazineId] = useState<string | undefined>();

  const { data, isLoading } = useGetIssuesQuery({
    page,
    limit: 8,
    search,
    categoryId,
    magazineId,
  });

  const { data: categories } = useGetCategoriesQuery();
  const { data: magazines } = useGetMagazinesQuery();

  const issues = data?.data || [];
  const total = data?.total || 0;

  // 🔥 IMPORTANT: update when URL changes
  useEffect(() => {
    setSearch(query);
    setPage(1);
  }, [query]);

  return (
    <div className="w-full max-w-480 py-12">
      <div className="w-340 mx-auto flex gap-8">
        {/* LEFT FILTERS */}
        <div className="w-[20%]">
          {/* CATEGORY */}
          <div className="mb-6">
            <div className="w-full flex items-center justify-between mb-3">
              <p className="text-[#737373] mb-3">Category</p>
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

            {categories?.map((cat) => (
              <p
                key={cat.id}
                onClick={() => {
                  setCategoryId(cat.id);
                  setPage(1);
                }}
                className={`cursor-pointer py-1 ${
                  categoryId === cat.id ? "text-[#C8401A]" : ""
                }`}
              >
                {cat.name}
              </p>
            ))}
          </div>

          {/* MAGAZINE */}
          <div>
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

            {magazines?.map((mag) => (
              <p
                key={mag.id}
                onClick={() => {
                  setMagazineId(mag.id);
                  setPage(1);
                }}
                className={`cursor-pointer py-1 ${
                  magazineId === mag.id ? "text-[#C8401A]" : ""
                }`}
              >
                {mag.title}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT RESULTS */}
        <div className="w-[80%]">
          {/* HEADER */}
          <div className="mb-6">
            <p>
              Showing {total} {total === 1 ? "result" : "results"}{" "}
              {search && `for "${search}"`}
            </p>
          </div>

          {/* RESULTS */}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-3 gap-6">
              {issues.map((issue) => (
                <Card key={issue.id} issue={issue} />
              ))}
            </div>
          )}

          {/* PAGINATION */}
          <div className="flex justify-center mt-10">
            <Pagination
              current={page}
              pageSize={8}
              total={total}
              onChange={(p) => setPage(p)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Exported Component
const SearchPage = () => {
  return (
    <Suspense fallback={<div className="p-20 text-center">Loading Search...</div>}>
      <SearchContent />
    </Suspense>
  );
};

export default SearchPage;