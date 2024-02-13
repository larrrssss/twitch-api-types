import type { Cheermote } from './cheermote';
import type { Response } from './responses';

/**
 * Get Bits Leaderboard
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-bits-leaderboard
 */

export enum BitsLeaderboardPeriod {
  /**
   * A day spans from 00:00:00 on the day specified in `started_at` and runs through 00:00:00 of the next day.
   */
  Day = 'day',
  /**
   * A week spans from 00:00:00 on the Monday of the week specified in `started_at` and runs through 00:00:00 of the next Monday.
   */
  Week = 'week',
  /**
   * A month spans from 00:00:00 on the first day of the month specified in `started_at` and runs through 00:00:00 of the first day of the next month.
   */
  Month = 'month',
  /**
   * A year spans from 00:00:00 on the first day of the year specified in `started_at` and runs through 00:00:00 of the first day of the next year.
   */
  Year = 'year',
  /**
   * The lifetime of the broadcaster's channel.
   */
  All = 'all',
}

export interface GetBitsLeaderboardParams {
  /**
   * The number of results to return. The minimum count is 1 and the maximum is 100. The default is 10.
   */
  count?: number;
  /**
   * The time period over which data is aggregated (uses the PST time zone).
   */
  period?: BitsLeaderboardPeriod;
  /**
   * The start date, in RFC3339 format, used for determining the aggregation period. Specify this parameter only if you specify the period query parameter. The start date is ignored if period is all.
   *
   * Note that the date is converted to PST before being used, so if you set the start time to `2022-01-01T00:00:00.0Z` and period to month, the actual reporting period is December 2021, not January 2022. If you want the reporting period to be January 2022, you must set the start time to `2022-01-01T08:00:00.0Z` or `2022-01-01T00:00:00.0-08:00`.
   *
   * If your start date uses the ‘+’ offset operator (for example, `2022-01-01T00:00:00.0+05:00`), you must URL encode the start date.
   */
  started_at?: string;
  /**
   * An ID that identifies a user that cheered bits in the channel. If count is greater than 1, the response may include users ranked above and below the specified user. To get the leaderboard’s top leaders, don’t specify a user ID.
   */
  user_id?: string;
}

export interface GetBitsLeaderboardResponse
  extends Response<
    {
      /**
       * An ID that identifies a user on the leaderboard.
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
      /**
       * The user’s position on the leaderboard.
       */
      rank: number;
      /**
       * The number of Bits the user has cheered.
       */
      score: number;
    }[]
  > {
  /**
   * The reporting window’s start and end dates, in RFC3339 format. The dates are calculated by using the started_at and period query parameters. If you don’t specify the started_at query parameter, the fields contain empty strings.
   */
  date_range: {
    /**
     * The reporting window’s start date.
     */
    started_at: string;
    /**
     * The reporting window’s start date.
     */
    ended_at: string;
  };
  /**
   * The number of ranked users in `data`. This is the value in the count query parameter or the total number of entries on the leaderboard, whichever is less.
   */
  total: number;
}

/**
 * Get Cheermotes
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-cheermotes
 */

export interface GetCheermotesParams {
  /**
   * The ID of the broadcaster whose custom Cheermotes you want to get. Specify the broadcaster’s ID if you want to include the broadcaster’s Cheermotes in the response (not all broadcasters upload Cheermotes). If not specified, the response contains only global Cheermotes.
   *
   * If the broadcaster uploaded Cheermotes, the `type` field in the response is set to **channel_custom**.
   */
  broadcaster_id?: string;
}

export interface GetCheermotesResponse extends Response<Cheermote[]> {}
