import { FC, ReactNode } from "react";
import styled from "styled-components";
interface Props {
  children?: ReactNode;
}
const LiWrapper = styled.li`
  margin: ${(margin) => margin.theme.margin.small} 0;
  width: 100%;
  display: block;
  float: left;
  border-bottom: thin solid ${(color) => color.theme.colors.light};
`;
export const ListItem: FC<Props> = ({ children }) => {
  return <LiWrapper>{children}</LiWrapper>;
};
export default ListItem;
