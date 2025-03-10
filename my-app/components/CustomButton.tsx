import React from "react";
import Image from "next/image";

interface CustomButtonProps {
  icon: string;
  title: string;
  styles: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({ icon, title, styles, onClick }: CustomButtonProps) => {
  return (
    <button
      className={`border rounded-xl text-left font-bold p-2 ${styles}`}
      onClick={onClick}
    >
      <div className="ml-2">
        <Image src={icon} alt="" />
        <h1>{title}</h1>
      </div>
    </button>
  );
};

const CustomButtonBottom = ({
  icon,
  title,
  styles,
  onClick,
}: CustomButtonProps) => {
  return (
    <button className={`${styles} mt-2`} onClick={onClick || undefined}>
      <div className="w-[340px] p-2 gap-2 font-bold flex items-center cursor-pointer border rounded-lg">
        <Image className="w-6 h-6" src={icon} alt="" />
        <h1 className="ml-2">{title}</h1>
      </div>
    </button>
  );
};

export { CustomButton, CustomButtonBottom };
