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
  // Bits
  /**
   * GET
   */
  GetBitsLeaderboard = `${baseUrl}/bits/leaderboard`,
  /**
   * GET
   */
  GetCheermotes = `${baseUrl}/bits/cheermotes`,
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
  // Channel Points
  /**
   * POST
   */
  CreateCustomRewards = `${baseUrl}/channel_points/custom_rewards`,
  /**
   * DELETE
   */
  DeleteCustomReward = `${baseUrl}/channel_points/custom_rewards`,
  /**
   * GET
   */
  GetCustomReward = `${baseUrl}/channel_points/custom_rewards`,
  /**
   * GET
   */
  GetCustomRewardRedemption = `${baseUrl}/channel_points/custom_rewards/redemptions`,
  /**
   * PATCH
   */
  UpdateCustomReward = `${baseUrl}/channel_points/custom_rewards`,
  /**
   * PATCH
   */
  UpdateRedemptionStatus = `${baseUrl}/channel_points/custom_rewards/redemptions`,
  // Moderation
  /**
   * POST
   */
  CheckAutoModStatus = `${baseUrl}/moderation/enforcements/status`,
  /**
   * POST
   */
  ManageHeldAutoModMessages = `${baseUrl}/moderation/automod/message`,
  /**
   * GET
   */
  GetAutoModSettings = `${baseUrl}/moderation/automod/settings`,
  /**
   * PUT
   */
  UpdateAutoModSettings = `${baseUrl}/moderation/automod/settings`,
  /**
   * GET
   */
  GetBannedUsers = `${baseUrl}/moderation/banned`,
  /**
   * POST
   */
  BanUser = `${baseUrl}/moderation/bans`,
  /**
   * DELETE
   */
  UnbanUser = `${baseUrl}/moderation/bans`,
  /**
   * GET
   */
  GetBlockedTerms = `${baseUrl}/moderation/blocked_terms`,
  /**
   * DELETE
   */
  RemoveBlockedTerms = `${baseUrl}/moderation/blocked_terms`,
  /**
   * POST
   */
  AddBlockedTerms = `${baseUrl}/moderation/blocked_terms`,
  /**
   * GET
   */
  GetModeratedChannels = `${baseUrl}/moderation/channels`,
  /**
   * GET
   */
  GetModerators = `${baseUrl}/moderation/moderators`,
  /**
   * POST
   */
  AddChannelModerator = `${baseUrl}/moderation/moderators`,
  /**
   * DELETE
   */
  RemoveChannelModerator = `${baseUrl}/moderation/moderators`,
  /**
   * GET
   */
  GetVIPs = `${baseUrl}/channels/vips`,
  /**
   * POST
   */
  AddChannelVIP = `${baseUrl}/channels/vips`,
  /**
   * DELETE
   */
  RemoveChannelVIP = `${baseUrl}/channels/vips`,
  /**
   * PUT
   */
  UpdateShieldModeStatus = `${baseUrl}/moderation/shield_mode`,
  /**
   * GET
   */
  GetShieldModeStatus = `${baseUrl}/moderation/shield_mode`,
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
