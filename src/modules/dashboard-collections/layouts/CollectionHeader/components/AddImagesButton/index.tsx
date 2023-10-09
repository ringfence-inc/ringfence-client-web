// Styles
import { StyledButton, ButtonProps } from "./styles";

// Types
export interface AddImagesButtonProps extends ButtonProps {}

export const AddImagesButton = ({
  children = "Add images to collection",
  ...props
}: AddImagesButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default AddImagesButton;
