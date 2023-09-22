import styled, { css } from "styled-components";

// Icon
import Picture from "public/icons/picture.svg";

// Components
import _Button, { ButtonProps } from "../../../../components/Button";

// Re export types
export type { ButtonProps };

// Styled components
export const FolderIcon = styled(Picture)`
  width: 20px;
  height: 20px;
`;

export const StyledButton = styled(_Button).attrs(() => ({
  type: "primary",
  size: "middle",
  icon: <FolderIcon />,
}))<ButtonProps>``;
