import { forwardRef, useMemo } from "react";

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

const previewStore: Record<string, string> = {};

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
    const handleCustomRequest = (options: any) => {
      return options?.onSuccess?.({}, options?.file);
    };

    const filesWithPreviews = useMemo(() => {
      return fileList?.map((file) => {
        if (file?.uid && previewStore[file?.uid]) {
          return {
            ...file,
            thumbUrl: previewStore[file?.uid],
          };
        }
        return file;
      });
    }, [fileList]);

    const handleChange = async ({
      file,
      fileList,
    }: UploadChangeParam<UploadFile<any>> | any = {}) => {
      if (file?.status === "removed") {
        URL.revokeObjectURL(previewStore[file?.uid]);
        delete previewStore[file?.uid];
      }
      onChange?.(fileList);
    };

    const handleBeforeUpload = (file: RcFile, fileList: RcFile[]) => {
      return;
    };

    const handlePreview = async (file: File | Blob | any): Promise<string> => {
      const previewUrl = URL.createObjectURL(file);

      if (file?.uid) {
        previewStore[file?.uid] = previewUrl;
      }

      return previewUrl;
    };

    return (
      <StyledDragger
        openFileDialogOnClick={false}
        listType={listType}
        onChange={handleChange}
        customRequest={handleCustomRequest}
        beforeUpload={handleBeforeUpload}
        fileList={filesWithPreviews}
        previewFile={handlePreview}
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
