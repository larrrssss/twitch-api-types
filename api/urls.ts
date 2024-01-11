const baseUrl = 'https://api.twitch.tv/helix';

export enum APIEndpoint {
  // Ads
  /**
   * POST
   */
  StartCommercial = `${baseUrl}/channels/commercial`,
  /**
   * GET
   */
  GetAdSchedule = `${baseUrl}/channels/ads`,
  /**
   * POST
   */
  SnoozeNextAd = `${baseUrl}/channels/ads/schedule/snooze`,
  // Analytics
  /**
   * GET
   */
  GetExtensionAnalytics = `${baseUrl}/analytics/extensions`,
  /**
   * GET
   */
  GetGameAnalytics = `${baseUrl}/analytics/games`,
  // Channels
  /**
   * GET
   */
  GetChannelInformation = `${baseUrl}/channels`,
  /**
   * PATCH
   */
  ModifyChannelInformation = `${baseUrl}/channels`,
  /**
   * GET
   */
  GetChannelEditors = `${baseUrl}/channels/editors`,
  /**
   * GET
   */
  GetFollowedChannels = `${baseUrl}/channels/followed`,
  /**
   * GET
   */
  GetChannelFollowers = `${baseUrl}/channels/followers`,
  // Users
  /**
   * GET
   */
  GetUsers = `${baseUrl}/users`,
  /**
   * PUT
   */
  UpdateUser = `${baseUrl}/users`,
  /**
   * GET
   */
  GetUserBlockList = `${baseUrl}/users/blocks`,
  /**
   * PUT
   */
  BlockUser = `${baseUrl}/users/blocks`,
  /**
   * DELETE
   */
  UnblockUser = `${baseUrl}/users/blocks`,
}
