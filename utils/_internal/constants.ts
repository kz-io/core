/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Module-internal constants.
 */

import { type RegExpFlagChar, RegExpFlags } from '../types/mod.ts';

/**
 * Regular expression flags.
 */
export const REGEXP_FLAGS: RegExpFlagChar[] = [
  'd',
  'g',
  'i',
  'm',
  's',
  'u',
  'v',
  'y',
];

/**
 * Regular expression flag mapped to the corresponding enum value.
 */
export const REGEXP_FLAG_MAP: Record<RegExpFlagChar, RegExpFlags> = {
  d: RegExpFlags.Indices,
  g: RegExpFlags.Global,
  i: RegExpFlags.IgnoreCase,
  m: RegExpFlags.Multiline,
  s: RegExpFlags.DotAll,
  u: RegExpFlags.Unicode,
  v: RegExpFlags.UnicodeSets,
  y: RegExpFlags.Sticky,
};
