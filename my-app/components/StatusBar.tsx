import Image from "next/image";
import React from "react";
import image from "@assets/image";
const StatusBar = () => {
  return (
    <div>
      <Image src={image.statusBar} className="w-[390px] h-[47px]" alt="" />
    </div>
  );
};

export default StatusBar;
