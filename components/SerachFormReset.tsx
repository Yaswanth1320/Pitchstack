"use client";

import { X } from "lucide-react";
import Link from "next/link";

const SerachFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
    console.log("Form reset");
  };
  return (
    <button type="reset" onClick={reset}>
      <Link
        href={"/"}
        className="size-[40px]  bg-black flex justify-center items-center !important text-white"
      >
        <X className="size-5"/>
      </Link>
    </button>
  );
};

export default SerachFormReset;
