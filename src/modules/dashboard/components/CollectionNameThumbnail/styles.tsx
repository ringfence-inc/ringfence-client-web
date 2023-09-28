import styled, { css } from "styled-components";

// Components
import CollectionThumbnail, {
  CollectionThumbnailProps,
} from "../CollectionThumbnail";

// Re export types
export type { CollectionThumbnailProps };

// Styled components
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    cursor: pointer;
    &:hover {
      color: ${theme.color.primary};
    }
  `};
`;

export const Text = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.m.sm};
  `};
`;

export const Thumbnail = styled(
  CollectionThumbnail
)<CollectionThumbnailProps>``;
