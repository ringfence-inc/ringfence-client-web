import styled, { css } from "styled-components";

// Icons
import WalletSvg from "public/icons/wallet.svg";
import PenSvg from "public/icons/pen.svg";
import TrashSvg from "public/icons/trash.svg";

// Components
import _ButtonsTable, {
  TdButton,
  ButtonsTableProps,
  TdButtonProps,
  ButtonsTableItem,
} from "../../../../components/ButtonsTable";
import ConfirmPopover, {
  ConfirmPopoverProps,
} from "@/shared/ui/ConfirmPopover";

// Re export types
export type { ButtonsTableProps, TdButtonProps, ButtonsTableItem };

// Styled components
export const ButtonsTable = styled(_ButtonsTable)<ButtonsTableProps>``;

export const Button = styled(TdButton)``;

export const FundsPopover = styled(ConfirmPopover)<ConfirmPopoverProps>`
  max-width: 216px;
`;

export const DeletePopover = styled(ConfirmPopover)<ConfirmPopoverProps>`
  max-width: 200px;
`;

// Styled icons css
export const iconCss = css`
  width: 24px;
  height: 24px;
`;

// Styled icons
export const WalletIcon = styled(WalletSvg)`
  ${iconCss};
`;

export const PenIcon = styled(PenSvg)`
  ${iconCss};
`;

export const TrashIcon = styled(TrashSvg)`
  ${iconCss};
`;
