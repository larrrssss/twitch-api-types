const baseUrl = 'https://id.twitch.tv/oauth2';

export enum OAuthEndpoints {
  Authorize = `${baseUrl}/authorize`,
  Token = `${baseUrl}/token`,
  Device = `${baseUrl}/device`,
  Revoke = `${baseUrl}/revoke`,
}
