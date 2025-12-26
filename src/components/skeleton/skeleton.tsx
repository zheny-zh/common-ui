import { clsx } from "clsx";
import type { ComponentProps, CSSProperties } from "react";

import "./skeleton.css";

export type SkeletonProps = {
  circle?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: CSSProperties;
} & ComponentProps<"div">;

export const Skeleton = ({
  circle = false,
  width,
  height,
  className,
  style,
  ...props
}: SkeletonProps) => {
  return (
    <div
      className={clsx("skeleton", circle && "circle", className)}
      style={{ width, height, ...style }}
      {...props}
    />
  );
};
