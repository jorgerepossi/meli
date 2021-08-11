import { FC } from "react";
import { NormalText, SmallPrice } from "../../atoms/typography";

interface Props {
  condition?: string;
  quantity?: string;
  title?: string;
}
export type PropTypeElement = {};
export const ProductHeader: FC<Props> = ({ condition, quantity, title }) => {
  return (
    <>
      <div className="space__small">
        <NormalText>
          {condition}
          <span>{quantity} </span>
        </NormalText>
      </div>
      <SmallPrice className="text__bolder">{title}</SmallPrice>
    </>
  );
};
export default ProductHeader;
