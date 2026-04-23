"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import DOMPurify from "dompurify";

import pdfImage from "@/images/pdfImage.png";
import share from "@/images/share.png";
import { useGetIssueByIdQuery } from "@/redux/services/issueApi";

const page = () => {
  const params = useParams();
  const id = params.id as string;
  const slug = params.slug as string;

  const { data, isLoading } = useGetIssueByIdQuery(id);
    const [copied, setCopied] = useState(false);
  

  const issue = data;

  useEffect(() => {
    if (slug) {
      const el = document.getElementById(slug);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [slug, issue]);

  if (isLoading) return <p>Loading...</p>;
  if (!issue) return <p>There is no such issue</p>;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="w-full max-w-[1920px] bg-[#0D0D0D] py-10 ">
        <div className="w-340 mx-auto flex items-start justify-between">
          <div className="w-1/2  ">
            <div className="bg-[#E8EDFF] w-fit py-0.5 px-2.5 text-center rounded-md mb-4 ">
              <p className="font-sans font-normal text-[#3B5BDB] text-[13px] tracking-[1.5px] ">
                {issue.category?.name}
              </p>
            </div>

            <h1 className="text-[57px] text-[#FAF9F6] font-[play400] mb-4 leading-16 ">
              {issue.title}
            </h1>

            <div className="w-full flex text-[#737373] font-sans font-normal text-[12px] items-center justify-start gap-9 ">
              <p>{issue.magazine?.title}</p>
              <p>Published {issue.year}</p>
              <p>{issue.pageCount} pages</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-col items-baseline justify-center gap-3 ">
            {/* KEEP THESE BOXES (UNCHANGED) */}
            <div className="w-full bg-[#FFFFFF0A] border border-[#FFFFFF14] rounded-md py-4 px-6 flex items-center justify-between">
              <div className="flex items-center justify-start">
                <Image
                  width={66}
                  height={66}
                  className=" object-contain"
                  src={pdfImage}
                  alt="pdfIcon"
                />

                <div className="flex flex-col items-baseline justify-start">
                  <p className="text-[14px] font-sans font-normal text-[#FAF9F6] ">
                    Full Article
                  </p>

                  <p className="text-[12px] font-sans font-normal text-[#737373]  ">
                    {issue.pageCount} pages
                  </p>
                </div>
              </div>

              <button className="bg-[#C8401A] rounded-md py-2 px-4 text-[#FFFFFF] font-sans font-normal text-[14px] cursor-pointer ">
                Download
              </button>
            </div>

            <div className="w-full bg-[#FFFFFF0A] border border-[#FFFFFF14] rounded-md py-4 px-6 flex items-center justify-between">
              <div className="flex items-center justify-start">
                <Image
                  width={66}
                  height={66}
                  className=" object-contain"
                  src={share}
                  alt="shareIcon"
                />

                <div className="flex flex-col items-baseline justify-start">
                  <p className="text-[14px] font-sans font-normal text-[#FAF9F6] ">
                    Share Link
                  </p>

                  <p className="text-[12px] tracking-widest font-sans uppercase font-normal text-[#737373]  ">
                    Permanent URL
                  </p>
                </div>
              </div>

              <button onClick={handleCopy} className="rounded-md py-2 px-4 border border-[#FFFFFF33] text-[#B3B3B3] font-sans font-normal text-[14px] cursor-pointer ">
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F5F5F5] py-10">
        <div className="w-340 mx-auto">
          <div className="flex flex-col">
            {issue.articles?.map((article) => (
              <div
                id={article.slug}
                key={article.id}
                className="bg-white w-[794px] mx-auto p-10 rounded-md"
              >
                <h2 className="text-[28px] mb-6 font-[play400]">
                  {article.title}
                </h2>

                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(article.content),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
