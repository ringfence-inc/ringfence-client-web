// Libs
import { initRest, RestConfig, RequestError } from "../libs/rest";
import { initFakeRest } from "../libs/fake-rest";

// Re export types
export type { RestConfig, RequestError };

// Fake API
import fakeApi from "./fake";

// Config
export const restConfig: RestConfig = {
  baseUrl: "",
};

export const originalRest = initRest(restConfig);

export const rest = initFakeRest({
  ...restConfig,
  fakeRequestHandlers: fakeApi,
  log: true,
});

export default rest;