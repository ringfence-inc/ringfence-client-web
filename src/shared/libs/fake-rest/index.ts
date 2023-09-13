// Export full faker lib
export * as faker from "@faker-js/faker";

// Utils
import { FakeRest } from "./FakeRest";

// Export utils
export { FakeRest };

// Types
import { FakeRestConfig } from "./FakeRest";

// Export types
export type {
  FakeRequestHandler,
  FakeRequestHandlers,
  FakeRestConfig,
  ResponseHandlers,
  TokensObject,
} from "./FakeRest";

// Init function
export const initFakeRest = (baseConfig: FakeRestConfig = {}) => {
  return new FakeRest(baseConfig);
};
