/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the ConnectionWarning class and its related warning data type.
 */

import { OSWarning, type OSWarningData } from './os_warning.ts';

/**
 * Additional, related data for the {@link ConnectionWarning} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { ConnectionWarningData } from './connection_warning.ts';
 *
 * const data: ConnectionWarningData = {
 *   value: 'foo',
 * };
 *
 * assertEquals(data.value, 'foo');
 * ```
 */
export type ConnectionWarningData = OSWarningData;

/**
 * A warning presented when an operation encounters a connection-related issue.
 *
 * @param T - The type of the additional, relevant data for the warning.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { ConnectionWarning } from './connection_warning.ts';
 *
 * const warning = new ConnectionWarning('Connection has high latency.');
 *
 * assertEquals(warning.message, 'Connection has high latency.');
 * ```
 */
export class ConnectionWarning<
  T extends ConnectionWarningData = ConnectionWarningData,
> extends OSWarning<T> {
  /**
   * The warning code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { ConnectionWarning } from './connection_warning.ts';
   *
   * const warning = new ConnectionWarning('Connection has high latency.');
   *
   * assertEquals(warning.code, 77);
   * ```
   */
  public readonly code: number = 0x4d;
}
