import { FC, ReactNode } from "react"
import styled, { css } from 'styled-components'
interface Props
{
    children?: ReactNode,
    flex?: boolean
}

const FlexWrapper = styled.div<Props>`
${ ({ flex }) => flex && css`
display: flex;`
}

`;


export const Flex: FC<Props> = ({ children, flex }) =>
{
    return (
        <FlexWrapper flex={flex}> {children}</FlexWrapper>
    );

}
export default Flex;