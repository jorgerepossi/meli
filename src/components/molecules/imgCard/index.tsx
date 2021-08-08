import  { FC }from "react"
import Box from './../../atoms/box/';
import Image from "next/image";

interface Props {
    image: string,
    alt?: string
}

export const ImgCard: FC<Props> = ({ image, alt }) =>{
  return (
      <Box>
          <Image
              src={image}
              alt={alt}
              width={180}
              height={180}
              title={alt}
              
          />
      </Box>
);

}
export default ImgCard;