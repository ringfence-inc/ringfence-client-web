import React from "react";

// Hooks
import { useController, UseControllerProps } from "react-hook-form";

// Components
import BorderedCheckbox, { BorderedCheckboxProps } from "../index";
import InputWrap, {
  InputWrapProps,
  InputWrapPartialProps,
} from "../../InputWrap";

// Types
export interface BorderedCheckboxHookFormProps
  extends BorderedCheckboxProps,
    UseControllerProps<any>,
    InputWrapPartialProps {
  WrapComponent?: React.FC<InputWrapProps>;
  name: string;
}

export const BorderedCheckboxHookForm = ({
  WrapComponent = InputWrap,
  name,
  rules,
  defaultValue,
  className,
  label = "",
  placeholder = label,
  labelPosition = "right",
  showLabel,
  required,
  ...props
}: BorderedCheckboxHookFormProps) => {
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
        labelPosition,
        showLabel,
        required,
      }}
    >
      <BorderedCheckbox
        {...field}
        className="bordered-checkbox-hook-form"
        {...{ placeholder, required }}
        {...props}
      />
    </WrapComponent>
  );
};

export default BorderedCheckboxHookForm;
