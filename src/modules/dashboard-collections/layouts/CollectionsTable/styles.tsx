import styled, { css } from "styled-components";

// Components
import Table, { TableProps } from "../../../../shared/ui/Table";

// Re export types
export type { TableProps };

// Types
import { TCollection } from "../../api/apiGetCollections";

// Styled components
export const StyledTable = styled(Table)<TableProps<TCollection>>``;
