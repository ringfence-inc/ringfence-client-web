import styled, { css } from "styled-components";

// Components
import Popover, { PopoverProps } from "antd/lib/popover";

// Re export types
export type { PopoverProps as AntdPopoverProps };

// Styled components
export const StyledPopover = styled(Popover)<PopoverProps>``;
