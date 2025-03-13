"use client";
import React from "react";
import InfoRoommate from "./InfoRoommate";
import info from "../src/assets/info";

import { useRouter } from "next/navigation";
const Roommate = () => {
  const router = useRouter();
  const handleClick = (path: string): void => {
    router.push(path);
  };
  return (
    <div className="ml-6 mr-6 mt-4 grid grid-cols-3">
      {info.map((value) => {
        return (
          <div className="mt-2" key={value.id}>
            <InfoRoommate
              onClick={() => handleClick("/review")}
              avatar={value.avatar}
              name={value.name}
              gender={value.gender}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Roommate;
