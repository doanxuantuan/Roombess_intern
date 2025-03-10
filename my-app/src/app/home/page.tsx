"use client";
import Header from "@components/Header";
import StatusBar from "@components/StatusBar";
import InforUser from "@components/InforUser";
import BottomNav from "@components/BottomNav";

export default function Page() {
  return (
    <div>
      <StatusBar />
      <Header />
      <InforUser />

      <BottomNav />
    </div>
  );
}
