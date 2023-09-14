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
import type { ThemeType } from "@/shared/theme/types";
export interface StyledThemeProps {
  children?: React.ReactNode;
  theme?: ThemeType;
}

export const StyledTheme = ({ theme = "dark", children }: StyledThemeProps) => {
  const { token } = useToken();

  const extendedTheme = useMemo(() => {
    return extendAntdTheme(token, theme);
  }, [token]);

  return <ThemeProvider theme={extendedTheme}>{children}</ThemeProvider>;
};

export default StyledTheme;
