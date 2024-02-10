import { PaginatedResponse, PaginationParams, Response } from './responses';

export type CustomRewardImageSet = {
  /**
   * The URL to a small version of the image.
   */
  url_1x: string;
  /**
   * The URL to a medium version of the image.
   */
  url_2x: string;
  /**
   * The URL to a large version of the image.
   */
  url_4x: string;
};

export type CustomReward = {
  /**
   * The ID that uniquely identifies the broadcaster.
   */
  broadcaster_id: string;
  /**
   * The broadcaster’s login name.
   */
  broadcaster_login: string;
  /**
   * The broadcaster’s display name.
   */
  broadcaster_name: string;
  /**
   * The ID that uniquely identifies this custom reward.
   */
  id: string;
  /**
   * The title of the reward.
   */
  title: string;
  /**
   * The prompt shown to the viewer when they redeem the reward if user input is required (see the `is_user_input_required` field).
   */
  prompt: string;
  /**
   * The cost of the reward in Channel Points.
   */
  cost: number;
  /**
   * A set of custom images for the reward. This field is set to **null** if the broadcaster didn’t upload images.
   */
  image: CustomRewardImageSet | null;
  /**
   * A set of default images for the reward.
   */
  default_image: CustomRewardImageSet;
  /**
   * The background color to use for the reward. The color is in Hex format (for example, #00E5CB).
   */
  background_color: string;
  /**
   * A Boolean value that determines whether the reward is enabled. Is **true** if enabled; otherwise, **false**. Disabled rewards aren’t shown to the user.
   */
  is_enabled: boolean;
  /**
   * A Boolean value that determines whether the user must enter information when redeeming the reward. Is **true** if the reward requires user input.
   */
  is_user_input_required: boolean;
  /**
   * The settings used to determine whether to apply a maximum to the number to the redemptions allowed per live stream.
   */
  max_per_stream_setting: {
    /**
     * A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per live stream. Is **true** if the reward applies a limit.
     */
    is_enabled: boolean;
    /**
     * The maximum number of redemptions allowed per live stream.
     */
    max_per_stream: number;
  };
  /**
   * The settings used to determine whether to apply a maximum to the number of redemptions allowed per user per live stream.
   */
  max_per_user_per_stream_setting: {
    /**
     * A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per user per live stream. Is **true** if the reward applies a limit.
     */
    is_enabled: boolean;
    /**
     * The maximum number of redemptions allowed per user per live stream.
     */
    max_per_user_per_stream: number;
  };
  /**
   * The settings used to determine whether to apply a cooldown period between redemptions and the length of the cooldown.
   */
  global_cooldown_setting: {
    /**
     * A Boolean value that determines whether to apply a cooldown period. Is **true** if a cooldown period is enabled.
     */
    is_enabled: boolean;
    /**
     * The cooldown period, in seconds.
     */
    global_cooldown_seconds: number;
  };
  /**
   * A Boolean value that determines whether the reward is currently paused. Is **true** if the reward is paused. Viewers can’t redeem paused rewards.
   */
  is_paused: boolean;
  /**
   * A Boolean value that determines whether the reward is currently in stock. Is **true** if the reward is in stock. Viewers can’t redeem out of stock rewards.
   */
  is_in_stock: boolean;
  /**
   * A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If **false**, status is UNFULFILLED and follows the normal request queue process.
   */
  should_redemptions_skip_request_queue: boolean;
  /**
   * The number of redemptions redeemed during the current live stream. The number counts against the max_per_stream_setting limit. This field is **null** if the broadcaster’s stream isn’t live or max_per_stream_setting isn’t enabled.
   */
  redemptions_redeemed_current_stream: number | null;
  /**
   * The timestamp of when the cooldown period expires. Is **null** if the reward isn’t in a cooldown state (see the `global_cooldown_setting` field).
   */
  cooldown_expires_at: string | null;
};

export enum CustomRewardRedemptionStatus {
  Canceled = 'CANCELED',
  Fulfilled = 'FULFILLED',
  Unfulfilled = 'UNFULFILLED',
}

export type CustomRewardRedemption = {
  /**
   * The ID that uniquely identifies the broadcaster.
   */
  broadcaster_id: string;
  /**
   * The broadcaster’s login name.
   */
  broadcaster_login: string;
  /**
   * The broadcaster’s display name.
   */
  broadcaster_name: string;
  /**
   * The ID that uniquely identifies this redemption.
   */
  id: string;
  /**
   * The user’s login name.
   */
  user_login: string;
  /**
   * The ID that uniquely identifies the user that redeemed the reward.
   */
  user_id: string;
  /**
   * The user’s display name.
   */
  user_name: string;
  /**
   * The text the user entered at the prompt when they redeemed the reward; otherwise, an empty string if user input was not required.
   */
  user_input: string;
  /**
   * The state of the redemption. Possible values are:
   *
   *   * CANCELED
   *   * FULFILLED
   *   * UNFULFILLED
   */
  status: CustomRewardRedemptionStatus;
  /**
   * The date and time of when the reward was redeemed, in RFC3339 format.
   */
  redeemed_at: string;
  /**
   * The reward that the user redeemed.
   */
  reward: {
    /**
     * The ID that uniquely identifies the redeemed reward.
     */
    id: string;
    /**
     * The reward’s title.
     */
    title: string;
    /**
     * The prompt displayed to the viewer if user input is required.
     */
    prompt: string;
    /**
     * The reward’s cost, in Channel Points.
     */
    cost: number;
  };
};

