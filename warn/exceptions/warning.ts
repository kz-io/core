/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the base Warning class and its related warning data type.
 */

import { type BaseExceptionData, Exception } from '../../exceptions/mod.ts';

/**
 * Additional, relevant data for {@link Warning} instances.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { WarningData } from './warning.ts';
 *
 * const data: WarningData = {
 *   prev: 'Execution is slow',
 * };
 *
 * assertEquals(data.prev, 'Execution is slow');
 * ```
 */
export type WarningData = BaseExceptionData;

/**
 * A generic warning class and base class for all kz warnings.
 *
 * @param T - The type of the additional, relevant data for the warning.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { Warning } from './warning.ts';
 *
 * const warning = new Warning('Slow execution.');
 *
 * assertEquals(warning.message, 'Slow execution.');
 * ```
 */
export class Warning<T extends WarningData = WarningData> extends Exception<T> {
  /**
   * The warning code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { Warning } from './warning.ts';
   *
   * const warning = new Warning('Slow execution.');
   *
   * assertEquals(warning.code, 72);
   * ```
   */
  public readonly code: number = 0x48;
}
