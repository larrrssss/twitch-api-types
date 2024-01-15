import { PaginatedResponse, PaginationParams } from './responses';

enum AnalyticsReportType {
  OverviewV2 = 'overview_v2',
}

interface BaseAnalyticsResponse {
  /**
   * The URL that you use to download the report. The URL is valid for 5 minutes.
   */
  URL: string;
  /**
   * The type of report.
   */
  type: AnalyticsReportType;
  /**
   * The reporting window’s start and end dates, in RFC3339 format.
   */
  date_range: {
    /**
     * The reporting window’s start date.
     */
    started_at: string;
    /**
     * The reporting window’s end date.
     */
    ended_at: string;
  };
}

/**
 * Get Extension Analytics
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-extension-analytics
 */

export interface GetExtensionAnalyticsParams extends PaginationParams {
  /**
   * The extension’s client ID. If specified, the response contains a report for the specified extension. If not specified, the response includes a report for each extension that the authenticated user owns.
   */
  extension_id?: string;
  /**
   * The type of analytics report to get.
   */
  type?: AnalyticsReportType;
  /**
   * The reporting window’s start date, in RFC3339 format. Set the time portion to zeroes (for example, 2021-10-22T00:00:00Z).
   *
   * The start date must be on or after January 31, 2018. If you specify an earlier date, the API ignores it and uses January 31, 2018. If you specify a start date, you must specify an end date. If you don’t specify a start and end date, the report includes all available data since January 31, 2018.
   *
   * The report contains one row of data for each day in the reporting window.
   */
  started_at?: string;
  /**
   * The reporting window’s end date, in RFC3339 format. Set the time portion to zeroes (for example, 2021-10-27T00:00:00Z). The report is inclusive of the end date.
   *
   * Specify an end date only if you provide a start date. Because it can take up to two days for the data to be available, you must specify an end date that’s earlier than today minus one to two days. If not, the API ignores your end date and uses an end date that is today minus one to two days.
   */
  ended_at?: string;
  /**
   * The maximum number of report URLs to return per page in the response. The minimum page size is 1 URL per page and the maximum is 100 URLs per page. The default is 20.
   *
   * NOTE: While you may specify a maximum value of 100, the response will contain at most 20 URLs per page.
   */
  first?: number;
  /**
   * The cursor used to get the next page of results. The Pagination object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)
   *
   * This parameter is ignored if the extension_id parameter is set.
   */
  after?: string;
}

export interface GetExtensionAnalyticsResponse
  extends PaginatedResponse<
    BaseAnalyticsResponse & {
      /**
       * An ID that identifies the extension that the report was generated for.
       */
      extension_id: string;
    }
  > {}

/**
 * Get Game Analytics
 * Extracted from https://dev.twitch.tv/docs/api/reference/#get-game-analytics
 */

export interface GetGameAnalyticsParams extends PaginationParams {
  /**
   * The game’s client ID. If specified, the response contains a report for the specified game. If not specified, the response includes a report for each of the authenticated user’s games.
   */
  game_id?: string;
  /**
   * The type of analytics report to get.
   */
  type?: AnalyticsReportType;
  /**
   * The reporting window’s start date, in RFC3339 format. Set the time portion to zeroes (for example, 2021-10-22T00:00:00Z). If you specify a start date, you must specify an end date.
   *
   * The start date must be within one year of today’s date. If you specify an earlier date, the API ignores it and uses a date that’s one year prior to today’s date. If you don’t specify a start and end date, the report includes all available data for the last 365 days from today.
   *
   * The report contains one row of data for each day in the reporting window.
   */
  started_at?: string;
  /**
   * The reporting window’s end date, in RFC3339 format. Set the time portion to zeroes (for example, 2021-10-22T00:00:00Z). The report is inclusive of the end date.
   *
   * Specify an end date only if you provide a start date. Because it can take up to two days for the data to be available, you must specify an end date that’s earlier than today minus one to two days. If not, the API ignores your end date and uses an end date that is today minus one to two days.
   */
  ended_at?: string;
  /**
   * The maximum number of report URLs to return per page in the response. The minimum page size is 1 URL per page and the maximum is 100 URLs per page. The default is 20.
   *
   * NOTE: While you may specify a maximum value of 100, the response will contain at most 20 URLs per page.
   */
  first?: number;
  /**
   * The cursor used to get the next page of results. The Pagination object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)
   *
   * This parameter is ignored if game_id parameter is set.
   */
  after?: string;
}

export interface GetGameAnalyticsResponse
  extends PaginatedResponse<
    BaseAnalyticsResponse & {
      /**
       * An ID that identifies the game that the report was generated for.
       */
      game_id: string;
    }
  > {}