export interface CreateCustomRewardsParams {
  /**
   * The ID of the broadcaster to add the custom reward to. This ID must match the user ID found in the OAuth token.
   */
  broadcaster_id: string;
}

export interface CreateCustomRewardsBody {
  /**
   * The custom reward’s title. The title may contain a maximum of 45 characters and it must be unique amongst all of the broadcaster’s custom rewards.
   */
  title: string;
  /**
   * The cost of the reward, in Channel Points. The minimum is 1 point.
   */
  cost: number;
  /**
   * The prompt shown to the viewer when they redeem the reward. Specify a prompt if `is_user_input_required` is **true**. The prompt is limited to a maximum of 200 characters.
   */
  prompt?: string;
  /**
   * A Boolean value that determines whether the reward is enabled. Viewers see only enabled rewards. The default is **true**.
   */
  is_enabled?: boolean;
  /**
   * The background color to use for the reward. Specify the color using Hex format (for example, #9147FF).
   */
  background_color?: string;
  /**
   * A Boolean value that determines whether the user needs to enter information when redeeming the reward. See the `prompt` field. The default is **false**.
   */
  is_user_input_required?: boolean;
  /**
   * A Boolean value that determines whether to limit the maximum number of redemptions allowed per live stream (see the `max_per_stream` field). The default is **false**.
   */
  is_max_per_stream_enabled?: boolean;
  /**
   * The maximum number of redemptions allowed per live stream. Applied only if `is_max_per_stream_enabled` is **true**. The minimum value is 1.
   */
  max_per_stream?: number;
  /**
   * A Boolean value that determines whether to limit the maximum number of redemptions allowed per user per stream (see the `max_per_user_per_stream` field). The default is **false**.
   */
  is_max_per_user_per_stream_enabled?: boolean;
  /**
   * The maximum number of redemptions allowed per user per stream. Applied only if `is_max_per_user_per_stream_enabled` is **true**. The minimum value is 1.
   */
  max_per_user_per_stream?: number;
  /**
   * A Boolean value that determines whether to apply a cooldown period between redemptions (see the `global_cooldown_seconds` field for the duration of the cooldown period). The default is **false**.
   */
  is_global_cooldown_enabled?: boolean;
  /**
   * The cooldown period, in seconds. Applied only if the `is_global_cooldown_enabled` field is **true**. The minimum value is 1; however, the minimum value is 60 for it to be shown in the Twitch UX.
   */
  global_cooldown_seconds?: number;
  /**
   * A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If **false**, status is set to UNFULFILLED and follows the normal request queue process. The default is **false**.
   */
  should_redemptions_skip_request_queue?: boolean;
}

export interface CreateCustomRewardsResponse extends Response<CustomReward[]> {}

export interface DeleteCustomRewardParams {
  /**
   * The ID of the broadcaster that created the custom reward. This ID must match the user ID found in the OAuth token.
   */
  broadcaster_id: string;
  /**
   * The ID of the custom reward to delete.
   */
  id: string;
}

export interface GetCustomRewardParams {
  /**
   * The ID of the broadcaster whose custom rewards you want to get. This ID must match the user ID found in the OAuth token.
   */
  broadcaster_id: string;
  /**
   * A list of IDs to filter the rewards by. To specify more than one ID, include this parameter for each reward you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 50 IDs.
   *
   * Duplicate IDs are ignored. The response contains only the IDs that were found. If none of the IDs were found, the response is 404 Not Found.
   */
  id?: string | string[];
  /**
   * A Boolean value that determines whether the response contains only the custom rewards that the app may manage (the app is identified by the ID in the Client-Id header). Set to **true** to get only the custom rewards that the app may manage. The default is **false**.
   */
  only_manageable_rewards?: boolean;
}

export interface GetCustomRewardResponse extends Response<CustomReward[]> {}

