import Image from "next/image";
import React from "react";

import logo from "@/images/logo.svg";
import Link from "next/link";

const Navigation = () => {
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
        <div className="flex font-[400] items-center justify-center gap-6 ">
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
          <input
            type="search"
            placeholder="Search.. "
            className="outline-0 bg-[#F0EFEC] w-full py-2 px-3 "
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
