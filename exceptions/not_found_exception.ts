/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the NotFoundException class and its related exception data type.
 */

import { ValueException, type ValueExceptionData } from './value_exception.ts';

/**
 * Additional, related data for the {@link NotFoundException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { NotFoundExceptionData } from './not_found_exception.ts';
 *
 * const data: NotFoundExceptionData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type NotFoundExceptionData = ValueExceptionData;

/**
 * An exception raised when a resource is not found.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { NotFoundException } from './not_found_exception.ts';
 *
 * const exception = new NotFoundException('Cannot find the requested resource.');
 *
 * assertEquals(exception.message, 'Cannot find the requested resource.');
 * ```
 */
export class NotFoundException<
  T extends NotFoundExceptionData = NotFoundExceptionData,
> extends ValueException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { NotFoundException } from './not_found_exception.ts';
   *
   * const exception = new NotFoundException('Cannot find the requested resource.');
   *
   * assertEquals(exception.code, 43);
   * ```
   */
  public readonly code: number = 0x2b;
}
