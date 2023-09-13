// Styles
import { RecoveryPasswordForm, RecoveryPasswordFormProps } from "./styles";

// Hooks
import useRecoveryPasswordForm from "../../hooks/useRecoveryPasswordForm";

// Types
export interface RecoveryPasswordPageProps extends RecoveryPasswordFormProps {}

export const RecoveryPasswordPage = ({
  ...props
}: RecoveryPasswordPageProps) => {
  const formProps = useRecoveryPasswordForm();

  return <RecoveryPasswordForm {...props} {...formProps} />;
};

export default RecoveryPasswordPage;
