import { HtmlHTMLAttributes } from "react";

// Styles
import {
  Wrap,
  LeftWrap,
  RightWrap,
  GenerateImagesButton,
  GridViewSwitch,
} from "./styles";

// Types
export interface DashboardHomeHeaderProps
  extends HtmlHTMLAttributes<HTMLDivElement> {}

export const DashboardHomeHeader = (props: DashboardHomeHeaderProps) => {
  return (
    <Wrap {...props}>
      <LeftWrap>
        <GridViewSwitch />
      </LeftWrap>
      <RightWrap>
        <GenerateImagesButton />
      </RightWrap>
    </Wrap>
  );
};

export default DashboardHomeHeader;
