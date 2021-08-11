import Link from "next/link";
import React, { FC, ReactNode, useState, useEffect } from "react";
import styled, { css } from "styled-components";
interface Props {
  children?: ReactNode;
  onClick?: () => void;
  primary?: boolean;
}

interface NextLink {
  alt?: string;
  title?: string;
  href?: string;
  blank?: string;
}

export const Button: FC<Props> = ({ onClick, children, primary }) => {
  return (
    <ButtonWrapper onClick={onClick} primary={primary}>
      {children}
    </ButtonWrapper>
  );
};

export const SearchButton: FC<NextLink> = ({
  children,
  title,
  href,
  blank,
}) => {
  const [state, setState] = useState(href);
  useEffect(() => {
    setState(href);
  }, [href]);

  return (
    <Link href={state || "#"}>
      <a
        title={title}
        target={blank ? "_blank" : ""}
        rel={blank ? "noopener noreferrer" : ""}
      >
        {children}
      </a>
    </Link>
  );
};

export const ButtonWrapper = styled.button<Props>`
  border-color: transparent;
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  margin-top: ${(margin) => margin.theme.margin.small};
  cursor: pointer;
  ${({ primary }) =>
    primary &&
    css`
      background-color: ${(primary) => primary.theme.colors.blue};
      border-radius: 5px;
      color: white;
      transition: box-shadow 0.25s ease-out, background-color 0.2s ease-out;
      box-shadow: 0 0 0 0 #fff;
      &:hover {
        background-color: #2968c8;
      }
    `}
`;

//export { Button, SearchButton };
