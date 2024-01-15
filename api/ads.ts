import { Response } from './responses';

/**
 * Start Commercial
 * Extracted from https://dev.twitch.tv/docs/api/reference/#start-commercial
 */

export interface StartCommercialBody {
  /**
   * The ID of the partner or affiliate broadcaster that wants to run the commercial. This ID must match the user ID found in the OAuth token.
   */
  broadcaster_id: string;
  /**
   * The length of the commercial to run, in seconds. Twitch tries to serve a commercial that’s the requested length, but it may be shorter or longer. The maximum length you should request is 180 seconds.
   */
  length: number;
}

export interface StartCommercialResponse
  extends Response<
    {
      /**
       * The length of the commercial you requested. If you request a commercial that’s longer than 180 seconds, the API uses 180 seconds.
       */
      length: number;
      /**
       * A message that indicates whether Twitch was able to serve an ad.
       */
      message: string;
      /**
       * The number of seconds you must wait before running another commercial.
       */
      retry_after: number;
    }[]
  > {}

/**
 * Get Ad Schedule
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-ad-schedule
 */

export interface GetAdScheduleParams {
  /**
   * broadcaster_id must match the user_id in the auth token.
   */
  broadcaster_id: string;
}

export interface GetAdScheduleResponse
  extends Response<
    {
      /**
       * The number of snoozes available for the broadcaster.
       */
      snooze_count: number;
      /**
       * The UTC timestamp when the broadcaster will gain an additional snooze, in RFC3339 format.
       */
      snooze_refresh_at: string;
      /**
       * The UTC timestamp of the broadcaster’s next scheduled ad, in RFC3339 format. Empty if the channel has no ad scheduled or is not live.
       */
      next_ad_at: string;
      /**
       * The length in seconds of the scheduled upcoming ad break.
       */
      duration: number;
      /**
       * The UTC timestamp of the broadcaster’s last ad-break, in RFC3339 format. Empty if the channel has not run an ad or is not live.
       */
      last_ad_at: string;
      /**
       * The amount of pre-roll free time remaining for the channel in seconds. Returns 0 if they are currently not pre-roll free.
       */
      preroll_free_time: number;
    }[]
  > {}

/**
 * Snooze Next Ad
 * Extracted from https://dev.twitch.tv/docs/api/reference/#snooze-next-ad
 */

export interface SnoozeNextAdParams {
  /**
   * broadcaster_id must match the user_id in the auth token.
   */
  broadcaster_id: string;
}

export interface SnoozeNextAdResponse
  extends Response<
    {
      /**
       * The number of snoozes available for the broadcaster.
       */
      snooze_count: number;
      /**
       * The UTC timestamp when the broadcaster will gain an additional snooze, in RFC3339 format.
       */
      snooze_refresh_at: string;
      /**
       * The UTC timestamp of the broadcaster’s next scheduled ad, in RFC3339 format.
       */
      next_ad_at: string;
    }[]
  > {}
