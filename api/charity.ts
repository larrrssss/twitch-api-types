import type { PaginatedResponse, PaginationParams, Response } from './responses';

export interface CharityCampaignAmount {
  /**
   * The monetary amount. The amount is specified in the currency’s minor unit. For example, the minor units for USD is cents, so if the amount is $5.50 USD, `value` is set to 550.
   */
  value: number;
  /**
   * The number of decimal places used by the currency. For example, USD uses two decimal places. Use this number to translate `value` from minor units to major units by using the formula:
   *
   * `value / 10^decimal_places`
   */
  decimal_places: number;
  /**
   * The ISO-4217 three-letter currency code that identifies the type of currency in `value`.
   */
  currency: string;
}

export interface CharityCampaign {
  /**
   * An ID that identifies the charity campaign.
   */
  id: string;
  /**
   * An ID that identifies the broadcaster that’s running the campaign.
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
   * The charity’s name.
   */
  charity_name: string;
  /**
   * A description of the charity.
   */
  charity_description: string;
  /**
   * A URL to an image of the charity’s logo. The image’s type is PNG and its size is 100px X 100px.
   */
  charity_logo: string;
  /**
   * A URL to the charity’s website.
   */
  charity_website: string;
  /**
   * The current amount of donations that the campaign has received.
   */
  current_amount: CharityCampaignAmount;
  /**
   * The campaign’s fundraising goal. This field is `null` if the broadcaster has not defined a fundraising goal.
   */
  target_amount: CharityCampaignAmount | null;
}

export interface GetCharityCampaignParams {
  /**
   * The ID of the broadcaster that’s currently running a charity campaign. This ID must match the user ID in the access token.
   */
  broadcaster_id: string;
}

export interface GetCharityCampaignResponse extends Response<CharityCampaign[]> {}

export interface GetCharityCampaignDonationsParams extends PaginationParams {
  /**
   * The ID of the broadcaster that’s currently running a charity campaign. This ID must match the user ID in the access token.
   */
  broadcaster_id: string;
  /**
   * The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
   */
  first?: number;
}

export interface GetCharityCampaignDonationsResponse
  extends PaginatedResponse<{
    /**
     * An ID that identifies the donation. The ID is unique across campaigns.
     */
    id: string;
    /**
     * An ID that identifies the charity campaign that the donation applies to.
     */
    campaign_id: string;
    /**
     * An ID that identifies a user that donated money to the campaign.
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
     * An object that contains the amount of money that the user donated.
     */
    amount: CharityCampaignAmount;
  }> {}
