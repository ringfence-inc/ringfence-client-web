// Styles
import { Wrap, Title, SignUpForm, SectionWrapProps } from "./styles";

// Types
export interface SignUpSectionProps extends SectionWrapProps {}

export const SignUpSection = ({ ...props }: SignUpSectionProps) => {
  return (
    <Wrap {...props}>
      <Title items={["SIGN UP FOR", "EARLY ACCESS"]} />
      <SignUpForm />
    </Wrap>
  );
};

export default SignUpSection;
