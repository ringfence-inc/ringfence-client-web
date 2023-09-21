import React from "react";

// Hooks
import { useController, UseControllerProps } from "react-hook-form";

// Components
import Select, { SelectProps } from "../index";
import InputWrap, {
  InputWrapProps,
  InputWrapPartialProps,
} from "../../InputWrap";

// Types
export interface SelectHookFormProps
  extends Omit<SelectProps, "placeholder">,
    UseControllerProps<any>,
    InputWrapPartialProps {
  WrapComponent?: React.FC<InputWrapProps>;
  name: string;
}

export const SelectHookForm = ({
  WrapComponent = InputWrap,
  name,
  rules,
  defaultValue,
  className,
  label = "",
  placeholder = label,
  labelPosition = "top",
  showLabel,
  required,
  style = {},
  ...props
}: SelectHookFormProps) => {
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
      <Select
        {...field}
        className="select-hook-form"
        style={{ ...style, width: "100%" }}
        {...{ placeholder, required }}
        {...props}
      />
    </WrapComponent>
  );
};

export default SelectHookForm;
