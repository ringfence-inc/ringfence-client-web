import styled, { css } from "styled-components";

// Icons
import WalletSvg from "public/icons/wallet.svg";

// Styled icon components
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    color: ${theme.color.text};
  `};
`;

export const Text = styled.span`
  margin-left: 8px;
  font-weight: 500;
`;

export const WalletIcon = styled(WalletSvg)`
  width: 24px;
  height: 24px;
`;
