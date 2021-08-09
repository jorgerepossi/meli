import { ChangeEvent, FC } from "react";

interface Props {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export const Input: FC<Props> = ({
  placeholder,
  onChange,
  type,
  value,
  name,
}): JSX.Element => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};
export default Input;
