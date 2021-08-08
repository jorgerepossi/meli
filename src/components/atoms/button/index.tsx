import { FC, ReactNode } from "react";

interface Props
{
    children?: ReactNode,
    onClick: () => void;
}

export const Button: FC<Props> = ({ onClick, children }) =>
{
    return <button onClick={onClick}>
        {children}
    </button>
};
export default Button;
