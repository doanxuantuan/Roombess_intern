import React from "react";
import Image from "next/image";
const Indicator = () => {
  return (
    <div className="fixed bottom-0  w-full flex justify-center mb-4">
      <Image src="/HomeIndicator.png" width={134} height={5} alt="" />
    </div>
  );
};

export default Indicator;
