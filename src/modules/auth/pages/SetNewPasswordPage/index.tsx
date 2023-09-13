// Styles
import { SetNewPasswordForm, SetNewPasswordFormProps } from "./styles";

// Hooks
import useSetNewPasswordForm from "../../hooks/useSetNewPasswordForm";

// Types
export interface SetNewPasswordPageProps extends SetNewPasswordFormProps {}

export const SetNewPasswordPage = ({ ...props }: SetNewPasswordPageProps) => {
  const formProps = useSetNewPasswordForm();

  return <SetNewPasswordForm {...props} {...formProps} />;
};

export default SetNewPasswordPage;
