// Styles
import { StyledButton, ListIcon, IconButtonProps } from "./styles";

// Types
export interface ListButtonProps extends IconButtonProps {}

export const ListButton = (props: ListButtonProps) => {
  return (
    <StyledButton {...props}>
      <ListIcon />
    </StyledButton>
  );
};

export default ListButton;
