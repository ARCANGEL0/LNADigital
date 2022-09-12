import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height,imgId,className }: SvgIconProps) => (
  <img src={`/img/svg/${src}`} alt={src} width={width} id={imgId} className={className} height={height} />
);
