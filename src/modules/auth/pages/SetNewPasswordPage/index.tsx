// Styles
import { SetNewPasswordForm, SetNewPasswordFormProps } from "./styles";

// Hooks
import useSetNewPasswordForm from "../../hooks/useSetNewPasswordForm";

// Types
export interface SetNewPasswordPageProps extends SetNewPasswordFormProps {}

export const SetNewPasswordPage = ({ ...props }: SetNewPasswordPageProps) => {
  const { form, onSubmit } = useSetNewPasswordForm();

  return <SetNewPasswordForm {...props} form={form} onSubmit={onSubmit} />;
};

export default SetNewPasswordPage;
