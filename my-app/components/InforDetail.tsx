"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { useUser } from "..//src/context/userContext";

const url = "http://localhost:5000";
const InforDetail = () => {
  const { user, fetchUserById } = useUser();
  const { id } = useParams();
  useEffect(() => {
    if (id) fetchUserById(Number(id));
  }, [id]);
  console.log("User:", id);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/Users/${id}`)
  //     .then((res) => res.json())
  //     .then((data: User) => {
  //       setData(data);
  //       console.log("Fetched user:", data);
  //     })
  //     .catch((error) => console.error("Error fetching user:", error));
  // }, [id]);

  if (!user) return <p>Loading...</p>;
  else
    return (
      <div className="ml-6 mr-6 mt-2">
        <div className="relative w-[350px] h-[350px]">
          <Image fill src={url + user.avatar} alt="" />
        </div>
        <div className="ml-4 mb-10">
          <div className="flex mt-2 gap-2 ">
            <h1 className="font-unicorn">{user.name}</h1>
            <h1>{user.age}</h1>

            <div className="relative w-[30px] h-[30px]">
              <Image fill src="/verified.png" alt="" />
            </div>
          </div>
          <div className="relative w-[100px] h-[16px]">
            <Image fill src="/star.png" alt="" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="info">
              <div className="relative w-[14px] h-[16px]">
                <Image fill src="/vector.svg" alt="" />
              </div>
              <h1 className="info_h1">{user.address}</h1>
            </div>
            <div className="info">
              <div className="relative w-[14px] h-[16px]">
                <Image fill src="/vector2.svg" alt="" />
              </div>
              <div className="info_h1">{user.country}</div>
            </div>
            <div className="info">
              <div className="relative w-[14px] h-[16px]">
                <Image fill src="/vector4.svg" alt="" />
              </div>
              <div className="info_h1">{user.price}</div>
            </div>
            <div className="info">
              <div className="relative w-[14px] h-[16px]">
                <Image fill src="/vector4.svg" alt="" />
              </div>
              <div className="info_h1">{user.language}</div>
            </div>
            <div className="info">
              <div className="relative w-[14px] h-[16px]">
                <Image fill src="/vector5.svg" alt="" />
              </div>
              <div className="info_h1">{user.model}</div>
            </div>
            <div className="info">
              <div className="relative w-[14px] h-[16px]">
                <Image fill src="/vector6.svg" alt="" />
              </div>
              <div className="info_h1">{user.character}</div>
            </div>
          </div>
        </div>
        <div className="flex items-center border-[#C29200] gap-4 w-full h-[66px] border rounded-lg bg-[#FFF5D6]">
          <div className="relative ml-2 w-[50px] h-[50px]">
            <Image fill src="/university.svg" alt="" />
          </div>
          <h1>Indiana University Indianapolis</h1>
        </div>
        <div className="">
          <h1 className="heading_detail ">About Me</h1>
          <p className="bg-[#FFF5D6] rounded-xl p-2 mt-2">{user.lookingfor}</p>
          <div className="relative w-[340px] h-[350px] mt-4">
            <Image fill src={url + user.avatar} alt="" />
          </div>
        </div>
        <div className="mt-4">
          <h1 className="heading_detail">Looking for</h1>
          <p className="bg-[#E2F2E3] rounded-xl p-2 mt-2">{user.lookingfor}</p>
        </div>
        <div>
          <h1 className="heading_detail">Roommate Preference</h1>
          <div className="mt-4 ml-8">
            <ul className="">
              <li className="list-disc">
                <div className="roommate_li">
                  {" "}
                  <span className="roommate_title">Age</span>
                  <span>{user.preference.age}</span>
                </div>
              </li>
              <li className="list-disc">
                <div className="roommate_li">
                  <span className="roommate_title">Smoking</span>

                  <span>{user.preference.smoking}</span>
                </div>
              </li>
              <li className="list-disc">
                <div className="roommate_li">
                  <span className="roommate_title">Drinking</span>
                  <span>{user.preference.Drinking}</span>
                </div>
              </li>
              <li className="list-disc">
                <div className="roommate_li  ">
                  <span className="roommate_title ">StudentOnly</span>
                  <span>{user.preference.StudentOnly}</span>
                </div>
              </li>
              <li className="list-disc">
                <div className="roommate_li">
                  <span className="roommate_title">Pets</span>
                  <span>{user.preference.Pets}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="heading_detail mb-4">Life Style & Habits</h1>
          <div className="flex border p-2 rounded-lg gap-4 w-[273px]">
            <div className="relative w-[14px] h-[16px]">
              <Image fill src="/iconMap.svg" alt="" />
            </div>
            <h1 className="lifestyle_h1">{user.lifestyle.eating}</h1>
          </div>
          <div className="flex mt-4 gap-5">
            <div className="border p-2 rounded-lg flex gap-6">
              <div className="relative w-[11.75px] h-6">
                <Image fill src="/iconDrink.svg" alt="" />
              </div>
              <h1>{user.lifestyle.drinking}</h1>
            </div>
            <div className="border p-2 rounded-lg flex gap-6 items-center">
              <div className="relative w-4 h-4">
                <Image fill src="/iconSmoke.svg" alt="" />
              </div>
              <h1>{user.lifestyle.smoking}</h1>
            </div>
          </div>{" "}
          <div className="flex mt-4 gap-5">
            <div className="border p-2 rounded-lg flex gap-4 items-center">
              <div className="relative w-[22.86px] h-4">
                <Image fill src="/iconFriend.svg" alt="" />
              </div>
              <h1>{user.lifestyle.friend}</h1>
            </div>
            <div className="border p-2 rounded-lg flex gap-4">
              <div className="relative w-6 h-[18px]">
                <Image fill src="/iconWalk.svg" alt="" />
              </div>
              <h1>{user.lifestyle.walk}</h1>
            </div>
          </div>
        </div>
        <div className="relative w-[350px] h-[350px] mt-4 mb-4">
          <Image fill src={url + user.avatar} alt="" />
        </div>
      </div>
    );
};

export default InforDetail;
