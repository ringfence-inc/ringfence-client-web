// Styles
import { RecoveryPasswordForm, RecoveryPasswordFormProps } from "./styles";

// Hooks
import useRecoveryPasswordForm from "../../hooks/useRecoveryPasswordForm";

// Types
export interface RecoveryPasswordPageProps extends RecoveryPasswordFormProps {}

export const RecoveryPasswordPage = ({
  ...props
}: RecoveryPasswordPageProps) => {
  const { form, onSubmit } = useRecoveryPasswordForm();

  return <RecoveryPasswordForm {...props} form={form} onSubmit={onSubmit} />;
};

export default RecoveryPasswordPage;
