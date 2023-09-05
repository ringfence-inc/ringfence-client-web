// Utils
import { getErrorMessage } from '../utils/getErrorMessage';

export interface RequestErrorConfig {
  getErrorMessage?(response: any): string;
}

const defConfig: RequestErrorConfig = {
  getErrorMessage,
};

export class RequestError extends Error {
  public error?: boolean;
  public status?: number;

  constructor(response: any, config: RequestErrorConfig = {}) {
    const _config = { ...defConfig, ...config };
    const { getErrorMessage = () => '' } = _config;
    const errorMessage = getErrorMessage(response);
    super(errorMessage);
    this.name = 'RequestError';
    this.error = true;
    this.status = response?.status;
  }
}
