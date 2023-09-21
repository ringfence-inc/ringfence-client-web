// Styles
import { StyledButton, ButtonProps } from "./styles";

// Types
export interface NewCollectionButtonProps extends ButtonProps {}

export const NewCollectionButton = ({
  children = "New Collection",
  ...props
}: NewCollectionButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default NewCollectionButton;
