/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the OSwarning class and its related warning data type.
 */

import { Warning, type WarningData } from './warning.ts';

/**
 * Additional, related data for the {@link OSWarning} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { OSWarningData } from './os_warning.ts';
 *
 * const data: OSWarningData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type OSWarningData = WarningData;

/**
 * A warning presented when an operation encounters a system-related issue.
 *
 * @param T - The type of the additional, relevant data for the warning.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { OSWarning } from './os_warning.ts';
 *
 * const warning = new OSWarning('An OS issue occurred.');
 *
 * assertEquals(warning.message, 'An OS issue occurred.');
 * ```
 */
export class OSWarning<T extends OSWarningData = OSWarningData>
  extends Warning<T> {
  /**
   * The warning code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { OSWarning } from './os_warning.ts';
   *
   * const warning = new OSWarning('An OS issue occurred.');
   *
   * assertEquals(warning.code, 73);
   * ```
   */
  public readonly code: number = 0x49;
}
