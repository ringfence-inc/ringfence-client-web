// Types
import type { GlobalToken } from "antd";
import type { ThemeType } from "./types";

// Constants
import { PRIMARY_COLOR } from "./variables";

export interface StyledTheme {
  color: {
    primary?: string;
    white?: string;
    grey?: string;
    black?: string;
    text?: string;
    midGrey?: string;
    darkGrey?: string;
  };
  m: {
    xss?: string;
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xxl?: string;
  };
  radius: {
    xss?: string;
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xxl?: string;
    half?: string;
  };
  weight: {
    normal?: number;
    semiBold?: number;
    bold?: number;
  };
  font: {
    h1?: string;
    h2?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    sm?: string;
    lg?: string;
    xl?: string;
  };
  line: {
    h1?: number;
    h2?: number;
    h3?: number;
    h4?: number;
    h5?: number;
    sm?: number;
    lg?: number;
  };
  maxWidth: string;
}

export interface StyledAntdTheme extends StyledTheme, GlobalToken {}

export const styledCommonTheme = {
  color: {
    midGrey: "#333",
    grey: "#CDCDCD",
    darkGrey: "#191919",
  },
  m: {},
  weight: {
    normal: 400,
    semiBold: 600,
    bold: 700,
  },
  font: {},
  line: {},
  radius: {
    xss: "4px",
    xs: "8px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "32px",
    xxl: "40px",
    half: "50%",
  },
  maxWidth: "1524px",
};

export const styledLightTheme = {
  ...styledCommonTheme,
  color: {
    ...styledCommonTheme.color,
    primary: PRIMARY_COLOR,
    white: "#fff",
    black: "#000",
    text: "#000",
  },
};

export const styledDarkTheme = {
  ...styledCommonTheme,
  color: {
    ...styledCommonTheme.color,
    primary: PRIMARY_COLOR,
    white: "#fff",
    black: "#000",
    text: "#fff",
  },
};

export const styledThemes: Record<ThemeType, StyledTheme> = {
  light: styledLightTheme,
  dark: styledDarkTheme,
};

export const extendAntdTheme = (
  token: GlobalToken,
  theme?: ThemeType
): StyledAntdTheme => {
  const { color, m, weight, font, line } = styledThemes[theme || "dark"];

  return {
    ...token,
    ...styledCommonTheme,
    color: {
      ...color,
    },
    m: {
      ...m,
      xss: `${token.marginXXS}px`, // 4px
      xs: `${token.marginXS}px`, // 8px
      sm: `${token.marginSM}px`, // 12px
      md: `${token.marginMD}px`, // 20px
      lg: `${token.marginLG}px`, // 24px
      xl: `${token.marginXL}px`, // 32px
      xxl: `${token.marginXXL}px`, // 48px
    },
    weight,
    font: {
      ...font,
      h1: `${token.fontSizeHeading1}px`, // 38px
      h2: `${token.fontSizeHeading2}px`, // 30px
      h3: `${token.fontSizeHeading3}px`, // 24px
      h4: `${token.fontSizeHeading4}px`, // 20px
      h5: `${token.fontSizeHeading5}px`, // 16px
      sm: `${token.fontSizeSM}px`, // 12px
      lg: `${token.fontSizeLG}px`, // 16px
      xl: `${token.fontSizeXL}px`, // 20px
    },
    line: {
      ...line,
      h1: token.lineHeightHeading1, // 1.57
      h2: token.lineHeightHeading2, // 1.21
      h3: token.lineHeightHeading3, // 1.26
      h4: token.lineHeightHeading4, // 1.33
      h5: token.lineHeightHeading5, // 1.4
      sm: token.lineHeightSM, // 1.66
      lg: token.lineHeightLG, // 1.5
    },
  };
};

export default styledCommonTheme;
