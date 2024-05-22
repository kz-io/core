/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the NotImplementedException class and its related exception data type.
 */

import { definedArgs } from './_internal/mod.ts';
import { InvalidException } from './invalid_exception.ts';

import type { BaseExceptionData } from './types/mod.ts';

/**
 * Additional, related data for the {@link NotImplementedException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { NotImplementedExceptionData } from './not_implemented_exception.ts';
 *
 * const data: NotImplementedExceptionData = {
 *   methodName: 'foo',
 * };
 *
 * assertEquals(data.methodName, 'foo');
 * ```
 */
export type NotImplementedExceptionData = BaseExceptionData<{
  /**
   * The name of the method that is not implemented.
   */
  methodName?: string;
}>;

/**
 * An exception raised when a class method, or function, has not been implemented.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example No arguments - default message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { NotImplementedException } from './not_implemented_exception.ts';
 *
 * const exception = new NotImplementedException();
 *
 * assertEquals(exception.message, 'A class method is not implemented.');
 * ```
 *
 * @example With provided message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { NotImplementedException } from './not_implemented_exception.ts';
 *
 * const exception = new NotImplementedException('This method is not implemented.');
 *
 * assertEquals(exception.message, 'This method is not implemented.');
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { NotImplementedException } from './not_implemented_exception.ts';
 *
 * const exception = new NotImplementedException({ methodName: 'foo' });
 *
 * assertEquals(exception.message, 'A class method, foo, is not implemented.');
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { NotImplementedException } from './not_implemented_exception.ts';
 *
 * const exception = new NotImplementedException('This method is not implemented.', { methodName: 'foo' });
 *
 * assertEquals(exception.message, 'This method is not implemented.');
 * ```
 */
export class NotImplementedException<
  T extends NotImplementedExceptionData = NotImplementedExceptionData,
> extends InvalidException<T> {
  /**
   * Creates a new instance of the `NotImplementedException` class with the default message description.
   */
  constructor();

  /**
   * Creates a new instance of the `NotImplementedException` class with the specified message description.
   *
   * @param message The exception message description.
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `NotImplementedException` class with the specified relevant data, resulting in a generated message description.
   *
   * @param data The relevant data for the exception.
   */
  constructor(data: T);

  /**
   * Creates a new instance of the `NotImplementedException` class with the specified message description and additional, relevant data.
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
   * import { NotImplementedException } from './not_implemented_exception.ts';
   *
   * const exception = new NotImplementedException('This method is not implemented.');
   *
   * assertEquals(exception.code, 34);
   * ```
   */
  public readonly code: number = 0x22;
}

/**
 * The default message for the {@link NotImplementedException} exception.
 */
const DEFAULT_MESSAGE = 'A class method is not implemented.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: NotImplementedExceptionData): string {
  const { methodName } = data;

  switch (true) {
    case definedArgs(methodName):
      return `A class method, ${methodName}, is not implemented.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
