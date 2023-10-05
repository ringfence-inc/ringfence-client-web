// Styles
import { StyledCheckbox, StyledCheckboxProps } from "./styles";

export interface BorderedCheckboxProps extends StyledCheckboxProps {}

const BorderedCheckbox: React.FC<BorderedCheckboxProps> = ({
  ...props
}: BorderedCheckboxProps) => {
  return <StyledCheckbox {...props} />;
};

export default BorderedCheckbox;
