"use client";
import React from "react";

// Components
import { ConfigProvider } from "antd";

// Theme
import { theme } from "@/shared/theme";

export interface AntdThemeProps {
  children?: React.ReactNode;
}

export const AntdTheme = ({ children }: AntdThemeProps) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default AntdTheme;
