/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the MemoryException class and its related exception data type.
 */

import { OSException, type OSExceptionData } from './os_exception.ts';

/**
 * Additional, related data for the {@link MemoryException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { MemoryExceptionData } from './memory_exception.ts';
 *
 * const data: MemoryExceptionData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type MemoryExceptionData = OSExceptionData;

/**
 * An exception raised when an operation is encounters a memory-related error.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { MemoryException } from './memory_exception.ts';
 *
 * const exception = new MemoryException('No more memory is available.');
 *
 * assertEquals(exception.message, 'No more memory is available.');
 * ```
 */
export class MemoryException<
  T extends MemoryExceptionData = MemoryExceptionData,
> extends OSException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { MemoryException } from './memory_exception.ts';
   *
   * const exception = new MemoryException('No more memory is available.');
   *
   * assertEquals(exception.code, 2);
   * ```
   */
  public readonly code: number = 0x2;
}
