import {
  Rest,
  RestConfig,
  RestRequestConfig,
  TokensObject,
  TokensObjectKeys,
  ResponseHandlers,
  ResponseTypes,
} from "./Rest";
export type { RequestError, RequestErrorConfig } from "./RequestError";

export { Rest };

export type {
  RestConfig,
  RestRequestConfig,
  TokensObject,
  TokensObjectKeys,
  ResponseHandlers,
  ResponseTypes,
};

export const initRest = (baseConfig: RestConfig = {}) => {
  return new Rest(baseConfig);
};
