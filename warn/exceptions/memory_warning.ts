/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the MemoryWarning class and its related warning data type.
 */

import { OSWarning, type OSWarningData } from './os_warning.ts';

/**
 * Additional, related data for the {@link MemoryWarning} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { MemoryWarningData } from './memory_warning.ts';
 *
 * const data: MemoryWarningData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type MemoryWarningData = OSWarningData;

/**
 * A warning presented when an operation is encounters a memory-related issue.
 *
 * @param T - The type of the additional, relevant data for the warning.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { MemoryWarning } from './memory_warning.ts';
 *
 * const warning = new MemoryWarning('Memory utilization is at 85%.');
 *
 * assertEquals(warning.message, 'Memory utilization is at 85%.');
 * ```
 */
export class MemoryWarning<T extends MemoryWarningData = MemoryWarningData>
  extends OSWarning<T> {
  /**
   * The warning code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { MemoryWarning } from './memory_warning.ts';
   *
   * const warning = new MemoryWarning('Memory utilization is at 85%.');
   *
   * assertEquals(warning.code, 74);
   * ```
   */
  public readonly code: number = 0x4a;
}
