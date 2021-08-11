import { FC, ReactNode } from "react";
import Main from "../../atoms/main";
import Navbar from "../../organisms/navbar";

interface Props {
  children?: ReactNode;
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
