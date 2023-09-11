"use client";
import React, { useMemo } from "react";

// Components
import { ThemeProvider } from "styled-components";
import { theme } from "antd";

// Utils
import { extendAntdTheme } from "@/shared/theme";

// Hooks
const { useToken } = theme;

// Types
export interface StyledThemeProps {
  children?: React.ReactNode;
}

export const StyledTheme = ({ children }: StyledThemeProps) => {
  const { token } = useToken();

  const theme = useMemo(() => {
    return extendAntdTheme(token);
  }, [token]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledTheme;
