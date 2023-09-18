import styled, { css } from "styled-components";

// Components
import Link, { LinkProps } from "../Link";
import _IconButton, { IconButtonProps } from "../IconButton";

// Re export types
export type { IconButtonProps, LinkProps };

export const StyledButton = styled(_IconButton)<IconButtonProps>``;

export const StyledLink = styled(Link)<LinkProps>``;
