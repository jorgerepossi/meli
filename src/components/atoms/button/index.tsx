import { FC } from "react";

interface Props {
  onClick: () => void;
}

export const Button: FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}> boton </button>;
};
export default Button;
