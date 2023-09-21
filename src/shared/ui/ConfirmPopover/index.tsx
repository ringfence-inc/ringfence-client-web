import React, { useState, useEffect } from "react";

// Styles
import {
  StyledPopover,
  ConfirmButton,
  CancelButton,
  ContentWrap,
  ButtonsWrap,
  Text,
  PopoverProps,
} from "./styles";
import { set } from "react-hook-form";

// Types
export interface ConfirmPopoverProps extends PopoverProps {
  ContentWrapComponent?: React.FC<any>;
  text?: string;
  yesText?: string;
  noText?: string;
  onConfirm?: () => void;
  cancelOnConfirm?: boolean;
  danger?: boolean;
  disabled?: boolean;
  onCancel?: () => void;
}

export const ConfirmPopover = ({
  ContentWrapComponent = ContentWrap,
  text = `Are you sure you want to do this action? It can't be undone.`,
  yesText = "Yes",
  noText = "No",
  cancelOnConfirm = true,
  onOpenChange,
  onConfirm,
  onCancel,
  open,
  placement = "bottom",
  arrow = true,
  danger = true,
  disabled = false,
  trigger = "click",
  ...props
}: ConfirmPopoverProps) => {
  const [stateOpen, setStateOpen] = useState(false);

  const handleConfirmClick = async () => {
    await onConfirm?.();
    cancelOnConfirm && setStateOpen(false);
  };

  const handleCancelClick = async () => {
    await onCancel?.();
    setStateOpen(false);
  };

  const content = (
    <ContentWrapComponent>
      <Text>{text}</Text>
      <ButtonsWrap>
        <CancelButton onClick={handleCancelClick}>{noText}</CancelButton>
        <ConfirmButton
          onClick={handleConfirmClick}
          type="primary"
          danger={danger}
        >
          {yesText}
        </ConfirmButton>
      </ButtonsWrap>
    </ContentWrapComponent>
  );

  useEffect(() => {
    setStateOpen(!!open);
  }, [open]);

  const handleOpenChange = (open: boolean) => {
    if (disabled) {
      setStateOpen(false);
      return;
    }

    setStateOpen(open);
    onOpenChange?.(open);
  };

  return (
    <StyledPopover
      placement={placement}
      open={stateOpen}
      content={content}
      arrow={arrow}
      trigger={trigger}
      onOpenChange={handleOpenChange}
      {...props}
    >
      {props.children}
    </StyledPopover>
  );
};

export default ConfirmPopover;
