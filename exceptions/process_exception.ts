/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the ProcessException class and its related exception data type.
 */

import { OSException, type OSExceptionData } from './os_exception.ts';

/**
 * Additional, related data for the {@link ProcessException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { ProcessExceptionData } from './process_exception.ts';
 *
 * const data: ProcessExceptionData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type ProcessExceptionData = OSExceptionData;

/**
 * An exception raised when an operation is encounters a process-related error.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { ProcessException } from './process_exception.ts';
 *
 * const exception = new ProcessException('Process ended abruptly.');
 *
 * assertEquals(exception.message, 'Process ended abruptly.');
 * ```
 */
export class ProcessException<
  T extends ProcessExceptionData = ProcessExceptionData,
> extends OSException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { ProcessException } from './process_exception.ts';
   *
   * const exception = new ProcessException('Process ended abruptly.');
   *
   * assertEquals(exception.code, 4);
   * ```
   */
  public readonly code: number = 0x4;
}
