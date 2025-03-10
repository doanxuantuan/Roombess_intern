"use client";
import image from "@assets/image";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
const Profile = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/home");
  };
  return (
    <div className=" ml-6 mr-6">
      <div className=" mt-2 rounded-lg p-1 flex items-center justify-start gap-2 border-[#FFEAAC] border">
        <Image
          onClick={handleClick}
          src={image.avatar}
          alt=""
          className="w-10 h-10"
        />
        <h1 className="font-unicorn">Jhon snow</h1>
        <Image src={image.male} alt="" className="w-4 h-4" />
      </div>
      <Image className="mt-2 w-[350px] h-[120px]" src={image.banner} alt="" />
    </div>
  );
};

export default Profile;
