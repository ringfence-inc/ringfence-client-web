import styled, { css } from "styled-components";

// Components
import GridViewSwitch, {
  GridViewSwitchProps,
} from "../../components/GridViewSwitch";

// Styled components
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ViewSwitch = styled(GridViewSwitch)<GridViewSwitchProps>``;
