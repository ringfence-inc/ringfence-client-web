// Hooks
import useAntdMessage from "antd/lib/message/useMessage";

// Types
import type { ArgsProps } from "antd/lib/message";

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
  duration: 3,
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

  const [message, contextHolder] = useAntdMessage();

  const customMessage = {
    ...message,
    common: (content: string) => {
      message.info({ content, ...commonOptions, ...infoOptions });
    },
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

  return { messageApi: customMessage, contextHolder };
};
