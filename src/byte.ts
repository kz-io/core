/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the Byte class.
 */

import { RangeException } from '../exceptions/mod.ts';

import { $IPrimitiveConvertible, type BinaryValue } from '../types/mod.ts';
import { AbstractPrimitiveConvertible } from './abstract_primitive_convertible.ts';

type ByteBitArray<T extends number | boolean = boolean> = [
  T,
  T,
  T,
  T,
  T,
  T,
  T,
  T,
];

const BIT_MASK8 = [
  0b1,
  0b10,
  0b100,
  0b1000,
  0b10000,
  0b100000,
  0b1000000,
  0b10000000,
] as ByteBitArray<number>;

/**
 * A class representing a single byte.
 *
 * Bit-0 is the least significant bit (LSB) and bit-7 is the most significant bit (MSB),
 * so index 0 is the rightmost bit and index 7 is the leftmost bit.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { Byte } from './byte.ts';
 *
 * const byte = new Byte(0b10101010);
 *
 * assertEquals(byte.toString(), '10101010');
 * assertEquals(byte.valueOf(), 0b10101010);
 *
 * byte.setBit(0, 1);
 *
 * assertEquals(byte.toString(), '10101011');
 * assertEquals(byte.valueOf(), 0b10101011);
 * ```
 */
export class Byte extends AbstractPrimitiveConvertible
  implements Iterable<BinaryValue> {
  /**
   * The bit-array of the byte.
   */
  protected value: ByteBitArray<BinaryValue>;

  /**
   * The minimum value of a byte.
   */
  public static readonly MIN = 0;

  /**
   * The maximum value of a byte.
   */
  public static readonly MAX = 255;

  /**
   * Creates a new `Byte` instance.
   *
   * @param value The value of the byte.
   */
  constructor(value: number) {
    super();

    if (value < Byte.MIN || value > Byte.MAX) {
      throw new RangeException({
        valueName: 'value',
        lowerBound: Byte.MIN,
        upperBound: Byte.MAX,
        value,
      });
    }

    const bits = BIT_MASK8.map((mask) =>
      (value & mask) === mask ? 1 : 0
    ) as ByteBitArray<BinaryValue>;

    this.value = bits;
  }

  /**
   * Gets the bit at the given index.
   *
   * @param index The bit-index to get.
   *
   * @returns The bit at the given index.
   */
  public getBit(index: number): BinaryValue {
    if (index < 0 || index > 7) {
      throw new RangeException({
        valueName: 'index',
        lowerBound: 0,
        upperBound: 7,
        value: index,
      });
    }

    return this.value[index];
  }

  /**
   * Sets the bit at the given index.
   *
   * @param index The bit-index to set.
   * @param bit Whether to set the bit to on or off.
   */
  public setBit(index: number, bit: BinaryValue): void {
    if (index < 0 || index > 7) {
      throw new RangeException({
        valueName: 'index',
        lowerBound: 0,
        upperBound: 7,
        value: index,
      });
    }

    this.value[index] = bit;
  }

  /**
   * Toggles the bit at the given index.
   *
   * @param index The bit-index to toggle.
   */
  public toggleBit(index: number): void {
    if (index < 0 || index > 7) {
      throw new RangeException({
        valueName: 'index',
        lowerBound: 0,
        upperBound: 7,
        value: index,
      });
    }

    const bit = this.value[index];

    this.value[index] = bit ? 0 : 1;
  }

  /**
   * Sets the value of the byte.
   *
   * @param value The value of the byte.
   */
  public setValue(value: number): void {
    if (value < Byte.MIN || value > Byte.MAX) {
      throw new RangeException({
        valueName: 'value',
        lowerBound: Byte.MIN,
        upperBound: Byte.MAX,
        value,
      });
    }

    const bits = BIT_MASK8.map((mask) =>
      (value & mask) === mask ? 1 : 0
    ) as ByteBitArray<BinaryValue>;

    this.value = bits;
  }

  /**
   * Gets the value of the byte.
   *
   * @returns The value of the byte.
   */
  public getValue(): number {
    return this.valueOf();
  }

  /**
   * Returns the string representation of the byte.
   *
   * @returns The string representation of the byte.
   */
  public toString(): string {
    const numberValue = this.valueOf();
    const byteString = numberValue.toString(2).padStart(8, '0');

    return byteString;
  }

  /**
   * Returns the numeric value of the byte.
   *
   * @returns The numeric value of the byte.
   */
  public valueOf(): number {
    const { value } = this;
    const numberValue = value.reduce((acc, bit, index) => {
      return acc + (bit ? BIT_MASK8[index] : 0);
    }, 0 as number);

    return numberValue;
  }

  /**
   * Returns the boolean representation of the byte.
   *
   * @returns The boolean representation of the byte.
   */
  public [$IPrimitiveConvertible.toBoolean](): boolean {
    const numberValue = this.valueOf();
    const booleanValue = numberValue !== 0;

    return booleanValue;
  }

  /**
   * Returns the iterator for the byte.
   *
   * @returns The iterator for the byte.
   */
  public [Symbol.iterator](): IterableIterator<BinaryValue> {
    const { value } = this;

    return value[Symbol.iterator]();
  }
}
