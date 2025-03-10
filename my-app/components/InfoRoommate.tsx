import Image from "next/image";
import React from "react";
interface InfoRoommateProps {
  avatar: string;
  name: string;
  gender: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>; // Không cần `null` hay `void`
}

const InfoRoommate = ({ avatar, name, gender, onClick }: InfoRoommateProps) => {
  return (
    <div className="md:iphone-13:">
      <Image src={avatar} alt="" />
      <div className="flex gap-1">
        {" "}
        <h1 className="w-[86.65] h-[18] truncate">{name}</h1>
        <Image onClick={onClick} src={gender} alt="" />
      </div>
    </div>
  );
};

export default InfoRoommate;
