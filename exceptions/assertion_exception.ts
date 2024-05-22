/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the AssertionException class and its related exception data type.
 */

import { ValueException, type ValueExceptionData } from './value_exception.ts';

/**
 * Additional, related data for the {@link AssertionException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { AssertionExceptionData } from './assertion_exception.ts';
 *
 * const data: AssertionExceptionData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type AssertionExceptionData = ValueExceptionData;

/**
 * An exception raised when a false assertion is made.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { AssertionException } from './assertion_exception.ts';
 *
 * const exception = new AssertionException('The two values are not equal.');
 *
 * assertEquals(exception.message, 'The two values are not equal.');
 * ```
 */
export class AssertionException<
  T extends AssertionExceptionData = AssertionExceptionData,
> extends ValueException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { AssertionException } from './assertion_exception.ts';
   *
   * const exception = new AssertionException('The two values are not equal.');
   *
   * assertEquals(exception.code, 36);
   * ```
   */
  public readonly code: number = 0x24;
}
