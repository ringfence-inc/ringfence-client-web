import { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, ButtonWrap } from "./styles";

// Components
import GridButton from "./components/GridButton";
import ListButton from "./components/ListButton";

// Hooks
import { useAppRouterState } from "../../hooks/useAppRouterState";

// Constants
export const GRID_VIEW_SWITCH_KEY = "viewMode";
export const GRID_VIEW_SWITCH_GRID = "grid";
export const GRID_VIEW_SWITCH_LIST = "list";

// Types
export interface GridViewSwitchProps
  extends HtmlHTMLAttributes<HTMLDivElement> {}

export const GridViewSwitch = ({ ...props }: GridViewSwitchProps) => {
  const [viewMode, setViewMode] = useAppRouterState({
    key: GRID_VIEW_SWITCH_KEY,
  });

  return (
    <Wrap {...props}>
      <ButtonWrap>
        <GridButton
          active={viewMode === GRID_VIEW_SWITCH_GRID || !viewMode}
          onClick={() => setViewMode(GRID_VIEW_SWITCH_GRID)}
        />
      </ButtonWrap>

      <ButtonWrap>
        <ListButton
          active={viewMode === GRID_VIEW_SWITCH_LIST}
          onClick={() => setViewMode(GRID_VIEW_SWITCH_LIST)}
        />
      </ButtonWrap>
    </Wrap>
  );
};

export default GridViewSwitch;
