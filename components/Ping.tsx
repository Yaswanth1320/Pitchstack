import React from "react";

const Ping = () => {
  return (
    <div className="relative">
      <div className="absolute -left-6 top-3">
        <span className="flex size-[11px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#007BFF] opacity-75"></span>
          <span className="relative inline-flex size-[11px] rounded-full bg-[#007BFF]"></span>
        </span>
      </div>
    </div>
  );
};

export default Ping;
