// Styles
import { StyledSpin, AntdSpinProps } from "./styles";

// Types
export interface SpinProps extends AntdSpinProps {}

export const Spin = ({ ...props }: SpinProps) => {
  return <StyledSpin {...props} />;
};

export default Spin;
