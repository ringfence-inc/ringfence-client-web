import { forwardRef } from "react";

// Styles
import {
  StyledDragger,
  CloudUploadIcon,
  SubWrap,
  TextWrap,
  TextSubWrap,
  Description,
  OrText,
  PrimaryText,
  AntdDraggerProps,
  UploadFile,
} from "./styles";

// Types
export interface UploadDraggerProps extends AntdDraggerProps {
  value?: UploadFile[];
}

export const UploadDragger = forwardRef(
  (
    {
      value,
      fileList = value,
      onChange,
      listType = "picture",
      ...props
    }: UploadDraggerProps,
    ref
  ) => {
    console.log("upload drag file value", value);
    const handleCustomRequest = (options: any) => {
      return options?.onSuccess?.({}, options?.file);
    };

    const handleChange = (file: any) => {
      console.log("handle drag file change", file);
    };

    const handleBeforeUpload = () => {
      return;
    };

    const handleRemove = (...args: any) => {};

    return (
      <StyledDragger
        openFileDialogOnClick={false}
        listType={listType}
        onChange={handleChange}
        customRequest={handleCustomRequest}
        beforeUpload={handleBeforeUpload}
        ref={ref as any}
        fileList={fileList}
        {...props}
      >
        <SubWrap>
          <CloudUploadIcon />
          <TextWrap>
            <Description>Drag and drop your files</Description>
            <TextSubWrap>
              <OrText>or</OrText>&nbsp;
              <PrimaryText>upload here</PrimaryText>
            </TextSubWrap>
          </TextWrap>
        </SubWrap>
      </StyledDragger>
    );
  }
);
UploadDragger.displayName = "UploadDragger";

export default UploadDragger;
