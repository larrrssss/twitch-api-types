import { Scope } from './scopes';

export enum OAuthResponseType {
  Token = 'token',
  Code = 'code',
}

export enum OAuthGrantType {
  ClientCredentials = 'client_credentials',
  AuthorizationCode = 'authorization_code',
  DeviceCode = 'device_code',
  RefreshToken = 'refresh_token',
}

export interface OAuthAuthorizeResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: Scope[];
  token_type: string;
}

export interface OAuthClientCredentialsResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface OAuthDeviceResponse {
  device_code: string;
  expires_in: number;
  interval: number;
  user_code: string;
  verification_uri: string;
}

export interface OAuthDeviceTokenResponse {
  /**
   * The authenticated token, to be used for various api endpoints and EventSub subscriptions
   */
  access_token: string;
  /**
   * Time until the code is no longer valid
   */
  expires_in: number;
  /**
   * A token used to refresh the access token
   */
  refresh_token: string;
  /**
   * An array of the scopes requested
   */
  scope: Scope[];
  /**
   * Will generally be “bearer”
   */
  token_type: string;
}

export interface OAuthRefreshResponse {
  access_token: string;
  refresh_token: string;
  scope: Scope[];
  token_type: string;
}

export interface OAuthValidateResponse {
  client_id: string;
  login: string;
  scopes: Scope[];
  user_id: string;
  expires_in: number;
}

export * from './urls';
export * from './scopes';
