/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the Bit class.
 */

import { $IPrimitiveConvertible, type BinaryValue } from '../types/mod.ts';
import { AbstractPrimitiveConvertible } from './abstract_primitive_convertible.ts';

/**
 * Symbol representing a bit that is on.
 */
const SYMBOL_ON = Symbol('0b1');

/**
 * Symbol representing a bit that is off.
 */
const SYMBOL_OFF = Symbol('0b0');

/**
 * A class representing a single bit.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { Bit } from './bit.ts';
 *
 * const bit = new Bit();
 *
 * assertEquals(bit.toString(), '0');
 * assertEquals(bit.valueOf(), 0);
 *
 * bit.on();
 *
 * assertEquals(bit.toString(), '1');
 * assertEquals(bit.valueOf(), 1);
 * ```
 */
export class Bit extends AbstractPrimitiveConvertible {
  /**
   * The minimum value of a bit.
   */
  public static readonly MIN: BinaryValue = 0;

  /**
   * The maximum value of a bit.
   */
  public static readonly MAX: BinaryValue = 1;

  /**
   * Returns a new `Bit` instance that is on.
   *
   * @returns A new `Bit` instance that is on.
   */
  public static get on(): Bit {
    return new Bit(1);
  }

  /**
   * Returns a new `Bit` instance that is off.
   *
   * @returns A new `Bit` instance that is off.
   */
  public static get off(): Bit {
    return new Bit(0);
  }

  /**
   * The state of the bit.
   */
  protected state: boolean;

  /**
   * Creates a new `Bit` instance.
   *
   * @param state The initial state of the bit.
   */
  constructor(protected value: BinaryValue = 0) {
    super();

    const state = value === 1;

    this.state = state;
  }

  /**
   * Turns the bit on.
   */
  public on(): void {
    this.state = true;
  }

  /**
   * Turns the bit off.
   */
  public off(): void {
    this.state = false;
  }

  /**
   * Toggles the bit.
   */
  public toggle(): void {
    const { state } = this;

    this.state = !state;
  }

  /**
   * Returns a string representation of the bit.
   *
   * @returns A string representation of the bit.
   */
  public toString(): string {
    const number = this[$IPrimitiveConvertible.toNumber]();

    return number.toString(2);
  }

  /**
   * Returns a number representation of the bit.
   *
   * @returns A number representation of the bit.
   */
  public valueOf(): number {
    const { state } = this;
    const number = state ? 1 : 0;

    return number;
  }

  /**
   * Returns the symbol representation of the bit.
   *
   * @returns The symbol representation of the bit.
   */
  public [$IPrimitiveConvertible.toSymbol](): symbol {
    const { state } = this;
    const symbol = state ? SYMBOL_ON : SYMBOL_OFF;

    return symbol;
  }
}
