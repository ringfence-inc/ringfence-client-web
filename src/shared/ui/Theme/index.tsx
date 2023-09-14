"use client";
import React from "react";

// Components
import { ConfigProvider } from "antd";
import { StyledTheme } from "../StyledTheme";

// Theme
import { antdThemes } from "@/shared/theme";

// Types
import type { ThemeType } from "@/shared/theme/types";
export interface AntdDarkThemeProps {
  children?: React.ReactNode;
  theme?: ThemeType;
}

export const Theme = ({ theme = "dark", children }: AntdDarkThemeProps) => {
  return (
    <ConfigProvider theme={antdThemes[theme]}>
      <StyledTheme theme={theme}>{children}</StyledTheme>
    </ConfigProvider>
  );
};

export default Theme;
