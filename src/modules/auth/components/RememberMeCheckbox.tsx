// Components
import Checkbox, { CheckboxProps } from "./Checkbox";

// Types
export interface RememberMeCheckboxProps extends Partial<CheckboxProps> {}

export const RememberMeCheckbox = ({
  name = "rememberMe",
  label = "Remember me",
  showLabel = true,
  ...props
}: RememberMeCheckboxProps) => {
  return <Checkbox name={name} label={label} showLabel={true} {...props} />;
};

export default RememberMeCheckbox;
