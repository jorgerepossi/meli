import { FC, ReactNode } from "react"
import styled from 'styled-components'
interface Props
{
    children: ReactNode
}

const MainWrapper = styled.main`
background-color: ${ props => props.theme.colors.light };
overflow: hidden;
font-size: ${ size => size.theme.typography.typo16 };
font-weight: 300;
line-height: 1.35; 
`;

export const Main: FC<Props> = ({ children }) =>
{
    return (
        <MainWrapper role='main'>
            {children}
        </MainWrapper>
    );

}
export default Main;