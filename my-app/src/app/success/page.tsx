"use client";
import HeaderBack from "@components/HeaderBack";
import StatusBar from "@components/StatusBar";
import Success from "@components/Success";

const page = () => {
  return (
    <div>
      <StatusBar />
      <HeaderBack />
      <main>
        <Success />
      </main>
    </div>
  );
};

export default page;
