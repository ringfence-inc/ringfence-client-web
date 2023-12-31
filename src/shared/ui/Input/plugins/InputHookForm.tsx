import React from "react";

// Hooks
import { useController, UseControllerProps } from "react-hook-form";

// Components
import Input, { InputProps } from "../index";
import InputWrap, {
  InputWrapProps,
  InputWrapPartialProps,
} from "../../InputWrap";

// Types
export interface InputHookFormProps
  extends InputProps,
    Omit<UseControllerProps<any>, "defaultValue">,
    InputWrapPartialProps {
  WrapComponent?: React.FC<InputWrapProps>;
  name: string;
}

export const InputHookForm = ({
  WrapComponent = InputWrap,
  name,
  rules,
  defaultValue,
  className,
  label = "",
  placeholder = label,
  labelPosition,
  showLabel,
  required,
  style = {},
  ...props
}: InputHookFormProps) => {
  const { field } = useController({
    name,
    rules,
    defaultValue,
  });

  return (
    <WrapComponent
      {...{
        className,
        name,
        placeholder,
        label,
        showLabel,
        labelPosition,
        required,
      }}
    >
      <Input
        {...field}
        className="input-hook-form"
        style={{ width: "100%", ...style }}
        {...{ placeholder, required }}
        {...props}
      />
    </WrapComponent>
  );
};

export default InputHookForm;
