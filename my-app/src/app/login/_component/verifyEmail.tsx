"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/Tabs";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import Heading from "../../loginHome/component/Heading";

export default function EmailVerification() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [sentCode, setSentCode] = useState("");
  const [step, setStep] = useState(1); // 1: Nhập email, 2: Nhập mã xác minh
  const [error, setError] = useState("");
  const route = useRouter();

  const sendEmail = async () => {
    if (!email) return alert("Vui lòng nhập email");
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) {
      setSentCode(data.code);
      setIsCodeSent(true);
      setStep(2);
    } else {
      setError(data.message);
    }
  };
  const verifyCode = async () => {
    if (code === sentCode) {
      alert("Xác minh thành công! 🎉");
      route.push("/profile");
      window.location.href = "/profile";
    } else {
      alert("Mã xác minh không đúng!");
    }
  };

  const handleBack = () => {
    route.back();
  };

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeTab = searchParams.get("tab") || "tab1";

  const handleTabChange = (tab: string) => {
    router.push(`${pathname}?tab=${tab}`, { scroll: false });
  };

  return (
    <div>
      <Heading
        navigator={
          isCodeSent ? (
            <div className="abs-center-x font-bold font-sans text-[28px] ml-4 t-h3">
              Check your email
            </div>
          ) : (
            <div className="t-h1 ml-[18px] font-sans font-bold text-[28px]">
              Log in with
            </div>
          )
        }
        onBack={handleBack}
      />
      <Tabs
        defaultValue={activeTab}
        onValueChange={handleTabChange}
        className="w-full ml-6"
      >
        {step === 1 && (
          <TabsList className="flex mt-4 items-center justify-start gap-20">
            <TabsTrigger
              value="tab1"
              className="px-4 py-2 font-normal font-sans data-[state=active]:border-b-2 data-[state=active]:border-[#7F5F00]  data-[state=active]:text-[#7F5F00]"
            >
              Phone Number
            </TabsTrigger>
            <TabsTrigger
              value="tab2"
              className="px-4 py-2 font-normal font-sans data-[state=active]:border-b-2 data-[state=active]:text-[#7F5F00] data-[state=active]:border-[#7F5F00]"
            >
              Email
            </TabsTrigger>
          </TabsList>
        )}

        <TabsContent value="tab1">
          <p>Đây là nội dung của Tab 1.</p>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="rounded-lg w-[316px]">
            {step === 1 ? (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  // className="border-none p-2 w-full rounded-2xl mt-2 bg-[#FFF5D6] focus:outline-none"
                  // className={` p-2 w-full rounded-2xl mt-2 bg-[#FFF5D6] focus:outline-none ${
                  //   !verifyEmail ? "border-none" : "border border-red-700"
                  // }`}
                  className={`w-full focus:outline-none p-3 rounded-2xl mt-2 ml-4${
                    error ? "border-red-500 bg-red-100" : " bg-[#FFF5D6]"
                  }`}
                />
                <h1 className="text-red-600 text-[10px] mt-[2px] font-sans font-normal">
                  {error}
                </h1>
                <button
                  onClick={sendEmail}
                  disabled={!email}
                  className={`font-sans ml-4  text-lg font-bold p-2 rounded w-full mt-[350px] ${
                    !email
                      ? "bg-[#A17800] text-white cursor-not-allowed "
                      : "bg-[#FFC107] text-black "
                  }`}
                >
                  Send Code
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold mt-6 mb-6">
                  Enter the code sent to {email}
                </h2>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter code"
                  // className="border-none p-2 w-full rounded-2xl mt-2 bg-[#FFF5D6] focus:outline-none"
                  // className={` p-2 w-full rounded-2xl mt-2 bg-[#FFF5D6] focus:outline-none ${
                  //   !verifyEmail ? "border-none" : "border border-red-700"
                  // }`}
                  className={`w-full focus:outline-none p-3 rounded-2xl mt-2${
                    error ? "border-red-500 bg-red-100" : " bg-[#FFF5D6]"
                  }`}
                />

                <button
                  disabled={!code} // Disable nếu code rỗng
                  onClick={verifyCode}
                  className={`px-6 py-3 mt-[350]  p-2 rounded w-full  transition ${
                    code
                      ? "bg-[#FFC107] text-black"
                      : "bg-[#A17800] text-white cursor-not-allowed"
                  }`}
                  // className="mt-[350]  p-2 rounded w-full"
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
