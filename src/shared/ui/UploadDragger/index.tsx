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
} from "./styles";

// Types
export interface UploadDraggerProps extends AntdDraggerProps {}

export const UploadDragger = ({ ...props }: UploadDraggerProps) => {
  const handleCustomRequest = (...args: any) => {
    console.log("custom request", args);
  };

  const handleChange = (...args: any) => {
    console.log("handle drag file change", args);
  };

  const handleRemove = (...args: any) => {};

  return (
    <StyledDragger
      onChange={handleChange}
      customRequest={handleCustomRequest}
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
};

export default UploadDragger;
