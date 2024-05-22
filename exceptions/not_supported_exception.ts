/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the NotSupportedException class and its related exception data type.
 */

import {
  InvalidException,
  type InvalidExceptionData,
} from './invalid_exception.ts';

/**
 * Additional, related data for the {@link NotSupportedException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { NotSupportedExceptionData } from './not_supported_exception.ts';
 *
 * const data: NotSupportedExceptionData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type NotSupportedExceptionData = InvalidExceptionData;

/**
 * An exception raised when a process of feature is not supported for an environment.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { NotSupportedException } from './not_supported_exception.ts';
 *
 * const exception = new NotSupportedException('This operation is not supported.');
 *
 * assertEquals(exception.message, 'This operation is not supported.');
 * ```
 */
export class NotSupportedException<
  T extends NotSupportedExceptionData = NotSupportedExceptionData,
> extends InvalidException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { NotSupportedException } from './not_supported_exception.ts';
   *
   * const exception = new NotSupportedException('This operation is not supported.');
   *
   * assertEquals(exception.code, 33);
   * ```
   */
  public readonly code: number = 0x21;
}
