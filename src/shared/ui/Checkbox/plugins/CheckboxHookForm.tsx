import React from "react";

// Hooks
import { useController, UseControllerProps } from "react-hook-form";

// Components
import Checkbox, { CheckboxProps } from "../index";
import InputWrap, {
  InputWrapProps,
  InputWrapPartialProps,
} from "../../InputWrap";

// Types
export interface CheckboxHookFormProps
  extends CheckboxProps,
    UseControllerProps<any>,
    InputWrapPartialProps {
  WrapComponent?: React.FC<InputWrapProps>;
  name: string;
}

export const CheckboxHookForm = ({
  WrapComponent = InputWrap,
  name,
  rules,
  defaultValue,
  className,
  label = "",
  placeholder = label,
  labelPosition = "right",
  showLabel,
  ...props
}: CheckboxHookFormProps) => {
  const { field } = useController({
    name,
    rules,
    defaultValue,
  });

  return (
    <WrapComponent
      {...{ className, name, placeholder, label, labelPosition, showLabel }}
    >
      <Checkbox
        {...field}
        className="checkbox-hook-form"
        {...{ placeholder }}
        {...props}
      />
    </WrapComponent>
  );
};

export default CheckboxHookForm;
