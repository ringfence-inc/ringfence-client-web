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
  RcFile,
  UploadChangeParam,
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

    const handleChange = (file: UploadChangeParam<UploadFile<any>> | any) => {
      console.log("handle drag file change", file);
      if (file?.status === "done") {
        onChange?.(file?.fileList);
      }
    };

    const handleBeforeUpload = (file: RcFile, fileList: RcFile[]) => {
      console.log("handle drag file before upload", file, fileList);
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
        fileList={fileList}
        {...props}
      >
        <SubWrap ref={ref as any}>
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
