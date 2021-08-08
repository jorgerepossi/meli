import { FC, useState, useEffect } from "react";
import Container from "../../atoms/container";
import Grid from "../../atoms/grid";
import styled from "styled-components";

const BreadcrumbWrapper = styled.section`
  margin: ${(margin) => margin.theme.margin.small} 0;
`;

export const Breadcrumb: FC = () => {
  return (
    <Container center>
      <Grid>
        <BreadcrumbWrapper>breadcrumb</BreadcrumbWrapper>
      </Grid>
    </Container>
  );
};
export default Breadcrumb;
