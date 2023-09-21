import styled, { css } from "styled-components";

// Icon
import FolderSvg from "public/icons/folder.svg";

// Components
import _Button, { ButtonProps } from "../../../../components/Button";

// Re export types
export type { ButtonProps };

// Styled components
export const FolderIcon = styled(FolderSvg)`
  width: 20px;
  height: 20px;
`;

export const StyledButton = styled(_Button).attrs(() => ({
  type: "primary",
  size: "middle",
  icon: <FolderIcon />,
}))<ButtonProps>``;
