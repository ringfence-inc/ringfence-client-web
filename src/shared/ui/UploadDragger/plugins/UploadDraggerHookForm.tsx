import React from "react";

// Hooks
import { useController, UseControllerProps } from "react-hook-form";

// Components
import UploadDragger, { UploadDraggerProps } from "../index";
import InputWrap, {
  InputWrapProps,
  InputWrapPartialProps,
} from "../../InputWrap";

// Types
export interface UploadDraggerHookFormProps
  extends UploadDraggerProps,
    UseControllerProps<any>,
    InputWrapPartialProps {
  WrapComponent?: React.FC<InputWrapProps>;
  name: string;
}

export const UploadDraggerHookForm = ({
  WrapComponent = InputWrap,
  name = "images",
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
}: UploadDraggerHookFormProps) => {
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
      <UploadDragger
        {...field}
        className="upload-dragger-hook-form"
        style={{ width: "100%", ...style }}
        {...{ placeholder, required }}
        {...props}
      />
    </WrapComponent>
  );
};

export default UploadDraggerHookForm;
