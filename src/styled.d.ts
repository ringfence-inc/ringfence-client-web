import "styled-components";
import type { GlobalToken } from "antd";

declare module "styled-components" {
  export interface DefaultTheme extends GlobalToken {}
}
