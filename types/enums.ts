/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Enums for the module.
 */

/**
 * Specifies the comparison result of two values.
 *
 * @example
 * ```ts
 * import { ComparisonResult } from './mod.ts';
 *
 * const a = 1;
 * const b = 2;
 *
 * const result = a < b
 *   ? ComparisonResult.Lesser
 *   : a > b
 *   ? ComparisonResult.Greater
 *   : ComparisonResult.Equal;
 *
 * console.log(result); // ComparisonResult.Lesser
 * ```
 */
export enum ComparisonResult {
  /**
   * First value is less than the second value.
   */
  Lesser = -1,

  /**
   * Two values are equal.
   */
  Equal = 0,

  /**
   * First value is greater than the second value.
   */
  Greater = 1,
}

/**
 * Specifies the position of an item in a list.
 *
 * @example
 * ```ts
 * import { ListPosition } from './mod.ts';
 *
 * const items = [1, 2, 3];
 *
 * function getItemPosition(item: number): ListPosition {
 *   if (item === items[0]) {
 *     return ListPosition.First;
 *   } else if (item === items[items.length - 1]) {
 *     return ListPosition.Last;
 *   }
 *
 *   return ListPosition.Middle;
 * }
 *
 * console.log(getItemPosition(1)); // ListPosition.First
 * console.log(getItemPosition(2)); // ListPosition.Middle
 * console.log(getItemPosition(3)); // ListPosition.Last
 * ```
 */
export enum ListPosition {
  /**
   * The first position in a list.
   */
  First = 0,

  /**
   * Anything not the first or last.
   */
  Middle = 1,

  /**
   * The last position in a list.
   */
  Last = -1,
}

/**
 * Specifies the parity of a value.
 *
 * @example
 * ```ts
 * import { Parity } from './mod.ts';
 *
 * const number = 3;
 *
 * const parity = number % 2 === 0
 *   ? Parity.Even
 *   : Parity.Odd;
 *
 * console.log(parity); // Parity.Odd
 * ```
 */
export enum Parity {
  Even = 0,
  Odd = 1,
}
