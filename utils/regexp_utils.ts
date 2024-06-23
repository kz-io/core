/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the regexp utility functions and features.
 */

import { REGEXP_FLAG_MAP, REGEXP_FLAGS } from './_internal/mod.ts';
import { RegExpFlagChar } from './types/mod.ts';

/**
 * A regular expression that matches a new line.
 */
export const NEW_LINE = /\r\n|\r|\n/;

/**
 * A regular expression that matches alphabetic characters.
 */
export const ALPHA = /^[a-zA-Z]+$/;

/**
 *  * A regular expression that matches alphanumeric characters.
 */
export const ALPHA_NUMERIC = /^[a-zA-Z0-9]+$/;

/**
 * A regular expression that matches numeric characters.
 */
export const NUMERIC = /^[0-9]+$/;

/**
 * Converts a string of regexp flags to a number.
 *
 * @param flagString The string of flags to convert.
 * @returns The number representation of the flags.
 */
export function flagsToEnum(flagString: string): number {
  const flags = flagString.split('');
  const result = flags.reduce((acc, flag) => {
    const flagValue = REGEXP_FLAG_MAP[flag as RegExpFlagChar];

    if (flagValue === undefined) {
      throw new Error(`Invalid flag ${flag}`);
    }

    return acc | flagValue;
  }, 0);

  return result;
}

/**
 * Converts a number to a string of regexp flags.
 *
 * @param enumValue The number representation of the flags.
 * @returns The string of flags.
 */
export function enumToFlags(enumValue: number): string {
  const flags = REGEXP_FLAGS.filter((flag) => {
    const value = REGEXP_FLAG_MAP[flag as RegExpFlagChar];
    const result = (enumValue & value) === value;

    return result;
  });

  const result = flags.join('');

  return result;
}
