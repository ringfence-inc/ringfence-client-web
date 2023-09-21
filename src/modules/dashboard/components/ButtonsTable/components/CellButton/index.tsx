// Styles
import { StyledButton, IconWrap, TdProps } from "./styles";

// Types
import type { ButtonsTableItem } from "../..";

export interface CellButtonProps extends TdProps, ButtonsTableItem {
  space?: string;
  rounded?: boolean;
  danger?: boolean;
  leftBorder?: boolean;
  roundedLeft?: boolean;
  roundedRight?: boolean;
  disabled?: boolean;
}

export const CellButton = ({
  icon = <></>,
  text = "",
  space = "",
  rounded = false,
  danger = false,
  leftBorder = false,
  roundedLeft = false,
  roundedRight = false,
  disabled = false,
  ...props
}: CellButtonProps) => {
  const isDisabled = disabled || !!space;

  return (
    <StyledButton
      $rounded={rounded}
      $space={space}
      $danger={danger}
      $leftBorder={leftBorder}
      $roundedLeft={roundedLeft}
      $roundedRight={roundedRight}
      as={space ? "div" : undefined}
      data-disabled={isDisabled}
      {...props}
    >
      <IconWrap>{icon}</IconWrap>
      {text || props.children}
    </StyledButton>
  );
};

export default CellButton;
