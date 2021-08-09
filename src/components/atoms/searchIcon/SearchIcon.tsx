import Image from "next/image";
import { FC } from "react";
import iconSearch from "./../../../assets/ic_Search.png";
interface Props {}

export const SearchIcon: FC<Props> = () => {
  return (
    <Image
      src={iconSearch}
      alt="Nunca dejes de buscar"
      width={20}
      height={20}
    />
  );
};
export default SearchIcon;
