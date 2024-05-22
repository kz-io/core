/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the ArgumentIndexException class and its related exception data type.
 */

import { definedArgs } from '../_internal/mod.ts';
import { IndexException } from './index_exception.ts';

import type { BaseExceptionData } from './types/mod.ts';

/**
 * Additional, related data for the {@link ArgumentIndexException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { ArgumentIndexExceptionData } from './argument_index_exception.ts';
 *
 * const data: ArgumentIndexExceptionData = {
 *   index: 10,
 *   upperBound: 5,
 * };
 *
 * assertEquals(data.index, 10);
 * ```
 */
export type ArgumentIndexExceptionData = BaseExceptionData<{
  /**
   * The index that is outside the arguments array range.
   */
  index?: number;

  /**
   * The upper bound, inclusive, of the arguments array range of indexes.
   */
  upperBound?: number;
}>;

/**
 * An exception raised when an index is outside the bounds of an arguments array.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example No arguments - default message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { ArgumentIndexException } from './argument_index_exception.ts';
 *
 * const exception = new ArgumentIndexException();
 *
 * assertEquals(exception.message, 'An index is outside the bounds of an arguments array.');
 * ```
 *
 * @example With provided message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { ArgumentIndexException } from './argument_index_exception.ts';
 *
 * const exception = new ArgumentIndexException('The index is outside the arguments array range.');
 *
 * assertEquals(exception.message, 'The index is outside the arguments array range.');
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { ArgumentIndexException } from './argument_index_exception.ts';
 *
 * const exception = new ArgumentIndexException({
 *   index: 10,
 *   upperBound: 5,
 * });
 *
 * assertEquals(exception.message, 'An index, 10, is outside the bounds of an arguments array. It must be between 0 and 5, inclusive.');
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { ArgumentIndexException } from './argument_index_exception.ts';
 *
 * const exception = new ArgumentIndexException('The index is outside the arguments array range.', {
 *   index: 10,
 *   upperBound: 5,
 * });
 *
 * assertEquals(exception.message, 'The index is outside the arguments array range.');
 * ```
 */
export class ArgumentIndexException<
  T extends ArgumentIndexExceptionData = ArgumentIndexExceptionData,
> extends IndexException<T> {
  /**
   * Creates a new instance of the `ArgumentIndexException` class with the default message description.
   */
  constructor();

  /**
   * Creates a new instance of the `ArgumentIndexException` class with the specified message description.
   *
   * @param message The exception message description.
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `ArgumentIndexException` class with the specified relevant data, resulting in a generated message description.
   *
   * @param data The relevant data for the exception.
   */
  constructor(data: T);

  /**
   * Creates a new instance of the `ArgumentIndexException` class with the specified message description and additional, relevant data.
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
   * import { ArgumentIndexException } from './argument_index_exception.ts';
   *
   * const exception = new ArgumentIndexException('The index is outside the arguments array range.');
   *
   * assertEquals(exception.code, 42);
   * ```
   */
  public readonly code: number = 0x2a;
}

/**
 * The default message for the {@link ArgumentIndexException} exception.
 */
const DEFAULT_MESSAGE = 'An index is outside the bounds of an arguments array.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: ArgumentIndexExceptionData): string {
  const { index, upperBound } = data;

  switch (true) {
    case definedArgs(index, upperBound):
      return `An index, ${index}, is outside the bounds of an arguments array. It must be between 0 and ${upperBound}, inclusive.`;
    case definedArgs(index):
      return `An index, ${index}, is outside the bounds of an arguments array.`;
    case definedArgs(upperBound):
      return `An index is outside the bounds of an arguments array. It must be between 0 and ${upperBound}, inclusive.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
