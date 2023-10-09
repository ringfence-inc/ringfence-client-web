// Libs
import {
  initRest,
  RestConfig,
  RestRequestConfig,
  RequestError,
} from "../libs/rest";
import { initFakeRest } from "../libs/fake-rest";

// Re export types
export type { RestConfig, RequestError, RestRequestConfig };

// Fake API
import fakeApi from "./fake";

// Config
export const restConfig: RestConfig = {
  baseUrl: "https://shkrift.com/api",
  refreshTokenEnabled: true,
};

export const originalRest = initRest(restConfig);

export const fakeRest = initFakeRest({
  ...restConfig,
  fakeRequestHandlers: fakeApi,
  log: true,
});

export default originalRest;
