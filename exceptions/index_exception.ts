/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the IndexException class and its related exception data type.
 */

import { definedArgs } from './_internal/mod.ts';
import { RangeException } from './range_exception.ts';

import type { BaseExceptionData } from './types/mod.ts';

/**
 * Additional, related data for the {@link IndexException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { IndexExceptionData } from './index_exception.ts';
 *
 * const data: IndexExceptionData = {
 *   index: 25,
 *   upperBound: 10,
 * };
 *
 * assertEquals(data.index, 25);
 * ```
 */
export type IndexExceptionData = BaseExceptionData<{
  /**
   * The index that is outside a range.
   */
  index?: number;

  /**
   * The name of the indexed value.
   */
  valueName?: string;

  /**
   * The upper bound, inclusive,
   */
  upperBound?: number;
}>;

/**
 * An exception raised when access is attempted on a non-existent property key.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example No arguments - default message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { IndexException } from './index_exception.ts';
 *
 * const exception = new IndexException();
 *
 * assertEquals(exception.message, 'An index is outside the bounds of an array.');
 * ```
 *
 * @example With provided message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { IndexException } from './index_exception.ts';
 *
 * const exception = new IndexException('The index is invalid.');
 *
 * assertEquals(exception.message, 'The index is invalid.');
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { IndexException } from './index_exception.ts';
 *
 * const exception = new IndexException({
 *   index: 25,
 *   upperBound: 10,
 * });
 *
 * assertEquals(exception.message, 'An index, 25, is outside the bounds of an array. It must be between 0 and 10, inclusive.');
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { IndexException } from './index_exception.ts';
 *
 * const exception = new IndexException('The index is invalid.', {
 *   index: 25,
 *   upperBound: 10,
 * });
 *
 * assertEquals(exception.message, 'The index is invalid.');
 * ```
 */
export class IndexException<T extends IndexExceptionData = IndexExceptionData>
  extends RangeException<T> {
  /**
   * Creates a new instance of the `IndexException` class with the default message description.
   */
  constructor();

  /**
   * Creates a new instance of the `IndexException` class with the specified message description.
   *
   * @param message The exception message description.
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `IndexException` class with the specified relevant data, resulting in a generated message description.
   *
   * @param data The relevant data for the exception.
   */
  constructor(data: T);

  /**
   * Creates a new instance of the `IndexException` class with the specified message description and additional, relevant data.
   *
   * @param message The exception message description.
   * @param data The additional, relevant data for the exception.
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
   * The exception code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { IndexException } from './index_exception.ts';
   *
   * const exception = new IndexException('The index is invalid.');
   *
   * assertEquals(exception.code, 31);
   * ```
   */
  public readonly code: number = 0x29;
}

/**
 * The default message for the {@link IndexException} exception.
 */
const DEFAULT_MESSAGE = 'An index is outside the bounds of an array.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: IndexExceptionData): string {
  const { index, upperBound, valueName } = data;

  switch (true) {
    case definedArgs(index, upperBound, valueName):
      return `An index, ${index}, is outside the bounds of an array, ${valueName}. It must be between 0 and ${upperBound}, inclusive.`;
    case definedArgs(index, valueName):
      return `An index, ${index}, is outside the bounds of an array, ${valueName}.`;
    case definedArgs(index, upperBound):
      return `An index, ${index}, is outside the bounds of an array. It must be between 0 and ${upperBound}, inclusive.`;
    case definedArgs(upperBound, valueName):
      return `An index is outside the bounds of an array, ${valueName}. It must be between 0 and ${upperBound}, inclusive.`;
    case definedArgs(index):
      return `An index, ${index}, is outside the bounds of an array.`;
    case definedArgs(valueName):
      return `An index is outside the bounds of an array, ${valueName}.`;
    case definedArgs(upperBound):
      return `An index is outside the bounds of an array. It must be between 0 and ${upperBound}, inclusive.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
