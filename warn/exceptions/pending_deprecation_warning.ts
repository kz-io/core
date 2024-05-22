/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the PendingDeprecationWarning class and its related warning data type.
 */

import { definedArgs } from '../../_internal/mod.ts';
import { FutureWarning } from './future_warning.ts';

import type { BaseExceptionData } from '../../exceptions/mod.ts';

/**
 * Additional, related data for the {@link PendingDeprecationWarning} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { PendingDeprecationWarningData } from './pending_deprecation_warning.ts';
 *
 * const data: PendingDeprecationWarningData = {
 *   featureName: 'foo',
 *   featureType: 'class',
 * };
 *
 * assertEquals(data.featureName, 'foo');
 * ```
 */
export type PendingDeprecationWarningData = BaseExceptionData<{
  /**
   * The type of feature that is pending deprecation.
   */
  featureType?: string;

  /**
   * The name of the operation that is pending deprecation.
   */
  featureName?: string;

  /**
   * A URL pointing to a resource with more information about the pending deprecation of the feature.
   */
  aboutUrl?: string;
}>;

/**
 * A warning presented when a feature is pending deprecation.
 *
 * @param T - The type of the additional, relevant data for the warning.
 *
 * @example No arguments - default message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { PendingDeprecationWarning } from './pending_deprecation_warning.ts';
 *
 * const warning = new PendingDeprecationWarning();
 *
 * assertEquals(warning.message, 'A feature is pending deprecation.');
 * ```
 *
 * @example With provided message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { PendingDeprecationWarning } from './pending_deprecation_warning.ts';
 *
 * const warning = new PendingDeprecationWarning('This feature is being removed.');
 *
 * assertEquals(warning.message, 'This feature is being removed.');
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { PendingDeprecationWarning } from './pending_deprecation_warning.ts';
 *
 * const warning = new PendingDeprecationWarning({ featureName: 'foo', aboutUrl: 'https://example.com' });
 *
 * assertEquals(warning.message, 'A feature, foo, is pending deprecation. Read more at https://example.com.');
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { PendingDeprecationWarning } from './pending_deprecation_warning.ts';
 *
 * const warning = new PendingDeprecationWarning('This feature is being removed.', { featureName: 'foo', aboutUrl: 'https://example.com' });
 *
 * assertEquals(warning.message, 'This feature is being removed.');
 * ```
 */
export class PendingDeprecationWarning<
  T extends PendingDeprecationWarningData = PendingDeprecationWarningData,
> extends FutureWarning<T> {
  /**
   * Creates a new instance of the `PendingDeprecationWarning` class with the default message description.
   */
  constructor();

  /**
   * Creates a new instance of the `PendingDeprecationWarning` class with the specified message description.
   *
   * @param message The warning message description.
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `PendingDeprecationWarning` class with the specified relevant data, resulting in a generated message description.
   *
   * @param data The relevant data for the warning.
   */
  constructor(data: T);

  /**
   * Creates a new instance of the `PendingDeprecationWarning` class with the specified message description and additional, relevant data.
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
   * import { PendingDeprecationWarning } from './pending_deprecation_warning.ts';
   *
   * const warning = new PendingDeprecationWarning('This feature is pending deprecation.');
   *
   * assertEquals(warning.code, 90);
   * ```
   */
  public readonly code: number = 0x5a;
}

/**
 * The default message for the {@link PendingDeprecationWarning} warning.
 */
const DEFAULT_MESSAGE = 'A feature is pending deprecation.';

/**
 * Creates a message from the warning data.
 *
 * @param data The warning data.
 * @returns The warning message.
 */
function createMessageFromData(data: PendingDeprecationWarningData): string {
  const { aboutUrl, featureName, featureType } = data;
  const vowels = 'aeiou';
  const first = featureType?.charAt(0).toLowerCase() || '';
  const A = vowels.includes(first) ? 'An' : 'A';

  switch (true) {
    case definedArgs(aboutUrl, featureName, featureType):
      return `${A} ${featureType}, ${featureName}, is pending deprecation. Read more at ${aboutUrl}.`;
    case definedArgs(aboutUrl, featureName):
      return `A feature, ${featureName}, is pending deprecation. Read more at ${aboutUrl}.`;
    case definedArgs(aboutUrl, featureType):
      return `${A} ${featureType} is pending deprecation. Read more at ${aboutUrl}.`;
    case definedArgs(featureName, featureType):
      return `${A} ${featureType}, ${featureName}, is pending deprecation.`;
    case definedArgs(featureName):
      return `A feature, ${featureName}, is pending deprecation.`;
    case definedArgs(featureType):
      return `${A} ${featureType} is pending deprecation.`;
    case definedArgs(aboutUrl):
      return `${DEFAULT_MESSAGE} Read more at ${aboutUrl}.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
