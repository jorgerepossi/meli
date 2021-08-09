import { FC, ReactNode } from "react";
import Navbar from "../../organisms/navbar";
import Main from "../../atoms/main";

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
