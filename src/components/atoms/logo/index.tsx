import { FC } from "react"
import Image from 'next/image'
import logoPic from '../../../assets/Logo_ML.png'
export const Logo: FC = () =>
{
    return (
        <Image src={logoPic} alt="Logo MercadoLibre" title="Logo MercadoLibre" />
    );

}
export default Logo;