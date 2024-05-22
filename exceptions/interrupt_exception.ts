/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the InterruptException class and its related exception data type.
 */

import { OSException, type OSExceptionData } from './os_exception.ts';

/**
 * Additional, related data for the {@link InterruptException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { InterruptExceptionData } from './interrupt_exception.ts';
 *
 * const data: InterruptExceptionData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type InterruptExceptionData = OSExceptionData;

/**
 * An exception raised when an operation is interrupted.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { InterruptException } from './interrupt_exception.ts';
 *
 * const exception = new InterruptException('Operation was interrupted.');
 *
 * assertEquals(exception.message, 'Operation was interrupted.');
 * ```
 */
export class InterruptException<
  T extends InterruptExceptionData = InterruptExceptionData,
> extends OSException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { InterruptException } from './interrupt_exception.ts';
   *
   * const exception = new InterruptException('Operation was interrupted.');
   *
   * assertEquals(exception.code, 6);
   * ```
   */
  public readonly code: number = 0x6;
}
