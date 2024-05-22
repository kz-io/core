/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the IterationException class and its related exception data type.
 */

import { definedArgs } from './_internal/mod.ts';
import { OperationException } from './operation_exception.ts';

import type { SoftwareOperation } from '../types/mod.ts';
import type { BaseExceptionData } from './types/mod.ts';

/**
 * Additional, related data for the {@link IterationException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { IterationExceptionData } from './iteration_exception.ts';
 *
 * const data: IterationExceptionData = {
 *   operationName: 'foo',
 *   operationType: 'process',
 * };
 *
 * assertEquals(data.operationName, 'foo');
 * ```
 */
export type IterationExceptionData = BaseExceptionData<{
  /**
   * The type of software operation that exceeded max iterations.
   */
  operationType?: SoftwareOperation;

  /**
   * The name of the operation that exceeded max iterations.
   */
  operationName?: string;

  /**
   * The maximum number of iterations.
   */
  iterationCount?: number;

  /**
   * Whether repeating values were detected. Typically evidence of an infinite loop.
   */
  repeatingValues?: boolean;
}>;

/**
 * An exception raised when a software operation has exceeded max iterations.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example No arguments - default message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { IterationException } from './iteration_exception.ts';
 *
 * const exception = new IterationException();
 *
 * assertEquals(exception.message, 'An operation exceeded the maximum number of iterations.');
 * ```
 *
 * @example With provided message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { IterationException } from './iteration_exception.ts';
 *
 * const exception = new IterationException('A process encountered an infinite loop.');
 *
 * assertEquals(exception.message, 'A process encountered an infinite loop.');
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { IterationException } from './iteration_exception.ts';
 *
 * const exception = new IterationException({ operationName: 'foo', iterationCount: 5 });
 *
 * assertEquals(exception.message, 'An operation, foo, exceeded the maximum number of 5 iterations.');
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { IterationException } from './iteration_exception.ts';
 *
 * const exception = new IterationException('A process encountered an infinite loop.', { operationName: 'foo', iterationCount: 5 });
 *
 * assertEquals(exception.message, 'A process encountered an infinite loop.');
 * ```
 */
export class IterationException<
  T extends IterationExceptionData = IterationExceptionData,
> extends OperationException<T> {
  /**
   * Creates a new instance of the `IterationException` class with the default message description.
   */
  constructor();

  /**
   * Creates a new instance of the `IterationException` class with the specified message description.
   *
   * @param message The exception message description.
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `IterationException` class with the specified relevant data, resulting in a generated message description.
   *
   * @param data The relevant data for the exception.
   */
  constructor(data: T);

  /**
   * Creates a new instance of the `IterationException` class with the specified message description and additional, relevant data.
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
   * import { IterationException } from './iteration_exception.ts';
   *
   * const exception = new IterationException('A process encountered an infinite loop.');
   *
   * assertEquals(exception.code, 19);
   * ```
   */
  public readonly code: number = 0x13;
}

/**
 * The default message for the {@link IterationException} exception.
 */
const DEFAULT_MESSAGE =
  'An operation exceeded the maximum number of iterations.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: IterationExceptionData): string {
  const { iterationCount, operationName, operationType, repeatingValues } =
    data;
  const vowels = 'aeiou';
  const first = operationType?.charAt(0).toLowerCase() || '';
  const A = vowels.includes(first) ? 'An' : 'A';
  const I = iterationCount === 1 ? 'iteration' : 'iterations';

  switch (true) {
    case definedArgs(
      iterationCount,
      operationName,
      operationType,
      repeatingValues,
    ):
      return `${A} ${operationType}, ${operationName}, exceeded the maximum number of ${iterationCount} ${I} on consecutive repeating values.`;
    case definedArgs(iterationCount, operationName, operationType):
      return `${A} ${operationType}, ${operationName}, exceeded the maximum number of ${iterationCount} ${I}.`;
    case definedArgs(iterationCount, operationName, repeatingValues):
      return `An operation, ${operationName}, exceeded the maximum number of ${iterationCount} ${I} on consecutive repeating values.`;
    case definedArgs(iterationCount, operationType, repeatingValues):
      return `${A} ${operationType} exceeded the maximum number of ${iterationCount} ${I} on consecutive repeating values.`;
    case definedArgs(operationName, operationType, repeatingValues):
      return `${A} ${operationType}, ${operationName}, exceeded the maximum number of iterations on consecutive repeating values.`;
    case definedArgs(iterationCount, operationName):
      return `An operation, ${operationName}, exceeded the maximum number of ${iterationCount} ${I}.`;
    case definedArgs(iterationCount, operationType):
      return `${A} ${operationType} exceeded the maximum number of ${iterationCount} ${I}.`;
    case definedArgs(iterationCount, repeatingValues):
      return `An operation exceeded the maximum number of ${iterationCount} ${I} on consecutive repeating values.`;
    case definedArgs(operationName, operationType):
      return `${A} ${operationType}, ${operationName}, exceeded the maximum number of iterations.`;
    case definedArgs(operationName, repeatingValues):
      return `An operation, ${operationName}, exceeded the maximum number of iterations on consecutive repeating values.`;
    case definedArgs(operationType, repeatingValues):
      return `${A} ${operationType} exceeded the maximum number of iterations on consecutive repeating values.`;
    case definedArgs(iterationCount):
      return `An operation exceeded the maximum number of ${iterationCount} ${I}.`;
    case definedArgs(operationName):
      return `An operation, ${operationName}, exceeded the maximum number of iterations.`;
    case definedArgs(operationType):
      return `${A} ${operationType} exceeded the maximum number of iterations.`;
    case definedArgs(repeatingValues):
      return `An operation exceeded the maximum number of iterations on consecutive repeating values.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
