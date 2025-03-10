import React from "react";
import Image from "next/image";
const BottomNav = () => {
  return (
    <div className="fixed bottom-0 w-full ml-6">
      <div className="relative w-[350] h-[50]">
        <Image src="/BottomNavBasic2.svg" fill alt="" />
      </div>
    </div>
  );
};

export default BottomNav;
