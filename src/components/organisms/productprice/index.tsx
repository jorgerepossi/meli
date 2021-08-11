import { FC, ReactElement, ReactNode } from "react";

import { BigPrice } from "../../atoms/typography";

interface Props {
  price: string;
  symbol: string;
  decimals: string;
  shipping?: string;
}

export const ProductPrice: FC<Props> = ({
  price = "",
  symbol = "",
  decimals = "",
}): JSX.Element => {
  return (
    <>
      <div className="prod__price space__big space__big--top space__big--bottom">
        <BigPrice>
          <span className="prod__price--symbol">{symbol}</span>
          <span> {price} </span>
          <span className="prod__price--cents">{decimals}</span>
        </BigPrice>
      </div>
    </>
  );
};
export default ProductPrice;
