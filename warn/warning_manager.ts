/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the WarningManager class.
 */

import { TBaseObservable } from '../observe/mod.ts';
import { Warning } from './exceptions/warning.ts';

import type { Constructor } from '../types/mod.ts';

/**
 * A class for collecting and displaying {@link Warning} instances.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { WarningManager } from './warning_manager.ts';
 *
 * const warn = new WarningManager();
 *
 * warn.warn('This is a warning message.');
 *
 * const warnings = warn.getWarnings();
 *
 * assertEquals(warnings[0].message, 'This is a warning message.');
 * ```
 */
export class WarningManager extends TBaseObservable<Warning> {
  /**
   * The collection of {@link Warning} instances.
   */
  protected warnings: Warning[] = [];

  /**
   * The number of {@link Warning} instances.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { WarningManager } from './warning_manager.ts';
   *
   * const warn = new WarningManager();
   *
   * warn.warn('This is a warning message.');
   *
   * assertEquals(warn.length, 1);
   * ```
   */
  public get length(): number {
    const { warnings } = this;

    return warnings.length;
  }

  /**
   * Adds a {@link Warning} instance to the collection.
   *
   * @param warning The {@link Warning} instance to add.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { WarningManager } from './warning_manager.ts';
   * import { Warning } from './exceptions/warning.ts';
   *
   * const warn = new WarningManager();
   * const warning = new Warning('This is a warning message.');
   *
   * warn.warn(warning);
   *
   * assertEquals(warn.length, 1);
   * ```
   */
  protected add(warning: Warning): void {
    const { warnings } = this;

    warnings.push(warning);
    this.publish(warning);
  }

  /**
   * Adds a warning message to the collection, optionally specifying the warning class type.
   *
   * @param message The warning message description.
   * @param type The warning class type. Defaults to {@link Warning}.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { WarningManager } from './warning_manager.ts';
   * import { OSWarning } from './exceptions/os_warning.ts';
   *
   * const warn = new WarningManager();
   *
   * warn.warn('This is a warning message.');
   * warn.warn('This is an OS warning message.', OSWarning);
   *
   * const warnings = warn.groupWarnings();
   *
   * assertEquals(warnings.get('Warning')?.length, 1);
   * assertEquals(warnings.get('OSWarning')?.length, 1);
   * ```
   */
  public warn(message: string, type?: Constructor<Warning>): void;

  /**
   * Adds a warning instance to the collection.
   *
   * @param warning The warning instance to add.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { WarningManager } from './warning_manager.ts';
   * import { Warning } from './exceptions/warning.ts';
   * import { OSWarning } from './exceptions/os_warning.ts';
   *
   * const warn = new WarningManager();
   * const warning = new Warning('This is a warning message.');
   * const osWarning = new OSWarning('This is an OS warning message.');
   *
   * warn.warn(warning);
   * warn.warn(osWarning);
   *
   * const warnings = warn.groupWarnings();
   *
   * assertEquals(warnings.get('Warning')?.length, 1);
   * assertEquals(warnings.get('OSWarning')?.length, 1);
   * ```
   */
  public warn(warning: Warning): void;

  /**
   * @ignore implementation
   */
  public warn(
    warning: Warning | string,
    type: Constructor<Warning> = Warning,
  ): void {
    if (typeof warning === 'string') {
      if (type) {
        const warningInstance = new type(warning);

        this.add(warningInstance);
      }
    } else {
      this.add(warning);
    }
  }

  /**
   * Retrieves a collection of {@link Warning} instances, optionally message substring.
   *
   * @param msg The message substring to filter warnings by.
   *
   * @example No filter
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { WarningManager } from './warning_manager.ts';
   *
   * const warn = new WarningManager();
   *
   * warn.warn('This is a warning message.');
   * warn.warn('This is another warning message.');
   * warn.warn('This is yet another warning message.');
   *
   * const warnings = warn.getWarnings();
   *
   * assertEquals(warnings.length, 3);
   * ```
   *
   * @example Filter by message substring
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { WarningManager } from './warning_manager.ts';
   *
   * const warn = new WarningManager();
   *
   * warn.warn('This is a warning message.');
   * warn.warn('This is another warning message.');
   * warn.warn('This is yet another warning message.');
   *
   * const warnings = warn.getWarnings('another');
   *
   * assertEquals(warnings.length, 2);
   * ```
   */
  public getWarnings(msg?: string): Warning[];

  /**
   * Retrieves a collection of {@link Warning} instances, optionally filtered by warning class type.
   *
   * @param type The warning class type to filter warnings by.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { WarningManager } from './warning_manager.ts';
   * import { OSWarning } from './exceptions/os_warning.ts';
   *
   * const warn = new WarningManager();
   *
   * warn.warn('This is a warning message.');
   * warn.warn('This is an OS warning message.', OSWarning);
   * warn.warn('This is another warning message.');
   * warn.warn('This is yet another OS warning message.', OSWarning);
   *
   * const warnings = warn.getWarnings(OSWarning);
   *
   * assertEquals(warnings.length, 2);
   * ```
   */
  public getWarnings(type?: Constructor<Warning>): Warning[];

  /**
   * @ignore implementation
   */
  public getWarnings(type?: Constructor<Warning> | string): Warning[] {
    const { warnings } = this;

    if (typeof type === 'string') {
      return warnings.filter((warning) => warning.message.includes(type));
    } else if (type) {
      return warnings.filter((warning) => warning instanceof type);
    }

    return [...warnings];
  }

  /**
   * Retrieves a collection of {@link Warning} instances grouped by type.
   *
   * @returns The collection of {@link Warning} instances grouped by type.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { WarningManager } from './warning_manager.ts';
   * import { OSWarning } from './exceptions/os_warning.ts';
   *
   * const warn = new WarningManager();
   *
   * warn.warn('This is a warning message.');
   * warn.warn('This is an OS warning message.', OSWarning);
   * warn.warn('This is another warning message.');
   * warn.warn('This is yet another OS warning message.', OSWarning);
   *
   * const warnings = warn.groupWarnings();
   *
   * assertEquals(warnings.get('Warning')?.length, 2);
   * assertEquals(warnings.get('OSWarning')?.length, 2);
   * ```
   */
  public groupWarnings(): Map<Constructor<Warning>['name'], Warning[]> {
    const warnings = this.getWarnings();
    const grouped = new Map<string, Warning[]>();

    warnings.forEach((warning) => {
      const { name } = warning;

      if (!grouped.has(name)) {
        grouped.set(name, []);
      }

      grouped.get(name)?.push(warning);
    });

    return grouped;
  }

  /**
   * Clears the collection of {@link Warning} instances.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { WarningManager } from './warning_manager.ts';
   *
   * const warn = new WarningManager();
   *
   * warn.warn('This is a warning message.');
   *
   * assertEquals(warn.length, 1);
   *
   * warn.clear();
   *
   * assertEquals(warn.length, 0);
   * ```
   */
  public clear(): void {
    this.warnings = [];
  }

  /**
   * Clears the collection of {@link Warning} instances, and completes the observable, unsubscribing all observers.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { WarningManager } from './warning_manager.ts';
   * import { ConsoleWarningObserver } from './console_warning_observer.ts';
   *
   * const warn = new WarningManager();
   * const observer = new ConsoleWarningObserver();
   *
   * warn.subscribe(observer);
   *
   * warn.warn('This is a warning message.');
   *
   * assertEquals(warn.length, 1);
   *
   * warn.complete();
   *
   * assertEquals(warn.length, 0);
   * ```
   */
  public complete(): void {
    super.complete();
    this.clear();
  }
}
