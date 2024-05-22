/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the StabilityWarning class and its related warning data type.
 */

import { definedArgs } from '../../_internal/mod.ts';
import { FutureWarning } from './future_warning.ts';

import type { BaseExceptionData } from '../../exceptions/mod.ts';

/**
 * Additional, related data for the {@link StabilityWarning} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { StabilityWarningData } from './stability_warning.ts';
 *
 * const data: StabilityWarningData = {
 *   featureName: 'foo',
 *   featureType: 'class',
 * };
 *
 * assertEquals(data.featureName, 'foo');
 * ```
 */
export type StabilityWarningData = BaseExceptionData<{
  /**
   * The type of feature that is unstable.
   */
  featureType?: string;

  /**
   * The name of the operation that is unstable.
   */
  featureName?: string;

  /**
   * A URL pointing to a resource with more information about the unstable feature.
   */
  aboutUrl?: string;
}>;

/**
 * A warning presented when a feature is unstable, or has an indeterminate API, and shoud not be used in production.
 *
 * @param T - The type of the additional, relevant data for the warning.
 *
 * @example No arguments - default message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { StabilityWarning } from './stability_warning.ts';
 *
 * const warning = new StabilityWarning();
 *
 * assertEquals(warning.message, 'A feature is unstable and should not be used in production environments.');
 * ```
 *
 * @example With provided message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { StabilityWarning } from './stability_warning.ts';
 *
 * const warning = new StabilityWarning('This feature is unstable.');
 *
 * assertEquals(warning.message, 'This feature is unstable.');
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { StabilityWarning } from './stability_warning.ts';
 *
 * const warning = new StabilityWarning({ featureName: 'foo', aboutUrl: 'https://example.com' });
 *
 * assertEquals(warning.message, 'A feature, foo, is unstable and should not be used in production environments. Read more at https://example.com.');
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { StabilityWarning } from './stability_warning.ts';
 *
 * const warning = new StabilityWarning('This feature is unstable.', { featureName: 'foo', aboutUrl: 'https://example.com' });
 *
 * assertEquals(warning.message, 'This feature is unstable.');
 * ```
 */
export class StabilityWarning<
  T extends StabilityWarningData = StabilityWarningData,
> extends FutureWarning<T> {
  /**
   * Creates a new instance of the `StabilityWarning` class with the default message description.
   */
  constructor();

  /**
   * Creates a new instance of the `StabilityWarning` class with the specified message description.
   *
   * @param message The warning message description.
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `StabilityWarning` class with the specified relevant data, resulting in a generated message description.
   *
   * @param data The relevant data for the warning.
   */
  constructor(data: T);

  /**
   * Creates a new instance of the `StabilityWarning` class with the specified message description and additional, relevant data.
   *
   * @param message The warning message description.
   * @param data The additional, relevant data for the warning.
   */
  constructor(message: string, data: T);

  /**
   * @ignore implementation
   */
  constructor(messageOrData: string | T = DEFAULT_MESSAGE, data: T = {} as T) {
    let message: string;

    if (typeof messageOrData === 'string') {
      message = messageOrData;
    } else {
      data = messageOrData;
      message = createMessageFromData(data);
    }

    message = message || DEFAULT_MESSAGE;

    super(message, data);
  }

  /**
   * The warning code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { StabilityWarning } from './stability_warning.ts';
   *
   * const warning = new StabilityWarning('This feature is unstable.');
   *
   * assertEquals(warning.code, 89);
   * ```
   */
  public readonly code: number = 0x59;
}

/**
 * The default message for the {@link StabilityWarning} warning.
 */
const DEFAULT_MESSAGE =
  'A feature is unstable and should not be used in production environments.';

/**
 * Creates a message from the warning data.
 *
 * @param data The warning data.
 * @returns The warning message.
 */
function createMessageFromData(data: StabilityWarningData): string {
  const { aboutUrl, featureName, featureType } = data;
  const vowels = 'aeiou';
  const first = featureType?.charAt(0).toLowerCase() || '';
  const A = vowels.includes(first) ? 'An' : 'A';

  switch (true) {
    case definedArgs(aboutUrl, featureName, featureType):
      return `${A} ${featureType}, ${featureName}, is unstable and should not be used in production environments. Read more at ${aboutUrl}.`;
    case definedArgs(aboutUrl, featureName):
      return `A feature, ${featureName}, is unstable and should not be used in production environments. Read more at ${aboutUrl}.`;
    case definedArgs(aboutUrl, featureType):
      return `${A} ${featureType} is unstable and should not be used in production environments. Read more at ${aboutUrl}.`;
    case definedArgs(featureName, featureType):
      return `${A} ${featureType}, ${featureName}, is unstable and should not be used in production environments.`;
    case definedArgs(featureName):
      return `A feature, ${featureName}, is unstable and should not be used in production environments.`;
    case definedArgs(featureType):
      return `${A} ${featureType} is unstable and should not be used in production environments.`;
    case definedArgs(aboutUrl):
      return `${DEFAULT_MESSAGE} Read more at ${aboutUrl}.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
