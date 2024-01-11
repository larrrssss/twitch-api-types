import { PaginatedResponse, PaginationParams, Response } from './responses';

/**
 * The type of user.
 */
export enum UserType {
  /**
   * Twitch Administrator
   */
  Admin = 'admin',
  GlobalMod = 'global_mod',
  /**
   * Twitch staff
   */
  Staff = 'staff',
  /**
   * Normal user
   */
  Normal = '',
}

/**
 * The type of broadcaster.
 */
export enum BroadcasterType {
  /**
   *  An [affiliate broadcaster](https://help.twitch.tv/s/article/joining-the-affiliate-program%20target=)
   */
  Affiliate = 'affiliate',
  /**
   * A [partner broadcaster](https://help.twitch.tv/s/article/partner-program-overview)
   */
  Partner = 'partner',
  /**
   * A normal broadcaster
   */
  Normal = '',
}

export type User = {
  /**
   * An ID that identifies the user.
   */
  id: string;
  /**
   * The user’s login name.
   */
  login: string;
  /**
   * The user’s display name.
   */
  display_name: string;
  /**
   * The type of user.
   */
  type: UserType;
  /**
   * The type of broadcaster.
   */
  broadcaster_type: BroadcasterType;
  /**
   * The user’s description of their channel.
   */
  description: string;
  /**
   * A URL to the user’s profile image.
   */
  profile_image_url: string;
  /**
   * A URL to the user’s offline image.
   */
  offline_image_url: string;
  /**
   * The number of times the user’s channel has been viewed.
   *
   * @deprecated This field has been deprecated (see [Get Users API endpoint – “view_count” deprecation](https://discuss.dev.twitch.tv/t/get-users-api-endpoint-view-count-deprecation/37777)). Any data in this field is not valid and should not be used.
   */
  view_count: number;
  /**
   * The user’s verified email address. The object includes this field only if the user access token includes the user:read:email scope.
   *
   * If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.
   */
  email?: string;
  /**
   * The UTC date and time that the user’s account was created. The timestamp is in RFC3339 format.
   */
  created_at: Date;
};

/**
 * Get Users
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-users
 */

export interface GetUsersParams {
  /**
   * The ID of the user to get. To specify more than one user, include the id parameter for each user to get. For example, `id=1234&id=5678`. The maximum number of IDs you may specify is 100.
   */
  id?: string[];
  /**
   * The login name of the user to get. To specify more than one user, include the login parameter for each user to get. For example, `login=foo&login=bar`. The maximum number of login names you may specify is 100.
   */
  login?: string[];
}

export interface GetUsersResponse extends Response<User[]> {}

/**
 * Update User
 * Extracted from https://dev.twitch.tv/docs/api/reference/#update-user
 */

export interface UpdateUserParams {
  /**
   * The string to update the channel’s description to. The description is limited to a maximum of 300 characters.
   *
   * To remove the description, specify this parameter but don’t set it’s value (for example, `?description=`).
   */
  description?: string;
}

export interface UpdateUserResponse extends Response<User[]> {}

/**
 * Get User Block List
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-user-block-list
 */

export interface GetUserBlockListParams extends PaginationParams {
  /**
   * The ID of the broadcaster whose list of blocked users you want to get.
   */
  broadcaster_id: string;
  /**
   * The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
   */
  first?: number;
}

export interface GetUserBlockListResponse
  extends PaginatedResponse<{
    /**
     * An ID that identifies the blocked user.
     */
    user_id: string;
    /**
     * The blocked user’s login name.
     */
    user_login: string;
    /**
     * The blocked user’s display name.
     */
    display_name: string;
  }> {}

/**
 * Block User
 * Extracted from https://dev.twitch.tv/docs/api/reference/#block-user
 */

export enum BlockUserSourceContext {
  Chat = 'chat',
  Whisper = 'whisper',
}

export enum BlockUserReason {
  Harassment = 'harassment',
  Spam = 'spam',
  Other = 'other',
}

export interface BlockUserParams {
  /**
   * The ID of the user to block. The API ignores the request if the broadcaster has already blocked the user.
   */
  target_user_id: string;
  /**
   * The location where the harassment took place that is causing the brodcaster to block the user.
   */
  source_context?: BlockUserSourceContext;
  /**
   * The reason that the broadcaster is blocking the user.
   */
  reason?: BlockUserReason;
}

/**
 * Unblock User
 * Extracted from https://dev.twitch.tv/docs/api/reference/#unblock-user
 */

export interface UnblockUserParams {
  /**
   * The ID of the user to remove from the broadcaster’s list of blocked users. The API ignores the request if the broadcaster hasn’t blocked the user.
   */
  target_user_id: string;
}
