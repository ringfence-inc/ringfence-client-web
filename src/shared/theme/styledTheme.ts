// Types
import type { GlobalToken } from "antd";

export interface StyledTheme {
  color: {
    primary: string;
    white: string;
  };
}

export interface StyledAntdTheme extends StyledTheme, GlobalToken {}

export const styledTheme = {
  color: {},
};

export const extendAntdTheme = (token: GlobalToken): StyledAntdTheme => {
  const { color = {} } = styledTheme;
  return {
    ...token,
    ...styledTheme,
    color: {
      primary: token.colorPrimary,
      white: token.colorWhite,
      ...color,
    },
  };
};

export default styledTheme;
