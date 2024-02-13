import type { Response } from '../responses';

/**
 * Check AutoMod Status
 * Extracted from https://dev.twitch.tv/docs/api/reference/#check-automod-status
 */

export interface CheckAutoModStatusParams {
  /**
   * The ID of the broadcaster whose AutoMod settings and list of blocked terms are used to check the message. This ID must match the user ID in the access token.
   */
  broadcaster_id: string;
}

export interface CheckAutoModStatusBody {
  /**
   * The list of messages to check. The list must contain at least one message and may contain up to a maximum of 100 messages.
   */
  data: {
    /**
     * A caller-defined ID used to correlate this message with the same message in the response.
     */
    msg_id: string;
    /**
     * The message to check.
     */
    msg_text: string;
  }[];
}

export interface CheckAutoModStatusResponse
  extends Response<
    {
      /**
       * The caller-defined ID passed in the request.
       */
      msg_id: string;
      /**
       * A Boolean value that indicates whether Twitch would approve the message for chat or hold it for moderator review or block it from chat. Is **true** if Twitch would approve the message; otherwise, **false** if Twitch would hold the message for moderator review or block it from chat.
       */
      is_permitted: boolean;
    }[]
  > {}

/**
 * Manage Held AutoMod Messages
 * Extracted from https://dev.twitch.tv/docs/api/reference/#manage-held-automod-messages
 */

export enum ManageHeldAutoModMessagesAction {
  Allow = 'ALLOW',
  Deny = 'DENY',
}

export interface ManageHeldAutoModMessagesBody {
  /**
   * The moderator who is approving or denying the held message. This ID must match the user ID in the access token.
   */
  user_id: string;
  /**
   * The ID of the message to allow or deny.
   */
  msg_id: string;
  /**
   * The action to take for the message.
   */
  action: ManageHeldAutoModMessagesAction;
}

/**
 * Get AutoMod Settings
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-automod-settings
 */

export interface GetAutoModSettingsParams {
  /**
   * The ID of the broadcaster whose AutoMod settings you want to get.
   */
  broadcaster_id: string;
  /**
   * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.
   */
  moderator_id: string;
}

export interface GetAutoModSettingsResponse
  extends Response<
    {
      /**
       * The broadcaster’s ID.
       */
      broadcaster_id: string;
      /**
       * The moderator’s ID.
       */
      moderator_id: string;
      /**
       * The default AutoMod level for the broadcaster. This field is **null** if the broadcaster has set one or more of the individual settings.
       */
      overall_level: number | null;
      /**
       * The Automod level for discrimination against disability.
       */
      disability: number;
      /**
       * The Automod level for hostility involving aggression.
       */
      aggression: number;
      /**
       * The AutoMod level for discrimination based on sexuality, sex, or gender.
       */
      sexuality_sex_or_gender: number;
      /**
       * The Automod level for discrimination against women.
       */
      misogyny: number;
      /**
       * The Automod level for hostility involving name calling or insults.
       */
      bullying: number;
      /**
       * The Automod level for profanity.
       */
      swearing: number;
      /**
       * The Automod level for racial discrimination.
       */
      race_ethnicity_or_religion: number;
      /**
       * The Automod level for sexual content.
       */
      sex_based_terms: number;
    }[]
  > {}

/**
 * Update AutoMod Settings
 * Extracted from https://dev.twitch.tv/docs/api/reference/#update-automod-settings
 */

export interface UpdateAutoModSettingsParams {
  /**
   * The ID of the broadcaster whose AutoMod settings you want to update.
   */
  broadcaster_id: string;
  /**
   * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.
   */
  moderator_id: string;
}

/**
 * Because PUT is an overwrite operation, you must include all the fields that you want set after the operation completes. Typically, you’ll send a GET request, update the fields you want to change, and pass that object in the PUT request.
 *
 * You may set either `overall_level` or the individual settings like `aggression`, but not both.
 *
 * Setting `overall_level` applies default values to the individual settings. However, setting `overall_level` to 4 does not necessarily mean that it applies 4 to all the individual settings. Instead, it applies a set of recommended defaults to the rest of the settings. For example, if you set `overall_level` to 2, Twitch provides some filtering on discrimination and sexual content, but more filtering on hostility (see the first example response).
 *
 * If `overall_level` is currently set and you update `swearing` to 3, `overall_level` will be set to **null** and all settings other than `swearing` will be set to 0. The same is true if individual settings are set and you update `overall_level` to 3 — all the individual settings are updated to reflect the default level.
 *
 * Note that if you set all the individual settings to values that match what `overall_level` would have set them to, Twitch changes AutoMod to use the default AutoMod level instead of using the individual settings.
 *
 * Valid values for all levels are from 0 (no filtering) through 4 (most aggressive filtering). These levels affect how aggressively AutoMod holds back messages for moderators to review before they appear in chat or are denied (not shown).
 */
export interface UpdateAutoModSettingsBody {
  /**
   * The Automod level for discrimination against disability.
   */
  disability?: number;
  /**
   * The Automod level for hostility involving aggression.
   */
  aggression?: number;
  /**
   * The AutoMod level for discrimination based on sexuality, sex, or gender.
   */
  sexuality_sex_or_gender?: number;
  /**
   * The Automod level for discrimination against women.
   */
  misogyny?: number;
  /**
   * The Automod level for hostility involving name calling or insults.
   */
  bullying?: number;
  /**
   * The Automod level for profanity.
   */
  swearing?: number;
  /**
   * The Automod level for racial discrimination.
   */
  race_ethnicity_or_religion?: number;
  /**
   * The Automod level for sexual content.
   */
  sex_based_terms?: number;
}

export interface UpdateAutoModSettingsResponse extends GetAutoModSettingsResponse {}
