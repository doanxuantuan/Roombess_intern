"use client";

import images from "../../../assets/images";
import React from "react";
import Image from "@components/Image";
// import { GoogleLogin } from "next-auth/providers/google";
import { signIn, signOut, useSession } from "next-auth/react";
// import GoogleOAuthProvider from "next-auth/providers/google";

import { useRouter } from "next/navigation";
const LoginScreen = () => {
  const { data: session } = useSession();
  const route = useRouter();
  const onHandleClick = () => {
    route.push("/login");
  };
  return (
    <>
      <section
        className="flex flex-col items-center justify-center gap-1 w-full h-[378px] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${images.login.hero})` }}
      >
        <Image
          src={images.login.logoHero}
          className="w-[60px] h-[60px]"
          alt=""
        />
      </section>
      <section className="container ">
        <h1 className="t-h1 font-sans font-bold text-[28px] ml-6 mt-6">
          Welcome Bee,
        </h1>
        <div className="mt-6 space-y-4 ml-6">
          <div className="flex items-center space-x-2 mr-24">
            <input type="checkbox" id="offers" />
            {/* <Checkbox id="offers" /> */}
            <label
              htmlFor="offers"
              className="t-fn-regular font-normal text-[10px] font-sans "
            >
              Send me offers and news from RoomBees via email and other
              electronic messages.
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="offers" />
            <label
              htmlFor="policy"
              className="t-fn-regular font-normal text-[10px] font-sans "
            >
              I agree to RoomBees’s User Agreement and Privacy Policy
            </label>
          </div>
        </div>
      </section>
      <button className="mt-7 flex border-[black] border rounded-xl w-[340px] ml-6 h-[52px] items-center justify-center gap-2">
        <Image src={images.icGoogle} alt="" className="w-6 h-6" />
        <div>
          {session ? (
            <div>
              <p>Welcome, {session.user?.name}!</p>
              <span onClick={() => signOut()}>Đăng xuất</span>
            </div>
          ) : (
            <span
              className="font-bold text-base"
              onClick={() => signIn("google", { callbackUrl: "/profile" })}
            >
              {" "}
              Sing in with google
            </span>
          )}
        </div>
        {/* <span onClick={() => signOut()} className="font-bold text-base">
          Sing in with google
        </span> */}
      </button>
      <div
        onClick={onHandleClick}
        className=" mt-[26.5px] text-4s font-sans font-bold text-center text-primary-900 cursor-pointer"
      >
        Orther options
      </div>
      <div className="t-hl-bold mt-[26.5px] text-center text-primary-900 cursor-pointer">
        Continue as guest
      </div>
    </>
  );
};

export default LoginScreen;
