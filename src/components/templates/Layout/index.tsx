import { FC, ReactNode } from "react";
import Navbar from "../../organisms/navbar";
import Main from "../../atoms/main";
import Container from "../../atoms/container";
import Grid from "../../atoms/grid";
interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
    </>
  );
};
export default Layout;
