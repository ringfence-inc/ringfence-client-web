import styled from "styled-components";

// Layouts
import DashboardHomeHeader, {
  DashboardHomeHeaderProps,
} from "../../layouts/DashboardHomeHeader";
import _PicturesGrid, { PicturesGridProps } from "../../layouts/PicturesGrid";

// Styled components
export const HomeHeader = styled(
  DashboardHomeHeader
)<DashboardHomeHeaderProps>``;

export const PicturesGrid = styled(_PicturesGrid)<PicturesGridProps>`
  margin-top: 40px;
`;
