import { css } from "styled-components";

export const primaryColorHover = css<any>`
  ${({ theme, $disabled, disabled = $disabled }) => css`
    ${!disabled &&
    css`
      cursor: pointer;
      &:hover {
        color: ${theme.color.primary};
      }
    `};
  `};
`;

export default primaryColorHover;
