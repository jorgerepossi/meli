import { FC, ReactNode, CSSProperties } from "react";
import styled from "styled-components";
interface Props {
  children: ReactNode;
  style?: CSSProperties;
}

const BoxWrapper = styled.div`
  margin-right: ${(props) => props.theme.margin.small};
  margin-left: ${(props) => props.theme.margin.small};
`;

export const Box: FC<Props> = ({ children }) => {
  return <BoxWrapper>{children}</BoxWrapper>;
};
export default Box;
