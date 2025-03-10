import HeaderBack from "@components/HeaderBack";
import StatusBar from "@components/StatusBar";
import React from "react";
import Review from "@components/Review";
const page = () => {
  return (
    <div>
      <StatusBar />
      <HeaderBack />
      <Review />
    </div>
  );
};

export default page;
