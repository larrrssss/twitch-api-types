import type { PaginatedResponse, PaginationParams } from '../responses';

/**
 * Get Moderated Channels
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-moderated-channels
 */

export interface GetModeratedChannelsParams extends PaginationParams {
  /**
   * A user’s ID. Returns the list of channels that this user has moderator privileges in. This ID must match the user ID in the user OAuth token
   */
  user_id: string;
  /**
   * The maximum number of items to return per page in the response.
   *
   * Minimum page size is 1 item per page and the maximum is 100. The default is 20.
   */
  first?: number;
}

export interface GetModeratedChannelsResponse
  extends PaginatedResponse<{
    /**
     * An ID that uniquely identifies the channel this user can moderate.
     */
    broadcaster_id: string;
    /**
     * The channel’s login name.
     */
    broadcaster_login: string;
    /**
     * The channels’ display name.
     */
    broadcaster_name: string;
  }> {}

/**
 * Get Moderators
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-moderators
 */

export interface GetModeratorsParams extends PaginationParams {
  /**
   * The ID of the broadcaster whose list of moderators you want to get. This ID must match the user ID in the access token.
   */
  broadcaster_id: string;
  /**
   * A list of user IDs used to filter the results. To specify more than one ID, include this parameter for each moderator you want to get. For example, `user_id=1234&user_id=5678`. You may specify a maximum of 100 IDs.
   *
   * The returned list includes only the users from the list who are moderators in the broadcaster’s channel. The list is returned in the same order as you specified the IDs.
   */
  user_id?: string[] | string;
  /**
   * The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
   */
  first?: number;
}

export interface GetModeratorsResponse
  extends PaginatedResponse<{
    /**
     * The ID of the user that has permission to moderate the broadcaster’s channel.
     */
    user_id: string;
    /**
     * The user’s login name.
     */
    user_login: string;
    /**
     * The user’s display name.
     */
    user_name: string;
  }> {}

/**
 * Add Channel Moderator
 * Extracted from https://dev.twitch.tv/docs/api/reference/#add-channel-moderator
 */

export interface AddChannelModeratorParams {
  /**
   * The ID of the broadcaster that owns the chat room. This ID must match the user ID in the access token.
   */
  broadcaster_id: string;
  /**
   * The ID of the user to add as a moderator in the broadcaster’s chat room.
   */
  user_id: string;
}

/**
 * Remove Channel Moderator
 * Extracted from https://dev.twitch.tv/docs/api/reference/#remove-channel-moderator
 */

export interface RemoveChannelModeratorParams {
  /**
   * The ID of the broadcaster that owns the chat room. This ID must match the user ID in the access token.
   */
  broadcaster_id: string;
  /**
   * The ID of the user to remove as a moderator from the broadcaster’s chat room.
   */
  user_id: string;
}
