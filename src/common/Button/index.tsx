import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
  className
}: ButtonProps) => (
  <StyledButton color={color} className={className} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);
