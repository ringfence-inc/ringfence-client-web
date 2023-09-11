"use client";
import React from "react";

// Components
import { ConfigProvider, theme } from "antd";

// Theme
import { antdTheme } from "@/shared/theme";
export interface AntdThemeProps {
  children?: React.ReactNode;
}

export const AntdTheme = ({ children }: AntdThemeProps) => {
  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
};

export default AntdTheme;
