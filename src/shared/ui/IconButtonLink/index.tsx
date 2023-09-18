// Styles
import { StyledButton, StyledLink, IconButtonProps, LinkProps } from "./styles";

// Types
export interface IconButtonLinkProps
  extends LinkProps,
    Omit<
      IconButtonProps,
      "href" | "onClick" | "onMouseEnter" | "onTouchStart"
    > {}

export const IconButtonLink = ({
  shape = "circle",
  children = "",
  type,
  disabled,
  icon = children,
  size,
  ...props
}: IconButtonProps) => {
  return (
    // @ts-ignore
    <StyledLink {...{ disabled }} {...props}>
      <StyledButton {...{ type, shape, icon, disabled, size }} />
    </StyledLink>
  );
};

export default IconButtonLink;
