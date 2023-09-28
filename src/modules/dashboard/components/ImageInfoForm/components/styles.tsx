import styled, { css } from "styled-components";

// Components
import Typography, { TypographyProps } from "@/shared/ui/Typography";

export const GreyText = styled(Typography.SmallText)`
  ${({ theme }) => css`
    color: ${theme.color.grey};
  `};
`;

export const Text = styled(Typography.SmallText)``;
