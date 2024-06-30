/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the RangeException class and its related exception data type.
 */

import { definedArgs } from '../utils/mod.ts';
import { ValueException } from './value_exception.ts';

import type { BaseExceptionData } from './types/mod.ts';

/**
 * Additional, related data for the {@link RangeException} class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { RangeExceptionData } from './range_exception.ts';
 *
 * const data: RangeExceptionData = {
 *   value: 25,
 *   upperBound: 10,
 * };
 *
 * assertEquals(data.value, 25);
 * ```
 */
export type RangeExceptionData = BaseExceptionData<{
  /**
   * The value that is outside the range of values.
   */
  value?: number;

  /**
   * The name of the ranged values.
   */
  valueName?: string;

  /**
   * The lower bound, inclusive, of the range.
   */
  lowerBound?: number;

  /**
   * The upper bound, inclusive, of the range.
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
 * import { RangeException } from './range_exception.ts';
 *
 * const exception = new RangeException();
 *
 * assertEquals(exception.message, 'A numeric value is out of range.');
 * ```
 *
 * @example With provided message
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { RangeException } from './range_exception.ts';
 *
 * const exception = new RangeException('The value is out of range.');
 *
 * assertEquals(exception.message, 'The value is out of range.');
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { RangeException } from './range_exception.ts';
 *
 * const exception = new RangeException({
 *   value: 25,
 *   upperBound: 10,
 * });
 *
 * assertEquals(exception.message, 'A numeric value, 25, is out of range. It must be less-than, or equal to, 10.');
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { RangeException } from './range_exception.ts';
 *
 * const exception = new RangeException('The value is out of range.', {
 *   value: 25,
 *   upperBound: 10,
 * });
 *
 * assertEquals(exception.message, 'The value is out of range.');
 * ```
 */
export class RangeException<
  T extends RangeExceptionData = RangeExceptionData,
> extends ValueException<T> {
  /**
   * Creates a new instance of the `RangeException` class with the default message description.
   */
  constructor();

  /**
   * Creates a new instance of the `RangeException` class with the specified message description.
   *
   * @param message The exception message description.
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `RangeException` class with the specified relevant data, resulting in a generated message description.
   *
   * @param data The relevant data for the exception.
   */
  constructor(data: T);

  /**
   * Creates a new instance of the `RangeException` class with the specified message description and additional, relevant data.
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
   * import { RangeException } from './range_exception.ts';
   *
   * const exception = new RangeException('The value is out of range.');
   *
   * assertEquals(exception.code, 40);
   * ```
   */
  public readonly code: number = 0x28;
}

/**
 * The default message for the {@link RangeException} exception.
 */
const DEFAULT_MESSAGE = 'A numeric value is out of range.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: RangeExceptionData): string {
  const { lowerBound, upperBound, value, valueName } = data;

  switch (true) {
    case definedArgs(lowerBound, upperBound, value, valueName):
      return `The numeric value, ${value}, of ${valueName} is out of range. It must be between ${lowerBound} and ${upperBound}, inclusive.`;
    case definedArgs(lowerBound, upperBound, value):
      return `A numeric value, ${value}, is out of range. It must be between ${lowerBound} and ${upperBound}, inclusive.`;
    case definedArgs(lowerBound, upperBound, valueName):
      return `The numeric value of ${valueName} is out of range. It must be between ${lowerBound} and ${upperBound}, inclusive.`;
    case definedArgs(lowerBound, value, valueName):
      return `The numeric value, ${value}, of ${valueName} is out of range. It must be greater-than, or equal to, ${lowerBound}.`;
    case definedArgs(upperBound, value, valueName):
      return `The numeric value, ${value}, of ${valueName} is out of range. It must be less-than, or equal to, ${upperBound}.`;
    case definedArgs(lowerBound, upperBound):
      return `A numeric value is out of range. It must be between ${lowerBound} and ${upperBound}, inclusive.`;
    case definedArgs(lowerBound, value):
      return `A numeric value, ${value}, is out of range. It must be greater-than, or equal to, ${lowerBound}.`;
    case definedArgs(lowerBound, valueName):
      return `The numeric value of ${valueName} is out of range. It must be greater-than, or equal to, ${lowerBound}.`;
    case definedArgs(upperBound, value):
      return `A numeric value, ${value}, is out of range. It must be less-than, or equal to, ${upperBound}.`;
    case definedArgs(upperBound, valueName):
      return `The numeric value of ${valueName} is out of range. It must be less-than, or equal to, ${upperBound}.`;
    case definedArgs(value, valueName):
      return `The numeric value, ${value}, of ${valueName} is out of range.`;
    case definedArgs(lowerBound):
      return `A numeric value is out of range. It must be greater-than, or equal to, ${lowerBound}.`;
    case definedArgs(upperBound):
      return `A numeric value is out of range. It must be less-than, or equal to, ${upperBound}.`;
    case definedArgs(value):
      return `A numeric value, ${value}, is out of range.`;
    case definedArgs(valueName):
      return `The numeric value of ${valueName} is out of range.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
