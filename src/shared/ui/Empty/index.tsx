// Styles
import { StyledEmpty, AntdEmptyProps } from "./styles";

// Types
export interface EmptyProps extends AntdEmptyProps {}

export const Empty = ({ ...props }: EmptyProps) => {
  return <StyledEmpty {...props} />;
};

export default Empty;
