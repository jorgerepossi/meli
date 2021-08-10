import Image from "next/image";
import { FC } from "react";
import iconSearch from "./../../../assets/ic_Search.png";
import styled from "styled-components";
interface Props {}

export const SearchIcon: FC<Props> = () => {
  return (
    <ButtonWrapper>
      <Image
        src={iconSearch}
        alt="Nunca dejes de buscar"
        width={16}
        height={16}
      />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  width: 40px;
  height: 39px;
  border-radius: 0 4px 4px 0;
  background-color: ${(color) => color.theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.25s ease-out, background-color 0.2s ease-out;
  box-shadow: 0 0 0 0 #fff;
  &:hover {
    background-color: #d9d9d9;
  }
`;
export default SearchIcon;
