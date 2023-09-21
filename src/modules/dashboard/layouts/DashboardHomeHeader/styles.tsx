import styled, { css } from "styled-components";

// Components
import _Button, { ButtonProps } from "../../components/Button";
import _IconButton, { IconButtonProps } from "../../components/IconButton";
import _GenerateImagesButton, {
  GenerateImagesButtonProps,
} from "./components/GenerateImagesButton";
import _GridViewSwitch from "../../components/GridViewSwitch";

// Re export types
export type { ButtonProps, IconButtonProps };

// Styled components
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const RightWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const GridViewSwitch = styled(_GridViewSwitch)``;

export const GenerateImagesButton = styled(
  _GenerateImagesButton
)<GenerateImagesButtonProps>``;

export const Button = styled(_Button)<ButtonProps>``;

export const IconButton = styled(_IconButton)<IconButtonProps>``;
