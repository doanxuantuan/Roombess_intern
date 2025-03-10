"use client";
import React from "react";
import { CustomButton, CustomButtonBottom } from "./CustomButton";
import image from "@assets/image";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MainProfile = () => {
  const router = useRouter();

  const handleClick = (path: string): void => {
    router.push(path);
  };

  return (
    <div className="ml-6 mr-6 md:iphone-13:">
      <div className="grid mt-2 gap-4 grid-cols-2 grid-rows-2">
        <CustomButton
          onClick={() => handleClick("/review")}
          styles=""
          icon={image.listing}
          title="Your listing's"
        />
        <CustomButton
          onClick={() => handleClick("/review")}
          styles=""
          icon={image.liked}
          title="Like's"
        />
        <CustomButton
          onClick={() => handleClick("/review")}
          styles=""
          icon={image.booking}
          title="Your Booking's"
        />
        <CustomButton
          onClick={() => handleClick("/review")}
          styles=""
          icon={image.agreement}
          title="Agreement Gen"
        />
      </div>
      <div className="flex flex-col items-center mt-4">
        <CustomButtonBottom
          onClick={() => handleClick("/roommate")}
          styles=""
          icon={image.love}
          title="Review Room/Roommate"
        />
        <CustomButtonBottom
          onClick={() => handleClick("/review")}
          styles="bg-[#FFFBEF]"
          icon={image.share}
          title="Refer a Friend earn free subscription"
        />
        <CustomButtonBottom
          onClick={() => handleClick("/review")}
          styles=""
          icon={image.help}
          title="Help & Support"
        />
        <CustomButtonBottom
          onClick={() => handleClick("/review")}
          styles=""
          icon={image.settings}
          title="Settings"
        />
      </div>
      <button className="border font-bold w-full h-10 justify-center rounded-lg mt-2 flex items-center">
        Logout
      </button>
      <Image className="fixed bottom-0 w-[360] " src={image.bottomNav} alt="" />
    </div>
  );
};

export default MainProfile;
