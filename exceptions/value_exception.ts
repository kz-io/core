/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the ValueException class and its related exception data type.
 */

import {
  InvalidException,
  type InvalidExceptionData,
} from './invalid_exception.ts';

/**
 * Additional, related data for the {@link ValueException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { ValueExceptionData } from './value_exception.ts';
 *
 * const data: ValueExceptionData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type ValueExceptionData = InvalidExceptionData;

/**
 * An exception raised when a value has the correct type, but is still invalid.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { ValueException } from './value_exception.ts';
 *
 * const exception = new ValueException('The provided value is invalid.');
 *
 * assertEquals(exception.message, 'The provided value is invalid.');
 * ```
 */
export class ValueException<T extends ValueExceptionData = ValueExceptionData>
  extends InvalidException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { ValueException } from './value_exception.ts';
   *
   * const exception = new ValueException('The provided value is invalid.');
   *
   * assertEquals(exception.code, 35);
   * ```
   */
  public readonly code: number = 0x23;
}
