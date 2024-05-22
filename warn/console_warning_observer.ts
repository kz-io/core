/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the ConsoleWarningObserver class.
 */

import { TAbstractObserver } from '../observe/mod.ts';

import type { Warning } from './exceptions/warning.ts';

/**
 * An observer that logs {@link Warning} instances to the console.
 *
 * @example
 * ```ts
 * import { Warning } from './exceptions/warning.ts';
 * import { ConsoleWarningObserver } from './console_warning_observer.ts';
 *
 * const warn = new ConsoleWarningObserver();
 *
 * warn.next(new Warning('This is a warning message.'));
 * ```
 */
export class ConsoleWarningObserver extends TAbstractObserver<Warning> {
  /**
   * Receives an error from the observable.
   *
   * @param error - The error that occurred.
   *
   * @example
   * ```ts
   * import { ConsoleWarningObserver } from './console_warning_observer.ts';
   *
   * const warn = new ConsoleWarningObserver();
   *
   * warn.error(new Error('This is an error message.'));
   * ```
   */
  public error(error: Error): void {
    console.error(error.message);
  }

  /**
   * Receives a value from the observable.
   *
   * @param value - The value being observed.
   *
   * @example
   * ```ts
   * import { Warning } from './exceptions/warning.ts';
   * import { ConsoleWarningObserver } from './console_warning_observer.ts';
   *
   * const warn = new ConsoleWarningObserver();
   *
   * warn.next(new Warning('This is a warning message.'));
   * ```
   */
  public next(warning: Warning): void {
    console.warn(`${warning}`);
  }
}
