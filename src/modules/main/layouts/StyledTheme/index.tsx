"use client";
import React from "react";

// Components
import { ThemeProvider } from "styled-components";
import { theme } from "antd";

// Hooks
const { useToken } = theme;

// Types
export interface StyledThemeProps {
  children?: React.ReactNode;
}

export const StyledTheme = ({ children }: StyledThemeProps) => {
  const { token } = useToken();

  return <ThemeProvider theme={token}>{children}</ThemeProvider>;
};

export default StyledTheme;
