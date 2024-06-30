/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the Range class.
 */

import { TBase } from '../types/mod.ts';

/**
 * A class representing a range of numbers.
 *
 * @example
 * ```ts
 * import { Range } from './range.ts';
 *
 * const range = Range.of(2, -2);
 * const array = range.toArray();
 *
 * console.log(array); // [2, 1, 0, -1, -2]
 * ```
 */
export class Range implements Iterable<number>, TBase<number[]> {
  /**
   * Returns a `Range` instance from `0` to a specified end number.
   *
   * Negative numbers are supported and are counted to from `0`.
   *
   * @param end The last number in the `Range`.
   * @returns The `Range` instance.
   *
   * @example
   * ```ts
   * import { Range } from './range.ts';
   *
   * const range = Range.to(5);
   * const array = range.toArray();
   *
   * console.log(array); // [0, 1, 2, 3, 4, 5]
   * ```
   */
  public static to(end: number): Range {
    return new Range(0, end);
  }

  /**
   * Returns a `Range` instance from a specified number to `0`.
   *
   * Negative numbers are supported, and will count up to `0`.
   *
   * @param start The first number in the `Range`.
   * @returns The `Range` instance.
   *
   * @example
   * ```ts
   * import { Range } from './range.ts';
   *
   * const range = Range.from(5);
   * const array = range.toArray();
   *
   * console.log(array); // [5, 4, 3, 2, 1, 0]
   * ```
   */
  public static from(start: number): Range {
    return new Range(start, 0);
  }

  /**
   * Returns a `Range` from a specified start and end number.
   *
   * Negative values are supported. A `Range` with  `start` number
   * greater than the `end` will count down to the `end`.
   *
   * @param start The first number in the `Range`.
   * @param end The last number in the `Range`.
   * @returns The `Range` instance.
   *
   * @example
   * ```ts
   * import { Range } from './range.ts';
   *
   * const range = Range.of(2, -2);
   * const array = range.toArray();
   *
   * console.log(array); // [2, 1, 0, -1, -2]
   * ```
   */
  public static of(start: number, end: number): Range {
    return new Range(start, end);
  }

  /**
   * Creates a new `Range` instance.
   *
   * @param start The start of the range.
   * @param end The end of the range.
   */
  constructor(protected start: number, protected end: number) {}

  /**
   * Returns a string representation of the range.
   *
   * @returns A string representation of the range.
   */
  public toString(): string {
    return this.toArray().join(',');
  }

  /**
   * Returns the value of the range as an array of numbers.
   *
   * @returns The value of the range as an array of numbers.
   */
  public valueOf(): number[] {
    return this.toArray();
  }

  /**
   * Returns a primitive value representing the object value, either a `string` or `number`, depending on the hint.
   *
   * @param hint The type of primitive value to return.
   * @returns Returns a `string` if `hint` is `'string`' or `'default'`, otherwise a `number`.
   */
  public [Symbol.toPrimitive](hint: string): string | number {
    if (hint === 'number') {
      return this.toArray().length;
    }

    return this.toString();
  }

  /**
   * The number of numbers in the range.
   */
  public get length(): number {
    const { start, end } = this;

    return end - start;
  }

  /**
   * The first number in the range.
   */
  public get first(): number {
    const { start } = this;

    return start;
  }

  /**
   * The last number in the range.
   */
  public get last(): number {
    const { end } = this;

    return end;
  }

  /**
   * Returns an array of numbers in the range.
   *
   * @returns An array of numbers in the range.
   */
  public toArray(): number[] {
    const { start, end } = this;
    const array: number[] = [];

    if (start > end) {
      for (let i = start; i >= end; i--) {
        array.push(i);
      }
    } else {
      for (let i = start; i <= end; i++) {
        array.push(i);
      }
    }

    return array;
  }

  /**
   * Returns an iterator for the range.
   *
   * @returns An iterator for the range.
   */
  [Symbol.iterator](): Iterator<number> {
    let index = 0;

    return {
      next: (): IteratorResult<number> => {
        const array = this.toArray();
        if (index < array.length) {
          return {
            done: false,
            value: array[index++],
          };
        }

        return {
          done: true,
          value: null,
        };
      },
    };
  }
}
