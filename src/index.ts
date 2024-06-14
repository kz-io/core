/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the Index class.
 */

import { AbstractPrimitiveConvertible } from './abstract_primitive_convertible.ts';
import { RangeException } from '../exceptions/mod.ts';
import { ListPosition, Parity } from '../types/mod.ts';

/**
 * Represents an index in a list.
 *
 * @example
 * ```ts
 * import { Index } from './mod.ts';
 *
 * const index = Index.of(2, 5);
 *
 * console.log(index.toString()); // 40.00%
 * console.log(index.valueOf()); // 2
 *
 * console.log(index.parity); // Parity.Even
 * console.log(index.isEven); // true
 * ```
 */
export class Index extends AbstractPrimitiveConvertible {
  /**
   * Returns an `Index` instance representing the first index in a list.
   *
   * @param listSize The size of the list.
   * @returns An `Index` instance representing the last index in a list.
   */
  public static end(listSize: number): Index {
    return Index.of(listSize - 1, listSize);
  }

  /**
   * Returns an `Index` instance representing the last index in a list.
   *
   * @param listSize The size of the list.
   * @returns An `Index` instance representing the last index in a list.
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
   */
  public static of(index: number, listSize: number): Index {
    return new Index(index, listSize);
  }

  /**
   * Returns a string representation of the index.
   *
   * @returns A string representation of the index.
   */
  public toString(): string {
    const pct = (this.index / this.listSize) * 100;

    return `${pct.toFixed(2)}%`;
  }

  /**
   * Returns the value of the index.
   *
   * @returns The value of the index.
   */
  public valueOf(): number {
    return this.index;
  }

  /**
   * Creates a new `Index` instance representing the given index in a list.
   * @param index The index.
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
}
