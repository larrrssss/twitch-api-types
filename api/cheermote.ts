import { Format, Size, Theme } from './images';

export type CheermoteImageFormat = Record<Format, Record<Size, string>>;

export type CheermoteImages = Record<Theme, CheermoteImageFormat>;

export type CheermoteTier = {
  /**
   * The minimum number of Bits that you must cheer at this tier level. The maximum number of Bits that you can cheer at this level is determined by the required minimum Bits of the next tier level minus 1. For example, if `min_bits` is 1 and `min_bits` for the next tier is 100, the Bits range for this tier level is 1 through 99. The minimum Bits value of the last tier is the maximum number of Bits you can cheer using this Cheermote. For example, 10000.
   */
  min_bits: number;
  /**
   * The tier level. Possible tiers are:
   *  * 1
   *  * 100
   *  * 500
   *  * 1000
   *  * 5000
   *  * 10000
   *  * 100000
   */
  id: string;
  /**
   * The hex code of the color associated with this tier level (for example, #979797).
   */
  color: string;
  /**
   * A Boolean value that determines whether users can cheer at this tier level.
   */
  can_cheer: boolean;
  /**
   * A Boolean value that determines whether this tier level is shown in the Bits card. Is **true** if this tier level is shown in the Bits card.
   */
  show_in_bits_card: boolean;
  /**
   * The animated and static image sets for the Cheermote. The dictionary of images is organized by theme, format, and size. The theme keys are dark and light. Each theme is a dictionary of formats: animated and static. Each format is a dictionary of sizes: 1, 1.5, 2, 3, and 4. The value of each size contains the URL to the image.
   */
  images: CheermoteImages;
};

export type Cheermote = {
  /**
   * The name portion of the Cheermote string that you use in chat to cheer Bits. The full Cheermote string is the concatenation of {prefix} + {number of Bits}. For example, if the prefix is “Cheer” and you want to cheer 100 Bits, the full Cheermote string is Cheer100. When the Cheermote string is entered in chat, Twitch converts it to the image associated with the Bits tier that was cheered.
   */
  prefix: string;
  tiers: CheermoteTier[];
};
