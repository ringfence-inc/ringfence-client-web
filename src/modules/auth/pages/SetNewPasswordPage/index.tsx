// Styles
import { SetNewPasswordForm, SetNewPasswordFormProps } from "./styles";

// Hooks
import useSetNewPasswordForm from "../../hooks/useSetNewPasswordForm";

export const SetNewPasswordPage = ({ ...props }: any) => {
  const formProps = useSetNewPasswordForm();

  return <SetNewPasswordForm {...formProps} />;
};

export default SetNewPasswordPage;
