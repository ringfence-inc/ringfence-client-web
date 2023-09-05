"use client";

import React from "react";

// Components
import { Inter } from "next/font/google";

// Layouts
import AntdRegistry from "../AntdRegistry";
import AntdTheme from "../AntdTheme";
import StyledRegistry from "../StyledRegistry";
import StyledTheme from "../StyledTheme";

// Font connection
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <AntdRegistry>
        <AntdTheme>
          <StyledRegistry>
            <StyledTheme>{children}</StyledTheme>
          </StyledRegistry>
        </AntdTheme>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
