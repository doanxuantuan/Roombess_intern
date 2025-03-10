// filepath: /C:/Users/xuantuan/OneDrive - Ho Chi Minh city University of Industry and Trade/Desktop/NextJs_Intern/my-app/Components/Header.tsx
import image from "@assets/image";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <h1 className="font-unicorn col-span-2 flex justify-end mr-[25]">
        ROOMBEES
      </h1>
      <Image
        className="col-span-1 ml-[60] "
        src={image.message}
        alt="Message Icon"
      />
    </div>
  );
};

export default Header;
