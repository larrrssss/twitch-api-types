import type { PaginatedResponse, PaginationParams } from '../responses';

/**
 * Get VIPs
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-vips
 */

export interface GetVIPsParams extends PaginationParams {
  /**
   * Filters the list for specific VIPs. To specify more than one user, include the user_id parameter for each user to get. For example, `&user_id=1234&user_id=5678`. The maximum number of IDs that you may specify is 100. Ignores the ID of those users in the list that aren’t VIPs.
   */
  user_id?: string[] | string;
  /**
   * The ID of the broadcaster whose list of VIPs you want to get. This ID must match the user ID in the access token.
   */
  broadcaster_id: string;
  /**
   * The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
   */
  first?: number;
}

export interface GetVIPsResponse
  extends PaginatedResponse<{
    /**
     * An ID that uniquely identifies the VIP user.
     */
    user_id: string;
    /**
     * The user’s display name.
     */
    user_name: string;
    /**
     * The user’s login name.
     */
    user_login: string;
  }> {}

/**
 * Add Channel VIP
 * Extracted from https://dev.twitch.tv/docs/api/reference/#add-channel-vip
 */

export interface AddChannelVIPParams {
  /**
   * The ID of the user to give VIP status to.
   */
  user_id: string;
  /**
   * The ID of the broadcaster that’s adding the user as a VIP. This ID must match the user ID in the access token.
   */
  broadcaster_id: string;
}

/**
 * Remove Channel VIP
 * Extracted from https://dev.twitch.tv/docs/api/reference/#remove-channel-vip
 */

export interface RemoveChannelVIPParams {
  /**
   * The ID of the user to remove VIP status from.
   */
  user_id: string;
  /**
   * The ID of the broadcaster who owns the channel where the user has VIP status.
   */
  broadcaster_id: string;
}
