import styled, { css } from "styled-components";

// Icons
import PenSvg from "public/icons/pen.svg";
import LogoSvg from "public/icons/logo.svg";
import FolderSvg from "public/icons/folder.svg";
import TrashSvg from "public/icons/trash.svg";

// Components
import _ButtonsTable, {
  TdButton,
  ButtonsTableProps,
  TdButtonProps,
  ButtonsTableItem,
} from "../../../../components/ButtonsTable";

// Re export types
export type { ButtonsTableProps, TdButtonProps, ButtonsTableItem };

// Styled components
export const ButtonsTable = styled(_ButtonsTable)<ButtonsTableProps>``;

export const Button = styled(TdButton)``;

// Styled icons css
export const iconCss = css`
  width: 24px;
  height: 24px;
`;

// Styled icons
export const LogoIcon = styled(LogoSvg)`
  ${iconCss};
`;

export const PenIcon = styled(PenSvg)`
  ${iconCss};
`;

export const FolderIcon = styled(FolderSvg)`
  ${iconCss};
`;

export const TrashIcon = styled(TrashSvg)`
  ${iconCss};
`;
