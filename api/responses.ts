export interface Response<T> {
  data: T;
}

export interface PaginatedResponse<T> extends Response<T[]> {
  pagination: {
    /**
     * The cursor used to get the next page of results. Use the cursor to set the request’s after or before query parameter depending on whether you’re paging forwards or backwards through the results.
     */
    cursor?: string;
  };
}

export interface PaginationParams {
  /**
   * The maximum number of items to return per page in the response.
   */
  first?: number;
  /**
   * The cursor used to get the next page of results. The Pagination object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)
   */
  after?: string;
  /**
   * The cursor used to get the previous page of results. The Pagination object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)
   */
  before?: string;
}
