import React from "react";
import Image from "next/image";
const Indicator = () => {
  return (
    <div className="fixed bottom-0  w-full flex justify-center mb-4">
      <div className="relative w-[134px] h-[5px]">
        {" "}
        <Image
          className="absolute"
          src="/HomeIndicator.png"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt=""
        />
      </div>
    </div>
  );
};

export default Indicator;
