import Link from "next/link";
import { FC } from "react";
import Container from "../../atoms/container";
import Flex from "../../atoms/flex";
import Grid from "../../atoms/grid";
import InputSearch from "../InputSearch";
import Logo from "../../atoms/logo";
import styled from "styled-components";
export const Navigation: FC = () => {
  return (
    <Container center>
      <Grid>
        <Flex flex align="center">
          <AreaNav>
            <Link href="/">
              <a title="Ir a la Home">
                {" "}
                <Logo />{" "}
              </a>
            </Link>
            <InputSearch />
          </AreaNav>
        </Flex>
      </Grid>
    </Container>
  );
};

const AreaNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  a {
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-right: 16px;
  }
`;
export default Navigation;
