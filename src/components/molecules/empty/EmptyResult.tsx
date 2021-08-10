import { FC, ReactNode } from "react";
import { Text } from "../../atoms/typography";
import styled from "styled-components";
interface Props {
  info?: ReactNode;
}
export const EmptyResult: FC<Props> = ({ info }) => {
  return (
    <EmptyWrapper>
      <Text>{info}</Text>
    </EmptyWrapper>
  );
};
const EmptyWrapper = styled.div`
  margin: ${(margin) => margin.theme.margin.large};
`;

export default EmptyResult;
