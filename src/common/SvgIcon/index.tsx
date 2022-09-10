import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height,imgId }: SvgIconProps) => (
  <img src={`/img/svg/${src}`} alt={src} width={width} id={imgId} height={height} />
);
