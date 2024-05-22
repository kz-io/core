/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the OperationException class and its related exception data type.
 */

import { OSException, type OSExceptionData } from './os_exception.ts';

/**
 * Additional, related data for the {@link OperationException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { OperationExceptionData } from './operation_exception.ts';
 *
 * const data: OperationExceptionData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type OperationExceptionData = OSExceptionData;

/**
 * An exception raised when an software operation fails.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { OperationException } from './operation_exception.ts';
 *
 * const exception = new OperationException('Operation failed.');
 *
 * assertEquals(exception.message, 'Operation failed.');
 * ```
 */
export class OperationException<
  T extends OperationExceptionData = OperationExceptionData,
> extends OSException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { OperationException } from './operation_exception.ts';
   *
   * const exception = new OperationException('Operation failed.');
   *
   * assertEquals(exception.code, 16);
   * ```
   */
  public readonly code: number = 0x10;
}
