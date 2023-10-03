// Hooks
import message, { ArgsProps } from "antd/lib/message";

// Types
export interface MessageOptions extends Partial<ArgsProps> {}

export interface UseMessageProps {
  commonOptions?: MessageOptions;
  successOptions?: MessageOptions;
  errorOptions?: MessageOptions;
  warningOptions?: MessageOptions;
  infoOptions?: MessageOptions;
  loadingOptions?: MessageOptions;
}

// Constants
const commonConfig: MessageOptions = {
  duration: 5,
};

export const useMessage = (props: UseMessageProps = {}) => {
  const {
    commonOptions: propCommonOptions = {},
    successOptions = {},
    errorOptions = {},
    warningOptions = {},
    infoOptions = {},
    loadingOptions = {},
  } = props;
  const commonOptions = { ...commonConfig, ...propCommonOptions };

  const customMessage = {
    ...message,
    success: (content: string, options: MessageOptions = {}) => {
      message.success({
        content,
        ...commonOptions,
        ...successOptions,
        ...options,
      });
    },
    error: (content: string, options: MessageOptions = {}) => {
      message.error({
        content,
        ...commonOptions,
        ...errorOptions,
        ...options,
      });
    },
    warning: (content: string, options: MessageOptions = {}) => {
      message.warning({
        content,
        ...commonOptions,
        ...warningOptions,
        ...options,
      });
    },
    info: (content: string, options: MessageOptions = {}) => {
      message.info({
        content,
        ...commonOptions,
        ...infoOptions,
        ...options,
      });
    },
    loading: (content: string, options: MessageOptions = {}) => {
      message.loading({
        content,
        ...commonOptions,
        ...loadingOptions,
        ...options,
      });
    },
  };

  return { messageApi: customMessage };
};

export default useMessage;
