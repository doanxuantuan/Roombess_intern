import React, { ReactNode } from "react";

import Image from "@components/Image";

interface Props {
  onBack?: () => void;
  navigator: ReactNode;
}

const Heading = ({ onBack, navigator }: Props) => {
  return (
    <header className="relative mt-4 px-5">
      <div className="text-3xl text-center font-secondary text-base-black">
        Roombees
      </div>
      <div className="flex items-center mt-6">
        <Image
          src="/back.svg"
          alt=""
          className=" size-8 text-base-black"
          onClick={onBack}
        />
        {navigator}
      </div>
    </header>
  );
};

export default Heading;
