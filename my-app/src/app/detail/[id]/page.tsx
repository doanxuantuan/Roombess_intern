import InforDetail from "@components/InforDetail";
import StatusBar from "@components/StatusBar";
import NavbarDetail from "@components/NavbarDetail";
import React from "react";
import Indicator from "@components/Indicator";

const page = () => {
  return (
    <div>
      <StatusBar />
      <h1 className="font-unicorn text-center text-3xl">ROOMBEES</h1>
      <InforDetail />
      <NavbarDetail />
      <div className="mb-4 h-[34px]">
        {" "}
        <Indicator />
      </div>
    </div>
  );
};

export default page;
