import Image from "next/image";
import React from "react";

const NavbarDetail = () => {
  return (
    <>
      <div className="ml-[56px] items-center flex border shadow-2xl w-[271px] h-[76px] gap-[10px] rounded-full justify-center">
        <div className="relative w-[56] h-[56] shadow-2xl  rounded-full">
          {" "}
          <Image className="absolute" src="/backDetail.svg" alt="" fill />
        </div>
        <div className="relative w-[56] h-[56]  rounded-full">
          {" "}
          <Image className="absolute" src="/messDetail.svg" alt="" fill />
        </div>
        <div className="relative w-[56] h-[56]  rounded-full">
          {" "}
          <Image
            src="/heartDetail.svg"
            className="absolute rounded-full"
            alt=""
            fill
          />
        </div>
      </div>{" "}
    </>
  );
};

export default NavbarDetail;
