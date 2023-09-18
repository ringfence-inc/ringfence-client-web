// Create REST class with all methods

// Utils
import { isEmpty } from "../utils/isEmpty";
import { RequestError } from "../RequestError";
import { dataToURL } from "../utils/dataToUrl";
import { jsonResponseHandler } from "../utils/jsonResponseHandler";
import { textResponseHandler } from "../utils/textResponseHandler";
import { blobResponseHandler } from "../utils/blobResponseHandler";
import { arrayBufferResponseHandler } from "../utils/arrayBufferResponseHandler";
import { formDataResponseHandler } from "../utils/formDataResponseHandler";

// Config
import { UNAUTHORIZED_CODE } from "../config";

// Types
export type ResponseTypes =
  | "json"
  | "text"
  | "blob"
  | "arrayBuffer"
  | "formData";
export type ResponseHandlers = Record<
  ResponseTypes,
  (response: Response) => any
>;

export type TokensObject = {
  token?: string;
  refreshToken?: string;
  refresh_token?: string;
};

export type TokensObjectKeys = keyof TokensObject;

export interface RestConfig {
  baseUrl?: string;
  url?: string;
  isAuth?: boolean;
  storageTokenKey?: string;
  storageRefreshTokenKey?: string;
  options?: RequestInit;
  responseHandlers?: ResponseHandlers;

  refreshTokenEnabled?: boolean;
  refreshTokenEndpoint?: string;
  refreshTokenResponseTransform?: (response?: any) => TokensObject;
  onTokenRefreshSuccess?: (response?: TokensObject) => void;
  onTokenRefreshError?: (error?: RequestError) => void;
}

export interface RestRequestConfig extends RestConfig {
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  body?: any;
  fullUrl?: string;
  responseType?: ResponseTypes;
}

// Defaults
export const defResponseHandlers: ResponseHandlers = {
  json: jsonResponseHandler,
  text: textResponseHandler,
  blob: blobResponseHandler,
  arrayBuffer: arrayBufferResponseHandler,
  formData: formDataResponseHandler,
};

export class Rest implements RestConfig {
  public baseUrl?: string;
  public url?: string;
  public storageTokenKey?: string;
  public storageRefreshTokenKey?: string;
  public token?: string;
  public refreshToken?: string;
  public baseOptions?: RequestInit;
  public responseHandlers?: ResponseHandlers;
  public refreshTokenEnabled?: boolean;
  public refreshTokenEndpoint?: string;
  public refreshTokenResponseTransform?: (response: Response) => any;
  public onTokenRefreshSuccess?: (response?: TokensObject) => void;
  public onTokenRefreshError?: (error?: any) => void;

  constructor({
    baseUrl,
    url,
    storageTokenKey = "accessToken",
    storageRefreshTokenKey = "refreshToken",
    options,
    responseHandlers = defResponseHandlers,

    refreshTokenEnabled = false,
    refreshTokenEndpoint = "/auth/refresh-token",
    refreshTokenResponseTransform = (r) => r,
    onTokenRefreshSuccess = () => {},
    onTokenRefreshError = () => {},
  }: RestConfig) {
    this.storageTokenKey = storageTokenKey;
    this.storageRefreshTokenKey = storageRefreshTokenKey;
    this.baseUrl = baseUrl;
    this.baseOptions = options || {};
    this.url = url;
    this.responseHandlers = responseHandlers;
    this.refreshTokenEnabled = refreshTokenEnabled;
    this.refreshTokenEndpoint = refreshTokenEndpoint;
    this.refreshTokenResponseTransform = refreshTokenResponseTransform;
    this.onTokenRefreshSuccess = onTokenRefreshSuccess;
    this.onTokenRefreshError = onTokenRefreshError;

    this.getTokens();
  }

  setTokens(obj: Partial<Record<TokensObjectKeys, string>>) {
    if (!global?.window) return null;
    const { storageTokenKey, storageRefreshTokenKey } = this;
    const { token, refresh_token, refreshToken = refresh_token } = obj;

    if (token) {
      localStorage.setItem(storageTokenKey as string, token);
      this.token = token;
    }

    if (refreshToken) {
      localStorage.setItem(storageRefreshTokenKey as string, refreshToken);
      this.refreshToken = refreshToken;
    }

    return obj;
  }

