import { PaginatedResponse, PaginationParams, Response } from './responses';
import { ContentClassificationLabel } from './label';

export type Channel = {
  /**
   * An ID that uniquely identifies the broadcaster.
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
   * The broadcaster’s preferred language. The value is an ISO 639-1 two-letter language code (for example, en for English). The value is set to “other” if the language is not a Twitch supported language.
   */
  broadcaster_language: string;
  /**
   * The name of the game that the broadcaster is playing or last played. The value is an empty string if the broadcaster has never played a game.
   */
  game_name: string;
  /**
   * An ID that uniquely identifies the game that the broadcaster is playing or last played. The value is an empty string if the broadcaster has never played a game.
   */
  game_id: string;
  /**
   * The title of the stream that the broadcaster is currently streaming or last streamed. The value is an empty string if the broadcaster has never streamed.
   */
  title: string;
  /**
   * The value of the broadcaster’s stream delay setting, in seconds. This field’s value defaults to zero unless 1) the request specifies a user access token, 2) the ID in the broadcaster_id query parameter matches the user ID in the access token, and 3) the broadcaster has partner status and they set a non-zero stream delay value.
   */
  delay: number;
  /**
   * The tags applied to the channel.
   */
  tags: string[];
  /**
   * The CCLs applied to the channel.
   */
  content_classification_labels: ContentClassificationLabel[];
  /**
   * Boolean flag indicating if the channel has branded content.
   */
  is_branded_content: boolean;
};

/**
 * Get Channel Information
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-channel-information
 */

export interface GetChannelInformationParams {
  /**
   * The ID of the broadcaster whose channel you want to get. To specify more than one ID, include this parameter for each broadcaster you want to get. For example, `broadcaster_id=1234&broadcaster_id=5678`. You may specify a maximum of 100 IDs. The API ignores duplicate IDs and IDs that are not found.
   */
  broadcaster_id: string[];
}

export interface GetChannelInformationResponse extends Response<Channel[]> {}

/**
 * Modify Channel Information
 * Extracted from https://dev.twitch.tv/docs/api/reference/#modify-channel-information
 */

export interface ModifyChannelInformationParams {
  /**
   * The ID of the broadcaster whose channel you want to update. This ID must match the user ID in the user access token.
   */
  broadcaster_id: string;
}

/**
 * All fields are optional, but you must specify at least one field.
 */
export interface ModifyChannelInformationBody {
  /**
   * The ID of the game that the user plays. The game is not updated if the ID isn’t a game ID that Twitch recognizes. To unset this field, use “0” or “” (an empty string).
   */
  game_id?: string;
  /**
   * The user’s preferred language. Set the value to an ISO 639-1 two-letter language code (for example, en for English). Set to “other” if the user’s preferred language is not a Twitch supported language. The language isn’t updated if the language code isn’t a Twitch supported language.
   */
  broadcaster_language?: string;
  /**
   * The title of the user’s stream. You may not set this field to an empty string.
   */
  title?: string;
  /**
   * The number of seconds you want your broadcast buffered before streaming it live. The delay helps ensure fairness during competitive play. Only users with Partner status may set this field. The maximum delay is 900 seconds (15 minutes).
   */
  delay?: number;
  /**
   * A list of channel-defined tags to apply to the channel. To remove all tags from the channel, set tags to an empty array. Tags help identify the content that the channel streams. [Learn More](https://help.twitch.tv/s/article/guide-to-tags)
   *
   * A channel may specify a maximum of 10 tags. Each tag is limited to a maximum of 25 characters and may not be an empty string or contain spaces or special characters. Tags are case insensitive. For readability, consider using camelCasing or PascalCasing.
   */
  tags?: string[];
  /**
   * List of labels that should be set as the Channel’s CCLs.
   */
  content_classification_labels?: {
    /**
     * ID of the [Content Classification Labels](https://blog.twitch.tv/en/2023/06/20/introducing-content-classification-labels/) that must be added/removed from the channel.
     */
    id: ContentClassificationLabel;
    /**
     * Boolean flag indicating whether the label should be enabled (true) or disabled for the channel.
     */
    is_enabled: boolean;
  }[];
  /**
   * Boolean flag indicating if the channel has branded content.
   */
  is_branded_content?: boolean;
}

/**
 * Get Channel Editors
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-channel-editors
 */

export interface GetChannelEditorsParams {
  /**
   * The ID of the broadcaster that owns the channel. This ID must match the user ID in the access token.
   */
  broadcaster_id: string;
}

export interface GetChannelEditorsResponse
  extends Response<
    {
      /**
       * An ID that uniquely identifies a user with editor permissions.
       */
      user_id: string;
      /**
       * The user’s display name.
       */
      user_name: string;
      /**
       * The date and time, in RFC3339 format, when the user became one of the broadcaster’s editors.
       */
      created_at: Date;
    }[]
  > {}

/**
 * Get Followed Channels
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-followed-channels
 */

export interface GetFollowedChannelsParams extends PaginationParams {
  /**
   * A user’s ID. Returns the list of broadcasters that this user follows. This ID must match the user ID in the user OAuth token.
   */
  user_id: string;
  /**
   * A broadcaster’s ID. Use this parameter to see whether the user follows this broadcaster. If specified, the response contains this broadcaster if the user follows them. If not specified, the response contains all broadcasters that the user follows.
   */
  broadcaster_id?: string;
  /**
   * The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
   */
  first?: number;
}

export interface GetFollowedChannelsResponse
  extends PaginatedResponse<{
    /**
     * An ID that uniquely identifies the broadcaster that this user is following.
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
     * The UTC timestamp when the user started following the broadcaster.
     */
    followed_at: Date;
  }> {
  /**
   * The total number of broadcasters that the user follows. As someone pages through the list, the number may change as the user follows or unfollows broadcasters.
   */
  total: number;
}

/**
 * Get Channel Followers
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-channel-followers
 */

export interface GetChannelFollowersParams extends PaginationParams {
  /**
   * A user’s ID. Use this parameter to see whether the user follows this broadcaster. If specified, the response contains this user if they follow the broadcaster. If not specified, the response contains all users that follow the broadcaster.
   *
   * Using this parameter requires both a user access token with the moderator:read:followers scope and the user ID in the access token match the broadcaster_id or be the user ID for a moderator of the specified broadcaster.
   */
  user_id?: string;
  /**
   * The broadcaster’s ID. Returns the list of users that follow this broadcaster.
   */
  broadcaster_id: string;
  /**
   * The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
   */
  first?: number;
}

export interface GetChannelFollowersResponse
  extends PaginatedResponse<{
    /**
     * The UTC timestamp when the user started following the broadcaster.
     */
    followed_at: Date;
    /**
     * An ID that uniquely identifies the user that’s following the broadcaster.
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
  }> {
  /**
   * The total number of users that follow this broadcaster. As someone pages through the list, the number of users may change as users follow or unfollow the broadcaster.
   */
  total: number;
}
