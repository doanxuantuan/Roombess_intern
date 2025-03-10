import HeaderBack from "@components/HeaderBack";
import Roommate from "@components/Roommate";
import StatusBar from "@components/StatusBar";
import React from "react";
import YourHome from "@components/YourHome";
const page = () => {
  return (
    <div>
      <StatusBar />
      <HeaderBack />
      <Roommate />
      <YourHome />
    </div>
  );
};

export default page;
