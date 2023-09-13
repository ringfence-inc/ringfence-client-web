// Styles
import { RecoveryPasswordForm, RecoveryPasswordFormProps } from "./styles";

// Hooks
import useRecoveryPasswordForm from "../../hooks/useRecoveryPasswordForm";

export const RecoveryPasswordPage = ({ ...props }: any) => {
  const formProps = useRecoveryPasswordForm();

  return <RecoveryPasswordForm {...props} {...formProps} />;
};

export default RecoveryPasswordPage;
