import styled, { css } from "styled-components";

// Components
import GridViewSwitch, {
  GridViewSwitchProps,
} from "../../../../shared/ui/GridViewSwitch";

// Styled components
export const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const ViewSwitch = styled(GridViewSwitch)<GridViewSwitchProps>``;
