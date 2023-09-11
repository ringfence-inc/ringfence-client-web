// Hooks
import { useController, UseControllerProps } from "react-hook-form";

// Components
import Input, { InputProps } from "../index";

export interface InputHookFormProps
  extends InputProps,
    Omit<UseControllerProps<any>, "defaultValue"> {
  name: string;
}

export const InputHookForm = ({
  name,
  rules,
  defaultValue,
  ...props
}: InputHookFormProps) => {
  const { field } = useController({
    name,
    rules,
    defaultValue,
  });

  return <Input {...field} {...props} />;
};

export default InputHookForm;
