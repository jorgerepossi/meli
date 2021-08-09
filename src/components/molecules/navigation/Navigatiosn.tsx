import { ChangeEvent, FC, useState } from "react";
//import Button from "../../atoms/button/Button";
import Container from "../../atoms/container";
import Flex from "../../atoms/flex";
import Grid from "../../atoms/grid";
import InputSearch from "../../molecules/InputSearch/";
import Logo from "./../../atoms/logo";

export const Navigation: FC = () => {
  return (
    <Container center>
      <Grid>
        <Flex flex>
          <Logo />
          <InputSearch />
        </Flex>
      </Grid>
    </Container>
  );
};
export default Navigation;
