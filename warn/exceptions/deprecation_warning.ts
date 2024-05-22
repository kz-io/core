/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the DeprecationWarning class and its related warning data type.
 */

import { definedArgs } from '../../_internal/mod.ts';
import { FutureWarning } from './future_warning.ts';

import type { BaseExceptionData } from '../../exceptions/mod.ts';

/**
 * Additional, related data for the {@link DeprecationWarning} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { DeprecationWarningData } from './deprecation_warning.ts';
 *
 * const data: DeprecationWarningData = {
 *   featureName: 'foo',
 *   featureType: 'class',
 * };
 *
 * assertEquals(data.featureName, 'foo');
 * ```
 */
export type DeprecationWarningData = BaseExceptionData<{
  /**
   * The type of feature that has been deprecated.
   */
  featureType?: string;

  /**
   * The name of the operation that has been deprecated.
   */
  featureName?: string;

  /**
   * A URL pointing to a resource with more information about the deprecated feature.
   */
  aboutUrl?: string;

  /**
   * An alternative feature name to use in place of the deprecated feature.
   */
  alternativeFeatureName?: string;
}>;

/**
 * A warning presented when a feature has been deprecated.
 *
 * @param T - The type of the additional, relevant data for the warning.
 *
 * @example No arguments - default message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { DeprecationWarning } from './deprecation_warning.ts';
 *
 * const warning = new DeprecationWarning();
 *
 * assertEquals(warning.message, 'A feature has been deprecated.');
 * ```
 *
 * @example With provided message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { DeprecationWarning } from './deprecation_warning.ts';
 *
 * const warning = new DeprecationWarning('This feature has been removed.');
 *
 * assertEquals(warning.message, 'This feature has been removed.');
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { DeprecationWarning } from './deprecation_warning.ts';
 *
 * const warning = new DeprecationWarning({ featureName: 'foo', aboutUrl: 'https://example.com' });
 *
 * assertEquals(warning.message, 'A feature, foo, has been deprecated. Read more at https://example.com.');
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { DeprecationWarning } from './deprecation_warning.ts';
 *
 * const warning = new DeprecationWarning('This feature has been removed.', { featureName: 'foo', aboutUrl: 'https://example.com' });
 *
 * assertEquals(warning.message, 'This feature has been removed.');
 * ```
 */
export class DeprecationWarning<
  T extends DeprecationWarningData = DeprecationWarningData,
> extends FutureWarning<T> {
  /**
   * Creates a new instance of the `DeprecationWarning` class with the default message description.
   */
  constructor();

  /**
   * Creates a new instance of the `DeprecationWarning` class with the specified message description.
   *
   * @param message The warning message description.
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `DeprecationWarning` class with the specified relevant data, resulting in a generated message description.
   *
   * @param data The relevant data for the warning.
   */
  constructor(data: T);

  /**
   * Creates a new instance of the `DeprecationWarning` class with the specified message description and additional, relevant data.
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
   * import { DeprecationWarning } from './deprecation_warning.ts';
   *
   * const warning = new DeprecationWarning('This feature has been deprecated.');
   *
   * assertEquals(warning.code, 91);
   * ```
   */
  public readonly code: number = 0x5b;
}

/**
 * The default message for the {@link DeprecationWarning} warning.
 */
const DEFAULT_MESSAGE = 'A feature has been deprecated.';

/**
 * Creates a message from the warning data.
 *
 * @param data The warning data.
 * @returns The warning message.
 */
function createMessageFromData(data: DeprecationWarningData): string {
  const { aboutUrl, alternativeFeatureName, featureName, featureType } = data;
  const vowels = 'aeiou';
  const first = featureType?.charAt(0).toLowerCase() || '';
  const A = vowels.includes(first) ? 'An' : 'A';

  switch (true) {
    case definedArgs(
      aboutUrl,
      alternativeFeatureName,
      featureName,
      featureType,
    ):
      return `${A} ${featureType}, ${featureName}, has been deprecated. Use ${alternativeFeatureName} instead. Read more at ${aboutUrl}.`;
    case definedArgs(aboutUrl, featureName, featureType):
      return `${A} ${featureType}, ${featureName}, has been deprecated. Read more at ${aboutUrl}.`;
    case definedArgs(aboutUrl, alternativeFeatureName, featureName):
      return `A feature, ${featureName}, has been deprecated. Use ${alternativeFeatureName} instead. Read more at ${aboutUrl}.`;
    case definedArgs(aboutUrl, alternativeFeatureName, featureType):
      return `${A} ${featureType} has been deprecated. Use ${alternativeFeatureName} instead. Read more at ${aboutUrl}.`;
    case definedArgs(alternativeFeatureName, featureName, featureType):
      return `${A} ${featureType}, ${featureName}, has been deprecated. Use ${alternativeFeatureName} instead.`;
    case definedArgs(aboutUrl, featureName):
      return `A feature, ${featureName}, has been deprecated. Read more at ${aboutUrl}.`;
    case definedArgs(aboutUrl, alternativeFeatureName):
      return `A feature has been deprecated. Use ${alternativeFeatureName} instead. Read more at ${aboutUrl}.`;
    case definedArgs(aboutUrl, featureType):
      return `${A} ${featureType} has been deprecated. Read more at ${aboutUrl}.`;
    case definedArgs(alternativeFeatureName, featureName):
      return `A feature, ${featureName}, has been deprecated. Use ${alternativeFeatureName} instead.`;
    case definedArgs(alternativeFeatureName, featureType):
      return `${A} ${featureType} has been deprecated. Use ${alternativeFeatureName} instead.`;
    case definedArgs(featureName, featureType):
      return `${A} ${featureType}, ${featureName}, has been deprecated.`;
    case definedArgs(featureName):
      return `A feature, ${featureName}, has been deprecated.`;
    case definedArgs(featureType):
      return `${A} ${featureType} has been deprecated.`;
    case definedArgs(aboutUrl):
      return `${DEFAULT_MESSAGE} Read more at ${aboutUrl}.`;
    case definedArgs(alternativeFeatureName):
      return `A feature has been deprecated. Use ${alternativeFeatureName} instead.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
