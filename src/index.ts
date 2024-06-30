/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the Index class.
 */

import { RangeException } from '../exceptions/mod.ts';
import { AbstractConvertible } from './abstract_convertible.ts';
import { ListPosition, Parity } from '../types/mod.ts';

/**
 * Describes the named conversions for the Index class.
 */
export type IndexConversionMap = {
  /**
   * Converts the `Index` to a trimmed 4-digit precision percentage of the `Index`.
   */
  percent: string;

  /**
   * Converts the `Index` to a `number`, the `valueOf` the `Index`.
   */
  number: number;
};

/**
 * A class representing an index of an item in a list.
 *
 * @example
 * ```ts
 * import { Index } from './mod.ts';
 * const items = ['Hello', 'World', '!'];
 * const indexer = Index.createIndexer(items.length);
 *
 * const formattedItems = items.map((item, i) => {
 * 	 const index = indexer(i);
 *
 *   return index.isFirst
 *  	 ? `${item} is first`
 *  	 : index.isLast
 *  	   ? `${item} is last`
 *  		 : `${item} is in the middle`;
 * });
 *
 * const lines = formattedItems.join('\n');
 *
 * console.log(lines);
 * // ^ Hello is first
 * //   World is in the middle
 * //   ! is last
 * ```
 */
export class Index extends AbstractConvertible<number, IndexConversionMap> {
  /**
   * Returns a function that creates an `Index` instance representing the given index in a list.
   *
   * @param listSize The size of the list.
   * @returns A function that creates an `Index` instance representing the given index in a list.
   *
   * @example
   * ```ts
   * import { Index } from './mod.ts';
   *
   * const indexer = Index.createIndexer(20);
   * const index = indexer(5);
   *
   * console.log(index.value);  // 5
   * console.log(index.length); // 20
   * ```
   */
  public static createIndexer(listSize: number): (index: number) => Index {
    return (index: number) => Index.of(index, listSize);
  }

  /**
   * Returns an `Index` instance representing the last index in a list.
   *
   * @param listSize The size of the list.
   * @returns An `Index` instance representing the last index in a list.
   *
   * @example
   * ```ts
   * import { Index } from './mod.ts';
   *
   * const index = Index.end(10);
   *
   * console.log(index.value);  // 9
   * console.log(index.length); // 10
   * ```
   */
  public static end(listSize: number): Index {
    return Index.of(listSize - 1, listSize);
  }

  /**
   * Returns an `Index` instance representing the last index in a list.
   *
   * @param listSize The size of the list.
   * @returns An `Index` instance representing the last index in a list.
   *
   * @example
   * ```ts
   * import { Index } from './mod.ts';
   *
   * const index = Index.start(10);
   *
   * console.log(index.value);  // 0
   * console.log(index.length); // 10
   * ```
   */
  public static start(listSize: number): Index {
    return Index.of(0, listSize);
  }

  /**
   * Returns an `Index` instance representing the given index in a list.
   *
   * @param index The index.
   * @param listSize The size of the list.
   * @returns An `Index` instance representing the given index in a list.
   *
   * @example
   * ```ts
   * import { Index } from './mod.ts';
   *
   * const index = Index.of(5, 10);
   *
   * console.log(index.value);  // 5
   * console.log(index.length); // 10
   * ```
   */
  public static of(index: number, listSize: number): Index {
    return new Index(index, listSize);
  }

  /**
   * Returns a string representation of the `Index`.
   *
   * @returns A string representation of the `Index`.
   */
  public toString(precision: number = 0): string {
    if (precision < 0 || precision > 20) {
      throw new RangeException({
        lowerBound: 0,
        upperBound: 20,
        value: precision,
        valueName: 'precision',
      });
    }

    const pct = (this.index / this.listSize) * 100;

    return `${pct.toFixed(precision)}%`;
  }

  /**
   * Returns the value of the `Index`.
   *
   * @returns The value of the `Index`.
   */
  public valueOf(): number {
    return this.index;
  }

  /**
   * Creates a new `Index` instance representing the given index in a list.
   *
   * @param index The index in the list.
   * @param listSize The size of the list.
   */
  constructor(protected index: number, protected listSize: number) {
    super();

    if (index < 0 || index >= listSize) {
      throw new RangeException({
        lowerBound: 0,
        upperBound: listSize - 1,
        value: index,
        valueName: 'index',
      });
    }
  }

  /**
   * Returns the {@link Parity} of the index.
   */
  public get parity(): Parity {
    const { index } = this;

    return index % 2 === 0 ? Parity.Even : Parity.Odd;
  }

  /**
   * The index value.
   */
  public get value(): number {
    const { index } = this;

    return index;
  }

  /**
   * Whether the index is even.
   */
  public get isEven(): boolean {
    const { parity } = this;

    return parity === Parity.Even;
  }

  /**
   * Whether the index is odd.
   */
  public get isOdd(): boolean {
    const { parity } = this;

    return parity === Parity.Odd;
  }

  /**
   * The position of the index in the list.
   */
  public get position(): ListPosition {
    const { index, listSize } = this;

    if (index === 0) {
      return ListPosition.First;
    }

    if (index === listSize - 1) {
      return ListPosition.Last;
    }

    return ListPosition.Middle;
  }

  /**
   * Whether the index is the last index in the list.
   */
  public get isLast(): boolean {
    const { position } = this;

    return position === ListPosition.Last;
  }

  /**
   * Whether the index is the first index in the list.
   */
  public get isFirst(): boolean {
    const { position } = this;

    return position === ListPosition.First;
  }

  /**
   * Whether the index is in the middle of the list.
   *
   * e.g. not first or last.
   */
  public get isMiddle(): boolean {
    const { position } = this;

    return position === ListPosition.Middle;
  }

  /**
   * The distance of the index from the start of the list.
   */
  public get fromStart(): number {
    const { index } = this;

    return index;
  }

  /**
   * The distance of the index from the end of the list.
   */
  public get fromEnd(): number {
    const { index, listSize } = this;

    return listSize - index - 1;
  }

  /**
   * The size of the list.
   */
  public get length(): number {
    return this.listSize;
  }

  /**
   * Returns a primitive value representing the object value, either a `string` or `number`, depending on the hint.
   *
   * @param hint The type of primitive value to return.
   * @returns Returns a `string` if hint is `'string'` or `'default'`, otherwise a `number`.
   */
  [Symbol.toPrimitive](hint: string): string | number {
    if (hint === 'number') {
      return this.valueOf();
    }

    return this.toString();
  }

  /**
   * Converts the instance value to a named conversion type.
   *
   * @param t The named conversion types.
   * @returns The converted value.
   *
   * @see {@link IndexConversionMap}.
   *
   * @example
   * ```ts
   * import { Index } from './mod.ts';
   *
   * const index = new Index(5, 10);
   *
   * const pct = index.convertTo('percent');
   * const num = index.convertTo('number');
   *
   * console.log(pct); // '60%'
   * console.log(num); // 0.6
   * ```
   */
  public convertTo<K extends keyof IndexConversionMap>(
    t: K,
  ): IndexConversionMap[K] {
    switch (t) {
      case 'percent':
        return this.toString() as IndexConversionMap[K];
      default:
        return this.valueOf() as IndexConversionMap[K];
    }
  }
}
