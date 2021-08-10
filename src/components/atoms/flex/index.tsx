import { FC, ReactNode, CSSProperties } from "react";
import styled, { css } from "styled-components";
interface Props {
  children?: ReactNode;
  flex?: boolean;
  align?: "center" | undefined;
  style?: CSSProperties;
  classname?: string;
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

export const Flex: FC<Props> = ({
  children,
  flex,
  style,
  classname,
  ...props
}) => {
  return (
    <FlexWrapper flex={flex} style={style} className={classname} {...props}>
      {children}
    </FlexWrapper>
  );
};
export default Flex;
