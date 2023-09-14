// theme/themeConfig.ts
import type { ThemeConfig } from "antd";
import type { ThemeType } from "./types";

// Antd Theme
import { theme } from "antd";
const { darkAlgorithm, defaultAlgorithm } = theme;

export const antdDarkTheme: ThemeConfig = {
  algorithm: darkAlgorithm,
  token: {
    colorBgBase: "#000",
    colorPrimary: "#4ADC8C",
    colorBgContainer: "#363837",
    sizeXXL: 68,
  },
};

export const antdLightTheme: ThemeConfig = {
  algorithm: defaultAlgorithm,
  token: {
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