export interface GetCustomRewardRedemptionParams extends PaginationParams {
  /**
   * The ID of the broadcaster that owns the custom reward. This ID must match the user ID found in the user OAuth token.
   */
  broadcaster_id: string;
  /**
   * The ID that identifies the custom reward whose redemptions you want to get.
   */
  reward_id: string;
  /**
   * The status of the redemptions to return. The possible case-sensitive values are:
   *
   *   * CANCELED
   *   * FULFILLED
   *   * UNFULFILLED
   *
   * **NOTE**: This field is required only if you don’t specify the id query parameter.
   *
   * **NOTE**: Canceled and fulfilled redemptions are returned for only a few days after they’re canceled or fulfilled.
   */
  status?: CustomRewardRedemptionStatus;
  /**
   * A list of IDs to filter the redemptions by. To specify more than one ID, include this parameter for each redemption you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 50 IDs.
   *
   * Duplicate IDs are ignored. The response contains only the IDs that were found. If none of the IDs were found, the response is 404 Not Found.
   */
  id?: string | string[];
  /**
   * The order to sort redemptions by. The possible case-sensitive values are:
   *
   *   * OLDEST
   *   * NEWEST
   *
   * The default is OLDEST.
   */
  sort?: 'OLDEST' | 'NEWEST';
  /**
   * The maximum number of redemptions to return per page in the response. The minimum page size is 1 redemption per page and the maximum is 50. The default is 20.
   */
  first?: number;
}

export interface GetCustomRewardRedemptionResponse
  extends PaginatedResponse<CustomRewardRedemption> {}

export interface UpdateCustomRewardParams {
  /**
   * The ID of the broadcaster that’s updating the reward. This ID must match the user ID found in the OAuth token.
   */
  broadcaster_id: string;
  /**
   * The ID of the reward to update.
   */
  id: string;
}

export interface UpdateCustomRewardBody {
  /**
   * The custom reward’s title. The title may contain a maximum of 45 characters and it must be unique amongst all of the broadcaster’s custom rewards.
   */
  title: string;
  /**
   * The cost of the reward, in Channel Points. The minimum is 1 point.
   */
  cost: number;
  /**
   * The prompt shown to the viewer when they redeem the reward. Specify a prompt if `is_user_input_required` is **true**. The prompt is limited to a maximum of 200 characters.
   */
  prompt?: string;
  /**
   * A Boolean value that determines whether the reward is enabled. Viewers see only enabled rewards. The default is **true**.
   */
  is_enabled?: boolean;
  /**
   * The background color to use for the reward. Specify the color using Hex format (for example, #9147FF).
   */
  background_color?: string;
  /**
   * A Boolean value that determines whether the user needs to enter information when redeeming the reward. See the `prompt` field. The default is **false**.
   */
  is_user_input_required?: boolean;
  /**
   * A Boolean value that determines whether to limit the maximum number of redemptions allowed per live stream (see the `max_per_stream` field). The default is **false**.
   */
  is_max_per_stream_enabled?: boolean;
  /**
   * The maximum number of redemptions allowed per live stream. Applied only if `is_max_per_stream_enabled` is **true**. The minimum value is 1.
   */
  max_per_stream?: number;
  /**
   * A Boolean value that determines whether to limit the maximum number of redemptions allowed per user per stream (see the `max_per_user_per_stream` field). The default is **false**.
   */
  is_max_per_user_per_stream_enabled?: boolean;
  /**
   * The maximum number of redemptions allowed per user per stream. Applied only if `is_max_per_user_per_stream_enabled` is **true**. The minimum value is 1.
   */
  max_per_user_per_stream?: number;
  /**
   * A Boolean value that determines whether to apply a cooldown period between redemptions (see the `global_cooldown_seconds` field for the duration of the cooldown period). The default is **false**.
   */
  is_global_cooldown_enabled?: boolean;
  /**
   * The cooldown period, in seconds. Applied only if the `is_global_cooldown_enabled` field is **true**. The minimum value is 1; however, the minimum value is 60 for it to be shown in the Twitch UX.
   */
  global_cooldown_seconds?: number;
  /**
   * A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If **false**, status is set to UNFULFILLED and follows the normal request queue process. The default is **false**.
   */
  should_redemptions_skip_request_queue?: boolean;
  /**
   * A Boolean value that determines whether to pause the reward. Set to **true** to pause the reward. Viewers can’t redeem paused rewards..
   */
  is_paused?: boolean;
}

export interface UpdateCustomRewardResponse extends Response<CustomReward[]> {}

export interface UpdateCustomRewardRedemptionStatusParams {
  /**
   * A list of IDs that identify the redemptions to update. To specify more than one ID, include this parameter for each redemption you want to update. For example, `id=1234&id=5678`. You may specify a maximum of 50 IDs.
   */
  id: string | string[];
  /**
   * The ID of the broadcaster that’s updating the redemption. This ID must match the user ID in the user access token.
   */
  broadcaster_id: string;
  /**
   * The ID that identifies the reward that’s been redeemed.
   */
  reward_id: string;
}

export interface UpdateCustomRewardRedemptionStatusBody {
  /**
   * The status to set the redemption to. Possible values are:
   *
   *   * CANCELED
   *   * FULFILLED
   *
   * Setting the status to CANCELED refunds the user’s channel points
   */
  status: Exclude<CustomRewardRedemptionStatus, CustomRewardRedemptionStatus.Unfulfilled>;
}

export interface UpdateCustomRewardRedemptionStatusResponse
  extends Response<CustomRewardRedemption[]> {}
