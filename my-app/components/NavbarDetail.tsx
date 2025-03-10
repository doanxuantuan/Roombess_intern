import Image from "next/image";
import React from "react";

const NavbarDetail = () => {
  return (
    <div className="ml-[56px] flex border shadow-2xl w-[271px] h-[76px] gap-[10px] rounded-full justify-center">
      <Image src="/backDetail.svg" alt="" width={56} height={56} />
      <Image src="/messDetail.svg" alt="" width={56} height={56} />
      <Image src="/heartDetail.svg" alt="" width={56} height={56} />
    </div>
  );
};

export default NavbarDetail;
