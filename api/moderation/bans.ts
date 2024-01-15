import { PaginatedResponse, PaginationParams, Response } from '../responses';

/**
 * Get Banned Users
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-banned-users
 */

export interface GetBannedUsersParams extends PaginationParams {
  /**
   * The ID of the broadcaster whose list of banned users you want to get. This ID must match the user ID in the access token.
   */
  broadcaster_id: string;
  /**
   * A list of user IDs used to filter the results. To specify more than one ID, include this parameter for each user you want to get. For example, `user_id=1234&user_id=5678`. You may specify a maximum of 100 IDs.
   *
   * The returned list includes only those users that were banned or put in a timeout. The list is returned in the same order that you specified the IDs.
   */
  user_id?: string | string[];
  /**
   * The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
   */
  first?: number;
}

export interface GetBannedUsersResponse
  extends PaginatedResponse<{
    /**
     * The ID of the banned user.
     */
    user_id: string;
    /**
     * The banned user’s login name.
     */
    user_login: string;
    /**
     * The banned user’s display name.
     */
    user_name: string;
    /**
     * The UTC date and time (in RFC3339 format) of when the timeout expires, or an empty string if the user is permanently banned.
     */
    expires_at: string;
    /**
     * The UTC date and time (in RFC3339 format) of when the user was banned.
     */
    created_at: string;
    /**
     * The reason the user was banned or put in a timeout if the moderator provided one.
     */
    reason: string;
    /**
     * The ID of the moderator that banned the user or put them in a timeout.
     */
    moderator_id: string;
    /**
     * The moderator’s login name.
     */
    moderator_login: string;
    /**
     * The moderator’s display name.
     */
    moderator_name: string;
  }> {}

/**
 * Ban User
 * Extracted from https://dev.twitch.tv/docs/api/reference/#ban-user
 */

export interface BanUserParams {
  /**
   * The ID of the broadcaster whose chat room the user is being banned from.
   */
  broadcaster_id: string;
  /**
   * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.
   */
  moderator_id: string;
}

export interface BanUserBody {
  /**
   * Identifies the user and type of ban.
   */
  data: {
    /**
     * The ID of the user to ban or put in a timeout.
     */
    user_id: string;
    /**
     * To ban a user indefinitely, don’t include this field.
     *
     * To put a user in a timeout, include this field and specify the timeout period, in seconds. The minimum timeout is 1 second and the maximum is 1,209,600 seconds (2 weeks).
     *
     * To end a user’s timeout early, set this field to 1, or use the [Unban user](https://dev.twitch.tv/docs/api/reference/#unban-user) endpoint.
     */
    duration?: number;
    /**
     * The reason the you’re banning the user or putting them in a timeout. The text is user defined and is limited to a maximum of 500 characters.
     */
    reason?: string;
  };
}

export interface BanUserResponse
  extends Response<
    {
      /**
       * The broadcaster whose chat room the user was banned from chatting in.
       */
      broadcaster_id: string;
      /**
       * The moderator that banned or put the user in the timeout.
       */
      moderator_id: string;
      /**
       * The user that was banned or put in a timeout.
       */
      user_id: string;
      /**
       * The UTC date and time (in RFC3339 format) that the ban or timeout was placed.
       */
      created_at: string;
      /**
       * The UTC date and time (in RFC3339 format) that the timeout will end. Is **null** if the user was banned instead of being put in a timeout.
       */
      end_time: string;
    }[]
  > {}

/**
 * Unban User
 * Extracted from https://dev.twitch.tv/docs/api/reference/#unban-user
 */

export interface UnbanUserParams {
  /**
   * The ID of the broadcaster whose chat room the user is banned from chatting in.
   */
  broadcaster_id: string;
  /**
   * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.
   */
  moderator_id: string;
  /**
   * The ID of the user to remove the ban or timeout from.
   */
  user_id: string;
}
