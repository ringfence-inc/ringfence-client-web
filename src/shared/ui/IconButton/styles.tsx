import styled, { css } from "styled-components";

// Styles
import { iconButtonSizeCss } from "@/shared/styles/sizes";

// Components
import _Button, { ButtonProps } from "../Button";

// Re export types
export type { ButtonProps };

export const StyledButton = styled(_Button)<ButtonProps>`
  ${iconButtonSizeCss};
`;
