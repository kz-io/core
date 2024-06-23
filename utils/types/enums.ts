/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Enums for the module.
 */

/**
 * Specifies the flags for regular expressions.
 */
export enum RegExpFlags {
  /**
   * No flags.
   */
  None = 0,

  /**
   * Specifies the indices (`d`) flag.
   */
  Indices = 1,

  /**
   * Specifies the global (`g`) flag.
   */
  Global = 2,

  /**
   * Specifies the ignore case (`i`) flag.
   */
  IgnoreCase = 4,

  /**
   * Specifies the multiline (`m`) flag.
   */
  Multiline = 8,

  /**
   * Specifies the dot-all (`s`) flag.
   */
  DotAll = 16,

  /**
   * Specifies the Unicode (`u`) flag.
   */
  Unicode = 32,

  /**
   * Specifies the Unicode sets (`v`) flag.
   */
  UnicodeSets = 64,

  /**
   * Specifies the sticky (`y`) flag.
   */
  Sticky = 128,

  /**
   * Specifies all flags.
   */
  All = 255,
}
