"use client";
import React from "react";
import LoginScreen from "./component/LoginScreen";
import Indicator from "@components/Indicator";
import StatusBar from "@components/StatusBar";
const page = () => {
  return (
    <div className="relative z-0">
      {" "}
      <LoginScreen />{" "}
      <main className="absolute mt-[-720px]">
        {" "}
        <StatusBar />
      </main>
      <Indicator />
    </div>
  );
};

export default page;
// "use client";
// import { signIn, signOut, useSession } from "next-auth/react";

// export default function LoginPage() {
//   const { data: session } = useSession();

//   return (
//     <div>
//       {session ? (
//         <div>
//           <p>Welcome, {session.user?.name}!</p>
//           <button onClick={() => signOut()}>Đăng xuất</button>
//         </div>
//       ) : (
//         <button onClick={() => signIn("google")}>Đăng nhập với Google</button>
//       )}
//     </div>
//   );
// }
