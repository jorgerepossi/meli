import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

interface Props {
  children: ReactNode;
  center?: boolean;
}

interface Container {
  center?: boolean;
  white?: boolean;
}

const ContainerWrapper = styled.section<Container>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  ${({ center }) =>
    center &&
    css`
      max-width: 1200px;
      margin: 0px auto;
    `}
  ${({ white }) =>
    white &&
    css`
      background-color: #ffffff;
      border-radius: 5px;
    `}
`;

export const Container: FC<Props & Container> = ({
  children,
  center,
  white,
}): JSX.Element => {
  return (
    <ContainerWrapper center={center} white={white}>
      {children}
    </ContainerWrapper>
  );
};
export default Container;
