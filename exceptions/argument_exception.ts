/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the ArgumentException class and its related exception data type.
 */

import { definedArgs } from './_internal/mod.ts';
import { ValueException } from './value_exception.ts';

import type { BaseExceptionData } from './types/mod.ts';

/**
 * Additional, related data for the {@link ArgumentException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { ArgumentExceptionData } from './argument_exception.ts';
 *
 * const data: ArgumentExceptionData = {
 *   argumentName: 'foo',
 *   argumentConstraints: ['bar', 'baz'],
 * };
 *
 * assertEquals(data.argumentName, 'foo');
 * ```
 */
export type ArgumentExceptionData = BaseExceptionData<{
  /**
   * The name of the method that is not implemented.
   */
  argumentName?: string;

  /**
   * The constraints of the argument.
   */
  argumentConstraints?: string[];
}>;

/**
 * An exception raised when an argument has the correct type but has an invalid value.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example No arguments - default message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { ArgumentException } from './argument_exception.ts';
 *
 * const exception = new ArgumentException();
 *
 * assertEquals(exception.message, 'An argument does not satisfy its constraints.');
 * ```
 *
 * @example With provided message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { ArgumentException } from './argument_exception.ts';
 *
 * const exception = new ArgumentException('A value has the correct type, but is invalid.');
 *
 * assertEquals(exception.message, 'A value has the correct type, but is invalid.');
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { ArgumentException } from './argument_exception.ts';
 *
 * const exception = new ArgumentException({ argumentName: 'foo' });
 *
 * assertEquals(exception.message, 'An argument, foo, does not satisfy its constraints.');
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { ArgumentException } from './argument_exception.ts';
 *
 * const exception = new ArgumentException('A value has the correct type, but is invalid.', { argumentName: 'foo' });
 *
 * assertEquals(exception.message, 'A value has the correct type, but is invalid.');
 * ```
 */
export class ArgumentException<
  T extends ArgumentExceptionData = ArgumentExceptionData,
> extends ValueException<T> {
  /**
   * Creates a new instance of the `ArgumentException` class with the default message description.
   */
  constructor();

  /**
   * Creates a new instance of the `ArgumentException` class with the specified message description.
   *
   * @param message The exception message description.
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `ArgumentException` class with the specified relevant data, resulting in a generated message description.
   *
   * @param data The relevant data for the exception.
   */
  constructor(data: T);

  /**
   * Creates a new instance of the `ArgumentException` class with the specified message description and additional, relevant data.
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
   * import { ArgumentException } from './argument_exception.ts';
   *
   * const exception = new ArgumentException('A value has the correct type, but is invalid.');
   *
   * assertEquals(exception.code, 39);
   * ```
   */
  public readonly code: number = 0x27;
}

/**
 * The default message for the {@link ArgumentException} exception.
 */
const DEFAULT_MESSAGE = 'An argument does not satisfy its constraints.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: ArgumentExceptionData): string {
  const { argumentConstraints, argumentName } = data;
  const constraints = (argumentConstraints || []).join(', ');

  switch (true) {
    case definedArgs(constraints, argumentName):
      return `An argument, ${argumentName}, does not satisfy the following constraints: ${constraints}.`;
    case definedArgs(argumentName):
      return `An argument, ${argumentName}, does not satisfy its constraints.`;
    case definedArgs(constraints):
      return `An argument does not satisfy the following constraints: ${constraints}.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
