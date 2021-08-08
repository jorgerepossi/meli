import Image from "next/image";
import { FC } from "react";
import ErrorBoundary from "../../../utils/ErrorBoundary";

export interface Props {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  title?: string;
  onClick?: () => void;
  ClassName?: string | undefined;
}

export const NextImage: FC<Props> = ({
  src,
  alt,
  width = "",
  height = "",
  title,
  onClick,
  ClassName,
}): JSX.Element => {
  return (
    <ErrorBoundary>
      <Image
        src={src}
        alt={alt}
        title={title}
        width={width}
        height={height}
        onClick={onClick}
        className={ClassName}
      />
    </ErrorBoundary>
  );
};
export default NextImage;
