// Styles
import { StyledPopover, AntdPopoverProps } from "./styles";

// Types
export interface PopoverProps extends AntdPopoverProps {}

export const Popover = ({ ...props }: PopoverProps) => {
  return <StyledPopover {...props} />;
};

export default Popover;
