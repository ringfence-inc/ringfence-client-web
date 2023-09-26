import { HtmlHTMLAttributes } from "react";

import styled, { css } from "styled-components";

// Components
import Typography, { TypographyProps } from "@/shared/ui/Typography";

// Types
import { TCollectionStatus } from "../../api/apiGetCollections";

// Re export types
export type { TCollectionStatus };

export interface WrapProps extends HtmlHTMLAttributes<HTMLDivElement> {
  $status?: TCollectionStatus;
}

export const statusesColors: Record<TCollectionStatus, string> = {
  not_checked: "#446DFF",
  detected: "#F44",
  in_progress: "#FF9344",
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
      statusesColors[$status as TCollectionStatus]
        ? statusesColors[$status as TCollectionStatus]
        : theme.color.grey};
    }
  `};
`;
