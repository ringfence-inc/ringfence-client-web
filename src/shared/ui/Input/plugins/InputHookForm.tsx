import React from "react";

// Hooks
import { useController, UseControllerProps } from "react-hook-form";

// Components
import Input, { InputProps } from "../index";
import LabelMessage, {
  LabelMessageProps,
  LabelMessagePartialProps,
} from "../../LabelMessage";

// Types
export interface InputHookFormProps
  extends InputProps,
    Omit<UseControllerProps<any>, "defaultValue">,
    LabelMessagePartialProps {
  WrapComponent?: React.FC<LabelMessageProps>;
  name: string;
}

export const InputHookForm = ({
  WrapComponent = LabelMessage,
  name,
  rules,
  defaultValue,
  className,
  placeholder = "",
  ...props
}: InputHookFormProps) => {
  const { field } = useController({
    name,
    rules,
    defaultValue,
  });

  return (
    <WrapComponent {...{ className, name, placeholder }}>
      <Input
        {...field}
        className="input-hook-form"
        {...{ placeholder }}
        {...props}
      />
    </WrapComponent>
  );
};

export default InputHookForm;
