/**
 * Delete Chat Messages
 * Extracted from https://dev.twitch.tv/docs/api/reference/#delete-chat-messages
 */

export interface DeleteChatMessagesParams {
  /**
   * The ID of the broadcaster that owns the chat room to remove messages from.
   */
  broadcaster_id: string;
  /**
   * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.
   */
  moderator_id: string;
  /**
   * The ID of the message to remove. The id tag in the [PRIVMSG](https://dev.twitch.tv/docs/irc/tags#privmsg-tags) tag contains the message’s ID. Restrictions:
   *   * The message must have been created within the last 6 hours.
   *   * The message must not belong to the broadcaster.
   *   * The message must not belong to another moderator.
   *
   * If not specified, the request removes all messages in the broadcaster’s chat room.
   */
  message_id?: string;
}

export * from './automod';
export * from './bans';
export * from './moderator';
export * from './shield';
export * from './term';
export * from './vip';
