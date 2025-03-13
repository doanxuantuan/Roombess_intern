import NextImage, { ImageProps } from "next/image";

interface Props extends Omit<ImageProps, "alt"> {
  alt?: string;
}

const Image = (props: Props) => {
  return (
    <NextImage {...props} width={0} height={0} alt="Graphic" unoptimized />
  );
};

export default Image;
