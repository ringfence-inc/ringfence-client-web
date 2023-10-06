// theme/themeConfig.ts
import type { ThemeConfig } from "antd";
import type { ThemeType } from "./types";

// Fonts
import { inter } from "../styles/fonts";

// Antd Theme
import theme from "antd/lib/theme";
const { darkAlgorithm, defaultAlgorithm } = theme;

// Constants
import { PRIMARY_COLOR } from "./variables";

export const antdCommonTheme: ThemeConfig | any = {
  token: { fontFamily: inter.style.fontFamily, borderRadius: 4 },
  components: {
    Button: {
      colorPrimary: PRIMARY_COLOR,
      dangerColor: "#000",
      primaryColor: "#000",
    },
  },
};

export const antdDarkTheme: ThemeConfig = {
  algorithm: darkAlgorithm,
  token: {
    ...antdCommonTheme.token,
    colorBgBase: "#000",
    colorPrimary: PRIMARY_COLOR,
    colorBgContainer: "#363837",
    sizeXXL: 68,
  },
  components: {
    Button: {
      ...antdCommonTheme.components?.Button,
    },
  },
};

export const antdLightTheme: ThemeConfig = {
  algorithm: defaultAlgorithm,
  token: {
    ...antdCommonTheme.token,
    colorBgBase: "#fff",
    colorPrimary: PRIMARY_COLOR,
    colorBgContainer: "#fff",
    sizeXXL: 68,
  },
  components: {
    Button: {
      ...antdCommonTheme.components?.Button,
    },
  },
};

export const antdThemes: Record<ThemeType, ThemeConfig> = {
  light: antdLightTheme,
  dark: antdDarkTheme,
};

export default antdDarkTheme;
