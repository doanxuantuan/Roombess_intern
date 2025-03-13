"use client";
import React from "react";
import Image from "next/image";
import image from "../src/assets/image";
import { useRouter } from "next/navigation";
const HeaderBack = () => {
  const router = useRouter();
  const handleClickBack = () => {
    router.back();
  };
  return (
    <div className="ml-6 grid grid-cols-3 gap-4 items-center">
      <Image
        onClick={handleClickBack}
        className="flex col-span-1 w-8 h-8"
        src={image.back}
        alt="Message Icon"
      />
      <h1 className="font-unicorn col-span-2 flex mr-2">ROOMBEES</h1>
    </div>
  );
};

export default HeaderBack;
