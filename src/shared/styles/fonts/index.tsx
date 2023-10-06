// Utils
import localFont from "next/font/local";

// Components
import { Inter } from "next/font/google";

// Font connection
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const newsGothicStd = localFont({
  src: "./NewsGothicStd.otf",
  weight: "400",
});
