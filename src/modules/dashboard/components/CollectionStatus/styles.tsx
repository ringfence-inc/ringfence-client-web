import { HtmlHTMLAttributes } from "react";

import styled, { css } from "styled-components";

// Components
import Typography, { TypographyProps } from "@/shared/ui/Typography";

// Types
import { TCollectionStatusTitle } from "../../api/apiGetCollections";

// Re export types
export type { TCollectionStatusTitle };

export interface WrapProps extends HtmlHTMLAttributes<HTMLDivElement> {
  $status?: TCollectionStatusTitle;
}

export const statusesColors: Record<TCollectionStatusTitle, string> = {
  "not checked": "#446DFF",
  detected: "#F44",
  "in progress": "#FF9344",
  checked: "#4ADC8C",
};

// Styled components
export const Dot = styled.div`
  margin-right: 8px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
`;

export const Text = styled(Typography.SmallText)<TypographyProps>``;

export const Wrap = styled.div<WrapProps>`
  display: flex;
  align-items: center;
  ${({ theme, $status }) => css`
    ${Dot} {
      background-color: ${$status &&
      statusesColors[$status as TCollectionStatusTitle]
        ? statusesColors[$status as TCollectionStatusTitle]
        : theme.color.grey};
    }
  `};
`;
