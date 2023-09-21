import { HtmlHTMLAttributes } from "react";

// Styles
import {
  Text,
  H1,
  H2,
  H3,
  RegularP,
  RegularText,
  SmallP,
  SmallText,
  commonTypographyCss,
  paragraphTypographyCss,
  titleTypographyCss,
} from "./styles";

// Re export styles
export { commonTypographyCss, paragraphTypographyCss, titleTypographyCss };

// Types
export interface TypographyProps extends HtmlHTMLAttributes<HTMLSpanElement> {}
export const Typography = ({ ...props }: TypographyProps) => {
  return <Text {...props}>{props.children}</Text>;
};

export default Typography;

Typography.H1 = H1;
Typography.H2 = H2;
Typography.H3 = H3;
Typography.RegularP = RegularP;
Typography.SmallP = SmallP;
Typography.RegularText = RegularText;
Typography.SmallText = SmallText;
Typography.Text = Text;
