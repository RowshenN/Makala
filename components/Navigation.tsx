"use client"

import Image from "next/image";
import React, { useState } from "react";

import logo from "@/images/logo.svg";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-full max-w-480 bg-[#FAF9F6] py-[14.5px] ">
      <div className="w-340 mx-auto  flex items-center justify-between">
        {/* logo */}
        <div className=" ">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={80} height={45} />
          </Link>
        </div>

        {/* sections */}
        <div className="flex font-sans font-normal items-center justify-center gap-6 ">
          <p>Categories</p>
          <p>New Issues</p>
          <Link href={"/about"}>
            <p>About</p>
          </Link>
          <Link href={"/contact"}>
            <p>Contact</p>
          </Link>
        </div>

        {/* search */}
        <div className="w-[30%] ">
          <div className="w-full flex items-start justify-center gap-1 ">
            <input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
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
              className="flex items-center gap-2 justify-center cursor-pointer text-[14px] font-sans font-normal py-3.75 px-4 bg-[#0D0D0D] text-white rounded-xl "
            >
              <BiSearchAlt className="text-[16px] " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
