import { FC, ReactNode } from "react";

import styled from "styled-components";
import Container from "../../atoms/container";
import Grid from "../../atoms/grid";

interface Props {
  children?: ReactNode;
}

export const BreadcrumbList: FC<Props> = ({ children }): JSX.Element => {
  return (
    <Container center>
      <Grid>
        <BreadcrumbWrapper>{children}</BreadcrumbWrapper>
      </Grid>
    </Container>
  );
};

const BreadcrumbWrapper = styled.section`
  margin: ${(margin) => margin.theme.margin.small} 0;
  .related-search__list {
    display: flex;
    font-weight: 400;
    color: ${(color) => color.theme.colors.dark};
    &--item {
      margin-right: ${(margin) => margin.theme.margin.small};
      text-overflow: ellipsis;
      overflow: hidden;
      &:last-child {
        color: ${(color) => color.theme.colors.black};
        font-weight: 700;
      }
      :not(:last-child) {
        &::after {
          content: " -";
          margin-left: 10px;
        }
      }
    }
  }
`;

export default BreadcrumbList;
