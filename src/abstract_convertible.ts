/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the AbstractConvertible class.
 */

import type { KeyPrimitive, TConvertible } from '../types/mod.ts';
import { Converter } from '../types/type_aliases.ts';

/**
 * An abstract class implementation of the {@link TConvertible} interface.
 *
 * @template T The type of the object value, for {@link TConvertible}.
 * @template M The map of named conversion keys to the types they convert to, for {@linkTConvertible}.
 *
 * @example
 * ```ts
 * import { AbstractConvertible } from './abstract_convertible.ts';
 *
 * interface ConvertibleMap {
 * 	 symbol: symbol,
 * 	 other: { id: string },
 * }
 *
 * class ConverterClass extends AbstractConvertible<number, ConvertibleMap> {
 * 	 public [Symbol.toPrimitive](hint: string): string | number {
 * 	 	 if (hint === 'number') {
 * 	 	 	 return this.valueOf();
 * 	 	 }
 *
 * 	 	 return this.toString();
 * 	 }
 *
 * 	 public valueOf(): number {
 * 	 	 return 42;
 * 	 }
 *
 * 	 public convertTo<K extends keyof ConvertibleMap>(t: K): ConvertibleMap[K] {
 * 	 	 const value = this.valueOf();
 * 	 	 const id = `${value}`;
 *
 * 	 	 if (t === 'symbol') {
 * 	 	 	 return Symbol(id) as ConvertibleMap[K];
 * 	 	 }
 *
 * 	 	 return {id} as ConvertibleMap[K];
 * 	 }
 * }
 *
 * const obj = new ConverterClass();
 *
 * const symValue = obj.convertTo('symbol');
 * const otherValue = obj.convertTo('other');
 * const result = obj.convert((val: number) => val.toString());
 * ```
 */
export abstract class AbstractConvertible<
  T,
  // deno-lint-ignore no-explicit-any
  M extends Record<KeyPrimitive, any>,
> implements TConvertible<T, M> {
  /**
   * Returns the `T` value representation of the object.
   */
  public abstract valueOf(): T;

  /**
   * Returns a primitive value representing the object value, either a `string` or `number`, depending on the hint.
   *
   * @param hint The type of primitive value to return.
   * @returns Returns a `string` if hint is `'string'` or `'default'`, otherwise a `number`.
   */
  public abstract [Symbol.toPrimitive](hint: string): string | number;

  /**
   * Converts the instance value to a named conversion type.
   *
   * @template K The named conversion type.
   *
   * @param toType The named conversion to use.
   */
  public abstract convertTo<K extends keyof M>(toType: K): M[K];

  /**
   * Returns the string representation of the object.
   */
  public toString(): string {
    return this[Symbol.toPrimitive]('string') as string;
  }

  /**
   * Converts the instance value to type `T` type using a {@link Converter}.
   *
   * @param converter The type the converter will convert the instance type to.
   * @returns The converted value.
   */
  public convert<C>(converter: Converter<T, C>): C {
    if (typeof converter === 'function') {
      return converter(this.valueOf());
    }

    return converter.convert(this.valueOf());
  }
}
