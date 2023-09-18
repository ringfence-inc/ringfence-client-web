import {
  Rest,
  RestConfig,
  RestRequestConfig,
  TokensObject,
  TokensObjectKeys,
  ResponseHandlers,
  ResponseTypes,
} from "./Rest";
export { RequestError } from "./RequestError";

export { Rest };

export type { RequestErrorConfig } from "./RequestError";
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
