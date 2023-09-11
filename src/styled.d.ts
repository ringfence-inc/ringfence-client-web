import "styled-components";
import type { StyledAntdTheme } from "./shared/theme";
declare module "styled-components" {
  export interface DefaultTheme extends StyledAntdTheme {}
}
