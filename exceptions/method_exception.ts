/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the MethodException class and its related exception data type.
 */

import { definedArgs } from '../utils/mod.ts';
import { NotFoundException } from './not_found_exception.ts';

import type { BaseExceptionData } from './types/mod.ts';

/**
 * Additional, related data for the {@link MethodException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { MethodExceptionData } from './method_exception.ts';
 *
 * const data: MethodExceptionData = {
 *   methodName: 'foo',
 *   validMethods: ['bar', 'baz'],
 * };
 *
 * assertEquals(data.methodName, 'foo');
 * ```
 */
export type MethodExceptionData = BaseExceptionData<{
  /**
   * The name of the method that doesn’t exist.
   */
  methodName?: string;

  /**
   * The name of object value the method doesn’t exist on.
   */
  valueName?: string;

  /**
   * The available methods on the object value.
   */
  validMethods?: string[];
}>;

/**
 * An exception raised when access is attempted on a non-existent method.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example No arguments - default message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { MethodException } from './method_exception.ts';
 *
 * const exception = new MethodException();
 *
 * assertEquals(exception.message, 'Unable to locate a method on an object.');
 * ```
 *
 * @example With provided message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { MethodException } from './method_exception.ts';
 *
 * const exception = new MethodException('The getAction method was not found.');
 *
 * assertEquals(exception.message, 'The getAction method was not found.');
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { MethodException } from './method_exception.ts';
 *
 * const exception = new MethodException({ methodName: 'foo' });
 *
 * assertEquals(exception.message, 'Unable to locate a method, foo, on an object.');
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { MethodException } from './method_exception.ts';
 *
 * const exception = new MethodException('The getAction method was not found.', { methodName: 'foo' });
 *
 * assertEquals(exception.message, 'The getAction method was not found.');
 * ```
 */
export class MethodException<
  T extends MethodExceptionData = MethodExceptionData,
> extends NotFoundException<T> {
  /**
   * Creates a new instance of the `MethodException` class with the default message description.
   */
  constructor();

  /**
   * Creates a new instance of the `MethodException` class with the specified message description.
   *
   * @param message The exception message description.
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `MethodException` class with the specified relevant data, resulting in a generated message description.
   *
   * @param data The relevant data for the exception.
   */
  constructor(data: T);

  /**
   * Creates a new instance of the `MethodException` class with the specified message description and additional, relevant data.
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
   * import { MethodException } from './method_exception.ts';
   *
   * const exception = new MethodException('The getAction method was not found.');
   *
   * assertEquals(exception.code, 44);
   * ```
   */
  public readonly code: number = 0x2c;
}

/**
 * The default message for the {@link MethodException} exception.
 */
const DEFAULT_MESSAGE = 'Unable to locate a method on an object.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: MethodExceptionData): string {
  const { methodName, validMethods, valueName } = data;
  const methods = (validMethods || []).join(', ');

  switch (true) {
    case definedArgs(methodName, methods, valueName):
      return `Unable to locate a method, ${methodName}, on an object, ${valueName}. Valid methods include: ${methods}.`;
    case definedArgs(methodName, methods):
      return `Unable to locate a method, ${methodName}, on an object. Valid methods include: ${methods}.`;
    case definedArgs(methodName, valueName):
      return `Unable to locate a method, ${methodName}, on an object, ${valueName}.`;
    case definedArgs(methods, valueName):
      return `Unable to locate a method on an object, ${valueName}. Valid methods include: ${methods}.`;
    case definedArgs(methodName):
      return `Unable to locate a method, ${methodName}, on an object.`;
    case definedArgs(methods):
      return `Unable to locate a method on an object. Valid methods include: ${methods}.`;
    case definedArgs(valueName):
      return `Unable to locate a method on an object, ${valueName}.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
