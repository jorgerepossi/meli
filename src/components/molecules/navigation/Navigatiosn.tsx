import Link from "next/link";
import { FC } from "react";
import Container from "../../atoms/container";
import Flex from "../../atoms/flex";
import Grid from "../../atoms/grid";
import InputSearch from "../../molecules/InputSearch/";
import Logo from "./../../atoms/logo";

export const Navigation: FC = () => {
  return (
    <Container center>
      <Grid>
        <Flex flex align="center">
          <Link href="/">
            <a title="Ir a la Home">
              <Logo />
            </a>
          </Link>
          <InputSearch />
        </Flex>
      </Grid>
    </Container>
  );
};
export default Navigation;
