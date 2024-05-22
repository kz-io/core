/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the DecoratorException class and its related exception data type.
 */

import { definedArgs } from '../_internal/mod.ts';
import { ValueException } from './value_exception.ts';

import type { DecoratorTarget } from '../types/mod.ts';
import type { BaseExceptionData } from './types/mod.ts';

/**
 * Additional, related data for the {@link DecoratorException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { DecoratorExceptionData } from './decorator_exception.ts';
 *
 * const data: DecoratorExceptionData = {
 *   decoratorTarget: 'class',
 *   decoratorName: 'foo',
 * };
 *
 * assertEquals(data.decoratorName, 'foo');
 * ```
 */
export type DecoratorExceptionData = BaseExceptionData<{
  /**
   * The type of decorator that failed to apply.
   */
  decoratorTarget?: DecoratorTarget;

  /**
   * The name of the decorator that failed to apply.
   */
  decoratorName?: string;
}>;

/**
 * An exception raised when a decorator fails to apply.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example No arguments - default message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { DecoratorException } from './decorator_exception.ts';
 *
 * const exception = new DecoratorException();
 *
 * assertEquals(exception.message, 'A decorator failed to apply.');
 * ```
 *
 * @example With provided message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { DecoratorException } from './decorator_exception.ts';
 *
 * const exception = new DecoratorException('Decorator was unable to apply.');
 *
 * assertEquals(exception.message, 'Decorator was unable to apply.');
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { DecoratorException } from './decorator_exception.ts';
 *
 * const exception = new DecoratorException({ decoratorName: 'foo' });
 *
 * assertEquals(exception.message, 'A decorator, foo, failed to apply.');
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { DecoratorException } from './decorator_exception.ts';
 *
 * const exception = new DecoratorException('Decorator was unable to apply.', { argumentName: 'foo' });
 *
 * assertEquals(exception.message, 'Decorator was unable to apply.');
 * ```
 */
export class DecoratorException<
  T extends DecoratorExceptionData = DecoratorExceptionData,
> extends ValueException<T> {
  /**
   * Creates a new instance of the `DecoratorException` class with the default message description.
   */
  constructor();

  /**
   * Creates a new instance of the `DecoratorException` class with the specified message description.
   *
   * @param message The exception message description.
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `DecoratorException` class with the specified relevant data, resulting in a generated message description.
   *
   * @param data The relevant data for the exception.
   */
  constructor(data: T);

  /**
   * Creates a new instance of the `DecoratorException` class with the specified message description and additional, relevant data.
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
   * import { DecoratorException } from './decorator_exception.ts';
   *
   * const exception = new DecoratorException('Decorator was unable to apply.');
   *
   * assertEquals(exception.code, 38);
   * ```
   */
  public readonly code: number = 0x26;
}

/**
 * The default message for the {@link DecoratorException} exception.
 */
const DEFAULT_MESSAGE = 'A decorator failed to apply.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: DecoratorExceptionData): string {
  const { decoratorName, decoratorTarget } = data;
  const vowels = 'aeiou';
  const first = decoratorTarget ? decoratorTarget.charAt(0).toLowerCase() : 'd';
  const A = vowels.includes(first) ? 'An' : 'A';

  switch (true) {
    case definedArgs(decoratorName, decoratorTarget):
      return `${A} ${decoratorTarget} decorator, ${decoratorName}, failed to apply.`;
    case definedArgs(decoratorName):
      return `A decorator, ${decoratorName}, failed to apply.`;
    case definedArgs(decoratorTarget):
      return `${A} ${decoratorTarget} decorator failed to apply.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
