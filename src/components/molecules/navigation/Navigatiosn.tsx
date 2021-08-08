import { FC } from "react"
import Button from "../../atoms/button"
import Container from "../../atoms/container"
import Flex from "../../atoms/flex"
import Grid from "../../atoms/grid"
import Input from "../../atoms/input"
import Logo from './../../atoms/logo'

export const Navigation: FC = () =>
{
    return (
        <Container center>
            <Grid>
                <Flex flex>
                    <Logo />
                    <Input />
                   
                </Flex>
            </Grid>
        </Container>
    );

}
export default Navigation;