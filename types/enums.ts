/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Enums for the module.
 */

/**
 * Specifies the comparison result of two values.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { ComparisonResult } from './enums.ts';
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
 * assertEquals(result, ComparisonResult.Lesser);
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
 * import { assertEquals } from '@std/assert';
 * import { Position } from './enums.ts';
 * 
 * const items = [1, 2, 3];
 * 
 * function getItemPosition(item: number): Position {
 *   if (item === items[0]) {
 *     return Position.First;
 *   } else if (item === items[items.length - 1]) {
 *     return Position.Last;
 *   }
 * 
 *   return Position.Middle;
 * }
 * 
 * assertEquals(getItemPosition(1), Position.First);
 * assertEquals(getItemPosition(2), Position.Middle);
 * assertEquals(getItemPosition(3), Position.Last); 
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
 * import { assertEquals } from '@std/assert';
 * import { Parity } from './enums.ts';
 * 
 * const number = 3;
 * 
 * const parity = number % 2 === 0
 *   ? Parity.Even
 *   : Parity.Odd;
 * 
 * assertEquals(parity, Parity.Odd);
 * ```
 */
export enum Parity {
  Even = 0,
  Odd = 1,
}
