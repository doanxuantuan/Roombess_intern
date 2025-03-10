"use client";
import { useUser } from "..//src/context/userContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useRef } from "react";
import Image from "next/image";
import { SwiperRef } from "swiper/react";
import { usePathname, useRouter } from "next/navigation";

const url = "http://localhost:5000";
const InforUser = () => {
  // const [data, setData] = useState<User[]>([]);
  const { users } = useUser();

  const swiperRef = useRef<SwiperRef | null>(null);

  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/detail/${id}`);
  };

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/Users")
  //     .then((res) => res.json())
  //     .then((data: User[]) => setData(data));
  // }, []);

  const handleBackClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const pathName = usePathname();
  const isHomePage = pathName === "/home";

  return (
    <div className="ml-6 mr-6 mt-2 ">
      {isHomePage && (
        <div className="flex justify-between gap-6 mb-5">
          <button className="border-2 rounded-2xl w-[167px] h-10 bg-[#FFCB30]">
            Rooomate
          </button>
          <button className="border rounded-2xl w-[167px] h-10">Room</button>
        </div>
      )}

      <div className="relative z-1 shadow-lg rounded-lg bg-white">
        <div className="absolute z-10 top-0 mt-5 left-0 w-8 h-8 ml-5">
          <button onClick={handleBackClick}>
            <Image src="/back.svg" fill alt="Back" />
          </button>
        </div>
        <Swiper ref={swiperRef} autoplay={true} loop={true} modules={[]}>
          {users?.map((item) => {
            return (
              <div key={item.id}>
                <SwiperSlide>
                  <Image
                    onClick={() => {
                      handleClick(item.id);
                    }}
                    width={350}
                    height={350}
                    src={url + item.avatar}
                    alt=""
                  />
                  <div className="ml-4 mb-10">
                    <div className="flex mt-2 gap-2 ">
                      <h1 className="font-unicorn">{item.name}</h1>
                      <h1>{item.age}</h1>
                      <Image
                        src="/verified.png"
                        width={30}
                        height={30}
                        alt=""
                      />
                    </div>
                    <Image src="/star.png" alt="" width={100} height={100} />
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div className="info">
                        <Image
                          src="/vector.svg"
                          alt=""
                          width={14}
                          height={16}
                        />
                        <h1 className="info_h1">{item.address}</h1>
                      </div>
                      <div className="info">
                        <Image
                          src="/vector2.svg"
                          alt=""
                          width={14}
                          height={16}
                        />{" "}
                        <div className="info_h1">{item.country}</div>
                      </div>
                      <div className="info">
                        <Image
                          src="/vector4.svg"
                          alt=""
                          width={14}
                          height={16}
                        />{" "}
                        <div className="info_h1">{item.price}</div>
                      </div>
                      <div className="info">
                        <Image
                          src="/vector4.svg"
                          alt=""
                          width={14}
                          height={16}
                        />{" "}
                        <div className="info_h1">{item.language}</div>
                      </div>
                      <div className="info">
                        <Image
                          src="/vector5.svg"
                          alt=""
                          width={14}
                          height={16}
                        />{" "}
                        <div className="info_h1">{item.model}</div>
                      </div>
                      <div className="info">
                        <Image
                          src="/vector6.svg"
                          alt=""
                          width={14}
                          height={16}
                        />{" "}
                        <div className="info_h1">{item.character}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default InforUser;
