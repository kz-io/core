/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the DiskWarning class and its related warning data type.
 */

import { OSWarning, type OSWarningData } from './os_warning.ts';

/**
 * Additional, related data for the {@link DiskWarning} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { DiskWarningData } from './disk_warning.ts';
 *
 * const data: DiskWarningData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type DiskWarningData = OSWarningData;

/**
 * A warning raised when an operation encounters a disk-related issue.
 *
 * @param T - The type of the additional, relevant data for the warning.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { DiskWarning } from './disk_warning.ts';
 *
 * const warning = new DiskWarning('Disk is nearing capacity.');
 *
 * assertEquals(warning.message, 'Disk is nearing capacity.');
 * ```
 */
export class DiskWarning<T extends DiskWarningData = DiskWarningData>
  extends OSWarning<T> {
  /**
   * The warning code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { DiskWarning } from './disk_warning.ts';
   *
   * const warning = new DiskWarning('Disk is nearing capacity.');
   *
   * assertEquals(warning.code, 75);
   * ```
   */
  public readonly code: number = 0x4b;
}
