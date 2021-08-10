import { FC } from "react";
import Image from "next/image";
import shippingPic from "../../../assets/ic_shipping.png";

export const ShippingIcon: FC = () => {
  return (
    <Image src={shippingPic} alt="Mercado Envios" title="Mercado Envios" />
  );
};
export default ShippingIcon;
