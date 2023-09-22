// Styles
import { StyledButton, ButtonProps, PenIcon } from "./styles";

// Types
export interface GenerateImagesButtonProps extends ButtonProps {}

export const GenerateImagesButton = ({
  children = "Generate Images",
  ...props
}: GenerateImagesButtonProps) => {
  return (
    <StyledButton icon={<PenIcon />} {...props}>
      {children}
    </StyledButton>
  );
};

export default GenerateImagesButton;
