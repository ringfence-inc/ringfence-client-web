import styled, { css } from "styled-components";

// Components
import AntdTitle, { TitleProps } from "antd/lib/typography/Title";
import AntdText, { TextProps } from "antd/lib/typography/Text";
import AntdParagraph, { ParagraphProps } from "antd/lib/typography/Paragraph";
import AntdLink, { LinkProps } from "antd/lib/typography/Link";

// Re export types
export type { TitleProps, TextProps, ParagraphProps, LinkProps };

// Styled css
export const commonTypographyCss = css``;

export const Title = styled(AntdTitle)<TitleProps>`
  ${commonTypographyCss}
`;

export const Text = styled(AntdText)<TextProps>`
  ${commonTypographyCss}
`;

export const Paragraph = styled(AntdParagraph)<ParagraphProps>`
  ${commonTypographyCss}
`;

export const Link = styled(AntdLink)<LinkProps>`
  ${commonTypographyCss}
`;
