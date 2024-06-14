/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the Range class.
 */

/**
 * Represents a range of numbers.
 */
export class Range implements Iterable<number> {
  /**
   * Creates a new `Range` instance.
   *
   * @param start The start of the range.
   * @param end The end of the range.
   */
  constructor(protected start: number, protected end: number) {}

  /**
   * The length of the range.
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
