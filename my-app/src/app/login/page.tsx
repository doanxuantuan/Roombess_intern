// "use client";
// import React, { useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/Tabs";
// import InputField from "@components/InputField";
// import Heading from "../loginHome/component/Heading";
// import { Button } from "@components/Button";
// enum Tab {
//   Phone = "PHONE",
//   Email = "EMAIL",
// }

// interface SubmitButton {
//   active: boolean;
//   text: string;
//   onClick: () => void;
// }

// const SubmitButton = ({ active, text, onClick }: SubmitButton) => {
//   return (
//     <Button
//       variant={active ? "primary" : "primary-800"}
//       className="w-full h-[52px]"
//       onClick={onClick}
//     >
//       {text}
//     </Button>
//   );
// };
// interface Props {
//   setIsLoginWithPhoneOrEmail: (val: boolean) => void;
// }
// const LoginWithEmailOrPhone = ({ setIsLoginWithPhoneOrEmail }: Props) => {
//   const handleBack = () => {
//     if (tab === Tab.Phone) {
//       if (!isOtpSent) {
//         setIsLoginWithPhoneOrEmail(false);
//       } else {
//         setIsOtpSent(false);
//       }
//     } else {
//       if (!isCodeSent) {
//         setIsLoginWithPhoneOrEmail(false);
//       } else {
//         setIsCodeSent(false);
//       }
//     }
//   };
//   const handleSubmitPhone = () => {
//     setIsOtpSent(true);
//     setPhone("");
//   };

//   const handleSubmitEmail = () => {
//     if (!isCodeSent) {
//       setIsCodeSent(true);
//       setEmail("");
//       return;
//     }

//     setIsShowEnterCode(true);
//     setIsCodeSent(false);
//   };

//   const [phoneState, setPhoneSate] = useState({});

//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isOtpSent, setIsOtpSent] = useState(false);

//   const [email, setEmail] = useState("");
//   const [code, setCode] = useState("");
//   const [isCodeSent, setIsCodeSent] = useState(false);
//   const [isShowEnterCode, setIsShowEnterCode] = useState(false);
//   const [tab, setTab] = useState<Tab>(Tab.Phone);
//   const tabs = [
//     {
//       key: Tab.Phone,
//       head: { label: "Phone Number" },
//       content: !isOtpSent ? (
//         <div className="flex items-center gap-5">
//           <InputField
//             value={phone}
//             setValue={setPhone}
//             placeholder="601 567 6967"
//           />
//         </div>
//       ) : (
//         <div className="mt-6">
//           <p className="t-h3 px-4">
//             Enter the OTP sent to <br />
//             601-566-6967
//           </p>
//           <InputField
//             value={otp}
//             setValue={setOtp}
//             className="mt-6"
//             placeholder="123 456"
//           />
//         </div>
//       ),
//     },
//     {
//       key: Tab.Email,
//       head: {
//         label: "Email",
//       },
//       content: !isCodeSent ? (
//         <InputField
//           value={email}
//           setValue={setEmail}
//           placeholder="Enter your email address"
//         />
//       ) : isShowEnterCode ? (
//         <div className="mt-6 px-5">
//           <p className="t-h3 px-4">
//             Enter the code sent to <br />
//             johnsmith@gmail.com
//           </p>
//           <InputField
//             value={code}
//             setValue={setCode}
//             className="mt-6"
//             placeholder="123 456"
//           />
//         </div>
//       ) : (
//         <div className="flex flex-col items-center mt-10 px-5">
//           <div className="flex-center size-12 rounded-full font-bold text-[21px] bg-primary">
//             1
//           </div>
//           <p className="t-hl-regular mt-4 text-center">
//             An email was sent to johnsmith@gmail.com with a link to sign in
//           </p>
//           <div className="mt-10 flex-center size-12 rounded-full font-bold text-[21px] bg-primary">
//             2
//           </div>
//           <p className="t-hl-regular mt-4 text-center">
//             Open the email and tap the link on this phone to sign in
//           </p>
//           <p className="t-hl-regular text-center mt-[52px]">
//             Having trouble with your link?{" "}
//             <span className="font-bold text-secondary">Enter Code</span>
//           </p>
//         </div>
//       ),
//     },
//   ];
//   return (
//     <>
//       <Heading
//         navigator={
//           isCodeSent ? (
//             <div className="abs-center-x t-h3">Check your email</div>
//           ) : (
//             <div className="t-h1 font-bold text-[28px] font-sans ml-[18px]">
//               Log in with
//             </div>
//           )
//         }
//         onBack={handleBack}
//       />
//       <div className="px-5">
//         <Tabs
//           defaultValue={Tab.Phone}
//           className="mt-6"
//           onValueChange={(value) => {
//             setTab(value as Tab);
//           }}
//         >
//           {!isCodeSent && !isOtpSent && (
//             <TabsList className="grid w-full grid-cols-2">
//               {tabs.map((tab) => (
//                 <TabsTrigger
//                   key={tab.key}
//                   value={tab.key}
//                   className="t-hl-bold text-primary-900 pb-2"
//                 >
//                   {tab.head.label}
//                 </TabsTrigger>
//               ))}
//             </TabsList>
//           )}
//           {tabs.map((tab) => (
//             <TabsContent
//               key={tab.key}
//               value={tab.key}
//               className="t-hl-bold pb-2"
//             >
//               {tab.content}
//             </TabsContent>
//           ))}
//         </Tabs>
//       </div>
//       <div className="container mt-auto">
//         {tab === Tab.Phone && (
//           <SubmitButton
//             active={Boolean(phone || otp)}
//             text={isOtpSent ? "Confirm" : "Send OTP"}
//             onClick={handleSubmitPhone}
//           />
//         )}
//         {tab === Tab.Email && (
//           <SubmitButton
//             active={isCodeSent || Boolean(email)}
//             text={
//               isCodeSent
//                 ? "Open email app"
//                 : isShowEnterCode
//                 ? "Submit"
//                 : "Send code"
//             }
//             onClick={handleSubmitEmail}
//           />
//         )}

//         <div className="t-content-bold mt-4 text-center text-greys-600">
//           {tab === Tab.Phone ? "Resend OTP" : "Resend code"}
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginWithEmailOrPhone;
import React from "react";
import EmailVerification from "./_component/verifyEmail";
import StatusBar from "@components/StatusBar";
const page = () => {
  return (
    <div>
      <StatusBar />
      <main>
        <EmailVerification />
      </main>
    </div>
  );
};

export default page;
