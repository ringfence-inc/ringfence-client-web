// Styles
import { StyledButton, GridIcon, IconButtonProps } from "./styles";

// Types
export interface GridButtonProps extends IconButtonProps {}

export const GridButton = (props: GridButtonProps) => {
  return (
    <StyledButton {...props}>
      <GridIcon />
    </StyledButton>
  );
};

export default GridButton;
