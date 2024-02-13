import type { Response } from '../responses';

/**
 * Update Shield Mode Status
 * Extracted from https://dev.twitch.tv/docs/api/reference/#update-shield-mode-status
 */

export interface UpdateShieldModeStatusParams {
  /**
   * The ID of the broadcaster whose Shield Mode you want to activate or deactivate.
   */
  broadcaster_id: string;
  /**
   * The ID of the broadcaster or a user that is one of the broadcaster’s moderators. This ID must match the user ID in the access token.
   */
  moderator_id: string;
}

export interface UpdateShieldModeStatusBody {
  /**
   * A Boolean value that determines whether to activate Shield Mode. Set to **true** to activate Shield Mode; otherwise, **false** to deactivate Shield Mode.
   */
  is_active: boolean;
}

export interface UpdateShieldModeStatusResponse
  extends Response<
    {
      /**
       * A Boolean value that determines whether Shield Mode is active. Is **true** if Shield Mode is active; otherwise, **false**.
       */
      is_active: boolean;
      /**
       * An ID that identifies the moderator that last activated Shield Mode.
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
      /**
       * The UTC timestamp (in RFC3339 format) of when Shield Mode was last activated.
       */
      last_activated_at: string;
    }[]
  > {}

/**
 * Get Shield Mode Status
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-shield-mode-status
 */

export interface GetShieldModeStatusParams {
  /**
   * The ID of the broadcaster whose Shield Mode activation status you want to get.
   */
  broadcaster_id: string;
  /**
   * The ID of the broadcaster or a user that is one of the broadcaster’s moderators. This ID must match the user ID in the access token.
   */
  moderator_id: string;
}

export interface GetShieldModeStatusResponse
  extends Response<
    {
      /**
       * A Boolean value that determines whether Shield Mode is active. Is **true** if the broadcaster activated Shield Mode; otherwise, **false**.
       */
      is_active: boolean;
      /**
       * An ID that identifies the moderator that last activated Shield Mode. Is an empty string if Shield Mode hasn’t been previously activated.
       */
      moderator_id: string;
      /**
       * The moderator’s login name. Is an empty string if Shield Mode hasn’t been previously activated.
       */
      moderator_login: string;
      /**
       * The moderator’s display name. Is an empty string if Shield Mode hasn’t been previously activated.
       */
      moderator_name: string;
      /**
       * The UTC timestamp (in RFC3339 format) of when Shield Mode was last activated. Is an empty string if Shield Mode hasn’t been previously activated.
       */
      last_activated_at: string;
    }[]
  > {}
