import React from "react";

interface CustomImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ width: width || "auto", height: height || "auto" }}
      loading="lazy" // Tối ưu hiệu suất bằng lazy loading
    />
  );
};

export default CustomImage;
