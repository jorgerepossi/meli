import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
interface Props {
  children?: ReactNode;
  flex?: boolean;
  align?: "center" | undefined;
  style?: number;
}

const FlexWrapper = styled.div<Props>`
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
    `}
  ${({ align }) =>
    align &&
    css`
      align-items: center;
    `}
`;

export const Flex: FC<Props> = ({ children, flex, style, ...props }) => {
  return (
    <FlexWrapper flex={flex} style={style} {...props}>
      {children}
    </FlexWrapper>
  );
};
export default Flex;
