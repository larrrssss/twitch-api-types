import { PaginatedResponse, PaginationParams, Response } from '../responses';

/**
 * Get Blocked Terms
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-blocked-terms
 */

export type BlockedTerm = {
  /**
   * The broadcaster that owns the list of blocked terms.
   */
  broadcaster_id: string;
  /**
   * The moderator that blocked the word or phrase from being used in the broadcaster’s chat room.
   */
  moderator_id: string;
  /**
   * An ID that identifies this blocked term.
   */
  id: string;
  /**
   * The blocked word or phrase.
   */
  text: string;
  /**
   * The UTC date and time (in RFC3339 format) that the term was blocked.
   */
  created_at: string;
  /**
   * The UTC date and time (in RFC3339 format) that the term was updated.
   *
   * When the term is added, this timestamp is the same as `created_at`. The timestamp changes as AutoMod continues to deny the term.
   */
  updated_at: string;
  /**
   * The UTC date and time (in RFC3339 format) that the blocked term is set to expire. After the block expires, users may use the term in the broadcaster’s chat room.
   *
   * This field is **null** if the term was added manually or was permanently blocked by AutoMod.
   */
  expires_at: string | null;
};

export interface GetBlockedTermsParams extends PaginationParams {
  /**
   * The ID of the broadcaster whose blocked terms you’re getting.
   */
  broadcaster_id: string;
  /**
   * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.
   */
  moderator_id: string;
  /**
   * The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
   */
  first?: number;
}

export interface GetBlockedTermsResponse extends PaginatedResponse<BlockedTerm> {}

/**
 * Add Blocked Term
 * Extracted from https://dev.twitch.tv/docs/api/reference/#add-blocked-term
 */

export interface AddBlockedTermParams {
  /**
   * The ID of the broadcaster that owns the list of blocked terms.
   */
  broadcaster_id: string;
  /**
   * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.
   */
  moderator_id: string;
}

export interface AddBlockedTermBody {
  /**
   * The word or phrase to block from being used in the broadcaster’s chat room. The term must contain a minimum of 2 characters and may contain up to a maximum of 500 characters.
   *
   * Terms may include a wildcard character (*). The wildcard character must appear at the beginning or end of a word or set of characters. For example, *foo or foo*.
   *
   * If the blocked term already exists, the response contains the existing blocked term.
   */
  text: string;
}

export interface AddBlockedTermResponse extends Response<BlockedTerm[]> {}

/**
 * Remove Blocked Term
 * Extracted from https://dev.twitch.tv/docs/api/reference/#remove-blocked-term
 */

export interface RemoveBlockedTermParams {
  /**
   * The ID of the broadcaster that owns the list of blocked terms.
   */
  broadcaster_id: string;
  /**
   * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.
   */
  moderator_id: string;
  /**
   * The ID of the blocked term to remove from the broadcaster’s list of blocked terms.
   */
  id: string;
}
