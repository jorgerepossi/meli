import { FC } from "react";
import styled from 'styled-components';
import Navigation from "../../molecules/navigation";

const NavWrapper = styled.header`
padding: 8px 0;
background-color: ${props => props.theme.colors.main};

`;
 export const Navbar:FC = () =>{
  return (
      <NavWrapper>
          <Navigation />
      </NavWrapper>
);

}
export default Navbar;