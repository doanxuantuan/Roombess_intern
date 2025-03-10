// "use client";
// import { useState } from "react";
// import { Star } from "lucide-react";

// const StarRating = ({ totalStars = 5 }) => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   return (
//     <div className="flex space-x-1">
//       {[...Array(totalStars)].map((_, index) => {
//         const starValue = index + 1;
//         return (
//           <Star
//             key={index}
//             className={`cursor-pointer transition-all ${
//               (hover || rating) >= starValue
//                 ? "fill-yellow-400 text-yellow-400"
//                 : "fill-gray-300 text-gray-300"
//             }`}
//             onMouseEnter={() => setHover(starValue)}
//             onMouseLeave={() => setHover(0)}
//             onClick={() => setRating(starValue)}
//             size={32}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default StarRating;
