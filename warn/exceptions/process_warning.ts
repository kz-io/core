/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the ProcessWarning class and its related warning data type.
 */

import { OSWarning, type OSWarningData } from './os_warning.ts';

/**
 * Additional, related data for the {@link Processwarning} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { ProcessWarningData } from './process_warning.ts';
 *
 * const data: ProcessWarningData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type ProcessWarningData = OSWarningData;

/**
 * A warning presented when an operation is encounters a process-related issue.
 *
 * @param T - The type of the additional, relevant data for the warning.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { ProcessWarning } from './process_warning.ts';
 *
 * const warning = new ProcessWarning('Process encountered an issue.');
 *
 * assertEquals(warning.message, 'Process encountered an issue.');
 * ```
 */
export class ProcessWarning<T extends ProcessWarningData = ProcessWarningData>
  extends OSWarning<T> {
  /**
   * The warning code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { ProcessWarning } from './process_warning.ts';
   *
   * const warning = new ProcessWarning('Process encountered an issue.');
   *
   * assertEquals(warning.code, 76);
   * ```
   */
  public readonly code: number = 0x4c;
}
