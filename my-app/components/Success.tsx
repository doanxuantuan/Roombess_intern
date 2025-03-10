"use client";
import image from "@assets/image";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
const Success = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <main className="flex flex-col items-center justify-center h-[90vh] ">
        <Image
          src={image.success}
          alt="Success"
          className="w-[150px] h-[150px]"
        />
        <h1 className="mt-4 text-center font-bold text-xl leading-6">
          Your Review was submitted successfully!
        </h1>
      </main>
    </div>
  );
};

export default Success;
