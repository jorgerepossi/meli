import { FC, ReactNode } from "react"
import styled, { css } from 'styled-components'

interface Props
{
    children?: ReactNode,
    white?: boolean
}


const GridWrapper = styled.div<Props>`
grid-column: 2 / span 10;
background-color: transparent;
overflow: hidden;
${ ({ white }) => white && css`
    background-color: #ffffff;
    border-radius: 5px;
`
}
`;

export const Grid: FC<Props> = ({ children, white }): JSX.Element =>
{
    return (
        <GridWrapper white={ white}>
            {children}
        </GridWrapper>
    );

}
export default Grid;