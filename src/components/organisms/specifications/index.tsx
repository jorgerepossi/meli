import { FC } from "react";
import { BigTitle, Text } from "../../atoms/typography";

interface Props {
  text?: string;
  title?: string;
}

export const Specifications: FC<Props> = ({ text, title }) => {
  return (
    <div className="specifications">
      <BigTitle className="prod__title">{title}</BigTitle>
      <Text>{text}</Text>
    </div>
  );
};

export default Specifications;
