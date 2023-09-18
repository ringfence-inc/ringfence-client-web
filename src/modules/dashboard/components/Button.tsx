import styled, { css } from "styled-components";

import _Button, { ButtonProps } from "@/shared/ui/Button";

// Re export types
export type { ButtonProps };

// Styled components
export const Button = styled(_Button)<ButtonProps>``;

export default Button;
