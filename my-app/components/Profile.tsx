"use client";
import image from "@assets/image";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// interface ProfileProps {
//   user: {
//     name?: string | null;
//     email?: string | null;
//     image?: string | null;
//   };
// }
const Profile: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/home");
  };
  const { data: session } = useSession();

  return (
    <div className=" ml-6 mr-6">
      <div className=" mt-2 rounded-lg p-1 flex items-center justify-start gap-2 border-[#FFEAAC] border">
        <div className="relative w-[30] h-[30]">
          {" "}
          <Image
            onClick={handleClick}
            src={session?.user.image || ""}
            alt=""
            fill
            className="w-10 h-10 rounded-full"
          />
        </div>

        <h1 className="font-unicorn">
          {session?.user.name || "Chưa đăng nhập"}
        </h1>
        <div className="w-4 h-4 relative">
          {" "}
          <Image src={image.male} alt="" fill className="absolute" />
        </div>
      </div>
      <Image className="mt-2 w-[350px] h-[120px]" src={image.banner} alt="" />
    </div>
  );
};

export default Profile;
