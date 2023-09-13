import styled from "styled-components";

// Components
import _RecoveryPasswordForm, {
  RecoveryPasswordFormProps,
} from "../../components/RecoveryPasswordForm";

// Re export types
export type { RecoveryPasswordFormProps };

// Styled components
export const RecoveryPasswordForm = styled(
  _RecoveryPasswordForm
)<RecoveryPasswordFormProps>``;
