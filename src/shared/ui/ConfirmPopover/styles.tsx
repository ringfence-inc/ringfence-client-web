import styled, { css } from "styled-components";

// Components
import Popover, { PopoverProps } from "@/shared/ui/Popover";
import Button, { ButtonProps } from "@/shared/ui/Button";
import Typography, { TypographyProps } from "@/shared/ui/Typography";

// Re export types
export type { PopoverProps };

// Styled components
export const StyledPopover = styled(Popover)<PopoverProps>``;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 0 4px;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const Text = styled(Typography.SmallP)`
  margin-bottom: 12px;
`;

export const ConfirmButton = styled(Button).attrs(() => ({
  size: "small",
}))<ButtonProps>`
  min-width: 57px;
`;

export const CancelButton = styled(Button).attrs(() => ({
  size: "small",
}))<ButtonProps>`
  min-width: 51px;
`;
