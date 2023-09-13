// Styles
import { StyledAlert, AntdAlertProps } from "./styles";

// Types
export interface AlertProps extends AntdAlertProps {}

export const Alert = ({ ...props }: AlertProps) => {
  return <StyledAlert {...props} />;
};

export default Alert;
