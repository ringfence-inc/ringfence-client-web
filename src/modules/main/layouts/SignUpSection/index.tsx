// Styles
import { Wrap, Title, SignUpForm, SectionWrapProps } from "./styles";

// Types
export interface SignUpSectionProps extends SectionWrapProps {}

// Hooks
import useSignUpForm from "../../hooks/useSignUpForm";

export const SignUpSection = ({ ...props }: SignUpSectionProps) => {
  const { form, onSubmit } = useSignUpForm();

  return (
    <Wrap {...props}>
      <Title items={["SIGN UP FOR", "EARLY ACCESS"]} />
      <SignUpForm form={form} onSubmit={onSubmit} />
    </Wrap>
  );
};

export default SignUpSection;
