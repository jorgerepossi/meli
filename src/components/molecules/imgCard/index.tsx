import { FC, CSSProperties  } from "react";
import Box from "./../../atoms/box/";
import NextImage from "../../atoms/nextimage";

interface Props {
  src: string | undefined;
  alt?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

export const ImgCard: FC<Props> = ({ src = "", alt, style }) => {
  return (
    <Box  style={style}>
      <NextImage
        src={src || " "}
        alt={alt}
        width={180}
        height={180}
        title={alt}
       
      />
    </Box>
  );
};
export default ImgCard;
