import { ChangeEvent, FC } from "react";
import styled from "styled-components";

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
    <InputWrapper
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      autoComplete="off"
    />
  );
};

const InputWrapper = styled.input`
  border: transparent;
  width: 100%;
  padding: 0 ${(margin) => margin.theme.margin.small};
`;
export default Input;
