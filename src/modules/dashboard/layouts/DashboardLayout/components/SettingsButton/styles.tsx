import styled, { css } from "styled-components";

// Icons
import SettingsSvg from "public/icons/settings.svg";

// Components
import _IconButtonLink, {
  IconButtonLinkProps,
} from "@/shared/ui/IconButtonLink";

// Re export types
export type { IconButtonLinkProps };

// Styled icon components
export const StyledButton = styled(_IconButtonLink).attrs(() => ({
  type: "text",
  size: "middle",
}))<IconButtonLinkProps>``;

export const SettingsIcon = styled(SettingsSvg)`
  width: 24px;
  height: 24px;
  ${({ theme }) => css`
    color: ${theme.color.text};
  `};
`;
