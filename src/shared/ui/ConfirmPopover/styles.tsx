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
`;

export const ButtonsWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const Text = styled(Typography.SmallP)``;

export const ConfirmButton = styled(Button).attrs(() => ({
  size: "middle",
}))<ButtonProps>``;

export const CancelButton = styled(Button).attrs(() => ({
  size: "middle",
}))<ButtonProps>``;
