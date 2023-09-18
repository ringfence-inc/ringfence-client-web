// Original types
import {
  Rest as OriginalRest,
  RestRequestConfig,
  ResponseHandlers,
  RequestError,
  TokensObject,
  RestConfig,
} from "../../rest";

// Utils
import { deepSearchKey } from "../../../utils/deepSearchKey";
import { faker, Faker } from "@faker-js/faker";

// Re-export types
export type { RestConfig, ResponseHandlers, TokensObject };

// Types
export interface FakeRestConfig extends RestConfig {
  delay?: number;
  fakeRequestHandlers?: FakeRequestHandlers;
  log?: boolean;
}

export interface FakeRestRequestConfig
  extends FakeRestConfig,
    RestRequestConfig {}

export type FakeRequestHandler = (
  config: FakeRestConfig,
  faker: Faker
) => Promise<any>;
export type FakeRequestHandlers = Record<string, any>;

// Defaults
export const defFakeRestOptions: FakeRestConfig = {
  storageTokenKey: "fakeToken",
  storageRefreshTokenKey: "fakeRefreshToken",
};

export class FakeRest extends OriginalRest implements FakeRestConfig {
  public fakeRequestHandlers?: FakeRequestHandlers;
  public log?: boolean;

  constructor(options: FakeRestConfig) {
    super(options);
    this.fakeRequestHandlers = options.fakeRequestHandlers || {};
    this.log = options.log;
  }

  override async request(config: FakeRestRequestConfig) {
    // Retrieve global config
    const { fakeRequestHandlers: requestHandlers, log: globalLog } = this;

    // Retrieve params config
    const { url = "", delay = 500, log = globalLog, method = "GET" } = config;

    // Make path to fake request handler
    const urlKeys = url.split("/").filter((key) => key);
    urlKeys.push(method.toLowerCase());

    // Get fake request handler or return empty function
    const fakeHandler: FakeRequestHandler =
      deepSearchKey(requestHandlers as any, urlKeys) ||
      (() => ({
        noHandlerFound: true,
      }));

    const executeRequest = async () => {
      await new Promise((resolve) => setTimeout(resolve, delay || 0));

      try {
        const response = await fakeHandler(config, faker);

        if (log) {
          console.log(`\n`);
          console.log("Fake request", {
            ...config,
            urlKeys,
            globalConfig: this,
            response,
          });
          console.log("\n");
        }

        return response;
      } catch (error) {
        console.error(error);
        // @ts-ignore
        throw new RequestError(error);
      }
    };

    return await executeRequest();
  }
}
