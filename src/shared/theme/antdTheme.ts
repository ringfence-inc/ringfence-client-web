// theme/themeConfig.ts
import type { ThemeConfig } from "antd";
import type { ThemeType } from "./types";

// Fonts
import { inter } from "../styles/fonts";

// Antd Theme
import theme from "antd/lib/theme";
const { darkAlgorithm, defaultAlgorithm } = theme;

export const antdCommonTheme: ThemeConfig["token"] = {
  fontFamily: inter.style.fontFamily,
};

export const antdDarkTheme: ThemeConfig = {
  algorithm: darkAlgorithm,
  token: {
    ...antdCommonTheme,
    colorBgBase: "#000",
    colorPrimary: "#4ADC8C",
    colorBgContainer: "#363837",
    sizeXXL: 68,
  },
};

export const antdLightTheme: ThemeConfig = {
  algorithm: defaultAlgorithm,
  token: {
    ...antdCommonTheme,
    colorBgBase: "#fff",
    colorPrimary: "#4ADC8C",
    colorBgContainer: "#fff",
    sizeXXL: 68,
  },
};

export const antdThemes: Record<ThemeType, ThemeConfig> = {
  light: antdLightTheme,
  dark: antdDarkTheme,
};

export default antdDarkTheme;
