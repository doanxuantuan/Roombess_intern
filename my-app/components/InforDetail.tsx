"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { useUser } from "..//src/context/userContext";

const url = "http://localhost:5000";
const InforDetail = () => {
  // const [data, setData] = useState<User | null>(null);
  // const { id } = useParams();
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
        <Image width={350} height={350} src={url + user.avatar} alt="" />
        <div className="ml-4 mb-10">
          <div className="flex mt-2 gap-2 ">
            <h1 className="font-unicorn">{user.name}</h1>
            <h1>{user.age}</h1>
            <Image src="/verified.png" width={30} height={30} alt="" />
          </div>
          <Image src="/star.png" alt="" width={100} height={100} />
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="info">
              <Image src="/vector.svg" alt="" width={14} height={16} />
              <h1 className="info_h1">{user.address}</h1>
            </div>
            <div className="info">
              <Image src="/vector2.svg" alt="" width={14} height={16} />{" "}
              <div className="info_h1">{user.country}</div>
            </div>
            <div className="info">
              <Image src="/vector4.svg" alt="" width={14} height={16} />{" "}
              <div className="info_h1">{user.price}</div>
            </div>
            <div className="info">
              <Image src="/vector4.svg" alt="" width={14} height={16} />{" "}
              <div className="info_h1">{user.language}</div>
            </div>
            <div className="info">
              <Image src="/vector5.svg" alt="" width={14} height={16} />{" "}
              <div className="info_h1">{user.model}</div>
            </div>
            <div className="info">
              <Image src="/vector6.svg" alt="" width={14} height={16} />{" "}
              <div className="info_h1">{user.character}</div>
            </div>
          </div>
        </div>
        <div className="flex items-center border-[#C29200] gap-4 w-full h-[66px] border rounded-lg bg-[#FFF5D6]">
          <Image
            className="ml-2"
            src="/university.svg"
            width={50}
            height={5}
            alt=""
          />
          <h1>Indiana University Indianapolis</h1>
        </div>
        <div className="">
          <h1 className="heading_detail ">About Me</h1>
          <p className="bg-[#FFF5D6] rounded-xl p-2 mt-2">{user.lookingfor}</p>
          <Image
            className="mt-4"
            src={url + user.avatar}
            width={350}
            height={350}
            alt=""
          />
        </div>
        <div className="mt-4">
          <h1 className="heading_detail">Looking for</h1>
          <p className="bg-[#E2F2E3] rounded-xl p-2 mt-2">{user.lookingfor}</p>
        </div>
        <div>
          <h1 className="heading_detail">Roommate Preference</h1>
          <div className="mt-4 ml-8">
            <ul className="">
              <li className="list-disc ">
                Age: <span>{user.preference.age}</span>
              </li>
              <li className="list-disc">
                Smoking: <span>{user.preference.smoking}</span>
              </li>
              <li className="list-disc">
                Drinking: <span>{user.preference.Drinking}</span>
              </li>
              <li className="list-disc">
                StudentOnly: <span>{user.preference.StudentOnly}</span>
              </li>
              <li className="">
                Pets: <span>{user.preference.Pets}</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="heading_detail mb-4">Life Style & Habits</h1>
          <div className="flex border p-2 rounded-lg gap-4 w-[273px]">
            <Image
              className="ml-2"
              src="/iconMap.svg"
              alt=""
              width={14}
              height={16}
            />
            <h1 className="lifestyle_h1">{user.lifestyle.eating}</h1>
          </div>
          <div className="flex mt-4 gap-5">
            <div className="border p-2 rounded-lg flex gap-6">
              <div className="relative w-[11.75px] h-6">
                {" "}
                <Image
                  className="ml-2 absolute"
                  src="/iconDrink.svg"
                  alt=""
                  fill
                />
              </div>

              <h1>{user.lifestyle.drinking}</h1>
            </div>
            <div className="border p-2 rounded-lg flex gap-6 items-center">
              <div className="relative w-4 h-4">
                {" "}
                <Image
                  className="ml-2 absolute"
                  src="/iconSmoke.svg"
                  alt=""
                  fill
                />
              </div>

              <h1>{user.lifestyle.smoking}</h1>
            </div>
          </div>{" "}
          <div className="flex mt-4 gap-5">
            <div className="border p-2 rounded-lg flex gap-4 items-center">
              <div className="relative w-[22.86px] h-4">
                {" "}
                <Image
                  className="ml-2 absolute"
                  src="/iconFriend.svg"
                  alt=""
                  fill
                />
              </div>

              <h1>{user.lifestyle.friend}</h1>
            </div>
            <div className="border p-2 rounded-lg flex gap-4">
              <div className="relative w-6 h-[18px]">
                {" "}
                <Image
                  className="absolute ml-2"
                  src="/iconWalk.svg"
                  alt=""
                  fill
                />
              </div>

              <h1>{user.lifestyle.walk}</h1>
            </div>
          </div>
          {/* <div className="flex mt-4 gap-4">
            <div className="flex">
              <Image src={url + user.avatar} alt="" width={14} height={16} />
              <h1>{user.lifestyle.friend}</h1>
            </div>
            <div className="flex">
              <Image src={url + user.avatar} alt="" width={14} height={16} />
              <h1>{user.lifestyle.walk}</h1>
            </div>
          </div>{" "} */}
        </div>
        <div className="relative w-[350] h-[350]  mt-4 mb-4">
          {" "}
          <Image className="absolute" src={url + user.avatar} alt="" fill />
        </div>
      </div>
    );
};

