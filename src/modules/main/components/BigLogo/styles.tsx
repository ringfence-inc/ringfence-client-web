import styled from "styled-components";

// Icons
import LogoSvg from "public/icons/logo.svg";

export const LogoIcon = styled(LogoSvg)`
  width: 120px;
  height: 120px;
  color: ${({ theme }) => theme.colorWhite};
`;
