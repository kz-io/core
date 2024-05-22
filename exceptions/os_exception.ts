/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the OSException class and its related exception data type.
 */

import { Exception, type ExceptionData } from './exception.ts';

/**
 * Additional, related data for the {@link OSException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { OSExceptionData } from './os_exception.ts';
 *
 * const data: OSExceptionData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type OSExceptionData = ExceptionData;

/**
 * An exception raised when an operation encounters a system-related error.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { OSException } from './os_exception.ts';
 *
 * const exception = new OSException('An OS error occurred.');
 *
 * assertEquals(exception.message, 'An OS error occurred.');
 * ```
 */
export class OSException<T extends OSExceptionData = OSExceptionData>
  extends Exception<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { OSException } from './os_exception.ts';
   *
   * const exception = new OSException('An OS error occurred.');
   *
   * assertEquals(exception.code, 1);
   * ```
   */
  public readonly code: number = 0x1;
}
