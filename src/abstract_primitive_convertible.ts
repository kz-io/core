/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the AbstractPrimitiveConvertible class.
 */

import {
  $IPrimitiveConvertible,
  type IPrimitiveConvertible,
} from '../types/mod.ts';

/**
 * An abstract class that implements the `IPrimitiveConvertible` interface.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { AbstractPrimitiveConvertible } from './abstract_primitive_convertible.ts';
 *
 * class MyNumber extends AbstractPrimitiveConvertible {
 *   constructor(private value: number) {
 *     super();
 *   }
 *
 *   public toString(): string {
 *     return this.value.toString();
 *
 *   }
 *
 *   public valueOf(): number {
 *     return this.value;
 *   }
 * }
 *
 * const myNumber = new MyNumber(42);
 *
 * assertEquals(myNumber.toString(), '42');
 * assertEquals(myNumber.valueOf(), 42);
 * ```
 */
export abstract class AbstractPrimitiveConvertible
  implements IPrimitiveConvertible {
  /**
   * Returns a string representation of the object.
   */
  public abstract toString(): string;

  /**
   * Returns a number representation of the object.
   */
  public abstract valueOf(): number;

  /**
   * Returns a boolean representation of the object.
   *
   * @returns A number representation of the object.
   */
  public [$IPrimitiveConvertible.toNumber](): number {
    const numberValue = this.valueOf();

    return numberValue;
  }

  /**
   * A method that converts an object to a corresponding primitive value. Called by the ToPrimitive abstract operation.
   *
   * @param hint The String value hint. The string hint is the string value that is desired by the caller.
   * @returns A string or number representation of the bit.
   */
  public [Symbol.toPrimitive](hint: string): string | number {
    if (hint === 'number') {
      return this[$IPrimitiveConvertible.toNumber]();
    }

    return this.toString();
  }

  /**
   * Returns a boolean representation of the object.
   *
   * @returns A boolean representation of the object.
   */
  public [$IPrimitiveConvertible.toBoolean](): boolean {
    const booleanValue = Boolean(this.valueOf());

    return booleanValue;
  }

  /**
   * Returns a symbol representation of the object.
   *
   * @returns A symbol representation of the object.
   */
  public [$IPrimitiveConvertible.toSymbol](): symbol {
    const symbolValue = Symbol.for(this.toString());

    return symbolValue;
  }

  /**
   * Returns a bigint representation of the object.
   *
   * @returns A bigint representation of the object.
   */
  public [$IPrimitiveConvertible.toBigInt](): bigint {
    const bigIntValue = BigInt(this.valueOf());

    return bigIntValue;
  }
}
