/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the FutureWarning class and its related warning data type.
 */

import { Warning, type WarningData } from './warning.ts';

/**
 * Additional, related data for the {@link FutureWarning} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { FutureWarningData } from './future_warning.ts';
 *
 * const data: FutureWarningData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type FutureWarningData = WarningData;

/**
 * A warning presented for future changes for a codebase.
 *
 * @param T - The type of the additional, relevant data for the warning.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { FutureWarning } from './future_warning.ts';
 *
 * const warning = new FutureWarning('Feature will change in the future.');
 *
 * assertEquals(warning.message, 'Feature will change in the future.');
 * ```
 */
export class FutureWarning<T extends FutureWarningData = FutureWarningData>
  extends Warning<T> {
  /**
   * The warning code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { FutureWarning } from './future_warning.ts';
   *
   * const warning = new FutureWarning('Feature will change in the future.');
   *
   * assertEquals(warning.code, 88);
   * ```
   */
  public readonly code: number = 0x58;
}
