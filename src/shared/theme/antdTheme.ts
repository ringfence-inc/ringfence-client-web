// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

// Antd Theme
import { theme } from "antd";
const { darkAlgorithm } = theme;

export const antdTheme: ThemeConfig = {
  algorithm: darkAlgorithm,
  token: {
    colorBgBase: "#000",
    colorPrimary: "#4ADC8C",
    colorBgContainer: "#363837",
    sizeXXL: 68,
  },
};

export default antdTheme;
