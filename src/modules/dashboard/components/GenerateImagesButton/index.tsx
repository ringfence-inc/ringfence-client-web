// Styles
import { StyledButton, ButtonProps } from "./styles";

// Types
export interface GenerateImagesButtonProps extends ButtonProps {}

export const GenerateImagesButton = ({
  children = "Generate Images",
  ...props
}: GenerateImagesButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default GenerateImagesButton;
