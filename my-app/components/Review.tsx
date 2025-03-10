"use client";
import React, { useState } from "react";
import Image from "next/image";
import image from "@assets/image";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

const Review = ({ totalStars = 5 }) => {
  const router = useRouter();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleSubmit = () => {
    if (rating > 0) {
      router.push("/success");
    }
  };
  return (
    <div className="ml-6 mr-6">
      <div>
        <h1 className="font-bold mt-8">Review your Home</h1>
        <p className="text-right text-[10px]">
          Period: 2nd july 2024 - 2nd Feb 2025
        </p>
      </div>
      <div className="border mt-2 rounded-lg p-3">
        <Image src={image.room3} alt="" className="w-[335] h-[180]" />
        <div className="mt-2 mb-2 flex space-x-1">
          {" "}
          {[...Array(totalStars)].map((_, index) => {
            const starValue = index + 1;
            return (
              <Star
                key={index}
                className={`cursor-pointer transition-all ${
                  (hover || rating) >= starValue
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-300 text-gray-300"
                }`}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(starValue)}
                size={32}
              />
            );
          })}{" "}
        </div>
        <textarea
          className="w-full h-[117px] border rounded-xl p-2 border-[#FFC107] text-[14px] "
          placeholder="Rewrite something about Your Experience"
        />
        <p className="w-[93] h-3 font-normal text-[8px]">Max 350 characters</p>
      </div>
      <button
        onClick={handleSubmit}
        className={`rounded-lg font-bold text-white border w-full h-[52] mt-36 bg-[#909090] ${
          rating > 0 ? "bg-[#FFC107]" : "bg-[#909090"
        }`}
      >
        Submit
      </button>
    </div>
  );
};

export default Review;
