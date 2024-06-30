// deno-lint-ignore-file no-control-regex
/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports curated regular expressions.
 */

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