export default InforDetail;

// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";

// interface User {
//   id: number;
//   name: string;
//   age: number;
//   address: string;
//   country: string;
//   price: number;
//   language: string;
//   model: string;
//   character: string;
//   avatar: string;
// }

// const url = "http://localhost:5000";

// const UserDetail = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (id) {
//       fetch(`${url}/api/Users/${id}`)
//         .then((res) => {
//           if (!res.ok) {
//             throw new Error("Network response was not ok");
//           }
//           return res.json();
//         })
//         .then((data: User) => {
//           setUser(data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           setError(error.message);
//           setLoading(false);
//         });
//     }
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!user) {
//     return <div>No user found</div>;
//   }

//   return (
//     <div className="ml-6 mr-6 mt-2">
//       <div className="relative z-1 shadow-lg rounded-lg bg-white">
//         <Image
//           width={350}
//           height={350}
//           src={url + user.avatar}
//           alt={user.name}
//         />
//         <div className="ml-4 mb-10">
//           <div className="flex mt-2 gap-2">
//             <h1 className="font-unicorn">{user.name}</h1>
//             <h1>{user.age}</h1>
//             <Image src="/verified.png" width={30} height={30} alt="Verified" />
//           </div>
//           <Image src="/star.png" alt="Star" width={100} height={100} />
//           <div className="grid grid-cols-2 gap-4 mt-2">
//             <div className="info">
//               <Image src="/vector.svg" alt="Address" width={14} height={16} />
//               <h1 className="info_h1">{user.address}</h1>
//             </div>
//             <div className="info">
//               <Image src="/vector2.svg" alt="Country" width={14} height={16} />
//               <div className="info_h1">{user.country}</div>
//             </div>
//             <div className="info">
//               <Image src="/vector4.svg" alt="Price" width={14} height={16} />
//               <div className="info_h1">{user.price}</div>
//             </div>
//             <div className="info">
//               <Image src="/vector4.svg" alt="Language" width={14} height={16} />
//               <div className="info_h1">{user.language}</div>
//             </div>
//             <div className="info">
//               <Image src="/vector5.svg" alt="Model" width={14} height={16} />
//               <div className="info_h1">{user.model}</div>
//             </div>
//             <div className="info">
//               <Image
//                 src="/vector6.svg"
//                 alt="Character"
//                 width={14}
//                 height={16}
//               />
//               <div className="info_h1">{user.character}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDetail;
