import React from "react";
import logo from "@/images/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full max-w-480 pt-11 pb-9 bg-black py-[14.5px] ">
      <div className="w-340 mx-auto  flex items-center justify-between  ">
        {/* logo div */}
        <div className="w-full flex items-start gap-15 justify-between ">
          {/* logo */}
          <div className="w-[40%] ">
            <div className="mb-3 ">
              <Image src={logo} alt="logo" width={80} height={45} />
            </div>

            <p className="text-[#737373] text-[13px] w-[80%] font-[400] ">
              An open-access magazine archive. Read and download thousands of
              peer-reviewed articles — always free, no sign-in required.
            </p>
          </div>

          {/* pages and sections */}
          <div className="w-full flex items-start justify-between text-[#737373] text-[13px] font-[400]  ">
            <div className="flex flex-col items-baseline justify-start ">
              <h2 className="mb-3 text-[15px] "> Explore</h2>
              <div className="flex flex-col items-baseline justify-start gap-1 ">
                <p>Browse All</p>
                <p>Latest Issues</p>
                <p>Categories</p>
                <p>Search</p>
              </div>
            </div>

            <div className="">
              <h2 className="mb-3 text-[15px] "> Subjects</h2>
              <div className="flex flex-col items-baseline justify-start gap-1">
                <p>Science</p>
                <p>Technology</p>
                <p>Arts & Culture</p>
                <p>Medicine</p>
                <p>History</p>
              </div>
            </div>

            <div className="">
              <h2 className="mb-3 text-[15px] "> About</h2>
              <div className="flex flex-col items-baseline justify-start gap-1">
                <p>About</p>
                <p>Privacy</p>
                <p>Terms of Use</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>

        {/* copuright */}
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
