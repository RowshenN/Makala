import React from "react";

const page = () => {
  return (
    <div className="w-full max-w-480 bg-[#0D0D0D] py-3 ">
      <div className="w-340 mx-auto flex items-center justify-between">
        <div className="w-1/2  ">
          <div className="flex mb-4 items-center justify-start gap-2 ">
            <div className="h-px w-5 bg-[#C8401A] rounded-md "></div>
            <h1 className="font-[400] text-[13px] text-[#C8401A] uppercase tracking-[1.5px] ">
              Contact Folio
            </h1>
          </div>
          <h1 className="text-[57px] text-[#FAF9F6] font-[play400] leading-16 ">
            Let's start a{" "}
            <span className="font-[playitalic] text-amber-300 ">
              conversation.
            </span>
          </h1>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default page;
