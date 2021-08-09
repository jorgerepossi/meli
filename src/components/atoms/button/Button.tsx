import Link from "next/link";
import React, { FC, ReactNode, useState, useEffect } from "react";

interface Props {
  children?: ReactNode;
  onClick?: () => void;
}

interface NextLink {
  alt?: string;
  title?: string;
  href?: string;
}

const Button: FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const SearchButton: FC<NextLink> = ({ children, title, href }) => {
  const [state, setState] = useState(href);
  useEffect(() => {
    setState(href);
  }, [href]);

  return (
    <Link href={state || "#"}>
      <a title={title}>{children}</a>
    </Link>
  );
};
export { Button, SearchButton };