  getTokens() {
    if (!global?.window) return {};

    const { storageTokenKey, storageRefreshTokenKey } = this;
    const token = localStorage.getItem(storageTokenKey as string) || "";
    const refreshToken =
      localStorage.getItem(storageRefreshTokenKey as string) || "";

    this.token = token;
    this.refreshToken = refreshToken;

    return {
      token,
      refreshToken,
    };
  }

  async request({
    url,
    fullUrl,
    isAuth,
    body,
    method = "GET",
    responseType = "json",
    options = {},
    responseHandlers,
    refreshTokenEnabled = this.refreshTokenEnabled,
  }: RestRequestConfig) {
    const { token, baseUrl = "", baseOptions = {}, executeTokenRefresh } = this;

    const _responseHandlers = {
      ...(this.responseHandlers || {}),
      ...(responseHandlers || {}),
    };

    let _fullUrl = fullUrl || `${baseUrl}${url}`;

    const baseHeaders = baseOptions?.headers;
    const optionsHeaders = options?.headers;
    const headers = new Headers({
      ...(baseHeaders || {}),
      ...(optionsHeaders || {}),
    });
    const _options = { ...baseOptions, ...options, method, headers };

    if (isAuth) {
      if (!headers.has("Authorization")) {
        if (token) {
          headers.append("Authorization", `Bearer ${token}`);
        } else {
          throw new RequestError({ message: "Unauthorized" });
        }
      }
    }

    if (!_options.body) {
      if (method === "GET") {
        if (!isEmpty(body)) {
          _fullUrl += `?${dataToURL(body)}`;
        }
      } else {
        if (body) {
          if (body instanceof FormData) {
            _options.body = body;
          } else {
            headers.append("Content-Type", "application/json");
            _options.body = JSON.stringify(body);
          }
        }
      }
    }

    const executeRequest = async () => {
      const response = await fetch(_fullUrl, _options);

      const handler = _responseHandlers?.[responseType];
      if (handler) {
        const processedResponse = await handler(response);

        if (!response.ok) {
          throw new RequestError(processedResponse);
        }

        return processedResponse;
      } else {
        if (!response.ok) {
          throw new RequestError(response);
        }

        throw new RequestError({
          message: `Handler for ${responseType} not found`,
        });
      }
    };

    try {
      return await executeRequest();
    } catch (error: any) {
      if (refreshTokenEnabled && error?.status === UNAUTHORIZED_CODE) {
        const tokens = await executeTokenRefresh();

        if (tokens) {
          headers.set("Authorization", `Bearer ${tokens.token}`);
          return await executeRequest();
        }
      }

      if (error instanceof RequestError) {
        throw error;
      } else {
        throw new RequestError(error);
      }
    }
  }

  async get(url = "", isAuth: boolean, body: any, config?: RestRequestConfig) {
    return this.request({ url, isAuth, body, method: "GET", ...config });
  }

  async post(url = "", isAuth: boolean, body: any, config?: RestRequestConfig) {
    return this.request({ url, isAuth, body, method: "POST", ...config });
  }

  async patch(
    url = "",
    isAuth: boolean,
    body: any,
    config?: RestRequestConfig
  ) {
    return this.request({ url, isAuth, body, method: "PATCH", ...config });
  }

  async put(url = "", isAuth: boolean, body: any, config?: RestRequestConfig) {
    return this.request({ url, isAuth, body, method: "PUT", ...config });
  }

  async delete(
    url = "",
    isAuth: boolean,
    body: any,
    config?: RestRequestConfig
  ) {
    return this.request({ url, isAuth, body, method: "DELETE", ...config });
  }

  async executeTokenRefresh() {
    const {
      refreshToken,
      refreshTokenEndpoint,
      refreshTokenResponseTransform = (r) => r,
      onTokenRefreshSuccess = () => {},
      onTokenRefreshError = () => {},
    } = this;

    if (!refreshToken) return onTokenRefreshError();

    try {
      const response = await this.post(
        refreshTokenEndpoint,
        true,
        { refresh_token: refreshToken },
        { refreshTokenEnabled: false }
      );

      const {
        accessToken: newToken,
        refresh_token,
        refreshToken: newRefreshToken = refresh_token,
      } = refreshTokenResponseTransform(response);

      const newTokens = { token: newToken, refreshToken: newRefreshToken };
      this.setTokens(newTokens);
      onTokenRefreshSuccess(newTokens);

      return newTokens;
    } catch (error) {
      onTokenRefreshError(error);
      throw error;
    }
  }
}
