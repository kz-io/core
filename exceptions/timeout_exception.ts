/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the TimeoutException class and its related exception data type.
 */

import { definedArgs } from '../utils/mod.ts';
import { OperationException } from './operation_exception.ts';

import type { SoftwareOperation } from '../types/mod.ts';
import type { BaseExceptionData } from './types/mod.ts';

/**
 * Additional, related data for the {@link TimeoutException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { TimeoutExceptionData } from './timeout_exception.ts';
 *
 * const data: TimeoutExceptionData = {
 *   operationName: 'foo',
 *   operationType: 'process',
 * };
 *
 * assertEquals(data.operationName, 'foo');
 * ```
 */
export type TimeoutExceptionData = BaseExceptionData<{
  /**
   * The type of software operation that timed out.
   */
  operationType?: SoftwareOperation;

  /**
   * The name of the operation that timed out.
   */
  operationName?: string;

  /**
   * The operation timeout.
   */
  operationTimeout?: number;
}>;

/**
 * An exception raised when a software operation has timed out.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example No arguments - default message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { TimeoutException } from './timeout_exception.ts';
 *
 * const exception = new TimeoutException();
 *
 * assertEquals(exception.message, 'An operation timed out.');
 * ```
 *
 * @example With provided message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { TimeoutException } from './timeout_exception.ts';
 *
 * const exception = new TimeoutException('An operation failed to complete timely.');
 *
 * assertEquals(exception.message, 'An operation failed to complete timely.');
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { TimeoutException } from './timeout_exception.ts';
 *
 * const exception = new TimeoutException({ operationName: 'foo', operationTimeout: 5000 });
 *
 * assertEquals(exception.message, 'An operation, foo, timed out after 5000ms.');
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { TimeoutException } from './timeout_exception.ts';
 *
 * const exception = new TimeoutException('An operation failed to complete timely.', { operationName: 'foo', operationTimeout: 5000 });
 *
 * assertEquals(exception.message, 'An operation failed to complete timely.');
 * ```
 */
export class TimeoutException<
  T extends TimeoutExceptionData = TimeoutExceptionData,
> extends OperationException<T> {
  /**
   * Creates a new instance of the `TimeoutException` class with the default message description.
   */
  constructor();

  /**
   * Creates a new instance of the `TimeoutException` class with the specified message description.
   *
   * @param message The exception message description.
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `TimeoutException` class with the specified relevant data, resulting in a generated message description.
   *
   * @param data The relevant data for the exception.
   */
  constructor(data: T);

  /**
   * Creates a new instance of the `TimeoutException` class with the specified message description and additional, relevant data.
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
   * import { TimeoutException } from './timeout_exception.ts';
   *
   * const exception = new TimeoutException('An operation failed to complete timely.');
   *
   * assertEquals(exception.code, 20);
   * ```
   */
  public readonly code: number = 0x14;
}

/**
 * The default message for the {@link TimeoutException} exception.
 */
const DEFAULT_MESSAGE = 'An operation timed out.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: TimeoutExceptionData): string {
  const { operationName, operationTimeout, operationType } = data;
  const vowels = 'aeiou';
  const first = operationType?.charAt(0).toLowerCase() || '';
  const A = vowels.includes(first) ? 'An' : 'A';

  switch (true) {
    case definedArgs(operationName, operationTimeout, operationType):
      return `${A} ${operationType}, ${operationName}, timed out after ${operationTimeout}ms.`;
    case definedArgs(operationName, operationTimeout):
      return `An operation, ${operationName}, timed out after ${operationTimeout}ms.`;
    case definedArgs(operationName, operationType):
      return `${A} ${operationType}, ${operationName}, timed out.`;
    case definedArgs(operationTimeout, operationType):
      return `${A} ${operationType} timed out after ${operationTimeout}ms.`;
    case definedArgs(operationName):
      return `An operation, ${operationName}, timed out.`;
    case definedArgs(operationTimeout):
      return `An operation timed out after ${operationTimeout}ms.`;
    case definedArgs(operationType):
      return `${A} ${operationType} timed out.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
