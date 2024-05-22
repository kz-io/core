/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the DiskException class and its related exception data type.
 */

import { OSException, type OSExceptionData } from './os_exception.ts';

/**
 * Additional, related data for the {@link DiskException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { DiskExceptionData } from './disk_exception.ts';
 *
 * const data: DiskExceptionData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type DiskExceptionData = OSExceptionData;

/**
 * An exception raised when an operation encounters a disk-related error.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { DiskException } from './disk_exception.ts';
 *
 * const exception = new DiskException('Disk is full.');
 *
 * assertEquals(exception.message, 'Disk is full.');
 * ```
 */
export class DiskException<T extends DiskExceptionData = DiskExceptionData>
  extends OSException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { DiskException } from './disk_exception.ts';
   *
   * const exception = new DiskException('Disk is full.');
   *
   * assertEquals(exception.code, 3);
   * ```
   */
  public readonly code: number = 0x3;
}
